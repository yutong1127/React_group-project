
# Resource Group
resource "azurerm_resource_group" "doctor" {
  name     = var.resource_group_name
  location = var.resource_group_location
}

#2. DB
resource "azurerm_cosmosdb_account" "doctor" {
  name                = "tf-doctor-cosmosdb-account"
  resource_group_name = var.resource_group_name
  location            = var.resource_group_location
  offer_type          = "Standard"
  kind                = "MongoDB"
  capabilities {
    name = "EnableMongo"
  }
  consistency_policy {
    consistency_level       = "BoundedStaleness"
    max_interval_in_seconds = 300
    max_staleness_prefix    = 100000
  }

  geo_location {
    location          = var.resource_group_location
    failover_priority = 0
  }
  public_network_access_enabled = true
}

resource "azurerm_cosmosdb_mongo_database" "doctor" {
  name                = "tf-doctor-mongo-db"
  resource_group_name = var.resource_group_name
  account_name        = azurerm_cosmosdb_account.doctor.name
  autoscale_settings {
    max_throughput = 4000
  }

}
#3. Fluid relay
resource "azurerm_fluid_relay_server" "fluidrelay" {
  name                = "doctor-app-fluid"
  resource_group_name = azurerm_resource_group.doctor.name
  location            = azurerm_resource_group.doctor.location
  identity {
    type = "SystemAssigned"
  }

}

#4. Backend - App service
resource "azurerm_service_plan" "doctor" {
  name                = "doctor-app-plan"
  resource_group_name = azurerm_resource_group.doctor.name
  location            = azurerm_resource_group.doctor.location
  os_type             = "Linux"
  sku_name            = "B1"
}

resource "azurerm_linux_web_app" "doctor" {
  name                = "tf-doctor-app-backend"
  resource_group_name = azurerm_resource_group.doctor.name
  location            = azurerm_resource_group.doctor.location
  service_plan_id     = azurerm_service_plan.doctor.id

  site_config {
    cors {
      allowed_origins     = ["https://${azurerm_storage_account.doctor.primary_web_endpoint}"]
      support_credentials = true
    }
    application_stack{
        docker_image_name ="oliviayutong/my-backend-app:latest"
        docker_registry_url="https://index.docker.io"
    }

  }
  # Add App Settings for Environment Variables
  app_settings = {
    WEBSITES_ENABLE_APP_SERVICE_STORAGE = "false" # Disable persistent storage
    PORT                                = "3000"  # Your app's listening port

    # MongoDB Connection
    DB_URL = "mongodb://${azurerm_cosmosdb_account.doctor.name}:${azurerm_cosmosdb_account.doctor.primary_key}@${azurerm_cosmosdb_account.doctor.name}.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@${azurerm_cosmosdb_account.doctor.name}@"
  }

  # Enable Managed Identity if needed
  identity {
    type = "SystemAssigned"
  }
}
#5. storage account + static website 
resource "azurerm_storage_account" "doctor" {
  name                     = "tfdoctorappfrontend"
  resource_group_name      = azurerm_resource_group.doctor.name
  location                 = azurerm_resource_group.doctor.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  account_kind             = "StorageV2"
  allow_nested_items_to_be_public = true # 允许公共访问
}

resource "azurerm_storage_account_static_website" "doctor" {
  storage_account_id = azurerm_storage_account.doctor.id
  //error_404_document = "custom_not_found.html"
  index_document     = "index.html"
}

# upload dist/index.html to $web container
resource "azurerm_storage_blob" "index_html" {
  name                   = "index.html"
  storage_account_name   = azurerm_storage_account.doctor.name
  storage_container_name = "$web"
  type                   = "Block"
  source                 = "frontend/dist/index.html"
  content_type           = "text/html"
}

# upload dist/assets folder to $web container
resource "azurerm_storage_blob" "assets" {
  for_each = fileset("frontend/dist/assets", "**") # get all files in dist/assets 

  name                   = "assets/${each.value}" # path
  storage_account_name   = azurerm_storage_account.doctor.name
  storage_container_name = "$web"
  type                   = "Block"
  source                 = "frontend/dist/assets/${each.value}" # local path
  content_type          = lookup({
    ".html" = "text/html",
    ".js"   = "application/javascript",
    ".css"  = "text/css",
    ".json" = "application/json",
    ".png"  = "image/png",
    ".jpg"  = "image/jpeg",
  }, regex("\\.[^.]+$", each.key), "application/octet-stream")
  depends_on = [azurerm_storage_account_static_website.doctor]
}

output "static_website_url" {
  value = azurerm_storage_account.doctor.primary_web_endpoint
}
//mongoDB url
output "mongodb_connection_url" {
  sensitive = true
  value = join("", [
    "mongodb://",
    azurerm_cosmosdb_account.doctor.primary_key,
    "@",
    azurerm_cosmosdb_account.doctor.endpoint,
    ":10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@",
    azurerm_cosmosdb_account.doctor.name,
    "@"
  ])
}

output "app_url" {
  value = "https://${azurerm_linux_web_app.doctor.default_hostname}"
}
#fluid
output "frs_tenant_id" {
  value = azurerm_fluid_relay_server.fluidrelay.frs_tenant_id
}
output "primary_key" {
  sensitive = true
  value = azurerm_fluid_relay_server.fluidrelay.primary_key
}
output "service_endpoints" {
  value = azurerm_fluid_relay_server.fluidrelay.service_endpoints
}


#resource group
variable "resource_group_name" {
  type    = string
  default = "TF-doctor-app-rg"
}

variable "resource_group_location" {
  type        = string
  default     = "australiaeast"
  description = "Location of the resource group."
}


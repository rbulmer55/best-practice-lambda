locals {
  project_name = "HealthCheckService"
  expire_on    = "2025-11-21"

  common_tags = {
    project_name = local.project_name
    environment  = var.ENVIRONMENT
    project-id   = "internal"
    expire_on    = local.expire_on
    owner        = "robert.bulmer@mongodb.com"
  }
}


variable "mongodbatlas_project_id" {
  description = "Atlas Project Id"
  type        = string
}

variable "region" {
  description = "Atlas region"
  type        = string
  default     = "EU_WEST_2"
}

variable "cloud_provider" {
  description = "Atlas Cloud Provider"
  type        = string
  default     = "AWS"
}

variable "cluster_name" {
  description = "The friendly name of the cluster"
  type        = string
}

variable "mdb_access_role_arn" {
  description = "role arn for the user"
  type        = string

}

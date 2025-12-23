variable "tags" {
  description = "Tags passed into the resource"
  type        = map(string)
  default     = {}
}

variable "role_name" {
  description = "The name of the role to create"
  type        = string
  default     = null
}


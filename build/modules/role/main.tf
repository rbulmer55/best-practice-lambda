data "aws_caller_identity" "current" {}

resource "aws_iam_role" "mongodb_read_write_access" {
  name = var.role_name

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          AWS = "arn:aws:iam::${data.aws_caller_identity.current.account_id}:root"
        },
        Condition = {
          StringLike = {
            "aws:PrincipalArn" = "arn:aws:iam::${data.aws_caller_identity.current.account_id}:role/HealthCheckLambdaRole-*"
          }
        }
        Action = "sts:AssumeRole"
      }
    ]
  })

  tags = merge(var.tags, {
    Name = "MDB - Access Role ReadWrite"
  })
}

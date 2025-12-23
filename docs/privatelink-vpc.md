# PrivateLink & VPC

Why it matters

- Private networking reduces exposure and can reduce latency to managed DBs.

Recommendations

- Use PrivateLink for managed MongoDB services where possible.
- Be aware that placing Lambdas in a VPC can affect cold starts — use provisioned concurrency or VPC endpoints to mitigate.
- Ensure subnets and security groups are configured for minimal access.

Examples

- Network and infra modules are under `build/modules/vpc/` and `build/modules/atlas/`.

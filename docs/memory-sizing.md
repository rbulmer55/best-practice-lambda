# Memory Sizing and CPU

Why it matters

- Lambda memory determines available CPU — increasing memory can greatly reduce execution time.
- Right-sizing reduces cost and improves performance for CPU-bound workloads.

Recommendations

- Profile functions to understand CPU vs I/O characteristics before increasing memory.
- Start with conservative increases and measure latency/cost trade-offs.
- Use environment-specific settings (dev/test/prod) and document rationale in Terraform/CloudFormation.

Examples

- Adjust memory in your infrastructure code under `build/modules/functions/` or the Terraform module used in this repo.

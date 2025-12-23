# Provisioned Concurrency

Why it matters

- Provisioned Concurrency reduces cold starts and gives predictable latency at the cost of reserved capacity.

Recommendations

- Use provisioned concurrency for latency-sensitive functions (often API entry-points), and limit to what's necessary.
- Combine with warm-up techniques only when necessary; monitor cost vs latency improvements.
- Ensure init-time work is minimized so provisioned instances are ready to serve quickly.

Examples

- Provisioned concurrency is set in the function deployment IaC; examine `build/modules/functions/` for examples in this repo.

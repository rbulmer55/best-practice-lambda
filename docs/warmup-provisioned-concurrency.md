# Warm-up & Provisioned Concurrency

Why it matters

- Warm-up techniques and provisioned concurrency reduce cold-start latency but have cost implications.

Recommendations

- Prefer provisioned concurrency for critical paths; avoid ad-hoc warm-up scripts unless necessary.
- Keep init work small for provisioned instances so they are ready quickly.
- Monitor utilization to avoid over-provisioning.

Examples

- See IaC modules under `build/modules/functions/` for where provisioned concurrency is set.

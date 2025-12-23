# Max Idle Time

Why it matters

- Keeping Lambda timeouts and idle times small prevents resource hogging and reduces error surface.

Recommendations

- Set function timeouts to a conservative upper bound; prefer failing fast.
- Use retries and exponential backoff in calling systems instead of extremely long Lambda timeouts.
- Configure database and network timeouts to match Lambda timeouts closely.

Examples

- Timeouts are typically configured in the IaC files under `build/modules/functions/*`.

# Short Timeouts

Why it matters

- Short, sensible timeouts reduce resource contention and improve system resilience.

Recommendations

- Set Lambda timeouts slightly above expected maximum latency plus buffer.
- Use short network and DB client timeouts so the function can fail and retry gracefully.
- Implement retries with exponential backoff in calling services.

Examples

- Timeouts configured in IaC under `build/modules/functions/`.

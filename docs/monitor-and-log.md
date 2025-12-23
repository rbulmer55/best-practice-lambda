# Monitor & Log

Why it matters

- Observability is essential for troubleshooting, capacity planning, and proving SLAs.

Recommendations

- Emit structured logs (JSON) and meaningful metrics (latency, errors, DB connections).
- Use CloudWatch or a centralized logging service and create dashboards/alerts for key signals.
- Instrument health checks, throttling, and retry counters.

Examples

- Use `application/src/shared/logger.ts` and add CloudWatch or external sink integrations.

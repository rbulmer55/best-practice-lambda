# 2 — Connection Management (Caching)

Why it matters

- Improper connection handling leads to connection exhaustion and Lambda failures.
- Cold starts and reinitialising connections on every invocation are costly.

Recommendations

- Cache DB connections or clients at module scope so subsequent invocations reuse them.
- Use a minimal connectivity check for health endpoints (e.g. a `ping` command).
- If using MongoDB Atlas, prefer private networking (PrivateLink) and monitor connection counts.

Examples in this repo

- Connection helper: `application/src/shared/databases-services/location-service/connection/connect.ts`
- Health check: `application/src/shared/health-checks/check-database.ts`

Notes

- For very short-lived Lambdas, consider serverless DB offerings or Data API to avoid pooling issues.

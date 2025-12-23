# 2 — Connection Management (Caching)

Most databases limit the number of concurrent connections, and Lambda functions are ephemeral by design. Opening a new connection on every invocation therefore causes two main problems:

- Connection exhaustion: many short-lived Lambdas can quickly use up the database’s connection pool.
- Increased latency and resource use: creating connections is costly for both the function and the database, slowing requests and increasing load.

Implement connection management to reuse clients across invocations (cache at module scope), minimize connection churn, and expose lightweight health checks (e.g., a ping) rather than performing full reconnects.

Why it matters

- Improper connection handling leads to connection exhaustion and Lambda failures.
- Cold starts and reinitialising connections on every invocation are costly.

Recommendations

- Cache DB connections or clients at module scope _(outside of the handler)_ so subsequent invocations reuse them.
- Use a minimal connectivity check for health endpoints (e.g. a `ping` command).
- Monitor connection counts.

Examples in this repo

- Connection helper: `application/src/shared/databases-services/location-service/connection/connect.ts`
- Health check: `application/src/shared/health-checks/check-database.ts`

Notes

- For very short-lived Lambdas, consider provisioned concurrency or if your database allows, a data API to avoid pooling issues.

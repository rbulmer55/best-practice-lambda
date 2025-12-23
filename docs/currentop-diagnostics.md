# $currentOp & Diagnostics

Why it matters

- Database diagnostic tools help observe in-flight operations and identify slow or blocked queries.

Recommendations

- Use `$currentOp`, profiler logs, and Atlas/DB monitoring to spot long-running queries or connection issues.
- Automate alerts for slow queries and high connection counts.
- Use diagnostic snapshots as part of incident response.

Examples

- For MongoDB Atlas, use the built-in monitoring tools and slow query logs.

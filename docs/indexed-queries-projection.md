# Indexed Queries & Projection

Why it matters

- Proper indexing and projection reduce query latency and bandwidth, improving Lambda performance.

Recommendations

- Use indexes that match your query patterns; avoid broad or unselective indexes.
- Use projection to return only the fields your Lambda needs.
- Monitor query performance and slow query logs.

Examples

- See repository schemas under `application/src/schemas/location/` and DB usage in adapters.

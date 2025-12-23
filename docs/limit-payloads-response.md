# Limit Payloads / Responses

Why it matters

- Lambdas have payload limits; minimizing response size reduces network and processing time.

Recommendations

- Only return required fields and use pagination for large result sets.
- Use compression when appropriate and ensure clients can handle it.
- Validate and reject overly large requests early.

Examples

- Use projection in DB queries and implement pagination patterns in adapters.

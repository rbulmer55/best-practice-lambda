# 1 — Separate Handler from Business Logic

Use code architecutre patterns such as hexagonal architecutre and the concept of ports, adapters and domain use cases to distingush distinct boundaries between busines logic and tooling.

Why it matters

- Keeps Lambda handlers thin and focused on event/response translation.
- Makes business logic testable outside of the Lambda runtime.
- Improves reusability and readability (use-cases and adapters).

Recommendations

- Keep handlers under `application/entry-points/` and forward to use-case functions in `application/src/use-cases/`.
- Avoid heavy imports and long-running initialization in the handler file.
- Write unit tests for use-cases independently of AWS Lambda event shapes.

Examples in this repo

- Handler examples: `application/entry-points/health-check-lambda.ts`
- Use-case pattern: `application/src/use-cases/health-check/health-check.ts`

Notes

- See AWS guidance: https://docs.aws.amazon.com/lambda/latest/dg/typescript-handler.html#typescript-best-practices

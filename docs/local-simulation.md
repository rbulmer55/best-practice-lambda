# Local Simulation

Why it matters

- Running Lambdas locally reduces iteration time and increases confidence before deployment.

Recommendations

- Use sam local, `serverless-offline`, or small local harnesses to simulate events and environment variables.
- Include an easy-to-run script or Dockerfile for contributors to test locally.
- Mock external services and DBs in unit tests; provide integration tests against a local or staging DB.

Examples

- Local test patterns are in `jest.config.*` and scripts in `package.json`.

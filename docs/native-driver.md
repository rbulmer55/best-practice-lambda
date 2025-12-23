# Native Driver (MongoDB Native Driver)

Why it matters

- Native drivers are typically faster and have smaller runtime overhead than higher-level abstractions.

Recommendations

- Prefer the official MongoDB Node.js driver for performance-sensitive Lambdas.
- Avoid heavy ORMs in short-lived functions; use small, focused data mappers.
- Test cold-start impact of native modules; consider bundling strategies.

Examples

- Connection code: `application/src/shared/databases-services/location-service/connection/connect.ts`

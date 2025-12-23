# Function URLs & API Gateway

Why it matters

- Choosing the right front-door affects complexity, cost, and integration requirements.

Recommendations

- Use API Gateway for complex routing, auth, and integrations; use Function URLs for simple public endpoints.
- Keep auth and throttling at the edge when possible.
- Monitor costs for API Gateway vs Function URLs for your traffic profile.

Examples

- API and infra-config live in `build/modules/api-gateway/`.

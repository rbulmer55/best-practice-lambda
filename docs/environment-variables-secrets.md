# Environment Variables & Secrets

Why it matters

- Secrets and configuration must be managed securely and be easily configurable across environments.

Recommendations

- Use AWS Secrets Manager or Parameter Store for DB credentials and sensitive config; reference them via environment variables.
- Avoid hard-coding secrets in code or committing them to source control.
- Cache non-sensitive configuration locally for performance, but rotate secrets via vault-like mechanisms.

Examples in this repo

- Secrets fetching: `application/src/shared/databases-services/location-service/connection/fetch-connection-secret.ts`

Notes

- Ensure least-privilege IAM policies for any service retrieving secrets.

# Best Practices AWS Lambda with Database Management (MongoDB)

```
Author: Robert Bulmer
Date: 12/25
```

> [!IMPORTANT]
> This guide is for learning purposes only. All examples given here should be tested and used at your own risk.

## Introduction

This document captures practical best practices for building and operating AWS Lambda functions that interact MongoDB. It is intended for engineers and SREs working on serverless TypeScript services who want reliable, cost-effective, and maintainable database-backed Lambdas.

- **Purpose:** Offer concise, actionable recommendations for connection handling, performance tuning, packaging, and operational readiness.
- **Audience:** Backend engineers, DevOps/SREs, and code reviewers maintaining serverless services.
- **Scope:** Runtime and deployment practices (connection pooling/caching, memory/timeouts, packaging), architecture guidance (separating handlers from business logic), and observability/operations. This does not replace security policies — follow your org's guidelines for secrets and networking.
- **How to use:** Read the numbered sections for quick rules-of-thumb and consult the `application/` code for concrete examples implemented in this repository.

The guidance emphasizes pragmatic changes (e.g., connection caching, short timeouts, targeted indexes) that typically yield the biggest reliability and cost benefits for serverless apps.

## Quick Links — Optimisations

### Application

- [1 — Separate Handler from Business Logic](./docs/1-separate-handler.md)
- [2 — Minify Packages](./docs/4-minify-packages.md)
- [3 — Memory Sizing and CPU](./docs/3-memory-sizing.md)
- [4 - Graceful error & timeout handling](./docs/graceful-error-timeout-handling.md)
- [5 — Max Idle Time](./docs/5-max-idle-time.md)
- [6 - Local simulation](./docs/local-simulation.md)
- [7 - Monitor & log](./docs/monitor-and-log.md)

### Database

- [8 — Connection Management (Caching)](./docs/2-connection-management.md)
- [9 - Native driver](./docs/native-driver.md)
- [10 - Indexed queries & projection](./docs/indexed-queries-projection.md)
- [11 - Limit payloads / response](./docs/limit-payloads-response.md)
- [12 - $currentOp & diagnostics](./docs/currentop-diagnostics.md)
- [13 - PrivateLink & VPC](./docs/privatelink-vpc.md)

### Configuration & Deployment

- [14 - Environment variables & Secrets](./docs/environment-variables-secrets.md)
- [15 - Function URLs & API Gateway](./docs/function-urls-api-gateway.md)
- [16 — Provisioned Concurrency](./docs/6-provisioned-concurrency.md)
- [17 - Warm-up & Provisioned concurrency](./docs/warmup-provisioned-concurrency.md)
- [18 - Short timeouts](./docs/short-timeouts.md)

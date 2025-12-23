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
- [4 — Minify Packages](./docs/4-minify-packages.md)
- [3 — Memory Sizing and CPU](./docs/3-memory-sizing.md)
- [Graceful error & timeout handling](./docs/graceful-error-timeout-handling.md)
- [5 — Max Idle Time](./docs/5-max-idle-time.md)
- [Local simulation](./docs/local-simulation.md)
- [Monitor & log](./docs/monitor-and-log.md)

### Database

- [2 — Connection Management (Caching)](./docs/2-connection-management.md)
- [Native driver](./docs/native-driver.md)
- [Indexed queries & projection](./docs/indexed-queries-projection.md)
- [Limit payloads / response](./docs/limit-payloads-response.md)
- [$currentOp & diagnostics](./docs/currentop-diagnostics.md)
- [PrivateLink & VPC](./docs/privatelink-vpc.md)

### Configuration & Deployment

- [Environment variables & Secrets](./docs/environment-variables-secrets.md)
- [Function URLs & API Gateway](./docs/function-urls-api-gateway.md)
- [6 — Provisioned Concurrency](./docs/6-provisioned-concurrency.md)
- [Warm-up & Provisioned concurrency](./docs/warmup-provisioned-concurrency.md)
- [Short timeouts](./docs/short-timeouts.md)

# Separate Handler from Business Logic

https://docs.aws.amazon.com/lambda/latest/dg/typescript-handler.html#typescript-best-practices

Hexagonal architecutre with ports and adapters - Here we have a simple adaptation with Primary (source) dapters -> Use case -> Secondary (target) Adapter.

# Connection management (caching)

No Cache

```

```

# increase memory size

# Minify packages

# Max idle time

# Provisioned Concurrency

# Environment variables/Secrets

Secure/configurable deployments

# Function URLs/API Gateway

Simpler, minimal infrastructure

# Native driver

Faster cold start/deployment

# Indexed queries/projection

Speed and network efficiency

# Graceful error/timeout handling

Reliable user experience

# Short timeouts

No “hanging” Lambdas

# Monitor & log

Troubleshoot and optimize

# PrivateLink/VPC

Improved security and latency

# Limit payloads/response

Stay within Lambda limits

# Local simulation

Confident shipping

# Warm-up/Provisioned concurrency

Near-instant responses

# $currentOp & diagnostics

Proactive monitoring

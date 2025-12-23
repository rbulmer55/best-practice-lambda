import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { config } from '@config';
import { getHeaders, errorHandler, logger, schemaValidator } from '@shared';
import { ValidationError } from '@errors/validation-error';
import { healthCheckSchema } from './health-check.schema';
import { HealthCheckPayload } from '@models/health-check';
import { HealthCheckResult } from '@dto/health-check';
import { healthCheckUseCase } from '@use-cases/health-check';
import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import { Tracer } from '@aws-lambda-powertools/tracer';
import { MetricUnit, Metrics } from '@aws-lambda-powertools/metrics';
import { captureLambdaHandler } from '@aws-lambda-powertools/tracer/middleware';
import { injectLambdaContext } from '@aws-lambda-powertools/logger/middleware';
import { logMetrics } from '@aws-lambda-powertools/metrics/middleware';

const tracer = new Tracer();
const metrics = new Metrics();

const stage = config.get('stage');

export const healthCheck = async ({
  body,
}: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    if (!body) throw new ValidationError('no payload body');

    // validate the payload
    const payload = JSON.parse(body) as HealthCheckPayload;
    schemaValidator(healthCheckSchema, payload);

    const healthCheckResult: HealthCheckResult =
      await healthCheckUseCase(payload);

    metrics.addMetric('SuccessfulHealthCheck', MetricUnit.Count, 1);

    return {
      statusCode: 200,
      body: JSON.stringify(healthCheckResult),
      headers: getHeaders(stage),
    };
  } catch (error) {
    let errorMessage = 'Unknown error';
    if (error instanceof Error) errorMessage = error.message;
    logger.error(errorMessage);

    metrics.addMetric('HealthCheckError', MetricUnit.Count, 1);

    return errorHandler(error);
  }
};

export const handler = middy(healthCheck)
  .use(injectLambdaContext(logger))
  .use(captureLambdaHandler(tracer))
  .use(logMetrics(metrics))
  .use(httpErrorHandler());

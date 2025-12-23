import { HealthCheckPayload } from '@models/health-check';
import { HealthCheckResult } from '@dto/health-check';
import { checkDatabase } from '@shared/health-checks/check-database';

export async function healthCheckUseCase(
  healthCheckOptions: HealthCheckPayload,
): Promise<HealthCheckResult> {
  /**
   * business logic e.g. orchestration of the health checks
   */
  const databaseResult = await checkDatabase(healthCheckOptions);

  return {
    checks: {
      service: { status: true, message: 'Service is healthy' },
      database: {
        status: databaseResult.completed,
        message: databaseResult.message,
      },
    },
  };
}

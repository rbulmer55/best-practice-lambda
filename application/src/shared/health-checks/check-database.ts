import { HealthCheckPayload } from '@models/health-check';
import { HealthCheckResponse } from './types';
import { performDatabaseCheckAdapter } from '@adapters/secondary/perform-database-check/perform-database-check.adapter';

export async function checkDatabase(
  healthCheckOptions: HealthCheckPayload,
): Promise<HealthCheckResponse> {
  if (!healthCheckOptions.checks.database) {
    return { completed: false, message: 'Option skipped.' };
  }

  const databaseResult = await performDatabaseCheckAdapter();

  return databaseResult;
}

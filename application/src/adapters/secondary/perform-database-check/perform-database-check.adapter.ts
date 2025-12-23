import { connect } from '@shared/databases-services/location-service/connection';
import { HealthCheckDB } from '@shared/databases-services/location-service/models';
import { HealthCheckResponse } from '@shared/health-checks/types';
import { logger } from '@shared/logger';

let db: ReturnType<typeof connect> extends Promise<infer DB> ? DB : never;

export const performDatabaseCheckAdapter =
  async (): Promise<HealthCheckResponse> => {
    logger.info('Health Check Secondary Adapter: Connecting to database');
    if (!db) {
      db = await connect();
    }
    logger.info('Health Check Secondary Adapter: calling hello command');
    const helloResult = await db.command({ hello: 1 });
    logger.info(
      'Health Check Secondary Adapter: inserting health check document',
    );
    const collection = db.collection<HealthCheckDB>('healthchecks');

    const healthCheckDoc: HealthCheckDB = {
      timestamp: new Date(),
      status: true,
    };

    await collection.insertOne(healthCheckDoc);

    return { completed: true, message: 'Database tests successful.' };
  };

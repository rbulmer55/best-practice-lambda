import { MongoClient, MongoClientOptions, Db } from 'mongodb';
import { fromTemporaryCredentials } from '@aws-sdk/credential-providers';
import { URL } from 'url';
import { config } from '@config/config';
import { logger } from '@shared/logger';

/**
 * Fetch environment variables from config
 */
const accessRoleArn = config.get('accessRoleArn');
const clusterHost = config.get('clusterHost');

let client: MongoClient | null = null;
let db: Db | null = null;

const defaultConnOptions: MongoClientOptions = {
  // eg: maxPoolSize: 10, ssl: true, etc.
};

export async function connect(options: MongoClientOptions = {}): Promise<Db> {
  // if (db) {
  //   logger.info('Returning MongoClient db from cache');
  //   return db;
  // }

  logger.info('No cached connection. Assuming role using SDK.');

  const awsCredentialProvider = fromTemporaryCredentials({
    params: {
      RoleArn: accessRoleArn,
      RoleSessionName: 'HealthCheckServiceConnection',
    },
  });

  logger.info('Preparing Connection String');

  /**
   Cluster host is the full host i.e. {cluster_name}-{private_link_id}-{internal_project_id}
   private_link_id is only set if using a private endpoint
   internal_project_id is an Atlas internal 5 character unique string
   for example {myatlascluster-pl-0.a0bc0}.mongodb.net
  */
  const url = new URL(
    `mongodb+srv://${clusterHost}.mongodb.net/?authMechanism=MONGODB-AWS&authSource=%24external`,
  );

  logger.info('Connecting to MongoDB');

  const mongoClient = new MongoClient(url.toString(), {
    ...defaultConnOptions,
    ...options,
    authMechanismProperties: {
      AWS_CREDENTIAL_PROVIDER: awsCredentialProvider,
    },
  });

  client = await mongoClient.connect();

  const dbName = config.get('databaseName') || client.options.dbName;
  db = client.db(dbName);

  logger.info('Successfully connected to MongoDB, returning MongoClient db');
  return db;
}

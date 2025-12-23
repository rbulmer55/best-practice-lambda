import { ObjectId } from 'mongodb';

export type HealthCheckDB = {
  _id?: ObjectId;
  status: boolean;
  timestamp: Date;
};

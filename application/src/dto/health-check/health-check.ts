export type HealthCheckResult = {
  checks: {
    service: {
      status: boolean;
      message: string;
    };
    database: {
      status: boolean;
      message: string;
    };
  };
};

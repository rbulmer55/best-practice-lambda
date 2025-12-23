export const healthCheckSchema = {
  $id: 'https://example.com/healthCheckAPI.json',
  type: 'object',
  required: ['checks'],
  maxProperties: 1,
  minProperties: 1,
  properties: {
    checks: {
      type: 'object',
      properties: {
        database: { type: 'boolean' },
      },
    },
  },
};

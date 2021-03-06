export default {
  env: process.env.NODE_ENV || 'development',
  server: {
    host: process.env.HOST || 'localhost',
    port: Number(process.env.PORT) || 3000,
  },
  app: {
    name: process.env.npm_package_name,
    version: process.env.npm_package_version,
  },
  logger: {
    level: process.env.LOG_LEVEL || 'debug',
  },
  postgres: {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
  },
  mongo: {
    uri: process.env.MONGODB_URI,
  },
}

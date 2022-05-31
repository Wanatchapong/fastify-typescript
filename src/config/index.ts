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
  db: {
    url: process.env.DATABASE_URL,
  },
  mongo: {
    uri: process.env.MONGODB_URI,
  },
}

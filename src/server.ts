import fastify, { FastifyInstance } from 'fastify'
import fastifyCors from 'fastify-cors'
import fastifyHelmet from 'fastify-helmet'
import swagger from 'fastify-swagger'
import swaggerOptions from './config/swagger'
import config from './config'
import allRoutes from './routes'
import { errorHandler, notFoundHandler } from './errors/handler'

const createServer = async (): Promise<FastifyInstance> => {
  const server = fastify({
    // logger: {
    //   level: config.logger.level,
    //   prettyPrint: true,
    // },
  })

  // third party
  server.register(fastifyCors)
  server.register(fastifyHelmet, {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [`'self'`],
        styleSrc: [`'self'`, `'unsafe-inline'`],
        imgSrc: [`'self'`, 'data:', 'validator.swagger.io'],
        scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
      },
    },
  })
  server.register(swagger, swaggerOptions)

  // custom middleware, hooks

  // api routes
  allRoutes.forEach(({ prefix, routes }) => {
    server.register(routes, { prefix })
  })

  // default route
  server.get('/', async (request, reply) => {
    reply.send({
      name: config.app.name,
      version: config.app.version,
    })
  })
  // global error handler
  server.setNotFoundHandler(notFoundHandler)
  server.setErrorHandler(errorHandler)

  await server.ready()

  return server
}

export default createServer

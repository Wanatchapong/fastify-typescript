import fastify from 'fastify'
import swagger from 'fastify-swagger'
import swaggerOptions from './config/swagger'
import config from './config'
import todoRoutes from './routes/todo'

const createServer = async () => {
  const server = fastify({
    // logger: {
    //   level: config.logger.level,
    //   prettyPrint: true,
    // },
  })

  // third party
  server.register(require('fastify-cors'))
  server.register(require('fastify-helmet'), {
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

  // custom middleware, routes, hooks
  server.register(todoRoutes, { prefix: '/todo' })

  // default route
  server.get('/', async (request, reply) => {
    reply.send({
      name: config.app.name,
      version: config.app.version,
    })
  })
  // global error handler
  server.setErrorHandler((error, request, reply) => {
    request.log.error(error.toString())

    reply.send({ error })
  })

  await server.ready()

  return server
}

export default createServer

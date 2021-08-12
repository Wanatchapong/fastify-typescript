import path from 'path'
import dotenv from 'dotenv'

dotenv.config({
  path: path.join(
    __dirname,
    `../.env.${process.env.NODE_ENV || 'development'}`,
  ),
})

import createServer from './server'
import config from './config'

const startServer = async () => {
  try {
    const server = await createServer()
    const address = await server.listen(config.server.port, config.server.host)
    console.log(`Server listening on ${address}`)

    server.swagger()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

startServer()

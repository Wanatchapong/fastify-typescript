import path from 'path'
import dotenv from 'dotenv'
// Need create a .env file in the root directory before start app
dotenv.config({ path: path.resolve(process.cwd(), '.env') })

import createServer from './server'
import config from './config'

const startServer = async () => {
  try {
    const server = await createServer()
    const address = await server.listen(config.server.port, config.server.host)
    console.log(`Environment: ${process.env.NODE_ENV}`)
    console.log(`Server listening on ${address}`)

    server.swagger()
    server.blipp()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

startServer()

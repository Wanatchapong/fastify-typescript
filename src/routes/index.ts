import { FastifyInstance } from 'fastify'
import todoRoutes from './todo.route'

interface Route {
  prefix: string
  routes: (fastify: FastifyInstance) => void
}

const routes: Route[] = [
  {
    prefix: '/todo',
    routes: todoRoutes,
  },
]

export default routes

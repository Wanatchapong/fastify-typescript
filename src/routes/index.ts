import { FastifyInstance } from 'fastify'
import todoRoutes from './todo.route'
import productRoutes from './product.route'

interface Route {
  prefix: string
  routes: (fastify: FastifyInstance) => void
}

const routes: Route[] = [
  {
    prefix: '/todo',
    routes: todoRoutes,
  },
  {
    prefix: '/products',
    routes: productRoutes,
  },
]

export default routes

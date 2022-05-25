import { FastifyInstance } from 'fastify'
import * as productController from '../controllers/product.controller'

const routes = async (fastify: FastifyInstance): Promise<void> => {
  fastify.get('/', productController.getAllProducts)

  fastify.post('/', productController.createProduct)
}

export default routes

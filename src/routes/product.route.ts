import { FastifyInstance } from 'fastify'
import * as productController from '../controllers/product.controller'

const routes = async (fastify: FastifyInstance): Promise<void> => {
  fastify.get('/', productController.getAllProducts)
  fastify.post('/', productController.createProduct)
  fastify.put('/:id', productController.updateProduct)
  fastify.delete('/:id', productController.deleteProduct)
}

export default routes

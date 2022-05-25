import { FastifyRequest, FastifyReply } from 'fastify'
import * as productService from '../services/product.service'

export const getAllProducts = async (
  request: FastifyRequest,
  reply: FastifyReply,
): Promise<void> => {
  const products = await productService.getAllProducts()

  reply.send({
    message: 'success',
    data: products,
  })
}

export const createProduct = async (
  request: FastifyRequest,
  reply: FastifyReply,
): Promise<void> => {
  await productService.createProduct(request.body)

  reply.send({
    message: 'success',
    data: {},
  })
}

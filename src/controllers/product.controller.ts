import { FastifyRequest, FastifyReply } from 'fastify'
import * as productService from '../services/product.service'
import { ParamId } from '../interfaces/common.interface'

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

export const updateProduct = async (
  request: FastifyRequest<{
    Params: ParamId
    Body: any
  }>,
  reply: FastifyReply,
): Promise<void> => {
  await productService.updateProduct(request.params.id, request.body)

  reply.send({
    message: 'success',
    data: {},
  })
}

export const deleteProduct = async (
  request: FastifyRequest<{
    Params: ParamId
  }>,
  reply: FastifyReply,
): Promise<void> => {
  await productService.deleteProduct(request.params.id)

  reply.send({
    message: 'success',
    data: {},
  })
}

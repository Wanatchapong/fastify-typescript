import { FastifyRequest, FastifyReply, FastifyError } from 'fastify'
import { ApiError } from './api-error'

export const notFoundHandler = (
  request: FastifyRequest,
  reply: FastifyReply,
): void => {
  reply.code(404).send({
    error: {
      code: 'not_found',
      message: 'Request not found',
    },
  })
}

export const errorHandler = (
  error: Error,
  request: FastifyRequest,
  reply: FastifyReply,
): void => {
  if (error instanceof ApiError) {
    const { code, message } = error as ApiError
    reply.code(400).send({
      error: {
        code,
        message,
      },
    })
    return
  }

  const { statusCode, code, message } = error as FastifyError

  reply.code(statusCode || 500).send({
    error: {
      code,
      message,
    },
  })
}

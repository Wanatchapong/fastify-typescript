import { FastifyReply } from 'fastify'

interface ApiResponse {
  message: string
  data?: unknown
}

export interface IReply extends FastifyReply {
  send(payload?: ApiResponse): FastifyReply
}

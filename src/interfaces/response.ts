import { FastifyReply } from 'fastify'

interface ApiResponse {
  message: string
  data?: any
}

export interface IReply extends FastifyReply {
  send: (payload?: ApiResponse) => any
}

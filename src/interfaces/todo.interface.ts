import { FastifyRequest } from 'fastify'

// Using generics properties for dynamic properties located on the route-level "request" object

export interface TodoParams {
  id?: number
}

export interface TodoBody {
  title: string
  description?: string
  status: 'TODO' | 'IN_PROGRESS' | 'DONE'
}

export type TodoRequest = FastifyRequest<{
  Params: TodoParams
  Body: TodoBody
}>

import { FastifyRequest, RequestGenericInterface } from 'fastify'

// Using generics properties for dynamic properties located on the route-level "request" object

interface TodoParams {
  id?: number
}

interface TodoBody {
  title?: string
  description?: string
  status?: 'in_progress' | 'done'
}

export type TodoRequest = FastifyRequest<{
  Params: TodoParams
  Body: TodoBody
}>

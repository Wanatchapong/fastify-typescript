import { FastifyInstance } from 'fastify'
import * as controller from '../controllers/todo'
import { CreateTodoSchema, UpdateTodoSchema } from './schemas/todo-schema'

const routes = async (fastify: FastifyInstance) => {
  fastify.get('/', controller.getAllTodos)
  fastify.get('/:id', controller.getTodoById)

  fastify.post(
    '/',
    {
      schema: CreateTodoSchema,
    },
    controller.createTodo,
  )

  fastify.put(
    '/:id',
    {
      schema: UpdateTodoSchema,
    },
    controller.updateTodo,
  )

  fastify.delete('/:id', controller.deleteTodo)
}

export default routes

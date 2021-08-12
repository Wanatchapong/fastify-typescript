import { FastifyInstance } from 'fastify'
import * as todoController from '../controllers/todo.controller'
import { CreateTodoSchema, UpdateTodoSchema } from './schemas/todo.schema'

const routes = async (fastify: FastifyInstance): Promise<void> => {
  fastify.get('/', todoController.getAllTodos)
  fastify.get('/:id', todoController.getTodoById)

  fastify.post(
    '/',
    {
      schema: CreateTodoSchema,
    },
    todoController.createTodo,
  )

  fastify.put(
    '/:id',
    {
      schema: UpdateTodoSchema,
    },
    todoController.updateTodo,
  )

  fastify.delete('/:id', todoController.deleteTodo)
}

export default routes

import { FastifyReply } from 'fastify'
import { TodoRequest, TodoBody } from '../interfaces/todo.interface'
import * as todoService from '../services/todo.service'

export const getAllTodos = async (
  request: TodoRequest,
  reply: FastifyReply,
): Promise<void> => {
  const todos = await todoService.getTodos()

  reply.send({
    message: 'success',
    data: todos,
  })
}

export const getTodoById = async (
  request: TodoRequest,
  reply: FastifyReply,
): Promise<void> => {
  const { id } = request.params

  const todo = await todoService.getTodoById(Number(id))

  reply.send({
    message: 'success',
    data: todo,
  })
}

export const createTodo = async (
  request: TodoRequest,
  reply: FastifyReply,
): Promise<void> => {
  const data: TodoBody = request.body

  await todoService.createTodo(data)

  reply.send({
    message: 'success',
  })
}

export const updateTodo = async (
  request: TodoRequest,
  reply: FastifyReply,
): Promise<void> => {
  const id = request.params.id
  const data: TodoBody = request.body

  await todoService.updateTodo(Number(id), data)

  reply.send({
    message: 'success',
  })
}

export const deleteTodo = async (
  request: TodoRequest,
  reply: FastifyReply,
): Promise<void> => {
  const id = request.params.id

  await todoService.deleteById(Number(id))

  reply.send({
    message: 'success',
  })
}

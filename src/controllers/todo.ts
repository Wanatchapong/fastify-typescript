import { FastifyRequest, FastifyReply } from 'fastify'
import { ApiError } from '../errors/api-error'
import { TodoRequest } from '../interfaces/todo'

const todos = [
  {
    id: 1,
    title: 'Task A',
    description: 'Description A',
    status: 'done',
  },
  {
    id: 2,
    title: 'Task B',
    description: 'Description B',
    status: 'in_progress',
  },
]

export const getAllTodos = (request: TodoRequest, reply: FastifyReply) => {
  reply.send({
    message: 'success',
    data: todos,
  })
}

export const getTodoById = (request: TodoRequest, reply: FastifyReply) => {
  const { id } = request.params

  const todo = todos.find((todo) => todo.id === Number(id))

  reply.send({
    message: 'success',
    data: todo,
  })
}

export const createTodo = (request: TodoRequest, reply: FastifyReply) => {
  const data = request.body

  const maxId = Math.max(...todos.map((todo) => todo.id))

  todos.push({
    id: maxId + 1,
    title: data.title || '',
    description: data.description || '',
    status: data.status || '',
  })

  reply.send({
    message: 'success',
  })
}

export const updateTodo = (request: TodoRequest, reply: FastifyReply) => {
  const id = request.params.id

  const index = todos.findIndex((todo) => todo.id === Number(id))

  if (index === -1) {
    throw new ApiError('not_found', `Todo not found by id ${id}`)
  }

  const data = request.body

  todos[index].title = data.title || ''
  todos[index].description = data.description || ''
  todos[index].status = data.status || ''

  reply.send({
    message: 'success',
  })
}

export const deleteTodo = (request: TodoRequest, reply: FastifyReply) => {
  const id = request.params.id

  const index = todos.findIndex((todo) => todo.id === Number(id))

  if (index === -1) {
    throw new ApiError('not_found', `Todo not found by id ${id}`)
  }

  todos.splice(index, 1)

  reply.send({
    message: 'success',
  })
}

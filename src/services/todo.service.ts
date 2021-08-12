import { Todo } from '../models/Todo'
import { TodoBody } from '../interfaces/todo.interface'
import { ApiError } from '../errors/api-error'

const todos: Todo[] = [
  {
    id: 1,
    title: 'Task A',
    description: 'Description A',
    status: 'DONE',
  },
  {
    id: 2,
    title: 'Task B',
    description: 'Description B',
    status: 'IN_PROGRESS',
  },
]

const getNextId = () => {
  return todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1
}

export const getTodos = (): Promise<Todo[]> => {
  return new Promise((resolve) => resolve(todos))
}

export const getTodoById = (id: number): Promise<Todo> => {
  const todo = todos.find((todo) => todo.id === id)

  if (!todo) {
    throw new ApiError('not_found', `todo not found by id ${id}`)
  }

  return new Promise((resolve) => resolve(todo))
}

export const createTodo = (data: TodoBody): Promise<void> => {
  const nextId = getNextId()

  todos.push({
    id: nextId,
    title: data.title,
    description: data.description,
    status: data.status,
  })

  return new Promise((resolve) => resolve())
}

export const updateTodo = (id: number, data: TodoBody): Promise<void> => {
  const foundIndex = todos.findIndex((todo) => todo.id === id)

  if (foundIndex === -1) {
    throw new ApiError('not_found', `todo not found by id ${id}`)
  }

  todos[foundIndex].title = data.title
  todos[foundIndex].description = data.description
  todos[foundIndex].status = data.status

  return new Promise((resolve) => resolve())
}

export const deleteById = (id: number): Promise<void> => {
  const foundIndex = todos.findIndex((todo) => todo.id === id)

  if (foundIndex === -1) {
    throw new ApiError('not_found', `todo not found by id ${id}`)
  }

  todos.splice(foundIndex, 1)

  return new Promise((resolve) => resolve())
}

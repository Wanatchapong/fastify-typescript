export const CreateTodoSchema = {
  description: 'Create a new todo',
  tags: ['todo'],
  summary: 'Create new todo with given values',
  body: {
    type: 'object',
    properties: {
      title: { type: 'string' },
      description: { type: 'string' },
      status: {
        type: 'string',
        enum: ['in_progress', 'done'],
      },
    },
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
}

export const UpdateTodoSchema = {
  description: 'Update existing todo',
  tags: ['todo'],
  summary: 'Update todo by id with given values',
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Todo id',
      },
    },
  },
  body: {
    type: 'object',
    properties: {
      title: { type: 'string' },
      description: { type: 'string' },
      status: {
        type: 'string',
        enum: ['in_progress', 'done'],
      },
    },
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
}

export const CreateTodoSchema = {
  description: 'Create a new todo',
  tags: ['todo'],
  summary: 'Create new todo with given values',
  body: {
    type: 'object',
    required: ['title', 'status'],
    properties: {
      title: { type: 'string' },
      description: { type: 'string', nullable: true },
      status: {
        type: 'string',
        enum: ['TODO', 'IN_PROGRESS', 'DONE'],
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
    required: ['title', 'status'],
    properties: {
      title: { type: 'string' },
      description: { type: 'string', nullable: true },
      status: {
        type: 'string',
        enum: ['TODO', 'IN_PROGRESS', 'DONE'],
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

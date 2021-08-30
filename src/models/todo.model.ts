export type Todo = {
  id: number
  title: string
  description?: string
  status: 'TODO' | 'IN_PROGRESS' | 'DONE'
}

import { getTodos, createTodo } from '@/lib/db'

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

export async function GET() {
  try {
    const todos = await getTodos()
    return Response.json(todos)
  } catch (error) {
    return Response.json({ message: (error as Error).message }, { status: 500 })
  }
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return Response.json({ message: 'Body must be valid JSON' }, { status: 400 })
  }

  if (!isObject(body) || typeof body.title !== 'string' || body.title.trim() === '') {
    return Response.json({ message: 'Title is required' }, { status: 400 })
  }

  try {
    const todo = await createTodo(body.title)
    return Response.json(todo, { status: 201 })
  } catch (error) {
    return Response.json({ message: (error as Error).message }, { status: 500 })
  }
}

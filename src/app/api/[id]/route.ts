import { getTodoById, updateTodo, deleteTodo } from '@/lib/db'

type Params = { params: Promise<{ id: string }> }

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

export async function GET(_req: Request, { params }: Params) {
  const { id } = await params
  try {
    const todo = await getTodoById(id)
    if (!todo) return Response.json({ message: 'Not found' }, { status: 404 })
    return Response.json(todo)
  } catch (error) {
    return Response.json({ message: (error as Error).message }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: Params) {
  const { id } = await params
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
    const todo = await updateTodo(id, body.title)
    if (!todo) return Response.json({ message: 'Not found' }, { status: 404 })
    return Response.json(todo)
  } catch (error) {
    return Response.json({ message: (error as Error).message }, { status: 500 })
  }
}

export async function DELETE(_req: Request, { params }: Params) {
  const { id } = await params
  try {
    const deleted = await deleteTodo(id)
    if (!deleted) return Response.json({ message: 'Not found' }, { status: 404 })
    return new Response(null, { status: 204 })
  } catch (error) {
    return Response.json({ message: (error as Error).message }, { status: 500 })
  }
}

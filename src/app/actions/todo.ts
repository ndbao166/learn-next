'use server'

import { createTodo, deleteTodo } from '@/lib/db'
import { revalidatePath } from 'next/cache'

export type TodoState = {
  message: string
  type: 'success' | 'error' | ''
}

export async function addTodo(_prev: TodoState, formData: FormData): Promise<TodoState> {
  const title = (formData.get('title') as string) ?? ''
  if (!title.trim()) {
    return { message: 'Tiêu đề không được để trống', type: 'error' }
  }
  const todo = await createTodo(title)
  revalidatePath('/next')
  return { message: `Đã thêm "${todo.title}"`, type: 'success' }
}

export async function removeTodo(id: string) {
  await deleteTodo(id)
  revalidatePath('/next')
}

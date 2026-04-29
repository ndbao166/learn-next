'use client'

import { useTransition } from 'react'
import { removeTodo } from '@/app/actions/todo'

const DeleteTodoButton = ({ id }: { id: string }) => {
  const [pending, startTransition] = useTransition()

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => startTransition(() => removeTodo(id))}
      className="text-red-500 hover:text-red-700 font-bold text-sm ml-2 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? '...' : '✕'}
    </button>
  )
}

export default DeleteTodoButton

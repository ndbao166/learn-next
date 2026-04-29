'use client'

import { useActionState, useEffect, useRef } from 'react'
import { addTodo, type TodoState } from '@/app/actions/todo'

const initialState: TodoState = { message: '', type: '' }

const TodoForm = () => {
  const [state, formAction, pending] = useActionState(addTodo, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.type === 'success') formRef.current?.reset()
  }, [state])

  return (
    <div className="mb-4">
      <form ref={formRef} action={formAction} className="flex items-center gap-2">
        <input
          type="text"
          name="title"
          placeholder="Add a new todo"
          disabled={pending}
          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100"
        />
        <button
          type="submit"
          disabled={pending}
          className="px-4 py-2 rounded bg-blue-600 text-white font-semibold transition-colors hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {pending ? 'Đang thêm...' : 'Add'}
        </button>
      </form>
      {state.message && (
        <p
          aria-live="polite"
          className={`mt-2 text-sm ${
            state.type === 'success' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {state.message}
        </p>
      )}
    </div>
  )
}

export default TodoForm

'use client'

import React, { useEffect, useState } from 'react'

interface Todo {
  id: number
  title: string
}

const page = () => {
  const [title, setTitle] = useState('')

  const [todos, setTodos] = useState<Todo[]>([])

  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const fetchTodos = async () => {
    const res = await fetch('api/')
    const data = await res.json()
    if (!res.ok) {
      throw new Error(data.message || 'failed to fetch todos from server')
    }
    return data
  }

  const postTodo = async (title: string) => {
    const res = await fetch('/api/', {
      method: 'POST',
      body: JSON.stringify({ title: title.trim() }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    if (!res.ok) {
      throw new Error(data.message || 'failed to post todo to server')
    }
  }

  const loadTodos = async () => {
    setLoading(true)

    try {
      const data = await fetchTodos()
      setTodos(data)
    } catch (error) {
      setError((error as Error).message)
    } finally {
      setLoading(false)
    }
  }

  // load todos when the component mounts
  useEffect(() => {
    loadTodos()
  }, [])



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      await postTodo(title)

      setTitle('')
      await loadTodos()
    } catch (error) {
      setError((error as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">React.js Todo List</h1>
      <form onSubmit={handleSubmit} className="flex items-center mb-4 gap-2">
        <input
          type="text"
          placeholder="Add a new todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          disabled={loading}
          className={`px-4 py-2 rounded bg-blue-600 text-white font-semibold transition-colors ${loading ? 'opacity-60 cursor-not-allowed' : 'hover:bg-blue-700'}`}
        >
          {loading ? 'Loading...' : 'Add'}
        </button>
      </form>
      {error && <p className="text-center text-red-500 font-bold">{error}</p>}
      {loading ? (
        <p className="text-center text-gray-500">Loading todos...</p>
      ) : ""}
      <ul className="space-y-2">
        {todos.map(todo => (
          <li key={todo.id} className="px-4 py-2 bg-gray-100 rounded shadow-sm">
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default page
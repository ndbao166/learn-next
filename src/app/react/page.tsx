'use client'

import React, { useEffect, useState } from 'react'
interface Todo {
    id: number
    title: string
    completed: boolean
}
const page = () => {
    const [title, setTitle] = useState('')

    const [todos, setTodos] = useState<Todo[]>([])

    const [message, setMessage] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    
    const fetchTodos = async () => {
        await new Promise(resolve => setTimeout(resolve, 10000))
        const res = await fetch('http://localhost:4000/todo')
        const data = await res.json()
        setTodos(data)
    }

    useEffect(() => {
        const loadTodos = async () => {
            try {
                setLoading(true)
                await fetchTodos()
            } catch (error) {
                setMessage((error as Error).message)
            } finally {
                setLoading(false)
            }
        }

        loadTodos()
    }, [])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setMessage('')

        try {
            await new Promise(resolve => setTimeout(resolve, 10000))
            const res = await fetch('http://localhost:4000/todo', {
                method: 'POST',
                body: JSON.stringify({ title }),
            })
            const result = await res.json()

            if (!res.ok) {
                throw new Error(result.message || 'Something went wrong')
            }
            
            setTitle('')
            setMessage('Todo added successfully')

            // fetch todos again
            await fetchTodos()
        } catch (error) {
            setMessage((error as Error).message)
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
      {message && (
        <p className={`mb-4 text-sm text-center ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
      {loading ? (
        <p className="text-center text-gray-500">Loading todos...</p>
      ) : (
        <ul className="space-y-2">
          {todos.map(todo => (
            <li key={todo.id} className="px-4 py-2 bg-gray-100 rounded shadow-sm">
              {todo.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default page
import { getTodos } from '@/lib/db'
import TodoForm from '@/app/components/todoForm'
import DeleteTodoButton from '@/app/components/deleteTodoButton'


const page = async () => {
  const todos = await getTodos()

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">Next.js Todo List</h1>

      <TodoForm />

      <ul className="space-y-2">
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded shadow-sm">
            <span>{todo.title}</span>
            <DeleteTodoButton id={todo.id} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default page
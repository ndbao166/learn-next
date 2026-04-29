const Loading = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">Next.js Todo List</h1>

      <div className="flex items-center gap-2 mb-4">
        <div className="flex-1 h-10 bg-gray-200 rounded animate-pulse" />
        <div className="w-16 h-10 bg-gray-200 rounded animate-pulse" />
      </div>

      <ul className="space-y-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <li
            key={i}
            className="h-10 px-4 py-2 bg-gray-100 rounded shadow-sm animate-pulse"
          />
        ))}
      </ul>
    </div>
  )
}

export default Loading

import { Suspense } from "react"
import { getRandomUser } from "@/lib/faker"

const page = async () => {

  return (
    <div>
      <h1>User</h1>
      <UserInfo />
      <h1>Todos</h1>
      <Suspense fallback={<div>Loading todos...</div>}>
        <ToDoList />
      </Suspense>
    </div>
  )
}

const UserInfo = async () => {
  'use cache'
  
  const user = await getRandomUser()
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.address}</p>
    </div>
  )
}


const ToDoList = async () => {
  const todos = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todosData = await todos.json()
  return (
    <ul>
      {todosData.map((todo: any) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

export default page
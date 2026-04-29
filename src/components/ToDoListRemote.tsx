import React from 'react'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const ToDoListRemote = async () => {
  
  await delay(5000);
  const todos = await fetch('https://jsonplaceholder.typicode.com/todos' , {
    cache: 'no-cache',
  });
  const todosData = await todos.json();

  return (
    <div>
        <h1>ToDo List</h1>
        <ul>
            {todosData.map((todo: any) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default ToDoListRemote
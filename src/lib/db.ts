import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const randomUUID = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export type Todo = {
  id: string
  title: string
}

type DB = { todo: Todo[] }

const DB_PATH = path.join(process.cwd(), 'mock', 'db.json')

const delay = (ms = 5000) => new Promise(resolve => setTimeout(resolve, ms))

async function readDB(): Promise<DB> {
  const raw = await readFile(DB_PATH, 'utf-8')
  return JSON.parse(raw) as DB
}

async function writeDB(db: DB): Promise<void> {
  await writeFile(DB_PATH, JSON.stringify(db, null, 2), 'utf-8')
}

export async function getTodos(): Promise<Todo[]> {
  await delay()
  const db = await readDB()
  return db.todo
}

export async function getTodoById(id: string): Promise<Todo | undefined> {
  await delay()
  const db = await readDB()
  return db.todo.find(t => t.id === id)
}

export async function createTodo(title: string): Promise<Todo> {
  await delay()
  const db = await readDB()
  const todo: Todo = { id: randomUUID(), title: title.trim() }
  db.todo.push(todo)
  await writeDB(db)
  return todo
}

export async function updateTodo(id: string, title: string): Promise<Todo | null> {
  await delay()
  const db = await readDB()
  const todo = db.todo.find(t => t.id === id)
  if (!todo) return null
  todo.title = title.trim()
  await writeDB(db)
  return todo
}

export async function deleteTodo(id: string): Promise<boolean> {
  await delay()
  const db = await readDB()
  const index = db.todo.findIndex(t => t.id === id)
  if (index === -1) return false
  db.todo.splice(index, 1)
  await writeDB(db)
  return true
}

import ToDoListRemote from "@/components/ToDoListRemote";
import { Suspense } from "react";

export default async function Home() {
  console.log('call api posts');
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const post = await res.json();
  console.log('call api posts - done');
  return <div>
    <h1>Post title: {post.title}</h1>
    <p>Post content: {post.body}</p>
    <Suspense fallback={<div>Loading ToDo List...</div>}>
      <ToDoListRemote />
    </Suspense>
  </div>;
}

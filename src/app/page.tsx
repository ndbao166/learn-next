import { getPost } from "@/lib";
import SlowComponent from "@/components/SlowComponent";
import { Suspense } from "react";

export default async function Home() {
  const posts = await getPost();
  return <div>
    <h1>Posts</h1>
    <p>{posts.title}</p>
    <p>{posts.content}</p>
    <Suspense fallback={<div>Loading...</div>}>
      <SlowComponent />
    </Suspense>
  </div>;
}

import { getListComments, getPostCache } from "@/lib";
import { cookies } from "next/headers";

export default async function Home() {
  await cookies();
  const posts = await getPostCache();
  const comments = await getListComments();
  return <div>
    <h1>List users</h1>
    <h2>Posts</h2>
    <p>{posts.title}</p>
    <p>{posts.content}</p>
    <h2>Comments</h2>
    <ul>
      {comments.map((comment) => (
        <li key={comment}>{comment}</li>
      ))}
    </ul>
  </div>;
}

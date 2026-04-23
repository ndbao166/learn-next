import { getPost, getListComments } from "@/lib";

export const revalidate = 10;

export default async function Home() {
  const posts = await getPost();
  const comments = await getListComments();
  return <div>
    <h1>Posts: {posts.title}</h1>
    <p>Content: {posts.content}</p>
    <ul>
      {comments.map((comment) => (
        <li key={comment}>{comment}</li>
      ))}
    </ul>
  </div>;
}

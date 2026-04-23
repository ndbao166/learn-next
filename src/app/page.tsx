import { cookies } from "next/headers";

export default async function Home() {
  await cookies();

  const posts = await fetch('http://localhost:8080/api/post', { cache: 'force-cache', next: { revalidate: 10 } });
  const postsData = await posts.json();

  const comments = await fetch('http://localhost:8080/api/comment');
  const commentsData = await comments.json();

  return <div>
    <h1>List users</h1>

    <h2>Posts</h2>
    <p>{postsData.title}</p>
    <p>{postsData.content}</p>

    <h2>Comments</h2>
    <ul>
      {commentsData.map((comment: string) => (
        <li key={comment}>{comment}</li>
      ))}
    </ul>
    
  </div>;
}

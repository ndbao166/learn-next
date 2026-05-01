import { getPost } from "@/lib";
import { connection } from "next/server";


const SlowComponent = async () => {

  await connection()
  
  const posts = await getPost();
  return (
    <div>
        <h1>Posts 2 (Slow Component)</h1>
        <p>{posts.title}</p>
        <p>{posts.content}</p>
    </div>
  )
}

export default SlowComponent
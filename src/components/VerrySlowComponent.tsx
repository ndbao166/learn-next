import React from 'react'
import { getPost } from "@/lib";

const VerrySlowComponent = async () => {
  const posts = await getPost();
  return (
    <div>
        <h1>Posts 3 (Very Slow Component)</h1>
        <p>{posts.title}</p>
        <p>{posts.content}</p>
    </div>
  )
}

export default VerrySlowComponent
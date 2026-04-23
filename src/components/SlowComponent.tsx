import { getPost } from "@/lib";
import VerrySlowComponent from "@/components/VerrySlowComponent";

import React, { Suspense } from 'react'

const SlowComponent = async () => {
  const posts = await getPost();
  return (
    <div>
        <h1>Posts 2 (Slow Component)</h1>
        <p>{posts.title}</p>
        <p>{posts.content}</p>
        <Suspense fallback={<div>Loading...</div>}>
            <VerrySlowComponent />
        </Suspense>
    </div>
  )
}

export default SlowComponent
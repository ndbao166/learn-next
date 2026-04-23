import React from 'react'

export const generateStaticParams = async () => {
  return []
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const page = async ({ params }: PageProps<"/post/[id]">) => {
    const { id } = await params;
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const postData = await post.json();
    await delay(5000);
    return <div>
        <h1>{postData.title}</h1>
        <p>{postData.body}</p>
    </div>
}


export default page;
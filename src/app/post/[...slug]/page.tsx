import React from 'react'

const PostPage = async (props : PageProps<"/post/[...slug]">) => {
  const params = await props.params;
  if (params.slug) {
    return <div>PostPage {params.slug.join("/")}</div>;
  }
  return <div>No post found</div>;
};

export default PostPage;
const BlogIdPage = async (props : PageProps<"/Intercepting-routes/blog/[id]">) => {
  const { id } = await props.params;
  return (
    <div>BlogIdPage {id}</div>
  )
}

export default BlogIdPage
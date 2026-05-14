type Post = {
  id: number
  title: string
}

const Page = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts: Post[] = await data.json()

  return (
    <section className="page-boundary page-ssg">
      <div className="boundary-label">SSG Page: src/app/ssg/page.tsx</div>
      <h2>Static Site Generation</h2>
      <p>Du lieu posts duoc cache bang fetch force-cache.</p>
      <div className="card-list">
        {posts.slice(0, 8).map((post) => (
          <article className="data-card" key={post.id}>
            {post.title}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Page
const page = async ({ params } : PageProps<"/user/[id]">) => {
  const { id } = await params; // demo dynamic route
  const user = await fetch(`http://localhost:8080/api/user`);
  const userData = await user.json();
  return <div>
    <h1>{userData.name}</h1>
    <p>{userData.email}</p>
    <p>{userData.phone}</p>
  </div>;
}

export default page;
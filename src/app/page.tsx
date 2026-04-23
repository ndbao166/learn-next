import { getListUsers } from "@/lib";

export default async function Home() {
  const users = await getListUsers();
  return <div>
    <h1>List users</h1>
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </div>;
}

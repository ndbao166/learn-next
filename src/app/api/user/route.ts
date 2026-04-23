import { getUser } from "@/lib";
const GET = async () => {
    const users = await getUser();
    return Response.json(users);
}

export { GET };
import { getPost } from "@/lib";

const GET = async () => {
    const posts = await getPost();
    return Response.json(posts);
}

export { GET };
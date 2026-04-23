import { getListComments } from "@/lib";

const GET = async () => {
    const comments = await getListComments();
    return Response.json(comments);
}

export { GET };
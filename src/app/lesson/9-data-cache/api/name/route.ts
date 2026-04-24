import { faker } from "@faker-js/faker";

export async function GET() {
    return Response.json({ name: faker.person.fullName() });
}

import { revalidatePath, revalidateTag, updateTag } from "next/cache";

export default function page() {
    return (
        <div>
            <form action={updateRevalidatePath}>
                <button type="submit">update revalidate path</button>
            </form>
            <form action={demoUpdateTagNumber}>
                <button type="submit">update tag number</button>
            </form>
            <form action={demoUpdateTagName}>
                <button type="submit">update tag name</button>
            </form>
            <form action={demoRevalidateTagNumber}>
                <button type="submit">revalidate tag number</button>
            </form>
            <form action={demoRevalidateTagName}>
                <button type="submit">revalidate tag name</button>
            </form>
        </div>
    )
}

async function updateRevalidatePath() {
    'use server';
    revalidatePath('/lesson/9-data-cache/demo-revalidate-path');
}

async function demoRevalidateTagNumber() {
    'use server';
    revalidateTag('number', 'max');
}

async function demoRevalidateTagName() {
    'use server';
    revalidateTag('name', 'max');
}

async function demoUpdateTagNumber() {
    'use server';
    updateTag('number');
}

async function demoUpdateTagName() {
    'use server';
    updateTag('name');
}

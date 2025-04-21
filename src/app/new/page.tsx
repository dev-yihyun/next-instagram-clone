import NewPost from "@/component/NewPost";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "New Post",
    description: "Create a new post",
};

export default async function NewPastPage() {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("/auth/signin");
    }
    return (
        <>
            <NewPost user={session.user} />
        </>
    );
}

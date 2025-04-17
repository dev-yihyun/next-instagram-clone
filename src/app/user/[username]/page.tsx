import UserPosts from "@/component/UserPosts";
import UserProfile from "@/component/UserProfile";
import { getUserForProfile } from "@/service/user";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

type Props = { params: { username: string } };

async function UserPage({ params: { username } }: Props) {
    const user = await getUser(username);

    if (!user) {
        notFound();
    }

    return (
        <section>
            <UserProfile user={user} />
            <UserPosts user={user} />
        </section>
    );
}
export default UserPage;
const getUser = cache(async (username: string) => getUserForProfile(username));
export async function generateMetadata({ params: { username } }: Props): Promise<Metadata> {
    const user = await getUser(username);
    return {
        title: `${user?.name} (@${user?.username}) · Instantgram Photos`,
        description: `${user?.name}'s all Instantgram posts`,
    };
}

import UserProfile from "@/component/UserProfile";
import { getUserForProfile } from "@/service/user";
import { notFound } from "next/navigation";

type Props = { params: { username: string } };

async function UserPage({ params: { username } }: Props) {
    const user = await getUserForProfile(username);

    if (!user) {
        notFound();
    }

    return (
        <>
            <UserProfile user={user} />
        </>
    );
}
export default UserPage;

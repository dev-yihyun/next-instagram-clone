import FollowingBar from "@/component/FollowingBar";
import PostList from "@/component/PostList";
import SideBar from "@/component/Sidebar";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function Home() {
    const session = await getServerSession(authOptions);
    const user = session?.user;
    if (!user) {
        redirect("/auth/signin");
    }
    return (
        <section className="w-full flex flex-col md:flex-row gap-5 bg-neutral-50">
            <div className=" basis-3/4">
                <FollowingBar />
                <PostList />
            </div>
            <div className=" basis-1/4">
                <SideBar user={user} />
            </div>
        </section>
    );
}

export default Home;

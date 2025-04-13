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
        <section className="w-full flex flex-col md:flex-row ">
            <div className="border w-4/5">
                <p>Following List</p>
                <p>Post List</p>
            </div>
            <div className="border w-1/5">
                <SideBar user={user} />
            </div>
        </section>
    );
}

export default Home;
{
    /* <div className='w-full basis-3/4 min-w-0'>
        <FollowingBar />
        <PostList />
      </div>
      <div className='basis-1/4 ml-8'>
        <SideBar user={user} />
      </div> */
}

import { User } from "@/model/user";
import Link from "next/link";
import ProfileImage from "./ProfileImage";

type Props = {
    user: User;
};
function SideBar({ user: { name = "no_name", image, username } }: Props) {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex gap-2  flex-wrap">
                    {image && (
                        <Link href={`/user/${username}`}>
                            <ProfileImage imageurl={image ?? ""} imagesize="small" />
                        </Link>
                    )}
                    <div>
                        <h1 className="font-bold text-xl">{username}</h1>
                        <p className="text-base">{name}</p>
                    </div>
                </div>

                <p>About · Help · Press · API · Jobs · Privacy · Terms · Location · Language</p>
                <p className="font-bold">@Copyright INSTANTGRAM from METAL</p>
            </div>
        </>
    );
}

export default SideBar;

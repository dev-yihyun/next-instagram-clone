import ProfileImage from "./ProfileImage";

type Props = {
    user: { name?: string | null; image?: string | null; username: string };
};
function SideBar({ user: { name = "no_name", image, username } }: Props) {
    return (
        <>
            <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                    <ProfileImage imageurl={image ?? ""} imagesize="small" />
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

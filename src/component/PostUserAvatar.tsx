import ProfileImage from "./ProfileImage";

type Props = {
    image: string;
    username: string;
};
export default function PostUserAvatar({ image, username }: Props) {
    return (
        <div className="flex items-center p-2">
            <ProfileImage imageurl={image} imagesize="medium" />
            <span className="text-gray-900 font-bold ml-2">{username}</span>
        </div>
    );
}

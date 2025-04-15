import { SimplePost } from "@/model/post";
import Image from "next/image";
import { format } from "timeago.js";
import ProfileImage from "./ProfileImage";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import HeartIcon from "./ui/icons/HeartIcon";
import SmileIcon from "./ui/icons/SmileIcon";
type Props = {
    post: SimplePost;
};

export function parseDate(date: string) {
    return format(date);
}
function PostCard({ post }: Props) {
    const { userImage, username, image, text, likes, createdAt } = post;

    console.log("postImage : ", post);

    return (
        <>
            <article className="rounded-lg shadow-md border border-gray-200 my-5">
                <div className="m-2 flex flex-row justify-items-start items-center gap-2">
                    <ProfileImage imagesize="large" imageurl={userImage} />
                    <h1 className="font-bold">{username}</h1>
                </div>
                <Image
                    src={image}
                    alt={`photo by ${username}`}
                    className="w-full object-cover aspect-square"
                    width={500}
                    height={500}
                />
                <div className="flex justify-between my-2 px-4 text-2xl">
                    <HeartIcon />
                    <BookmarkIcon />
                </div>
                <p className="text-sm font-bold  my-2 px-4">{`${likes?.length ?? 0} ${
                    likes?.length > 1 ? "likes" : "like"
                }`}</p>
                <div className="px-4 py-1">
                    {text && (
                        <div>
                            <span className="font-bold mr-1">{username}</span>
                            {text}
                        </div>
                    )}
                    <div className="text-xs text-neutral-500 uppercase my-2">
                        {parseDate(createdAt)}
                    </div>

                    <form className="flex items-center px-3 border-t border-neutral-300">
                        <SmileIcon />
                        <input
                            className="w-full ml-2 border-none outline-none p-3"
                            type="text"
                            placeholder="Add a comment..."
                        />
                        <button className="font-bold text-sky-500 ml-2">Post</button>
                    </form>
                </div>
            </article>
        </>
    );
}

export default PostCard;

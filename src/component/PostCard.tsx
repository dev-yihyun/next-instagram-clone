import { SimplePost } from "@/model/post";
import Image from "next/image";
import ActionBar from "./ActionBar";
import CommentForm from "./CommentForm";
import ProfileImage from "./ProfileImage";
type Props = {
    post: SimplePost;
};

function PostCard({ post }: Props) {
    const { userImage, username, image, text, likes, createdAt } = post;
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
                <ActionBar likes={likes} username={username} text={text} createdAt={createdAt} />
                <CommentForm />
            </article>
        </>
    );
}

export default PostCard;

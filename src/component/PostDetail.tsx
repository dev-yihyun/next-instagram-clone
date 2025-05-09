import useFullPost from "@/hook/post";
import { SimplePost } from "@/model/post";
import Image from "next/image";
import ActionBar from "./ActionBar";
import ProfileImage from "./ProfileImage";

type Props = {
    post: SimplePost;
};
export default function PostDetail({ post }: Props) {
    const { id, userImage, username, image } = post;
    const { post: data, postComment } = useFullPost(id);
    const comments = data?.comments;

    return (
        <section className="flex w-full h-full">
            <div className="relative basis-3/5">
                <Image
                    className="object-cover"
                    src={image}
                    alt={`photo by ${username}`}
                    priority
                    fill
                    sizes="650px"
                />
            </div>
            <div className="w-full basis-2/5 flex flex-col">
                <ProfileImage imageurl={userImage} imagesize="medium" />

                <ul className="border-t border-gray-200 h-full overflow-y-auto p-4 mb-1">
                    {comments &&
                        comments.map(({ image, username: commentUsername, comment }, index) => {
                            console.log("image:", image);
                            console.log("commentUsername:", commentUsername);
                            console.log("comment:", comment);
                            return (
                                <li key={index} className="flex items-center mb-1">
                                    <ProfileImage imageurl={image || ""} imagesize="small" />
                                    <div className="ml-2">
                                        <span className="font-bold mr-1">{commentUsername}</span>
                                        <span>{comment}</span>
                                    </div>
                                </li>
                            );
                        })}
                </ul>
                <ActionBar post={post} onComment={postComment} />
            </div>
        </section>
    );
}

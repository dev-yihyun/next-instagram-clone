"use client";

import { SimplePost } from "@/model/post";
import Image from "next/image";
import { useState } from "react";
import ActionBar from "./ActionBar";
import CommentForm from "./CommentForm";
import PostDetail from "./PostDetail";
import ProfileImage from "./ProfileImage";
import ModalPortal from "./ui/Modalportal";
import PostModal from "./ui/PostModal";
type Props = {
    post: SimplePost;
};

function PostCard({ post }: Props) {
    const { userImage, username, image, comments, text } = post;
    const [openModal, setOpenModal] = useState(false);
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
                    onClick={() => setOpenModal(true)}
                />
                <ActionBar post={post}>
                    <p>
                        <span className="font-bold mr-1">{username}</span>
                        {text}
                    </p>
                    {comments > 1 && (
                        <button
                            className="font-bold my-2 text-sky-500"
                            onClick={() => setOpenModal(true)}
                        >{`View all ${comments} comments`}</button>
                    )}
                </ActionBar>
                <CommentForm />
                {openModal && (
                    <ModalPortal>
                        <PostModal onClose={() => setOpenModal(false)}>
                            <PostDetail post={post} />
                        </PostModal>
                    </ModalPortal>
                )}
            </article>
        </>
    );
}

export default PostCard;

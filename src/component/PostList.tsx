"use client";

import { SimplePost } from "@/model/post";
import useSWR from "swr";
import PostCard from "./PostCard";

function PostList() {
    const { data: posts, isLoading: loading } = useSWR<SimplePost[]>("/api/posts");
    return (
        <section className="flex flex-col gap-5">
            {posts && (
                <>
                    {posts.map((post, index) => (
                        <div key={index}>
                            <PostCard post={post} />
                        </div>
                    ))}
                </>
            )}
        </section>
    );
}

export default PostList;

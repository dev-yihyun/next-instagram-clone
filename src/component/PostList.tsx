"use client";

import usePosts from "@/hook/posts";
import { ClipLoader } from "react-spinners";
import PostCard from "./PostCard";

function PostList() {
    const { posts, isLoading: loading, error } = usePosts();
    return (
        <section className="flex flex-col gap-5">
            {error && <ErrorMessage />}
            {loading && <LoadingSpinner />}
            {!error && !loading && posts && (
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
function LoadingSpinner() {
    return (
        <div className="w-full flex justify-center justify-items-center items-center mt-32">
            <ClipLoader color="#fa9246" />
        </div>
    );
}
function ErrorMessage() {
    return (
        <div className="w-full flex justify-center justify-items-center items-center">⚠️Error</div>
    );
}
export default PostList;

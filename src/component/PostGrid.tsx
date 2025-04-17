import { SimplePost } from "@/model/post";
import { ClipLoader } from "react-spinners";
import useSWR from "swr";
import PostGridCard from "./PostGridCard";

type Props = {
    username: string;
    query: string;
};

export default function PostGrid({ username, query }: Props) {
    const {
        data: posts,
        isLoading,
        error,
    } = useSWR<SimplePost[]>(`/api/users/${username}/${query}`);
    console.log(posts);

    return (
        <div className="w-full text-center">
            {isLoading && <LoadingSpinner />}
            {error && <ErrorMessage />}

            <ul className="grid grid-cols-3 gap-4 py-4 px-8">
                {!error &&
                    !isLoading &&
                    posts &&
                    posts.map((post, index) => (
                        <li key={post.id}>
                            <PostGridCard post={post} priority={index < 6} />
                        </li>
                    ))}
            </ul>
        </div>
    );
}
function LoadingSpinner() {
    return (
        <div className="w-full flex justify-center justify-items-center items-center">
            <ClipLoader color="#fa9246" />
        </div>
    );
}
function ErrorMessage() {
    return (
        <div className="w-full flex justify-center justify-items-center items-center">⚠️Error</div>
    );
}

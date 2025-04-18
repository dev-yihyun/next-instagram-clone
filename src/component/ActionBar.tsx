import useMe from "@/hook/me";
import usePosts from "@/hook/posts";
import { SimplePost } from "@/model/post";
import { format } from "timeago.js";
import BookmarkFillIcon from "./ui/icons/BookmarkFillIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import HeartFillIcon from "./ui/icons/HeartFillIcon";
import HeartIcon from "./ui/icons/HeartIcon";
import ToggleButton from "./ui/ToggleButton";
type Props = {
    post: SimplePost;
    children?: React.ReactNode;
};

export function parseDate(date: string) {
    return format(date);
}
export default function ActionBar({ post, children }: Props) {
    const { id, likes, createdAt } = post;
    const { user, setBookmark } = useMe();
    const { setLike } = usePosts();

    const liked = user ? likes.includes(user.username) : false;
    const bookmarked = user?.bookmarks.includes(id) ?? false;

    const handleLike = (like: boolean) => {
        user && setLike(post, user.username, like);
    };

    const handleBookmark = (bookmark: boolean) => {
        user && setBookmark(id, bookmark);
    };
    return (
        <>
            <div className="flex justify-between my-2 px-4 text-2xl">
                <ToggleButton
                    toggled={liked}
                    onToggle={handleLike}
                    onIcon={<HeartFillIcon />}
                    offIcon={<HeartIcon />}
                />
                <ToggleButton
                    toggled={bookmarked}
                    onToggle={handleBookmark}
                    onIcon={<BookmarkFillIcon />}
                    offIcon={<BookmarkIcon />}
                />
            </div>
            <p className="text-sm font-bold  my-2 px-4">{`${likes?.length ?? 0} ${
                likes?.length > 1 ? "likes" : "like"
            }`}</p>
            <div className="px-4 py-1">
                {children}
                <div className="text-xs text-neutral-500 uppercase my-2">
                    {parseDate(createdAt)}
                </div>
            </div>
        </>
    );
}

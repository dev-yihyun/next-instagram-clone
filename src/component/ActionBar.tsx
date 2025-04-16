import { format } from "timeago.js";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import HeartIcon from "./ui/icons/HeartIcon";
type Props = {
    likes: string[];
    username: string;
    createdAt: string;
    text?: string;
};

export function parseDate(date: string) {
    return format(date);
}
export default function ActionBar({ likes, username, text, createdAt }: Props) {
    return (
        <>
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
            </div>
        </>
    );
}

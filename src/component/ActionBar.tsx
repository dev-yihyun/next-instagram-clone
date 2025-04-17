import { useState } from "react";
import { format } from "timeago.js";
import BookmarkFillIcon from "./ui/icons/BookmarkFillIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import HeartFillIcon from "./ui/icons/HeartFillIcon";
import HeartIcon from "./ui/icons/HeartIcon";
import ToggleButton from "./ui/ToggleButton";
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
    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    return (
        <>
            <div className="flex justify-between my-2 px-4 text-2xl">
                <ToggleButton
                    toggled={liked}
                    onToggle={setLiked}
                    onIcon={<HeartFillIcon />}
                    offIcon={<HeartIcon />}
                />
                <ToggleButton
                    toggled={bookmarked}
                    onToggle={setBookmarked}
                    onIcon={<BookmarkFillIcon />}
                    offIcon={<BookmarkIcon />}
                />
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

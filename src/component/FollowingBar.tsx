"use client";

import Link from "next/link";
import { ClipLoader } from "react-spinners";
import useSWR from "swr";
import ProfileImage from "./ProfileImage";

// following 목록이 없는 경우
// 적당히 있는 경우
// 많은 경우
// 왼쪽에서 부터 생성하기
type User = {
    image: string;
    username: string;
};

function FollowingBar() {
    const { data, error, isLoading } = useSWR(`/api/me`);
    const followings = data?.following ?? [];

    return (
        <>
            <div className="border rounded-lg border-gray-300 w-full flex justify-items-start items-center p-4 shadow-sm shadow-neutral-300 h-32 gap-5">
                {error && <ErrorMessage />}
                {isLoading && <LoadingSpinner />}
                {!error && !isLoading && <FollowingList followings={followings} />}
            </div>
        </>
    );
}

function ErrorMessage() {
    return (
        <div className="w-full flex justify-center justify-items-center items-center">⚠️Error</div>
    );
}

function LoadingSpinner() {
    return (
        <div className="w-full flex justify-center justify-items-center items-center">
            <ClipLoader color="#fa9246" />
        </div>
    );
}

function FollowingList({ followings }: { followings: User[] }) {
    if (followings.length === 0) {
        return <p className="text-gray-400">No followings yet.</p>;
    }
    return followings.map((user) => (
        <div key={user?.username} className="flex flex-col items-center min-w-[72px]">
            <Link href={`/user/${user?.username}`}>
                <ProfileImage imagesize="large" imageurl={user?.image} />
            </Link>
            <p className="mt-1 text-sm">{user?.username}</p>
        </div>
    ));
}

export default FollowingBar;

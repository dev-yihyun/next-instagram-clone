"use client";

import { ClipLoader } from "react-spinners";
import useSWR from "swr";
import ProfileImage from "./ProfileImage";

// 1. 클라이언트 컴포넌트에서 백엔드에게 api/me 사용자의 정보를 얻어옴
// 2. 백엔드에서는 현재 로그인된 사용자의 세션 정보를 이용해서
// 3. 백엔드에서 사용자의 상세 정보를 Sanity에서 가지고 옴 (followings)
// 4. 여기에서, 클라이언트 컴포넌트에서 followings의 정보를 UI에 보여줌
// (image,username)

// following 목록이 없는 경우
// 적당히 있는 경우
// 많은 경우
// 왼쪽에서 부터 생성하기
function FollowingBar() {
    const { data, error, isLoading } = useSWR(`/api/me`);
    const followings = data?.following;
    console.log(followings);

    return (
        <>
            <div className="border rounded-lg border-gray-300 w-full flex justify-items-start items-center p-4 shadow-sm shadow-neutral-300 h-32 gap-5">
                {error ? (
                    <div className="w-full flex justify-center justify-items-center items-center">
                        ⚠️Error
                    </div>
                ) : isLoading ? (
                    <div className="w-full flex justify-center justify-items-center items-center">
                        <ClipLoader color="#fa9246" />
                    </div>
                ) : (
                    followings?.map((user: { image: string; username: string }) => (
                        <div key={user?.username}>
                            <ProfileImage imagesize="large" imageurl={user?.image} />
                            <p className="mt-1">{user?.username}</p>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

export default FollowingBar;

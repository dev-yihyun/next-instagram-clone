"use client";

import useSWR from "swr";

// 1. 클라이언트 컴포넌트에서 백엔드에게 api/me 사용자의 정보를 얻어옴
// 2. 백엔드에서는 현재 로그인된 사용자의 세션 정보를 이용해서
// 3. 백엔드에서 사용자의 상세 정보를 Sanity에서 가지고 옴 (followings)
// 4. 여기에서, 클라이언트 컴포넌트에서 followings의 정보를 UI에 보여줌
// (image,username)
function FollowingBar() {
    const { data, error, isLoading } = useSWR(`/api/hello`);
    console.log("###", data);
    return (
        <>
            <div className="border rounded-lg border-gray-300 w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 h-32">
                FollowingBar
            </div>
        </>
    );
}

export default FollowingBar;

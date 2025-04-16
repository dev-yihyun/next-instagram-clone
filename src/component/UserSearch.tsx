"use client";

import { ProfileUser } from "@/model/user";
import { FormEvent, useState } from "react";
import { ClipLoader } from "react-spinners";
import useSWR from "swr";

export default function UserSearch() {
    // /api/search/${keyword}
    // 검색하는 keyword가 있다면 /api/search/${keyword} ->유저 네임이나, 네임
    // 검색하는 keyword가 없다면 /api/search -> 전체유지

    const [keyword, setKeyword] = useState("");
    const { data: users, isLoading, error } = useSWR<ProfileUser[]>(`/api/search/${keyword}`);
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
    };
    return (
        <>
            <form className="w-full mb-4" onSubmit={onSubmit}>
                <input
                    className="w-full text-xl p-3 outline-none border border-gray-400"
                    type="text"
                    autoFocus
                    placeholder="Search for a username or name"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
            </form>

            {error && <p>무언가가 잘못 되었음 😜</p>}
            {isLoading && <LoadingSpinner />}
            {!isLoading && !error && users?.length === 0 && <p>찾는 사용자가 없음 😭</p>}
            <ul className="w-full p-4">
                {users &&
                    users.map((user) => (
                        <li key={user.username}>
                            <p>{user.username}</p>
                        </li>
                    ))}
            </ul>
        </>
    );
}
function LoadingSpinner() {
    return (
        <div className="w-full flex justify-center justify-items-center items-center">
            <ClipLoader color="#fa9246" />
        </div>
    );
}

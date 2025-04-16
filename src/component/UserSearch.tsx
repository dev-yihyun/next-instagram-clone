"use client";

import useDebounce from "@/hook/debounce";
import { SearchUser } from "@/model/user";
import { FormEvent, useState } from "react";
import { ClipLoader } from "react-spinners";
import useSWR from "swr";
import UserCard from "./UserCard";

export default function UserSearch() {
    const [keyword, setKeyword] = useState("");
    const debouncedKeyword = useDebounce(keyword);
    const {
        data: users,
        isLoading,
        error,
    } = useSWR<SearchUser[]>(`/api/search/${debouncedKeyword}`);
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
                            <UserCard user={user} />
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

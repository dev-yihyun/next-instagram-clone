"use client";

import { useState } from "react";
import useSWR from "swr";

export default function UserSearch() {
    // /api/search/${keyword}
    // 검색하는 keyword가 있다면 /api/search/${keyword} ->유저 네임이나, 네임
    // 검색하는 keyword가 없다면 /api/search -> 전체유지

    const [keyword, setKeyword] = useState("");
    const { data: users, isLoading, error } = useSWR(`/api/search/${keyword}`);
    console.log(users);
    return <></>;
}

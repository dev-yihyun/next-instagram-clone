"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { CiSquarePlus } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import ProfileImage from "./ProfileImage";

function Navbar() {
    const { data: session } = useSession();
    const user = session?.user;
    return (
        <>
            <div className="border-b border-gray-500 flex flex-row justify-between justify-items-center items-center p-4 mb-5 ">
                <h1 className="text-4xl font-bold p-1 rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 bg-clip-text text-transparent">
                    <Link href="/">Instagram</Link>
                </h1>
                <div className=" flex flex-row gap-4 text-2xl justify-items-center items-center">
                    <Link href="/">
                        <FaHome />
                    </Link>
                    <Link href="/search">
                        <IoSearch />
                    </Link>
                    <Link href="/new">
                        <CiSquarePlus />
                    </Link>
                    {session && (
                        <Link href={`/user/${user?.username}`}>
                            <ProfileImage imageurl={user?.image ?? ""} imagesize="small" />
                        </Link>
                    )}
                    <Link href="/auth">
                        <div className=" flex items-center p-2 rounded-md bg-blue-500 hover:bg-blue-700">
                            {session ? (
                                <>
                                    <button
                                        className="text-base font-bold text-white cursor-pointer"
                                        onClick={() => signOut()}
                                    >
                                        Sign out
                                    </button>
                                </>
                            ) : (
                                <button
                                    className="text-base font-bold text-white cursor-pointer"
                                    onClick={() => signIn()}
                                >
                                    Sign in
                                </button>
                            )}
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}
export default Navbar;

"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { CiSquarePlus } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

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
                        <div className="bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 w-[50px] h-[50px] flex items-center justify-center rounded-full aspect-square">
                            <img
                                alt="user profile"
                                src={user?.image ?? ""}
                                className="w-[40px] h-[40px] rounded-full"
                                referrerPolicy="no-referrer"
                            />
                        </div>
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

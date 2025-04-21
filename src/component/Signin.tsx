"use client";

import { ClientSafeProvider, signIn } from "next-auth/react";
type Props = {
    providers: Record<string, ClientSafeProvider>;
    callbackUrl: string;
};

function Signin({ providers, callbackUrl }: Props) {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                {Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                        <button
                            className="border border-gray-900 rounded-md text-xl  font-bold p-5
                            
                            shadow hover:shadow-lg transition-shadow duration-200
                            cursor-pointer"
                            onClick={() => signIn(provider.id, { callbackUrl })}
                        >
                            Sign in with {provider.name}
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Signin;

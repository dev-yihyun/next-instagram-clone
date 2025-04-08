"use client";

import { ClientSafeProvider, signIn } from "next-auth/react";

type Props = {
    providers: Record<string, ClientSafeProvider>;
    callbackUrl: string;
};

function Signin({ providers, callbackUrl }: Props) {
    return (
        <>
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button onClick={() => signIn(provider.id, { callbackUrl })}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </>
    );
}

export default Signin;

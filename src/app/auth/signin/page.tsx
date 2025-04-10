import Signin from "@/component/Signin";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";

type Props = {
    searchParams: {
        callbackUrl: string;
    };
};

// server component
async function SigninPage({ searchParams: { callbackUrl } }: Props) {
    const session = await getServerSession(authOptions);
    if (session) {
        return { redirect: { destination: "/" } };
    }
    const providers = (await getProviders()) ?? {};
    //getProvider가 null 이면
    return (
        <>
            <Signin providers={providers} callbackUrl={callbackUrl ?? "/"} />
        </>
    );
}

export default SigninPage;
//npx @next/codemod@canary next-async-request-api .

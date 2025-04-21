import Signin from "@/component/Signin";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";

type Props = {
    searchParams: {
        callbackUrl: string;
    };
};

export const metadata: Metadata = {
    title: "Signin",
    description: "Signup or Login to Instagram",
};
async function SigninPage({ searchParams: { callbackUrl } }: Props) {
    const session = await getServerSession(authOptions);
    if (session) {
        return { redirect: { destination: "/" } };
    }
    const providers = (await getProviders()) ?? {};
    return (
        <>
            <Signin providers={providers} callbackUrl={callbackUrl ?? "/"} />
        </>
    );
}

export default SigninPage;

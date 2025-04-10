import { redirect } from "next/navigation";

export default function AuthPage() {
    redirect("/");
    return <h1>Redirecting...</h1>;
}

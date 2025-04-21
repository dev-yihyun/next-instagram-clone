import Navbar from "@/component/Navbar";
import AuthContext from "@/context/AuthContext";
import SWRConfigContext from "@/context/SWRConfigContext";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "Next로 만드는 Instagram",
        template: "Next로 만드는 Instagram | %s",
    },
    description: "Next로 만드는 Instagram",
    icons: {
        icon: "/favicon.icon",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="flex flex-col w-full max-w-screen-2xl px-10 mx-auto bg-neutral-50">
                <AuthContext>
                    <header>
                        <Navbar />
                    </header>

                    <main>
                        <SWRConfigContext>{children}</SWRConfigContext>
                    </main>
                </AuthContext>
                <div id="portal" />
            </body>
        </html>
    );
}

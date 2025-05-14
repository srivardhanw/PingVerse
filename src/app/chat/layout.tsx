import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import '../globals.css'
import { ChatProvider } from "./contexts/ChatProvider";

import {
    ClerkProvider
} from '@clerk/nextjs'

const montserrat = Nunito_Sans({
    weight: '600',
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "PingVerse",
    description: "Secure Chatapp for your privacy",
};

function ChatLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
    return (
        <ChatProvider>
            <div >
                {children}
            </div>
        </ChatProvider>
    )
}

export default ChatLayout;
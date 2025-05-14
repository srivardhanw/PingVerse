import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${montserrat.className} antialiased`}>
          <main>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}

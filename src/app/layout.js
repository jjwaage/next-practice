// src/app/layout.js

"use client"; // Move this to the top, before imports

import { metadata } from './metadata';  // Import metadata from metadata.js

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <header className="flex justify-between items-center m-2">
            <SignedOut>
              <div className="flex items-center gap-4">
                <SignInButton>
                  <Button className="bg-foreground text-white hover:bg-black hover:text-white font-bold">
                    <span className="cursor-pointer">Sign In</span>
                  </Button>
                </SignInButton>
                <Link href="/" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
                  <Home className="w-7 h-7" />
                </Link>
              </div>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center gap-4">
                <UserButton />
                <Link href="/" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
                  <Home className="w-7 h-7" />
                </Link>
              </div>
              <SignOutButton>
                <Button className="ml-auto bg-foreground text-white hover:bg-black hover:text-white font-bold">
                  <span className="cursor-pointer">Sign Out</span>
                </Button>
              </SignOutButton>
            </SignedIn>
          </header>

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

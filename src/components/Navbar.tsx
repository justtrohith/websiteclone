"use client";

import ThemeSwitch from "@/components/ThemeSwitch";
import { signIn, signOut, useSession } from "next-auth/react";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 shadow-md z-50">
      
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white tracking-wide hover:text-gray-600 dark:hover:text-gray-400 transition duration-300">
          Zyne
        </h1>
      </div>

      
      <div className="flex items-center space-x-6">
        
        <ThemeSwitch />

        
        {session ? (
          <div className="flex items-center space-x-4">
            <Image
              src={session.user?.image || "/default-avatar.png"} // Fallback if no image
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full border-2 border-gray-300 dark:border-gray-600"
            />
            <button
              onClick={() => signOut()}
              className="flex items-center space-x-2 text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition duration-300"
            >
              <FiGithub className="mr-1" />
              <span>Sign Out</span>
            </button>
          </div>
        ) : (
          <button
            onClick={() => signIn("github")}
            className="flex items-center space-x-2 text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition duration-300"
          >
            <FiGithub className="mr-1" />
            <span>Sign In with GitHub</span>
          </button>
        )}
      </div>
    </nav>
  );
}

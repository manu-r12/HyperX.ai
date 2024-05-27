"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { FaRegUser } from "react-icons/fa6";


interface SignOutButtonProps {
    imageUrl?: string | null 
}


const SignOutButton: React.FC<SignOutButtonProps> = ({imageUrl}) => {
  return (
    <button
      className="px-4 py-2 text-sm text-white flex items-center gap-2"
      onClick={() => signOut({ callbackUrl: "/" })}
      type="button"
    >
      Sign Out
      <div className="relative rounded-full overflow-hidden h-[39px] w-[39px] object-fill">
       {imageUrl ? <Image alt="profile-github" fill src={imageUrl}/> : <FaRegUser/>} 
      </div>
    </button>
  );
};

export default SignOutButton;
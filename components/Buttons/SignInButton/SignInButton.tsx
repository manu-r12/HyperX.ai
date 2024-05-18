"use client";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

const SignInButton = () => {
  return (
    <div className=" mt-20 w-full flex items-center justify-center">
        <button
        style={{border: "1px solid #0FC06B"}}
        className="bg-black rounded-md px-4 py-4 text-white flex items-center gap-3"
        onClick={() => signIn("github", { callbackUrl: "/" })}
        type="button"
        >
        Sign In With GitHub <FaGithub size={20}/>
        </button>
    </div>
  );
};

export default SignInButton;
// "use client";

import { handleGoogleLogin } from "@/lib/action";
import GoogleButton from "react-google-button";
import { FcGoogle } from "react-icons/fc";

export default function GoogleLoginButton() {
  return (
    <div>
      <div className="flex flex-row cursor-pointer rounded-2xl ">
        <form
          action={handleGoogleLogin}
          className="px-28  cursor-pointer flex items-center justify-center bg-gray-900 rounded-xl  hover:bg-gray-800 "
        >
          <FcGoogle className="text-2xl" />
          <button className=" px-3  py-2 text-gray-200 text-semibold">
            Google
          </button>
        </form>
      </div>
    </div>
  );
}

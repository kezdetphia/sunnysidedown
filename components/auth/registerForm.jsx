"use client";

import Link from "next/link";
import GoogleLoginButton from "./googleLoginButton";
import { addUserWithCredentials } from "@/lib/action";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [state, formAction] = useFormState(addUserWithCredentials, undefined);
  const [isLoading, setIsloading] = useState(false);
  const [showError, setShowError] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (state && !state.error) {
      router.push("/login");
    } else if (state && state.error) {
      setIsloading(false);
      setShowError(true);
      const timeOut = setTimeout(() => {
        setShowError(false);
      }, 2000);
      return () => clearTimeout(timeOut);
    }
  }, [state, router]);

  //TODO: change Regsiter button text to Loading while loading

  return (
    <div className="py-10 px-10 bg-gray-100 rounded-3xl border shadow-lg flex flex-col justify-center items-center space-y-5 w-[400px] ">
      <h3 className="text-gray-800 font-semibold">Register 🙌</h3>

      <form action={formAction} className="flex flex-col space-y-4 w-full ">
        <input
          className="px-1 py-2 rounded-lg border  border-gray-200 shadow-md placeholder-gray-300 text-sm text-gray-700  "
          type="text"
          name="username"
          placeholder="Jon Doe"
        />
        <input
          className="px-1 py-2 rounded-lg border  border-gray-200 shadow-md placeholder-gray-300 text-sm text-gray-700  "
          type="email"
          name="email"
          placeholder="jon.doe@example.com"
        />

        <input
          className="px-1 py-2 rounded-lg border  border-gray-200 shadow-md placeholder-gray-300 text-sm text-gray-700 "
          type="password"
          name="password"
          placeholder="*********"
        />
        <input
          className="px-1 py-2 rounded-lg border  border-gray-200 shadow-md placeholder-gray-300 text-sm text-gray-700 "
          type="password"
          name="passwordRepeat"
          placeholder="*********"
        />

        <button
          className="bg-gray-900 text-gray-200 rounded-xl py-2 hover:bg-gray-800 cursos-pointer"
          onClick={() => setIsloading(true)}
        >
          {isLoading ? "Registering..." : "Register"}
        </button>
      </form>

      <GoogleLoginButton />

      <div className="flex justify-center">
        {state && state.error && showError && (
          <p className="text-red-600">{state.error}</p>
        )}
      </div>

      <Link
        href="/login"
        className="text-gray-900 hover:text-gray-700 flex justify-center "
      >
        Have an account? <b className="px-2">Login</b>
      </Link>
    </div>
  );
}

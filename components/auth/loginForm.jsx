"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import GoogleLoginButton from "./googleLoginButton";
import { useFormState } from "react-dom";
import { loginWithCredentials } from "@/lib/action";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function LoginForm() {
  const [state, formAction] = useFormState(loginWithCredentials, undefined);
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.data?.user) {
      router.push("/");
    }
    if (state && !state.error) {
      router.push("/");
    }
  }, [state, session, router]);

  return (
    <div className="py-10 px-10 bg-gray-100 rounded-3xl border shadow-lg flex flex-col justify-center items-center space-y-5 w-[400px] ">
      <h3 className="text-gray-800 font-semibold ">Login 🙌</h3>
      <form action={formAction} className="flex flex-col space-y-4 w-full ">
        <input
          className="px-1 py-2 rounded-lg border  border-gray-200 shadow-md placeholder-gray-300 text-sm text-gray-700  "
          type="text"
          name="username"
          placeholder="Jon Doe"
        />

        <input
          className="px-1 py-2 rounded-lg border  border-gray-200 shadow-md placeholder-gray-300 text-sm text-gray-700 "
          type="password"
          name="password"
          placeholder="*********"
        />

        <button className="bg-gray-900 text-gray-200 rounded-xl py-2 hover:bg-gray-800 cursos-pointer text-semibold">
          Login{" "}
        </button>
      </form>

      <GoogleLoginButton />

      <div className="flex justify-center">
        {state && state.error && <p className="text-red-600">{state.error}</p>}
      </div>

      <Link
        href="/register"
        className="text-gray-800 flex justify-center hover:text-gray-600 "
      >
        Don&apost have an account? <b className="px-2">Register</b>
      </Link>
    </div>
  );
}

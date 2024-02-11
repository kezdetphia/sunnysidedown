"use client";
import Link from "next/link";
import React from "react";

export default function LoginForm() {
  return (
    <form className="flex flex-col items-center gap-6">
      <input
        className="p-4 bg-gray-100 text-black rounded-md"
        type="text"
        placeholder="username"
        name="username"
      />
      <input
        className="p-4 bg-gray-100 text-black rounded-md"
        type="password"
        placeholder="password"
        name="password"
      />
      <button className="p-4 bg-blue-500 text-white font-semibold rounded-md">
        Login
      </button>
      {/* {state.error && <p className="text-red-500">{state.error}</p>} */}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
}

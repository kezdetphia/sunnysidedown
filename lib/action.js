"use server";
import { signIn, signOut } from "./auth";

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const handleGoogleLogin = async () => {
  console.log("called handleGoogleLogin");
  await signIn("google");
};

import { signIn, signOut } from "./auth";

export const handleLogout = async () => {
  "use server";
  await signOut();
};


export const handleGoogleLogin = async()=>{
  "use server";
  await signIn("google");
}
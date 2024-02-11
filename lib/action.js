import { signOut } from "./auth";

export const handleLogout = async () => {
  "use server";
  await signOut();
};

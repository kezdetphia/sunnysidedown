import LoginForm from "@/components/auth/loginForm";
import { handleGoogleLogin, handleLogout } from "@/lib/action";
import { auth } from "@/lib/auth";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}

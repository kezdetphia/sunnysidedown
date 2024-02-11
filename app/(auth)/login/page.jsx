import LoginForm from "@/components/auth/loginForm";
import { handleGoogleLogin, handleLogout } from "@/lib/action";
import { auth } from "@/lib/auth";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className=" flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded p-6">
        <form action={handleGoogleLogin}>
          <button className="w-full p-3 bg-white text-black font-semibold rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Login With Google
          </button>
          <LoginForm />
        </form>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import GoogleLoginButton from "./googleLoginButton";
import { addUserWithCredentials } from "@/lib/action";

export default function RegisterForm() {
  return (
    <div className="py-10 px-10 bg-gray-100 rounded-3xl border shadow-lg flex flex-col justify-center items-center space-y-5 w-[400px] ">
      <h3 className="text-gray-500 font-semibold">Register 🙌</h3>

      <form
        action={addUserWithCredentials}
        className="flex flex-col space-y-4 w-full "
      >
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

        <button className="bg-gray-900 text-gray-200 rounded-xl py-2 hover:bg-black cursos-pointer">
          Register{" "}
        </button>
      </form>

      <GoogleLoginButton />

      <Link href="/login" className="text-gray-500 flex justify-center ">
        Have an account? <b className="px-2">Login</b>
      </Link>
    </div>
  );
}

//     <div className="py-10 px-10 bg-gray-100 rounded-3xl border shadow-lg flex flex-col justify-center items-center space-y-5 w-[400px]">
//       <h3 className="text-gray-500 font-semibold">Welcome</h3>

//       <form className="flex flex-col space-y-3 ">
//         <input
//           className="px-1 py-2 rounded-lg border  border-gray-200 shadow-md placeholder-gray-300 text-sm text-gray-700  "
//           type="text"
//           name="username"
//           placeholder="username"
//         />
//         <input
//           className="px-1 py-2 rounded-lg border  border-gray-200 shadow-md placeholder-gray-300 text-sm text-gray-700 "
//           type="email"
//           name="email"
//           placeholder="email"
//         />
//         <input
//           className="px-1 py-2 rounded-lg border  border-gray-200 shadow-md placeholder-gray-300 text-sm text-gray-700 "
//           type="password"
//           name="password"
//           placeholder="password"
//         />
//         <input
//           className="px-1 py-2 rounded-lg border  border-gray-200 shadow-md placeholder-gray-300 text-sm text-gray-700 "
//           type="password"
//           name="passwordRepeat"
//           placeholder="password"
//         />
//         <button className="bg-gray-900 rounded-xl py-2 hover:bg-black cursos-pointer">
//           Register
//         </button>
//         <Link href="/login" className="text-gray-500 ">
//           Have an account? <b>Login</b>
//         </Link>
//       </form>
//       <GoogleLoginButton />
//     </div>
//   );
// }

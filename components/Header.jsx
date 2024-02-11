import { auth, signIn, signOut } from "@/lib/auth";
import Link from "next/link";

export default async function Header() {
  const session = await auth();
  console.log({ sessionInHeader: session });

  return (
    <div>
      <nav>
        <h1>My App</h1>

        {session?.user ? (
          <div>{session.user.name}</div>
        ) : (
          <Link href="api/auth/signin">
            <button>Sign In</button>
          </Link>
        )}
      </nav>
    </div>
  );
}

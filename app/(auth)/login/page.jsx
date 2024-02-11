import { handleLogout } from "@/lib/action";
import { auth } from "@/lib/auth";

export default async function LoginPage() {
  const session = await auth();
  console.log({ sessionInLoginPage: session });

  return (
    <div className="flex flex-col items-center  ">
      <h1>loginpage</h1>

      {session ? (
        <div>
          <div className="flex">
            <h1>you are logged in :</h1>
            <h2>{session.user.name}</h2>
          </div>
        </div>
      ) : (
        <div>
          <h1>you are not logged in</h1>
        </div>
      )}
    </div>
  );
}

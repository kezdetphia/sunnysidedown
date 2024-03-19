import { deleteUser, getUsers } from "@/lib/data/userData";
import DeleteButton from "../deleteButton";

export default async function AdminUserHandling() {
  const users = await getUsers();

  return (
    <div className="md:pt-20  items-center xl:w-1/2    ">
      <div className=" bg-neutral-900 sm:w-4/5 max-w-4xl w-screen mx-auto p-8 border-1 rounded-lg shadow-lg shadow-neutral-800 text-gray-900">
        <h1 className="text-3xl  font-bold mb-8 text-neutral-300 text-start">
          Users
        </h1>

        <div className="xl:h-[890px] h-[490px] overflow-y-auto space-y-4">
          {users.map((user) => (
            <div
              className="flex justify-between items-center border border-1 border-neutral-400 rounded-xl shadow-md shadow-black py-2 px-3 "
              key={user.id}
            >
              <span className="text-neutral-400">{user.username}</span>
              <form action={deleteUser}>
                <input type="hidden" name="id" value={user.id} />
                <DeleteButton props={user.id} />
              </form>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

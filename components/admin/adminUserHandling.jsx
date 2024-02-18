import { deleteUser, getUsers } from "@/lib/data/userData";
import DeleteButton from "../deleteButton";

export default async function AdminUserHandling() {
  const users = await getUsers();

  return (
    <div className="md:pt-20  items-center xl:w-1/2   ">
      <div className=" bg-gray-600 w-4/5 max-w-4xl mx-auto p-8 border-1 rounded-lg shadow-2xl shadow-gray-900 text-gray-900">
        <h1 className="text-3xl  font-bold mb-8 text-gray-300 text-center">
          Users
        </h1>

        <div className="xl:h-[890px] h-[490px] overflow-y-auto space-y-4">
          {users.map((user) => (
            <div
              className="flex justify-between items-center border border-1 border-gray-300 rounded-md shadow-md shadow-gray-400 py-2 px-3 "
              key={user.id}
            >
              <span className="text-gray-400">{user.username}</span>
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

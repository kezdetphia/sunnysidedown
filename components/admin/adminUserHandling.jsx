import { deleteUser, getUsers } from "@/lib/data/userData";
import DeleteButton from "../deleteButton";

export default async function AdminUserHandling() {
  const users = await getUsers();

  return (
    <div>
      {users.map((user) => (
        <div key={user._id} className=" md:pt-20 pt-10  items-center ">
          <div className="p-8 ">
            <h1 className="text-2xl font-bold pb-3">Users</h1>
            <div className="flex gap-x-2">
              <h1 className="text-gray-800">{user.username}</h1>
              <form action={deleteUser}>
                <DeleteButton props={user._id} />
                <input type="hidden" name="id" value={user.id} />
              </form>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

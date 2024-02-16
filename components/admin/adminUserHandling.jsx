import { deleteUser, getUsers } from "@/lib/data/userData";
import DeleteButton from "../deleteButton";

export default async function AdminUserHandling() {
  const users = await getUsers();

  return (
    <div className=" md:pt-28 pt-10  items-center ">
      <h1 className="text-2xl font-bold pb-8 ">Users</h1>
      {users.map((user) => (
        <div key={user._id}>
          <div className=" ">
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

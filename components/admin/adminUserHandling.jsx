import { deleteUser, getUsers } from "@/lib/data/userData";
import DeleteButton from "../deleteButton";

export default async function AdminUserHandling() {
  const users = await getUsers();

  return (
    <div>
      {users.map((user) => (
        <div key={user._id}>
          <h1 className="text-gray-800">{user.username}</h1>
          <form action={deleteUser}>
            <DeleteButton props={user._id} />
            <input type="hidden" name="id" value={user.id} />
          </form>
        </div>
      ))}
    </div>
  );
}

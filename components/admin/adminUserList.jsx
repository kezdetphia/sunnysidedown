

export default function AdminUserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <div key={user._id}>
          <h1 className="text-white">{user.username}</h1>
        </div>
      ))}
    </div>
  );
}

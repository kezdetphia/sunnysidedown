import AddPostForm from "@/components/admin/addPost/addPostForm";
import { auth } from "@/lib/auth";
export default async function AdminPage() {
  const session = await auth();
  const userId = session.user.id;
  console.log({ SessioninAddPostForm: session });

  return (
    <div>
      <h1>Admin Page</h1>
      <AddPostForm userId={userId} />
    </div>
  );
}

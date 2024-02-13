import Addpost from "@/components/admin/addPost";
// import AdminAddPostForm from "@/components/admin/adminAddPostForm";
// import AdminPostHandling from "@/components/admin/adminPostHandling";
// import AdminUserList from "@/components/admin/AdminUserList";
import { auth } from "@/lib/auth";
import { getPosts } from "@/lib/data/postData";
import { getUsers } from "@/lib/data/userData";
export default async function AdminPage() {
  const session = await auth();
  const userId = session.user.id;
  // const posts = await getPosts();

  const users = await getUsers();
  console.log(users);

  return (
    <div className="flex justify-center ">
      <div className="max-w-4xl w-full   ">
        {/* <AdminAddPostForm userId={userId} /> */}
        <Addpost userId={userId} />

        {/* 
      <AdminPostHandling posts={posts} />
      <AdminUserList users={users} /> */}
      </div>
    </div>
  );
}

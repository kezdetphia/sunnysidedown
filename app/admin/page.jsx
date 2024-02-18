import AdminAddPostForm from "@/components/admin/adminAddPostForm";
import AdminPostHandling from "@/components/admin/adminPostHandling";
import AdminUserHandling from "@/components/admin/adminUserHandling";
import { auth } from "@/lib/auth";
export default async function AdminPage() {
  const session = await auth();
  const userId = session?.user.id;

  return (
    <div className="lg:flex bg-gray-800 pb-20   ">
      <div className=" w-full   ">
        <AdminAddPostForm userId={userId} />
      </div>
      <div className="xl:flex w-full  ">
        <AdminUserHandling />

        <AdminPostHandling />
      </div>
    </div>
  );
}

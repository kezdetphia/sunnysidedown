import AdminAddPostForm from "@/components/admin/adminAddPostForm";
import AdminPostHandling from "@/components/admin/adminPostHandling";
import AdminUserHandling from "@/components/admin/adminUserHandling";
import { auth } from "@/lib/auth";
export default async function AdminPage() {
  const session = await auth();
  const userId = session?.user.id;

  return (
    <div className="flex justify-center ">
      <div className="max-w-4xl w-full   ">
        <AdminAddPostForm userId={userId} />
        <AdminUserHandling />

        <AdminPostHandling />
      </div>
    </div>
  );
}

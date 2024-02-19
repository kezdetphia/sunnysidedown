import AdminAddPostForm from "@/components/admin/adminAddPostForm";
import AdminPostHandling from "@/components/admin/adminPostHandling";
import AdminUserHandling from "@/components/admin/adminUserHandling";
export default async function AdminPage() {

  return (
    <div className="lg:flex bg-gray-800 pb-20   ">
      <div className=" w-full   ">
        <AdminAddPostForm />
      </div>
      <div className="xl:flex w-full  ">
        <AdminUserHandling />

        <AdminPostHandling />
      </div>
    </div>
  );
}

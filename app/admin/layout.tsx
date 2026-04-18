import AdminSidebar from "@/components/admin-sidebar";
import type { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#06010d] text-white">
      <div className="mx-auto flex max-w-[1600px] gap-6 px-4 py-8 lg:px-10">
        <AdminSidebar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}

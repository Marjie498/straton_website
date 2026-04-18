import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-72 flex-col gap-4 border-r border-white/10 bg-[#070707]/95 px-6 py-8 text-white lg:flex">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.28em] text-white/50">Admin Panel</p>
        <h2 className="mt-3 text-2xl font-semibold">Straton</h2>
      </div>
      <nav className="flex flex-col gap-2 text-sm">
        <Link href="/admin/dashboard" className="block rounded-2xl px-4 py-3 transition hover:bg-white/5">
          Dashboard
        </Link>
        <Link href="/admin/interface-manager" className="block rounded-2xl px-4 py-3 transition hover:bg-white/5">
          Interface Manager
        </Link>
        <Link href="/admin/services-manager" className="block rounded-2xl px-4 py-3 transition hover:bg-white/5">
          Services Manager
        </Link>
        <Link href="/admin/team-manager" className="block rounded-2xl px-4 py-3 transition hover:bg-white/5">
          Team Manager
        </Link>
        <Link href="/admin/faq-manager" className="block rounded-2xl px-4 py-3 transition hover:bg-white/5">
          FAQ Manager
        </Link>
        <Link href="/admin/contact-personnel" className="block rounded-2xl px-4 py-3 transition hover:bg-white/5">
          Contact Personnel
        </Link>
        <Link href="/admin/contact-messages" className="block rounded-2xl px-4 py-3 transition hover:bg-white/5">
          Contact Messages
        </Link>
        <Link href="/admin/logs" className="block rounded-2xl px-4 py-3 transition hover:bg-white/5">
          Logs
        </Link>
        <Link href="/admin/users-profile" className="block rounded-2xl px-4 py-3 transition hover:bg-white/5">
          Users Profile
        </Link>
        <Link href="/login" className="mt-4 block rounded-2xl bg-white/5 px-4 py-3 text-white/90 transition hover:bg-white/10">
          Logout
        </Link>
      </nav>
    </aside>
  );
}

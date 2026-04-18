import Link from "next/link";

export default function AdminRootPage() {
  return (
    <main className="px-6 py-20 lg:px-10">
      <section className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-[#070707] p-10 text-center shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]">
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">Admin</p>
        <h1 className="mt-4 text-5xl font-bold text-white">Straton Admin Portal</h1>
        <p className="mt-4 text-white/70">Use the dashboard to manage site content, services, team members, FAQs, and inbound messages.</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="/admin/dashboard" className="inline-flex rounded-full bg-[#b22466] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#d33c81]">
            View Dashboard
          </Link>
          <Link href="/login" className="inline-flex rounded-full border border-white/10 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10">
            Admin Login
          </Link>
        </div>
      </section>
    </main>
  );
}

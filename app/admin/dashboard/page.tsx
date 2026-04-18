import Link from "next/link";
import { readData } from "@/lib/db";

async function getCounts() {
  const services = await readData<any>("services");
  const team = await readData<any>("team_members");
  const faqs = await readData<any>("faqs");
  const messages = await readData<any>("contact_messages");
  const users = await readData<any>("users");
  return { services, team, faqs, messages, users };
}

export default async function AdminDashboardPage() {
  const counts = await getCounts();

  return (
    <main className="px-6 py-20 lg:px-10">
      <section className="mx-auto max-w-6xl space-y-8 rounded-[2rem] border border-white/10 bg-[#070707] p-10 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Dashboard</p>
          <h1 className="text-5xl font-bold text-white">Admin control center</h1>
          <p className="max-w-3xl text-lg leading-8 text-white/70">Monitor content counts, messages, and quickly jump into managers for each section.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Services", value: counts.services.length, href: "/admin/services-manager" },
            { label: "Team Members", value: counts.team.length, href: "/admin/team-manager" },
            { label: "FAQs", value: counts.faqs.length, href: "/admin/faq-manager" },
            { label: "Messages", value: counts.messages.length, href: "/admin/contact-messages" },
            { label: "Users", value: counts.users.length, href: "/admin/users" },
          ].map((item) => (
            <Link key={item.label} href={item.href} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111111]/80 p-6 transition hover:border-[#b22466]/60">
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">{item.label}</p>
              <p className="mt-4 text-4xl font-bold text-white">{item.value}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

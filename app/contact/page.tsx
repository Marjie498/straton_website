import { readData } from "@/lib/db";

export default async function ContactPage() {
  const personnel = await readData<any>("contact_personnel");

  return (
    <main className="px-6 py-20 lg:px-10">
      <section className="mx-auto max-w-6xl space-y-8 rounded-[2rem] border border-white/10 bg-[#070707] p-10 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Contact Us</p>
          <h1 className="text-5xl font-bold text-white">Start a professional inquiry for creator support or chatter roles.</h1>
          <p className="max-w-3xl text-lg leading-8 text-white/70">Use the form below to let us know whether you are a creator seeking managed chat support or a chatter applying to join our team, and we’ll respond promptly.</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <form method="post" action="/api/contact" className="space-y-5 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]">
            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">Full Name</label>
              <input name="name" className="w-full rounded-2xl border border-white/10 bg-[#121212] px-4 py-3 text-sm text-white outline-none transition focus:border-[#b22466]" type="text" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">Email</label>
              <input name="email" className="w-full rounded-2xl border border-white/10 bg-[#121212] px-4 py-3 text-sm text-white outline-none transition focus:border-[#b22466]" type="email" placeholder="you@example.com" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">Company / Brand Name</label>
              <input name="company" className="w-full rounded-2xl border border-white/10 bg-[#121212] px-4 py-3 text-sm text-white outline-none transition focus:border-[#b22466]" type="text" placeholder="Brand or agency name" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">Service Interested In</label>
              <select name="service" className="w-full rounded-2xl border border-white/10 bg-[#121212] px-4 py-3 text-sm text-white outline-none transition focus:border-[#b22466]">
                <option>Audience Engagement Management</option>
                <option>Inbox and Communication Support</option>
                <option>Retention Strategy</option>
                <option>Client Communication Handling</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">Message</label>
              <textarea name="message" className="w-full rounded-2xl border border-white/10 bg-[#121212] px-4 py-3 text-sm text-white outline-none transition focus:border-[#b22466]" rows={4} placeholder="Tell us what you need"></textarea>
            </div>
            <button className="w-full rounded-full bg-[#b22466] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#d33c81]" type="submit">
              Send Inquiry
            </button>
          </form>

          <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]">
            <h2 className="text-3xl font-semibold text-white">Official contact</h2>
            <p className="text-white/70">Reach our team for agency setup, creator onboarding, or fan communication support.</p>
            <div className="grid gap-6">
              {personnel.map((person: any) => (
                <div key={person.id} className="rounded-[1.5rem] border border-white/10 bg-[#111111]/80 p-6">
                  <h3 className="text-xl font-semibold text-white">{person.name}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#d4a4c1]">{person.position}</p>
                  <p className="mt-4 text-white/70">Email: {person.email}</p>
                  <p className="text-white/70">Phone: {person.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

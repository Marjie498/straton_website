import { readData } from "@/lib/db";

export default async function AboutPage() {
  const content = await readData<any>("site_content");

  return (
    <main className="px-6 py-20 lg:px-10">
      <section className="mx-auto max-w-6xl space-y-8 rounded-[2rem] border border-white/10 bg-[#070707] p-10 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">About</p>
          <h1 className="text-5xl font-bold text-white">We are Stratton, the elite chat agency for high-value creators.</h1>
          <p className="max-w-3xl text-lg leading-8 text-white/70">Our team blends discreet communication, creator strategy, and premium engagement into a single agency operation.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold text-white">Our Story</h2>
            <p className="mt-4 text-white/70">Straton began as a creator-first agency focused on premium chats, fan retention, and professional conversation management.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold text-white">Our Mission</h2>
            <p className="mt-4 text-white/70">We help creators scale their fanbase while protecting privacy and maintaining a premium experience.</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold text-white">Our Vision</h3>
            <p className="mt-4 text-white/70">A world where creators build sustainable income through trusted fan engagement.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold text-white">What We Do</h3>
            <p className="mt-4 text-white/70">We manage inboxes, support bookings, and keep creator messaging consistent and professional.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold text-white">Why Clients Work With Us</h3>
            <p className="mt-4 text-white/70">They choose our agency for discretion, fast response, and a dedicated communication team.</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <h3 className="text-xl font-semibold text-white">Our Values</h3>
          <ul className="mt-4 space-y-3 text-white/70">
            <li>• Professional communication</li>
            <li>• Fan-first engagement</li>
            <li>• Discretion and trust</li>
            <li>• Growth through strategy</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

import { readData } from "@/lib/db";

export default async function InterfaceManagerPage() {
  const content = await readData<any>("site_content");

  return (
    <main className="px-6 py-20 lg:px-10">
      <section className="mx-auto max-w-6xl space-y-8 rounded-[2rem] border border-white/10 bg-[#070707] p-10 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Interface Manager</p>
          <h1 className="text-5xl font-bold text-white">Edit the public site content</h1>
          <p className="max-w-3xl text-lg leading-8 text-white/70">Update hero messaging and section copy that appears on the home page.</p>
        </div>

        <form method="post" action="/api/admin/site_content" className="space-y-6 rounded-[1.5rem] border border-white/10 bg-[#111111]/80 p-8">
          <input type="hidden" name="action" value="update" />
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-white/50">Hero headline</p>
              <input name="headline" defaultValue={content.hero.headline} className="mt-3 w-full rounded-2xl border border-white/10 bg-[#0f0b15] px-4 py-3 text-sm text-white outline-none transition focus:border-[#b22466]" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-white/50">Hero subheadline</p>
              <textarea name="subheadline" defaultValue={content.hero.subheadline} rows={3} className="mt-3 w-full rounded-2xl border border-white/10 bg-[#0f0b15] px-4 py-3 text-sm text-white outline-none transition focus:border-[#b22466]"></textarea>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-white/50">Primary CTA</p>
                <input name="ctaPrimary" defaultValue={content.hero.ctaPrimary} className="mt-3 w-full rounded-2xl border border-white/10 bg-[#0f0b15] px-4 py-3 text-sm text-white outline-none transition focus:border-[#b22466]" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-white/50">Secondary CTA</p>
                <input name="ctaSecondary" defaultValue={content.hero.ctaSecondary} className="mt-3 w-full rounded-2xl border border-white/10 bg-[#0f0b15] px-4 py-3 text-sm text-white outline-none transition focus:border-[#b22466]" />
              </div>
            </div>
          </div>

          <div className="space-y-6 rounded-[1.5rem] border border-white/10 bg-[#0c0811] p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-white/50">Intro section</p>
            <div>
              <label className="text-sm uppercase tracking-[0.24em] text-white/50">Title</label>
              <input name="introTitle" defaultValue={content.intro.title} className="mt-3 w-full rounded-2xl border border-white/10 bg-[#0f0b15] px-4 py-3 text-sm text-white outline-none transition focus:border-[#b22466]" />
            </div>
            <div>
              <label className="text-sm uppercase tracking-[0.24em] text-white/50">Description</label>
              <textarea name="introDescription" defaultValue={content.intro.description} rows={4} className="mt-3 w-full rounded-2xl border border-white/10 bg-[#0f0b15] px-4 py-3 text-sm text-white outline-none transition focus:border-[#b22466]"></textarea>
            </div>
          </div>

          <button type="submit" className="inline-flex rounded-full bg-[#b22466] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#d33c81]">
            Save Interface Content
          </button>
        </form>
      </section>
    </main>
  );
}

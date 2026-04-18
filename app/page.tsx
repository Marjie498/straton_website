import { readData } from "@/lib/db";
import HeroCarousel from "@/components/hero-carousel";

export default async function Home() {
  const content = await readData<any>("site_content");

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section id="home" className="relative overflow-hidden">
        <HeroCarousel />
      </section>

      <section id="about" className="bg-[var(--surface)] py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">About Straton Agency</p>
            <h2 className="mt-4 text-4xl font-semibold text-[var(--foreground)]">Minimal, premium chat support for creators.</h2>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              Straton Agency manages private messaging, VIP engagement, and creator operations with a clean, dependable approach.
            </p>
            <a
              href="/#contact"
              className="mt-8 inline-flex rounded-full bg-[var(--accent)] px-10 py-3 text-base font-semibold text-white transition hover:bg-[var(--accent-soft)]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[var(--surface-alt)] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">Services</p>
            <h2 className="mt-4 text-4xl font-semibold text-[var(--foreground)]">What we make simple.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {content.whyChoose.map((item: any) => (
              <div key={item.title} className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-[var(--foreground)]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="bg-[var(--surface)] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">Team</p>
            <h2 className="mt-4 text-4xl font-semibold text-[var(--foreground)]">sample teammm hereeee</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {content.featuredTeam.map((member: any) => (
              <div key={member.name} className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface-alt)] p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-[var(--foreground)]">{member.name}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">{member.role}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faqs" className="bg-[var(--surface-alt)] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">FAQs</p>
            <h2 className="mt-4 text-4xl font-semibold text-[var(--foreground)]">Frequently asked questions.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {content.faqPreview.map((faq: any) => (
              <div key={faq.question} className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-[var(--foreground)]">{faq.question}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[var(--surface)] py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="rounded-[2.5rem] border border-[var(--border)] bg-[var(--surface-alt)] p-10 text-center shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">Contact</p>
            <h2 className="mt-4 text-4xl font-semibold text-[var(--foreground)]">Ready to talk about your next landing page?</h2>
            <p className="mt-4 text-lg leading-8 text-[var(--muted)]">Reach out and we’ll help you launch a minimal, full-screen homepage that converts.</p>
            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[var(--accent)] px-10 py-3 text-base font-semibold text-white transition hover:bg-[var(--accent-soft)]"
            >
              Contact Us
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}


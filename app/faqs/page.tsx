import { readData } from "@/lib/db";

export default async function FaqsPage() {
  const faqs = await readData<any>("faqs");

  return (
    <main className="px-6 py-20 lg:px-10">
      <section className="mx-auto max-w-6xl space-y-8 rounded-[2rem] border border-white/10 bg-[#070707] p-10 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">FAQs</p>
          <h1 className="text-5xl font-bold text-white">Common questions about our agency.</h1>
          <p className="max-w-3xl text-lg leading-8 text-white/70">Find answers on services, process, privacy, and how to work with us.</p>
        </div>

        <div className="grid gap-6">
          {faqs.map((faq: any) => (
            <div key={faq.id} className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-[#d4a4c1]">{faq.category}</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">{faq.question}</h2>
              <p className="mt-3 text-white/70">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

import { readData } from "@/lib/db";

export default async function ServicesPage() {
  const services = await readData<any>("services");

  return (
    <main className="px-6 py-20 lg:px-10">
      <section className="mx-auto max-w-6xl space-y-8 rounded-[2rem] border border-white/10 bg-[#070707] p-10 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Services</p>
          <h1 className="text-5xl font-bold text-white">Agency services for chat growth and creator support.</h1>
          <p className="max-w-3xl text-lg leading-8 text-white/70">We offer audience engagement, communication support, retention strategy, and team operations for creators and agencies.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service: any) => (
            <div key={service.id} className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
              <p className="mt-4 text-white/70">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl font-semibold text-white">Detail overview</h2>
          <p className="mt-4 text-white/70">Every service is built to keep creators connected with fans, reduce inbox pressure, and keep messages premium.</p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <h3 className="text-xl font-semibold text-white">How it works</h3>
          <ol className="mt-4 space-y-3 text-white/70">
            <li>1. Plan the chat strategy with your creator team.</li>
            <li>2. Configure message types, VIP sessions, and response flow.</li>
            <li>3. Launch campaigns and keep fan engagement active.</li>
          </ol>
        </div>
      </section>
    </main>
  );
}

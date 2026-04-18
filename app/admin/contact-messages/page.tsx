import { readData } from "@/lib/db";

export default async function ContactMessagesPage() {
  const messages = await readData<any>("contact_messages");

  return (
    <main className="px-6 py-20 lg:px-10">
      <section className="mx-auto max-w-6xl space-y-8 rounded-[2rem] border border-white/10 bg-[#070707] p-10 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Contact Messages</p>
          <h1 className="text-5xl font-bold text-white">Inbound inquiry inbox</h1>
          <p className="max-w-3xl text-lg leading-8 text-white/70">View the latest contact requests submitted through the public contact form.</p>
        </div>

        <div className="space-y-6">
          {messages.length === 0 ? (
            <div className="rounded-[1.5rem] border border-dashed border-white/20 bg-[#111111]/80 p-8 text-center text-white/70">No messages yet.</div>
          ) : (
            messages.map((message: any) => (
              <div key={message.id} className="rounded-[1.5rem] border border-white/10 bg-[#111111]/80 p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/50">From</p>
                    <h2 className="text-2xl font-semibold text-white">{message.name}</h2>
                    <p className="text-sm text-white/60">{message.email} · {message.service}</p>
                  </div>
                  <p className="text-sm text-white/70">{new Date(message.createdAt).toLocaleDateString()}</p>
                </div>
                <p className="mt-5 text-white/70">{message.message}</p>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}

import { readData } from "@/lib/db";

export default async function LogsPage() {
  const logs = await readData<any>("logs");

  return (
    <main className="px-6 py-20 lg:px-10">
      <section className="mx-auto max-w-6xl space-y-8 rounded-[2rem] border border-white/10 bg-[#070707] p-10 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Logs</p>
          <h1 className="text-5xl font-bold text-white">Activity log</h1>
          <p className="max-w-3xl text-lg leading-8 text-white/70">Review the latest saved events in the application logs.</p>
        </div>

        <div className="space-y-4">
          {logs.length === 0 ? (
            <div className="rounded-[1.5rem] border border-white/10 bg-[#111111]/80 p-8 text-white/70">
              No log entries yet.
            </div>
          ) : (
            logs.map((entry: any) => (
              <div key={entry.id} className="rounded-[1.5rem] border border-white/10 bg-[#111111]/80 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-[#d4a4c1]">{entry.level || "Info"}</p>
                <p className="mt-3 text-white/70">{entry.message}</p>
                <p className="mt-3 text-xs text-white/50">{entry.timestamp}</p>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}

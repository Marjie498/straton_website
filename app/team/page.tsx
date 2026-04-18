import { readData } from "@/lib/db";

export default async function TeamPage() {
  const team = await readData<any>("team_members");

  return (
    <main className="px-6 py-20 lg:px-10">
      <section className="mx-auto max-w-6xl space-y-8 rounded-[2rem] border border-white/10 bg-[#070707] p-10 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Team</p>
          <h1 className="text-5xl font-bold text-white">Meet the team behind your chat agency.</h1>
          <p className="max-w-3xl text-lg leading-8 text-white/70">Every member here plays a role in delivery, quality, and fan experience.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member: any) => (
            <div key={member.id} className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <div className="mb-4 h-24 w-24 rounded-full bg-white/10" />
              <h2 className="text-2xl font-semibold text-white">{member.name}</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#d4a4c1]">{member.position}</p>
              <p className="mt-4 text-white/70">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

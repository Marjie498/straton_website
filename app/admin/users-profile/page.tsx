import { readData } from "@/lib/db";

export default async function UsersProfilePage() {
  const users = await readData<any>("users");

  return (
    <main className="px-6 py-20 lg:px-10">
      <section className="mx-auto max-w-6xl space-y-8 rounded-[2rem] border border-white/10 bg-[#070707] p-10 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Users Profile</p>
          <h1 className="text-5xl font-bold text-white">Admin users</h1>
          <p className="max-w-3xl text-lg leading-8 text-white/70">Review the account list that can access the dashboard.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user: any) => (
            <div key={user.id} className="rounded-[1.5rem] border border-white/10 bg-[#111111]/80 p-6">
              <h2 className="text-2xl font-semibold text-white">{user.name}</h2>
              <p className="mt-2 uppercase tracking-[0.2em] text-[#d4a4c1]">{user.role}</p>
              <p className="mt-4 text-white/70">{user.email}</p>
              <p className="mt-2 text-sm text-white/60">{user.status}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

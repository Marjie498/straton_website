import { readData } from "@/lib/db";

export default async function TeamManagerPage() {
  const team = await readData<any>("team_members");

  return (
    <main className="px-6 py-20 lg:px-10">
      <section className="mx-auto max-w-7xl space-y-8 rounded-[2rem] border border-white/10 bg-[#070707] p-10 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Team Manager</p>
          <h1 className="text-5xl font-bold text-white">Manage team members</h1>
          <p className="max-w-3xl text-lg leading-8 text-white/70">Maintain your public roster with direct edit and remove controls.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-6">
            {team.map((member: any) => (
              <form key={member.id} method="post" action="/api/admin/team_members" className="rounded-[1.5rem] border border-white/10 bg-[#111111]/80 p-6">
                <input type="hidden" name="id" value={member.id} />
                <input type="hidden" name="action" value="update" />
                <label className="text-sm uppercase tracking-[0.24em] text-white/50">Name</label>
                <input name="name" defaultValue={member.name} className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0f0b15] px-4 py-3 text-sm text-white outline-none transition focus:border-[#b22466]" />
                <label className="mt-4 text-sm uppercase tracking-[0.24em] text-white/50">Role</label>
                <input name="role" defaultValue={member.role} className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0f0b15] px-4 py-3 text-sm text-white outline-none transition focus:border-[#b22466]" />
                <label className="mt-4 text-sm uppercase tracking-[0.24em] text-white/50">Bio</label>
                <textarea name="bio" defaultValue={member.bio} rows={4} className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0f0b15] px-4 py-3 text-sm text-white outline-none transition focus:border-[#b22466]"></textarea>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-[#b22466] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d33c81]">
                    Update
                  </button>
                  <button type="submit" name="action" value="delete" className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                    Delete
                  </button>
                </div>
              </form>
            ))}
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-8">
            <h2 className="text-2xl font-semibold text-white">Add New Team Member</h2>
            <p className="mt-3 text-white/70">Add a creator support specialist or lead to your public team page.</p>
            <form method="post" action="/api/admin/team_members" className="mt-6 space-y-4">
              <input type="hidden" name="action" value="create" />
              <div>
                <label className="text-sm uppercase tracking-[0.24em] text-white/50">Name</label>
                <input name="name" className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0f0b15] px-4 py-3 text-sm text-white outline-none transition focus:border-[#b22466]" />
              </div>
              <div>
                <label className="text-sm uppercase tracking-[0.24em] text-white/50">Role</label>
                <input name="role" className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0f0b15] px-4 py-3 text-sm text-white outline-none transition focus:border-[#b22466]" />
              </div>
              <div>
                <label className="text-sm uppercase tracking-[0.24em] text-white/50">Bio</label>
                <textarea name="bio" rows={5} className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0f0b15] px-4 py-3 text-sm text-white outline-none transition focus:border-[#b22466]"></textarea>
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-[#b22466] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d33c81]">
                Add Member
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

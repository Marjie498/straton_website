export default function LoginPage() {
  return (
    <main className="px-6 py-20 lg:px-10">
      <section className="mx-auto max-w-2xl rounded-[2rem] border border-white/10 bg-[#070707] p-10 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]">
        <div className="mb-8 space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Login</p>
          <h1 className="text-4xl font-bold text-white">Creator Portal Login</h1>
          <p className="text-white/70">Sign in to manage chat bookings, creator communications, and premium fan access.</p>
        </div>
        <form className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-white/80">Email</label>
            <input className="w-full rounded-2xl border border-white/10 bg-[#121212] px-4 py-3 text-sm text-white outline-none transition focus:border-[#b22466]" type="email" placeholder="creator@straton.agency" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-white/80">Password</label>
            <input className="w-full rounded-2xl border border-white/10 bg-[#121212] px-4 py-3 text-sm text-white outline-none transition focus:border-[#b22466]" type="password" placeholder="Password" />
          </div>
          <button className="w-full rounded-full bg-[#b22466] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#d33c81]" type="button">
            Sign In
          </button>
          <p className="text-center text-sm text-white/60">Admin users can access the dashboard from the nav above.</p>
        </form>
      </section>
    </main>
  );
}

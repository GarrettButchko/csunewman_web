export default function AboutView() {
  const leadershipTeam = [
    {
      role: 'President',
      name: 'Name Here',
    },
    {
      role: 'Vice President',
      name: 'Name Here',
    },
    {
      role: 'Treasurer',
      name: 'Name Here',
    },
    {
      role: 'Secretary',
      name: 'Name Here',
    },
    {
      role: 'Campus Minister',
      name: 'Name Here',
    },
    {
      role: 'Newman Priest',
      name: 'Name Here',
    },
  ];

  return (
    <div className="space-y-8 bg-background px-4 py-8 text-cream sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl rounded-sm bg-button px-6 py-8 shadow-[0_12px_30px_rgba(0,0,0,0.22)] sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-cream/70">About Us</p>
            <h2 className="mt-2 font-larken text-4xl leading-none text-cream sm:text-5xl">
              Meet the leadership team.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-cream/80 sm:text-base">
              This page introduces the student and ministry leaders who guide worship, community,
              and campus involvement throughout the year.
            </p>
          </div>

          <div className="rounded-sm border border-cream/20 bg-cream/10 px-5 py-4 text-sm text-cream/85">
            <p className="font-semibold text-cream">Leadership team</p>
            <p className="mt-1">
              A small group of staff and student leaders helps shape worship, community, and outreach.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {leadershipTeam.map((member) => (
            <article
              key={member.role}
              className="rounded-sm bg-cream p-5 text-[#2D3E1A] shadow-[0_12px_30px_rgba(0,0,0,0.16)]"
            >
              <div className="aspect-[4/5] rounded-sm border-2 border-dashed border-[#b5be94] bg-[#dde2c6] p-4">
                <div className="flex h-full items-center justify-center rounded-sm bg-background/10 text-center">
                  <div>
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#b5be94] bg-button text-2xl font-larken text-cream">
                      Photo
                    </div>
                    <p className="mt-3 text-xs uppercase tracking-[0.22em] text-[#6a764e]">
                      Image placeholder
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="mt-4 font-larken text-2xl text-button">{member.role}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#6a764e]">{member.name}</p>
              <p className="mt-2 text-sm leading-6 text-[#556245]">
                Add a headshot and short bio here to introduce this member of the leadership team.
              </p>
            </article>
          ))}
        </div>

        <article className="rounded-sm bg-cream p-6 text-[#2D3E1A] shadow-[0_12px_30px_rgba(0,0,0,0.16)] sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#6a764e]">Our mission</p>
              <h3 className="mt-2 font-larken text-3xl text-button">Built to support students</h3>
            </div>

            <p className="text-sm leading-6 text-[#4d5a35]">
              The leadership team exists to make faith visible on campus through welcome, prayer,
              service, and consistent presence. This section can later expand with bios, quotes, or a
              team photo banner.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}

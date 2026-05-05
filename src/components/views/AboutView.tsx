import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function AboutView() {
  const leadershipTeam = [
    {
      role: 'President',
      name: 'Giuliana Ciccarelli-Aloisi',
      image: '/Giuliana.jpg',
    },
    {
      role: 'Vice President',
      name: 'Name Here',
      image: '/Giuliana.jpg', 
    },
    {
      role: 'Treasurer',
      name: 'Name Here',
      image: '/Giuliana.jpg',
    },
    {
      role: 'Secretary',
      name: 'Name Here',
      image: '/Giuliana.jpg',
    },
    {
      role: 'Campus Minister',
      name: 'Joann Rymarczyk-Piotrkowski',
      image: '/Joann.jpg',
    },
    {
      role: 'Pastor',
      name: 'Reverend Philip Bernier OFM Cap',
      image: '/Brother Phil.jpg',
    },
  ];

  return (
    <div className="space-y-8 bg-background px-4 py-8 text-cream sm:px-6 lg:px-8">
      <section
        className="mx-auto max-w-6xl rounded-sm bg-button px-6 py-8 sm:px-8 lg:px-10"
        style={{ boxShadow: '0 12px 30px rgba(0,0,0,0.22), -16px -16px 0px #f4e7c7' }}
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-cream/70">About Us</p>
            <h2 className="mt-2 font-larken text-4xl leading-none text-cream sm:text-5xl">
              Meet the Leadership Team
            </h2>
          </div>

          <div className="flex items-start lg:items-center">
            <p className="mt-4 max-w-xl text-left text-sm leading-6 text-cream/80 sm:text-base">
              Meet the student and ministry leaders who guide worship, community,
              and campus involvement throughout the year.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl rounded-sm bg-cream px-6 py-8 text-button shadow-[0_12px_30px_rgba(0,0,0,0.16)] sm:px-8">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-button/70">Connect With Us</p>
            <h3 className="mt-2 font-larken text-3xl text-button">Find us online and get in touch</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-button/80">
              Follow our updates, see what&apos;s happening around campus, or send us a message if you
              want to learn more about the ministry.
            </p>
          </div>

          <div className="flex items-center gap-4 text-lightGreen">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF className="h-5 w-5 transition-opacity hover:opacity-80" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram className="h-5 w-5 transition-opacity hover:opacity-80" />
            </a>
            <a href="mailto:info@example.com" aria-label="Email us">
              <FaEnvelope className="h-5 w-5 transition-opacity hover:opacity-80" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6">
        <div className="grid gap-4">
          {leadershipTeam.map((member) => (
            <article
              key={member.role}
              className="mx-auto w-full max-w-[87.5%] overflow-hidden rounded-sm bg-cream text-button shadow-[0_12px_30px_rgba(0,0,0,0.16)]"
            >
              <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr] items-stretch">
                <div className="px-10 py-10">
                  <p className="text-xs uppercase tracking-[0.2em] text-button/70">{member.role}</p>
                  <h3 className="mt-2 font-larken text-2xl text-button">{member.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-button/85">
                    Add a headshot and short bio here to introduce this member of the leadership team.
                  </p>
                </div>

                <div className="h-80 md:h-84 rounded-sm border-2 border-dashed border-[#b5be94] bg-[#dde2c6] p-3">
                  <div className="h-full w-full overflow-hidden rounded-sm bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.9),rgba(255,255,255,0.25)_30%,transparent_31%),linear-gradient(180deg,rgba(255,255,255,0.65),rgba(255,255,255,0.1))] shadow-inner ring-1 ring-white/35">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="h-full w-full object-cover rounded-sm"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <article
          className="rounded-sm bg-button p-6 text-cream sm:p-8"
          style={{ boxShadow: '0 12px 30px rgba(0,0,0,0.22), -16px 16px 0px #f4e7c7' }}
        >
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-cream/70">Our Mission</p>
              <h3 className="mt-2 font-larken text-3xl text-cream">Built to Support Students</h3>
            </div>

            <p className="text-sm leading-6 text-cream/85">
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

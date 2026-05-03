const resourceGroups = [
  {
    title: 'Mass & Prayer',
    summary: 'Core worship details and prayer support for students and visitors.',
    items: ['Sunday Mass times', 'Weekday liturgy schedule', 'Prayer requests'],
  },
  {
    title: 'Campus Life',
    summary: 'The practical things you need once you are connected to the ministry.',
    items: ['Event sign-ups', 'Volunteer opportunities', 'Student group updates'],
  },
  {
    title: 'Getting Connected',
    summary: 'Ways to reach out, ask questions, and stay in the loop during the semester.',
    items: ['Contact information', 'Newsletter updates', 'Social media links'],
  },
];

const quickLinks = [
  'Mass schedule',
  'Confession times',
  'Contact the team',
  'Join the mailing list',
];

const supportItems = [
  {
    title: 'Need directions?',
    body: 'Use this page to find the basics before heading to campus or a ministry event.',
  },
  {
    title: 'Looking for a form?',
    body: 'Start with the most commonly used items so you can get to the right place quickly.',
  },
  {
    title: 'Need to talk to someone?',
    body: 'Reach out for prayer, scheduling help, or questions about getting involved.',
  },
];

export default function ResourcesView() {
  return (
    <div className="space-y-8 bg-background px-4 py-8 text-cream sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl rounded-sm bg-button px-6 py-10 shadow-[0_12px_30px_rgba(0,0,0,0.22)] sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-cream/70">Resources</p>
            <h2 className="mt-2 font-larken text-4xl leading-none text-cream sm:text-5xl">
              A quick directory for students and visitors.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-cream/80 sm:text-base">
              Use this page to find the essentials fast: worship times, contact info, forms, and the
              tools that help you stay connected during the semester.
            </p>
          </div>

          <div className="rounded-sm border border-cream/20 bg-cream/10 p-5 text-sm text-cream/85">
            <p className="font-semibold text-cream">Quick access</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {quickLinks.map((link) => (
                <span
                  key={link}
                  className="rounded-full border border-cream/20 bg-background/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-cream/80"
                >
                  {link}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-sm bg-cream p-6 text-[#2D3E1A] shadow-[0_12px_30px_rgba(0,0,0,0.16)] sm:p-8">
          <div className="flex items-center justify-between gap-4 border-b border-[#c8cfab] pb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#6a764e]">Directory</p>
              <h3 className="mt-1 font-larken text-3xl text-button">Most-used resources</h3>
            </div>
            <p className="text-right text-sm text-[#556245]">Updated throughout the semester</p>
          </div>

          <div className="mt-6 space-y-4">
            {resourceGroups.map((group) => (
              <div
                key={group.title}
                className="grid gap-4 border-b border-[#d8dec1] pb-4 last:border-b-0 last:pb-0 sm:grid-cols-[0.9fr_1.1fr]"
              >
                <div>
                  <h4 className="font-larken text-2xl text-button">{group.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-[#556245]">{group.summary}</p>
                </div>

                <ul className="space-y-2 text-sm text-[#2D3E1A]">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center justify-between gap-3 rounded-sm bg-background/5 px-4 py-3">
                      <span>{item}</span>
                      <span className="text-xs uppercase tracking-[0.16em] text-[#6a764e]">Open</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <section className="rounded-sm bg-button px-6 py-6 text-cream shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
            <p className="text-xs uppercase tracking-[0.22em] text-cream/70">Support</p>
            <h3 className="mt-2 font-larken text-3xl">Need help finding something?</h3>
            <div className="mt-4 space-y-4 text-sm text-cream/85">
              {supportItems.map((item) => (
                <div key={item.title} className="border-t border-cream/15 pt-4 first:border-t-0 first:pt-0">
                  <p className="font-semibold text-cream">{item.title}</p>
                  <p className="mt-1 leading-6">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-sm bg-cream px-6 py-6 text-[#2D3E1A] shadow-[0_12px_30px_rgba(0,0,0,0.16)]">
            <p className="text-xs uppercase tracking-[0.22em] text-[#6a764e]">Highlighted tools</p>
            <div className="mt-4 space-y-3">
              {['Newsletter signup', 'Campus map', 'Calendar download', 'Prayer request form'].map((tool) => (
                <div key={tool} className="flex items-center justify-between rounded-sm border border-lightGreen/60 px-4 py-3 text-sm">
                  <span className="font-medium text-button">{tool}</span>
                  <span className="text-xs uppercase tracking-[0.16em] text-[#6a764e]">Go</span>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </section>
    </div>
  );
}

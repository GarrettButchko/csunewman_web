const upcomingEvents = [
  {
    day: '12',
    month: 'APR',
    title: 'Campus Mass & Dinner',
    time: '5:30 PM',
    location: 'St. Peter Catholic Church',
    description:
      'Join us for Mass, a shared meal, and time to connect with other students after the service.',
  },
  {
    day: '18',
    month: 'APR',
    title: 'Adoration Night',
    time: '7:00 PM',
    location: 'Newman Center Chapel',
    description:
      'A quiet evening of prayer, praise, and reflection with space to stop, reset, and be present.',
  },
  {
    day: '24',
    month: 'APR',
    title: 'Service Saturday',
    time: '10:00 AM',
    location: 'Meet at the Newman Center',
    description:
      'Volunteer with the campus ministry team and serve local community partners for the morning.',
  },
];

export default function EventsView() {
  return (
    <div className="space-y-8 bg-background px-4 py-4 text-cream sm:px-4 lg:px-8">
      <section className="mx-auto max-w-6xl rounded-sm bg-button px-6 py-8 shadow-[0_12px_30px_rgba(0,0,0,0.22)] sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-cream/70">Upcoming Events</p>
            <h2 className="mt-2 font-larken text-4xl leading-none text-cream sm:text-5xl">
              Gather, pray, and grow together.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-cream/80 sm:text-base">
              Our event schedule brings together worship, service, fellowship, and formation in the
              same warm visual language used throughout the site.
            </p>
          </div>

          <div className="rounded-sm border border-cream/20 bg-cream/10 px-5 py-4 text-sm text-cream/85">
            <p className="font-semibold text-cream">Weekly rhythm</p>
            <p className="mt-1">Mass, adoration, service, and student meetups throughout the month.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-6">
          <article className="rounded-sm bg-cream p-6 text-[#2D3E1A] shadow-[0_12px_30px_rgba(0,0,0,0.18)] sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-button px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cream">
                Featured
              </span>
              <span className="text-sm text-[#4e5a34]">Sunday, April 12</span>
            </div>

            <div className="mt-5 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div className="rounded-sm bg-button p-5 text-center text-cream shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
                <p className="text-xs uppercase tracking-[0.25em] text-cream/70">April</p>
                <p className="mt-2 font-larken text-6xl leading-none">12</p>
                <p className="mt-2 text-sm text-cream/80">5:30 PM</p>
              </div>

              <div>
                <h3 className="font-larken text-3xl text-button">Campus Mass & Dinner</h3>
                <p className="mt-3 text-sm leading-6 text-[#445234]">
                  Start the evening with Mass, stay for dinner, and spend time with the Newman Center
                  community in a relaxed setting.
                </p>

                <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                  <div className="rounded-sm border border-lightGreen/60 bg-background/5 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#5b6740]">Location</p>
                    <p className="mt-1 font-semibold text-button">St. Peter Catholic Church</p>
                  </div>
                  <div className="rounded-sm border border-lightGreen/60 bg-background/5 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#5b6740]">What to bring</p>
                    <p className="mt-1 font-semibold text-button">A friend and an open evening</p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-4">
            {upcomingEvents.map((event) => (
              <article
                key={`${event.month}-${event.day}-${event.title}`}
                className="grid gap-4 rounded-sm bg-cream px-5 py-5 text-[#2D3E1A] shadow-[0_10px_24px_rgba(0,0,0,0.14)] sm:grid-cols-[auto_1fr] sm:items-center sm:px-6"
              >
                <div className="flex h-20 w-20 flex-col items-center justify-center rounded-sm bg-button text-cream shadow-[0_8px_18px_rgba(0,0,0,0.14)]">
                  <span className="text-xs uppercase tracking-[0.2em] text-cream/75">{event.month}</span>
                  <span className="font-larken text-3xl leading-none">{event.day}</span>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <h3 className="font-larken text-2xl text-button">{event.title}</h3>
                    <span className="rounded-full bg-lightGreen/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-button">
                      {event.time}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[#556245]">{event.description}</p>
                  <p className="mt-3 text-sm font-semibold text-button">{event.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <section className="rounded-sm bg-button px-6 py-6 text-cream shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
            <h3 className="font-larken text-3xl">Recurring Events</h3>
            <div className="mt-4 space-y-4 text-sm text-cream/85">
              <div>
                <p className="font-semibold text-cream">Sunday Mass</p>
                <p className="mt-1">Every Sunday at 11:30 AM and 7:00 PM.</p>
              </div>
              <div>
                <p className="font-semibold text-cream">Weekly Adoration</p>
                <p className="mt-1">A quiet prayer hour with praise music and reflection.</p>
              </div>
              <div>
                <p className="font-semibold text-cream">Student Socials</p>
                <p className="mt-1">Casual gatherings after major campus events and liturgies.</p>
              </div>
            </div>
          </section>

          <section className="rounded-sm bg-cream px-6 py-6 text-[#2D3E1A] shadow-[0_12px_30px_rgba(0,0,0,0.16)]">
            <p className="text-xs uppercase tracking-[0.22em] text-[#6a764e]">Plan ahead</p>
            <h3 className="mt-2 font-larken text-3xl text-button">Want reminders?</h3>
            <p className="mt-3 text-sm leading-6 text-[#4d5a35]">
              Check back here for the latest dates, or send a message if you want help finding the
              next event to attend.
            </p>
            <div className="mt-5 rounded-sm bg-background px-4 py-3 text-sm text-cream/85">
              Events are updated here as the semester schedule changes.
            </div>
          </section>
        </aside>
      </section>
    </div>
  );
}

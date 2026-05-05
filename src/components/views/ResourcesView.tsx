export default function ResourcesView() {
  return (
    <div className="space-y-8 bg-background pb-10 text-foreground">

      <section className="w-full px-4 pt-4">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 h-[300px] overflow-hidden rounded-sm shadow-[0_12px_30px_rgba(0,0,0,0.22)]">
          
          <div className="bg-cream text-button px-8 py-10 sm:px-10">
            <h2 className="font-larken text-3xl">St. Peter Catholic Church</h2>
            <p className="mt-4 text-sm leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor,
              nibh eget commodo sagittis, massa eros iaculis dui, at auctor orci orci vel mi.
            </p>

            <button className="mt-6 rounded bg-button px-4 py-2 text-sm text-cream hover:opacity-90 transition">
              Open in Maps
            </button>
          </div>

          <img
            src="/church.jpg"
            alt="Church"
            className="h-full w-full object-cover min-h-[260px]"
          />
        </div>
      </section>
    
        <section className="w-full px-4">
          <div className="mx-auto max-w-6xl rounded-sm bg-button px-8 py-12 text-cream  sm:px-12 shadow-[0_12px_30px_rgba(0,0,0,0.22)] grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
            <h2 className="font-larken text-3xl">FAQ:</h2>

            <div className="mt-6 space-y-5 text-sm text-foreground">
              <div>
                <p className="font-semibold">Question?</p>
                <p className="text-foreground/70">Lorem ipsum dolor sit amet.</p>
              </div>

              <div>
                <p className="font-semibold">Question?</p>
                <p className="text-foreground/70">Maecenas porttitor nibh eget commodo.</p>
              </div>

              <div>
                <p className="font-semibold">Question?</p>
                <p className="text-foreground/70">Vestibulum aliquam purus at enim.</p>
              </div>

              <div>
                <p className="font-semibold">Question?</p>
                <p className="text-foreground/70">Sed mattis lobortis sapien.</p>
              </div>
            </div>
          </div>
          
          <ChurchCard/>
        </div>
      </section>
      

      <section className="w-full px-4">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 h-[300px] overflow-hidden rounded-sm shadow-[0_12px_30px_rgba(0,0,0,0.22)]">

          <div className="bg-cream text-button px-8 py-10 sm:px-10">
            <h2 className="font-larken text-3xl">Join Our GroupMe</h2>
            <p className="mt-4 text-sm leading-6">
              Stay connected with events, updates, and community announcements.
            </p>

            <button className="mt-6 rounded bg-button px-4 py-2 text-sm text-cream hover:opacity-90 transition">
              GroupMe Link
            </button>
          </div>

          <img
            src="/groupphoto.png"
            alt="Group"
            className="h-full w-full object-cover min-h-[260px]"
          />
        </div>
      </section>

      <section className="w-full px-4">
        <div className="mx-auto max-w-6xl rounded-sm bg-button px-8 py-12 text-cream  sm:px-12 shadow-[0_12px_30px_rgba(0,0,0,0.22)] grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">

          <div>
            <h2 className="font-larken text-3xl">Still Have Questions?</h2>
            <p className="mt-2 text-sm text-foreground/70">
              We would love to hear from you!
            </p>

            <div className="mt-6 space-y-4 text-sm text-foreground/80">
              <p>
                <strong>Location:</strong><br />
                2355 E. Dewey Road<br />
                Amherst, OH 44001
              </p>

              <p>
                <strong>Email:</strong><br />
                example@email.com
              </p>

              <p>
                <strong>Telephone:</strong><br />
                440-320-7666
              </p>
            </div>
          </div>

          <form className="max-w-lg rounded-sm bg-cream p-8 shadow-[-24px_24px_0px_0px_#adb680] space-y-3 text-[#2D3E1A]">
            <input className="w-full rounded px-3 py-1.5 bg-lightGreen/30 text-sm" placeholder="Name" />
            <input className="w-full rounded px-3 py-1.5 bg-lightGreen/30 text-sm" placeholder="Email" />
            <input className="w-full rounded px-3 py-1.5 bg-lightGreen/30 text-sm" placeholder="Phone" />
            <input className="w-full rounded px-3 py-1.5 bg-lightGreen/30 text-sm" placeholder="Subject" />
            <textarea 
              className="w-full rounded px-3 py-1.5 bg-lightGreen/30 text-sm"
              placeholder="Message"
              rows={3}/>
            <button className="w-full rounded bg-button py-1.5 text-cream text-sm hover:opacity-90">
              Submit
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}

const ChurchCard = () => {
  return (
      <div className="max-w-lg rounded-sm bg-cream p-12 shadow-[-24px_24px_0px_0px_#adb680] items-start">
        <h2 className="inline-block text-4xl font-serif text-button">
          Mass Times
        </h2>
        <p className="mt-[-3] mb-5 text-xs text-button/70">Location: St. Peter Catholic Church</p>
        <div className="space-y-6 font-serif text-[#2D3E1A]">
        
          <div>
            <h2 className="text-xl font-serif font-bold">Sunday Morning:</h2>
            <p className="text-l">11:30 am</p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold">Sunday Evening:</h2>
            <p className="text-l">7:00 pm (Newman mass)</p>
          </div>
        </div>
      </div>
    
  );
};


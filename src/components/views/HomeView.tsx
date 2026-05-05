import HeroSection from "../HeroSection";
import TopCarousel from "../TopCarousel";

export default function HomeView() {
  return (
    <div className="space-y-8 bg-background pb-10 text-foreground">

      <TopCarousel />

      <HeroSection
        heading="Welcome"
        description="We are a Catholic campus community rooted in prayer, friendship, and service. Join us for Mass, formation, and events that help students grow in faith and find belonging at St. Peter."
        buttonText="Learn More"
        imageSrc="/stPeter.png"
      />

      <section className="w-full px-4">
        <div className="mx-auto max-w-6xl rounded-sm bg-button px-8 py-12 text-cream  sm:px-12 shadow-[0_12px_30px_rgba(0,0,0,0.22)] grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="pe-5">
            <h2 className="font-larken text-4xl text-cream">Daily Reading</h2>
            <p className="mt-1 text-xs text-cream/70">This Week at St. Peter</p>

            <div className="mt-6 space-y-5 text-sm leading-6 text-cream/85">
              <p>
                <span className="font-semibold text-cream">Prayer:</span> Start the week by asking God
                for wisdom, courage, and a heart that notices the needs of others.
              </p>
              <p>
                <span className="font-semibold text-cream">Community:</span> Make time for conversation,
                fellowship, and shared meals with the Newman community and parish family.
              </p>
              <p>
                <span className="font-semibold text-cream">Service:</span> Look for a simple way to serve
                a classmate, a neighbor, or someone who may be struggling this week.
              </p>
              <p>
                <span className="font-semibold text-cream">Scripture:</span> Return to the Gospel throughout
                the week and let it shape your choices, conversations, and priorities.
              </p>
            </div>
          </div>

          <ChurchCard/>
        </div>
      </section>

      <HeroSection
        heading="Contact Us"
        description="Have a question about Mass, events, sacraments, or getting involved? Reach out and we will connect you with the right person."
        buttonText="Learn More"
        imageSrc="/sleepingAllison.png"
      />

      <section className="w-full px-4">
        <div className="mx-auto max-w-6xl rounded-sm bg-button px-6 py-14 text-cream shadow-[0_12px_30px_rgba(0,0,0,0.22)] text-center">
          <p className="font-larken text-3xl leading-tight sm:text-4xl">
            "Go forth and set the world on fire."
          </p>
          <p className="mt-2 font-serif text-lg text-cream/85">
            - St. Ignatius of Loyola
          </p>
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

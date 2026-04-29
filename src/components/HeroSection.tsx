interface HeroSectionProps {
  heading: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
  bgColor?: string;
  textColor?: string;
}

export default function HeroSection({
  heading,
  description,
  buttonText,
  onButtonClick,
  bgColor = "bg-cream",
  textColor = "text-button",
}: HeroSectionProps) {
  return (
    <section className=" w-full px-4 ">
        <div className="overflow-hidden rounded-sm mx-auto max-w-6xl grid shadow-[0_12px_30px_rgba(0,0,0,0.22)] md:grid-cols-2">
      <div className={`${bgColor} px-8 py-12 ${textColor} sm:px-12`}>
        <h2 className={`font-larken text-4xl ${textColor}`}>{heading}</h2>
        <p className={`mt-4 max-w-md text-sm leading-6 ${textColor}/85`}>
          {description}
        </p>
        <button
          onClick={onButtonClick}
          className={`mt-8 rounded-full bg-button px-8 py-2 text-sm text-cream shadow-sm transition-colors hover:bg-${textColor}/90`}
        >
          {buttonText}
        </button>
      </div>
      <div className=" min-h-[260px] bg-[linear-gradient(180deg,#c8c0ae_0%,#f0ece0_12%,#d7cdbb_48%,#b39d86_100%)] p-3 sm:p-4">
        <div className="h-full min-h-[260px] bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.9),rgba(255,255,255,0.25)_30%,transparent_31%),linear-gradient(180deg,rgba(255,255,255,0.65),rgba(255,255,255,0.1))] shadow-inner ring-1 ring-white/35" />
      </div>
      </div>
    </section>
  );
}

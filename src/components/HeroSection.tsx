
interface HeroSectionProps {
  heading: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
  bgColor?: string;
  textColor?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function HeroSection({
  heading,
  description,
  buttonText,
  onButtonClick,
  bgColor = "bg-cream",
  textColor = "text-button",
  imageSrc = "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
  imageAlt = "Hero image",
}: HeroSectionProps) {
  const resolvedImageSrc =
    imageSrc.startsWith("http://") ||
    imageSrc.startsWith("https://") ||
    imageSrc.startsWith("/") ||
    imageSrc.startsWith("data:")
      ? imageSrc
      : `/${imageSrc}`;

  return (
    <section className="w-full px-4 ">
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

      <div className="relative h-full min-h-[260px] overflow-hidden">
        <img
          src={resolvedImageSrc}
          alt={imageAlt}
          className="h-full min-h-[260px] w-full object-cover"
        />
      </div>
      </div>
    </section>
  );
}

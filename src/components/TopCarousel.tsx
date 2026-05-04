'use client';

import { useEffect, useState } from 'react';

type Slide = {
  image: string;
  title: string;
  subtitle: string;
};

const slides: Slide[] = [
  {
    image: '/randr.png',
    title: 'Faith In Community',
    subtitle: 'Gather. Pray. Grow together at Newman each week.',
  },
  {
    image: '/groupphoto.png',
    title: 'Moments That Matter',
    subtitle: 'Join retreats, worship nights, and service projects.',
  },
  {
    image: '/tabling.png',
    title: 'Find Your Place',
    subtitle: 'Build lasting friendships rooted in Christ.',
  },
];

export default function TopCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const goPrev = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  return (
    <section className="w-full px-4 pt-4">
      <div className="mx-auto max-w-6xl relative overflow-hidden rounded-sm shadow-[0_12px_30px_rgba(0,0,0,0.22)]">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-[40vh] min-h-[260px] w-full object-cover sm:h-[46vh]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent"/>
            <div className="absolute inset-x-0 bottom-0 p-6 text-cream sm:p-8">
              <h2 className="font-larken text-3xl sm:text-4xl">{slide.title}</h2>
              <p className="mt-2 max-w-lg text-sm text-cream/90 sm:text-base">{slide.subtitle}</p>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={goPrev}
          className="absolute left-3 top-1/2 z-20 -translate-y-1/2 bg-button/70 px-3 py-2 text-sm text-cream transition hover:bg-button"
          aria-label="Previous slide"
        >
          {'<'}
        </button>

        <button
          type="button"
          onClick={goNext}
          className="absolute right-3 top-1/2 z-20 -translate-y-1/2 bg-button/70 px-3 py-2 text-sm text-cream transition hover:bg-button"
          aria-label="Next slide"
        >
          {'>'}
        </button>

        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === activeIndex ? 'bg-cream' : 'bg-cream/45 hover:bg-cream/70'
              }`}
            />
          ))}
        </div>

        <div className="invisible h-[40vh] min-h-[260px] w-full sm:h-[46vh]" />
      </div>
    </section>
  );
}
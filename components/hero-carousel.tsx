"use client";

import { useMemo, useState } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
    title: "Launch a clean landing page",
    subtitle: "A bright, modern homepage that puts your message front and center.",
  },
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    title: "Keep your design minimal",
    subtitle: "Simple navigation, bold imagery, and a focused call to action.",
  },
  {
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
    title: "Showcase your service clearly",
    subtitle: "A visual experience that feels premium without extra clutter.",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const currentSlide = useMemo(() => slides[current], [current]);

  return (
    <div className="relative w-full overflow-hidden bg-[var(--surface)]">
      <div className="relative h-[88vh] min-h-[520px] w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              index === current ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-105 -translate-y-4"
            }`}
          >
            <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,23,42,0.85)] via-[rgba(15,23,42,0.2)] to-transparent" />
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 px-6 pb-8 sm:px-10">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[rgba(15,23,42,0.08)] bg-[rgba(255,255,255,0.32)] p-8 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.35)] backdrop-blur-xl">
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
              {currentSlide.title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--foreground)]">
              {currentSlide.subtitle}
            </p>
            <a
              href="/#contact"
              className="inline-flex rounded-full bg-[var(--accent)] px-8 py-4 text-base font-semibold text-white transition hover:bg-[var(--accent-soft)]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

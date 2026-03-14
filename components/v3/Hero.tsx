import { hero } from "@/lib/data";

export default function Hero() {
  const nameUpper = hero.name.toUpperCase();
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 relative">
      <span className="hidden md:block absolute top-8 left-8 text-[#00FF41] text-xs opacity-30 select-none">
        {"// PORTFOLIO.EXE"}
      </span>
      <h1
        className="glitch-hover text-4xl md:text-9xl font-bold leading-none"
        data-text={nameUpper}
      >
        {nameUpper}
      </h1>
      <p className="text-[#00FF41] text-xl mt-4">{hero.title.toUpperCase()}</p>
      <p className="text-sm mt-2 text-white/60">{hero.tagline}</p>
      <p className="hidden md:block text-xs text-[#00FF41]/20 mt-8" style={{ marginLeft: "-0.5rem" }}>
        LOADING PROJECTS... [████████████] 100%
      </p>
    </section>
  );
}

import { hero } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-16 px-8 md:px-16 bg-[#F5F0E8]">
      <span className="hidden md:block absolute top-8 right-8 font-inter font-medium text-xs uppercase tracking-[0.3em] text-[#1A1A18]">
        PORTFOLIO 2026
      </span>
      <div>
        <h1 className="font-playfair font-black leading-none tracking-tight text-7xl md:text-[10rem] text-[#1A1A18]">
          MERVIN
        </h1>
        <h1 className="font-playfair font-black leading-none tracking-tight text-7xl md:text-[10rem] text-[#1A1A18]">
          DE <span className="text-[#C8441B]">CASTRO</span>
        </h1>
      </div>
      <p className="font-inter font-light text-xl text-[#1A1A18] mt-6">{hero.title}</p>
      <p className="font-inter font-light text-sm text-[#1A1A18] mt-2 opacity-70">{hero.tagline}</p>
    </section>
  );
}

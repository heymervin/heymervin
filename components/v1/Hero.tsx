import { hero } from "@/lib/data";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 border-b border-white">
      <h1 className="text-5xl md:text-9xl font-bold uppercase tracking-widest leading-none">
        {hero.name.toUpperCase()}
        <span className="animate-blink ml-2">|</span>
      </h1>
      <p className="text-xl md:text-2xl uppercase tracking-widest mt-6">{hero.title}</p>
      <p className="text-sm tracking-widest mt-3 opacity-80">{hero.tagline.toUpperCase()}</p>
    </section>
  );
}

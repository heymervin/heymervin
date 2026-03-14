import { about } from "@/lib/data";

export default function About() {
  return (
    <section className="border-b border-white px-8 md:px-16 py-16">
      <h2 className="text-3xl font-bold uppercase tracking-widest mb-8">{about.headline.toUpperCase()}</h2>
      <p className="text-sm leading-relaxed max-w-2xl">{about.body}</p>
    </section>
  );
}

import { about } from "@/lib/data";

export default function About() {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 bg-[#F5F0E8]">
      <p className="font-inter font-medium text-xs uppercase tracking-[0.2em] text-[#C8441B] mb-6">HOW I WORK</p>
      <p className="font-inter font-light text-base leading-relaxed text-[#1A1A18] max-w-2xl">{about.body}</p>
    </section>
  );
}

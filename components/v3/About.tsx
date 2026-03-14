import { about } from "@/lib/data";

export default function About() {
  return (
    <section className="py-20 px-8 md:px-16 border-t border-[#00FF41]/20">
      <h2 className="text-2xl text-[#00FF41] mb-6">&gt; HOW I WORK</h2>
      <p className="text-sm leading-relaxed text-white/80 max-w-2xl">{about.body}</p>
      <span className="block text-[10px] text-[#00FF41]/20 mt-4">{"// END PROCESS"}</span>
    </section>
  );
}

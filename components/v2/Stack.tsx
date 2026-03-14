import { stack } from "@/lib/data";

export default function Stack() {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 bg-[#F5F0E8]">
      <p className="font-inter font-medium text-xs uppercase tracking-[0.2em] text-[#C8441B] mb-8">BUILT WITH</p>
      <p className="font-inter font-light text-sm text-[#1A1A18]">
        {stack.join(" — ")}
      </p>
    </section>
  );
}

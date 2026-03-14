import { services } from "@/lib/data";

export default function Services() {
  return (
    <section className="py-24 px-8 md:px-16 bg-[#F5F0E8]">
      <p className="font-inter text-xs uppercase tracking-[0.2em] text-[#C8441B] mb-12">WHAT I BUILD</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((service) => (
          <div key={service.name}>
            <h3 className="font-playfair font-bold text-2xl text-[#1A1A18] mb-2">{service.name}</h3>
            <p className="font-inter font-light text-sm text-[#1A1A18]/70">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

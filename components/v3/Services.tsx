import { services } from "@/lib/data";

export default function Services() {
  return (
    <section className="py-20 px-8 md:px-16">
      <h2 className="text-2xl text-[#00FF41] mb-8">&gt; SERVICES</h2>
      <div>
        {services.map((service) => (
          <div key={service.name} className="border-b border-[#00FF41]/10 py-6">
            <h3 className="text-lg text-[#00FF41] mb-1">{service.name}</h3>
            <p className="text-sm text-white/60">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

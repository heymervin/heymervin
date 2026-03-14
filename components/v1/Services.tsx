import { services } from "@/lib/data";

export default function Services() {
  return (
    <section className="border-b border-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.name} className="border border-white p-8 -mt-px -ml-px">
            <h3 className="text-xl font-bold uppercase mb-2">{service.name}</h3>
            <p className="text-sm leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

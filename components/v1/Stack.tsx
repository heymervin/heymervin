import { stack } from "@/lib/data";

export default function Stack() {
  return (
    <section className="border-b border-white px-8 md:px-16 py-16">
      <h2 className="text-3xl font-bold uppercase tracking-widest mb-8">TECH STACK</h2>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <span
            key={item}
            className="border border-white px-4 py-2 text-sm uppercase hover:bg-white hover:text-black -mb-px -mr-px cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

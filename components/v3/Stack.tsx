import { stack } from "@/lib/data";

export default function Stack() {
  return (
    <section className="py-20 px-8 md:px-16 border-t border-[#00FF41]/20">
      <h2 className="text-2xl text-[#00FF41] mb-6">&gt; STACK</h2>
      <div className="flex flex-wrap gap-2">
        {stack.map((item) => (
          <span
            key={item}
            className="text-xs border border-[#00FF41]/40 px-3 py-1 text-white/70"
          >
            {item}
          </span>
        ))}
      </div>
      <span className="block text-[10px] text-[#00FF41]/20 mt-6 ml-4">
        TOTAL: {stack.length} TECHNOLOGIES LOADED
      </span>
    </section>
  );
}

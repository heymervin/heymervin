import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section className="py-20 px-8 md:px-16">
      <h2 className="text-2xl text-[#00FF41] mb-8">&gt; PROJECTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="border border-[#00FF41]/40 p-6 hover:border-[#00FF41] hover:shadow-[0_0_10px_rgba(0,255,65,0.3)] transition-all"
          >
            <h3 className="text-xl font-bold text-[#00FF41] mb-2">{project.name}</h3>
            <p className="text-sm text-white/70 mb-4">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-[#00FF41]/60 border border-[#00FF41]/30 px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

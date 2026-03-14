import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 bg-[#F5F0E8]">
      <p className="font-inter text-xs uppercase tracking-[0.2em] text-[#C8441B] mb-12">SELECTED WORK</p>
      <div>
        {projects.map((project) => (
          <div
            key={project.name}
            className="border-b border-[#1A1A18]/20 py-8 flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-8"
          >
            <h3 className="font-playfair font-black text-3xl md:text-5xl text-[#1A1A18] leading-tight">
              {project.name}
            </h3>
            <div className="md:max-w-xs">
              <p className="font-inter font-light text-sm text-[#1A1A18]/70 mb-2">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-inter text-xs uppercase tracking-widest text-[#C8441B]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

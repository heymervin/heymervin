import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section className="border-b border-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.name} className="border border-white p-8 -mt-px -ml-px">
            <h3 className="text-2xl font-bold uppercase mb-2">{project.name}</h3>
            <p className="text-sm leading-relaxed mb-4">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-white px-2 py-1 text-xs uppercase hover:bg-white hover:text-black cursor-default"
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

import { contact } from "@/lib/data";

export default function Contact() {
  return (
    <section className="py-20 px-8 md:px-16 border-t border-[#00FF41]/20">
      <h2
        className="glitch-hover text-4xl md:text-6xl font-bold"
        data-text={contact.headline}
      >
        {contact.headline}
      </h2>
      <p className="text-sm text-white/60 mt-4">{contact.body}</p>
      <div className="flex flex-wrap gap-6 mt-8">
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00FF41] text-sm hover:underline"
        >
          GitHub
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="text-[#00FF41] text-sm hover:underline"
        >
          {contact.email}
        </a>
      </div>
    </section>
  );
}

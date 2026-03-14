import { contact } from "@/lib/data";

export default function Contact() {
  return (
    <section className="px-8 md:px-16 py-16">
      <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-widest">
        {contact.headline.toUpperCase()}
      </h2>
      <p className="text-sm mt-4">{contact.body}</p>
      <div className="flex flex-wrap gap-4 mt-8">
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white px-6 py-3 uppercase text-sm hover:bg-white hover:text-black"
        >
          GitHub
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="border border-white px-6 py-3 uppercase text-sm hover:bg-white hover:text-black"
        >
          {contact.email}
        </a>
      </div>
    </section>
  );
}

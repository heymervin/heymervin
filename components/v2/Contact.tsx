import { contact } from "@/lib/data";

export default function Contact() {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 bg-[#1A1A18]">
      <h2 className="font-playfair font-black text-5xl md:text-8xl text-[#F5F0E8] tracking-tight leading-tight">
        {contact.headline}
      </h2>
      <p className="font-inter font-light text-[#F5F0E8]/70 mt-6">{contact.body}</p>
      <div className="flex flex-wrap gap-8 mt-10">
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-inter text-sm text-[#F5F0E8] border-b border-[#C8441B] hover:text-[#C8441B] pb-1"
        >
          GitHub
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="font-inter text-sm text-[#F5F0E8] border-b border-[#C8441B] hover:text-[#C8441B] pb-1"
        >
          {contact.email}
        </a>
      </div>
    </section>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { href: "/", label: "V1" },
  { href: "/v2", label: "V2" },
  { href: "/v3", label: "V3" },
];

export default function VersionSwitcher() {
  const pathname = usePathname();
  return (
    <nav className="text-xs uppercase tracking-[0.2em] flex gap-4 fixed bottom-4 right-4 z-50 bg-[#F5F0E8] px-3 py-2">
      {routes.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`font-inter ${pathname === href ? "border-b-2 border-[#C8441B] text-[#C8441B]" : "text-[#1A1A18] hover:text-[#C8441B]"}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}

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
    <nav className="font-space-mono text-xs border border-white px-3 py-2 flex gap-4 bg-black fixed bottom-4 right-4 z-50">
      {routes.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`px-1 ${pathname === href ? "bg-white text-black" : "hover:bg-white hover:text-black"}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}

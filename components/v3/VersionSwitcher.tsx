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
    <nav className="font-share-tech text-xs text-[#00FF41] flex gap-4 fixed bottom-4 right-4 z-50 bg-[#0A0A0A] px-2 py-1 border border-[#00FF41]/30">
      {routes.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={pathname === href ? "underline" : "hover:underline opacity-60 hover:opacity-100"}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mervin de Castro — Full-Stack Developer",
  description: "Full-stack developer building web apps, CRM systems, and AI-powered tools for real businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

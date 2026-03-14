import { Space_Mono } from "next/font/google";
import Hero from "@/components/v1/Hero";
import About from "@/components/v1/About";
import Projects from "@/components/v1/Projects";
import Stack from "@/components/v1/Stack";
import Services from "@/components/v1/Services";
import Contact from "@/components/v1/Contact";
import VersionSwitcher from "@/components/v1/VersionSwitcher";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export default function V1Page() {
  return (
    <div className={`${spaceMono.variable} font-space-mono bg-black text-white min-h-screen`}>
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Services />
      <Contact />
      <VersionSwitcher />
    </div>
  );
}

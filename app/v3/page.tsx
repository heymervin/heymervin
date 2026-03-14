import { Share_Tech_Mono } from "next/font/google";
import Hero from "@/components/v3/Hero";
import About from "@/components/v3/About";
import Projects from "@/components/v3/Projects";
import Stack from "@/components/v3/Stack";
import Services from "@/components/v3/Services";
import Contact from "@/components/v3/Contact";
import VersionSwitcher from "@/components/v3/VersionSwitcher";

const shareTech = Share_Tech_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-share-tech",
});

export default function V3Page() {
  return (
    <div className={`${shareTech.variable} font-share-tech scanlines min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden`}>
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

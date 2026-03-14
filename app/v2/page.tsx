import { Playfair_Display, Inter } from "next/font/google";
import Hero from "@/components/v2/Hero";
import About from "@/components/v2/About";
import Projects from "@/components/v2/Projects";
import Stack from "@/components/v2/Stack";
import Services from "@/components/v2/Services";
import Contact from "@/components/v2/Contact";
import VersionSwitcher from "@/components/v2/VersionSwitcher";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

export default function V2Page() {
  return (
    <div className={`${playfair.variable} ${inter.variable} font-inter bg-[#F5F0E8] text-[#1A1A18] min-h-screen`}>
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

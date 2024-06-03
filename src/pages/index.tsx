import HeaderLayout from "@/components/layouts/Header";
import MarqueeLayout from "@/components/layouts/Marquee";
import NavbarLayout from "@/components/layouts/Navbar";
import ProjectsLayout from "@/components/layouts/Projects";
import SkillsLayout from "@/components/layouts/Skills";
import { Frank_Ruhl_Libre } from "next/font/google";

const frank = Frank_Ruhl_Libre({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`w-full flex flex-col ${frank.className} bg-primary text-text overflow-x-hidden`}
    >
      <NavbarLayout />
      <HeaderLayout />
      <MarqueeLayout />
      <SkillsLayout />
      <ProjectsLayout />
    </div>
  );
}

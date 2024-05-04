import Image from "next/image";
import { Frank_Ruhl_Libre, Lato } from "next/font/google";
import ToggleNav from "@/component/element/ToggleNav";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  style: ["normal"],
});
const frank = Frank_Ruhl_Libre({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`w-full flex flex-col ${frank.className} bg-primary text-text`}
    >
      <div className="w-full px-10 py-5 flex flex-row justify-between items-center border-b-2 border-secondary">
        <a href="/" className="text-3xl">
          RyAlaan
        </a>
        <div className="hidden lg:flex flex-row gap-10 text-xl">
          <a href="#skills">Skills</a>
          <a href="#projects">Project</a>
          <a href="#contact">Contact Me</a>
        </div>
        <ToggleNav />
      </div>
    </div>
  );
}

import HeaderLayout from "@/components/layouts/Header";
import Marquee from "@/components/layouts/Marquee";
import NavbarLayout from "@/components/layouts/Navbar";
import { Frank_Ruhl_Libre, Lato } from "next/font/google";
import Image from "next/image";

const frank = Frank_Ruhl_Libre({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`w-full min-h-[200vh] flex flex-col ${frank.className} bg-primary text-text overflow-x-hidden`}
    >
      <NavbarLayout />
      <HeaderLayout />
      <Marquee />
      
    </div>
  );
}

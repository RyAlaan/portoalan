import NavbarLayout from "@/components/layouts/Navbar";
import { Frank_Ruhl_Libre, Lato } from "next/font/google";

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
      className={`w-full min-h-[200vh] flex flex-col ${frank.className} bg-primary text-text`}
    >
      <NavbarLayout />
    </div>
  );
}

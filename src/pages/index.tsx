import Image from "next/image";
import { Lato, Frank_Ruhl_Libre } from "next/font/google";

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  style: "normal",
  subsets: ["latin"],
});
const frank = Frank_Ruhl_Libre({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${frank.className} w-full min-h-screen flex bg-primary text-text`}
    >
      <div className="w-full h-fit flex flex-row border-b-2 border-b-secondary">
        <div className="w-full flex flex-row justify-between border-r-2 border-r-secondary">
          
        </div>

      </div>
    </div>
  );
}

import ToggleNav from "@/component/element/ToggleNav";
import { useState } from "react";

const NavbarLayout : React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  return (
    <div className="w-full px-10 py-5 flex flex-row justify-between items-center border-b-2 border-secondary">
      <a href="/" className="text-3xl">
        RyAlaan
      </a>
      <div className="hidden lg:flex flex-row gap-10 text-xl">
        <a href="#skills">Skills</a>
        <a href="#projects">Project</a>
        <a href="#contact">Contact Me</a>
      </div>
      <ToggleNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </div>
  );
};

export default NavbarLayout;

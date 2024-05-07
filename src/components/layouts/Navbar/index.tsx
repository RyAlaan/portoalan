import ToggleNav from "@/components/elements/ToggleNav";
import { useState } from "react";

const NavbarLayout = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  return (
    <div className="fixed z-[99999] w-full px-20 py-5 flex flex-row justify-between items-center bg-primary border-b-2 border-secondary">
      <a href="/" className="text-3xl">
        RyAlaan
      </a>
      <div className="flex-row hidden gap-10 text-xl lg:flex">
        <div className="flex flex-col group">
          <a href="#skills">Skills</a>
          <span className="w-0 h-0.5 rounded-full bg-text transition-all duration-500 group-hover:w-full"></span>
        </div>
        <div className="flex flex-col group">
          <a href="#projects">Project</a>
          <span className="w-0 h-0.5 rounded-full bg-text transition-all duration-500 group-hover:w-full"></span>
        </div>
        <div className="flex flex-col group">
          <a href="#contact">Contact Me</a>
          <span className="w-0 h-0.5 rounded-full bg-text transition-all duration-500 group-hover:w-full"></span>
        </div>
      </div>
      <ToggleNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </div>
  );
};

export default NavbarLayout;

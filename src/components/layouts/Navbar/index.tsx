import ToggleNav from "@/components/elements/ToggleNav";
import { useState } from "react";

const NavbarLayout = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  return (
    <div className="fixed w-full px-10 py-5 flex flex-row justify-between items-center bg-primary border-b-2 border-secondary">
      <a href="/" className="text-3xl">
        RyAlaan
      </a>
      <div className="hidden lg:flex flex-row gap-10 text-xl">
        <div className="group flex flex-col">
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

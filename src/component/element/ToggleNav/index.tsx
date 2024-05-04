import clsx from "clsx";
import { useState } from "react";

const ToggleNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div
      onClick={() => setIsNavOpen(!isNavOpen)}
      className={clsx(
        `w-8 h-8 flex lg:hidden gap-1 justify-center relative group transition-all duration-700`,
        {
          "rotate-45": isNavOpen,
        }
      )}
    >
      <div className="flex flex-col gap-1 justify-center">
        <div
          className={clsx(
            "absolute top-0 left-0 w-2 h-2 rounded-full bg-transparent border-2",
            {
              "border-secondary": !isNavOpen,
              "border-transparent transition-all duration-300": isNavOpen,
            }
          )}
        ></div>
        <div className="w-2 h-2 rounded-full bg-transparent border-2 border-secondary group-hover:border-transparent transition-all duration-300"></div>
        <div
          className={clsx(
            `absolute bottom-0 left-0 w-2 h-2 rounded-full bg-transparent border-2`,
            {
              " border-secondary": !isNavOpen,
              "border-transparent transition-all duration-300": isNavOpen,
            }
          )}
        ></div>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center">
        <div className="absolute top-0 w-2 h-2 rounded-full bg-transparent border-2 border-secondary group-hover:border-transparent transition-all duration-300"></div>
        <div
          className={clsx(
            { "w-8 border-text": isNavOpen, },
            "w-2 group-hover:w-8 h-2 rounded-full bg-transparent border-2 group-hover:border-text transition-all duration-700"
          )}
        ></div>
        <div
          className={clsx(
            { "h-8 border-text": isNavOpen },
            "absolute w-2 h-2 group-hover:h-full rounded-full bg-transparent border-2 group-hover:border-text transition-all duration-700"
          )}
        ></div>
        <div
          className={clsx(
            { "border-transparent": isNavOpen },
            "absolute bottom-0 w-2 h-2 rounded-full bg-transparent border-2 border-secondary group-hover:border-transparent transition-all duration-300"
          )}
        ></div>
      </div>
      <div className="flex flex-col gap-1 justify-center">
        <div
          className={clsx(
            `absolute top-0 right-0 w-2 h-2 rounded-full bg-transparent border-2`,
            {
              " border-secondary": !isNavOpen,
              "border-transparent transition-all duration-300": isNavOpen,
            }
          )}
        ></div>
        <div className="w-2 h-2 rounded-full bg-transparent border-2 border-secondary  group-hover:border-transparent transition-all duration-300"></div>
        <div
          className={clsx(
            `absolute bottom-0 right-0 w-2 h-2 rounded-full bg-transparent border-2`,
            {
              " border-secondary": !isNavOpen,
              "border-transparent transition-all duration-300": isNavOpen,
            }
          )}
        ></div>
      </div>
    </div>
  );
};

export default ToggleNav;

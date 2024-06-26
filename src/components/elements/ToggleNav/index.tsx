import clsx from "clsx";
import { Dispatch, SetStateAction, useState } from "react";

interface ToggleNavProps {
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleNav = ({ isNavOpen, setIsNavOpen }: ToggleNavProps) => {
  return (
    <div
      onClick={() => setIsNavOpen(!isNavOpen)}
      className={clsx(
        `w-8 h-8 flex gap-1 justify-center relative group transition-all duration-700 cursor-pointer`,
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
              "border-transparent transition-all duration-300":
                isNavOpen,
            }
          )}
        ></div>
        <div
          className={clsx(
            { "border-transparent": isNavOpen },
            "w-2 h-2 rounded-full bg-transparent border-2 border-secondary group-hover:border-transparent transition-all duration-300"
          )}
        ></div>
        <div
          className={clsx(
            `absolute bottom-0 left-0 w-2 h-2 rounded-full bg-transparent border-2`,
            {
              " border-secondary": !isNavOpen,
              "border-transparent transition-all duration-300":
                isNavOpen,
            }
          )}
        ></div>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center">
        <div
          className={clsx(
            { "border-transparent": isNavOpen },
            "absolute top-0 w-2 h-2 rounded-full bg-transparent border-2 border-secondary group-hover:border-transparent transition-all duration-300"
          )}
        ></div>
        <div
          className={clsx(
            { "w-8 border-text": isNavOpen },
            "w-2 group-hover:w-8 h-2 rounded-full bg-transparent border-2 border-secondary group-hover:border-text transition-all duration-700"
          )}
        ></div>
        <div
          className={clsx(
            { "h-8 border-text": isNavOpen },
            "absolute w-2 h-2 group-hover:h-full rounded-full bg-transparent border-2 border-secondary group-hover:border-text transition-all duration-700"
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
              "border-transparent transition-all duration-300":
                isNavOpen,
            }
          )}
        ></div>
        <div
          className={clsx(
            { "border-transparent": isNavOpen },
            "w-2 h-2 rounded-full bg-transparent border-2 border-secondary  group-hover:border-transparent transition-all duration-300"
          )}
        ></div>
        <div
          className={clsx(
            `absolute bottom-0 right-0 w-2 h-2 rounded-full bg-transparent border-2`,
            {
              " border-secondary": !isNavOpen,
              "border-transparent transition-all duration-300":
                isNavOpen,
            }
          )}
        ></div>
      </div>
    </div>
  );
};

export default ToggleNav;

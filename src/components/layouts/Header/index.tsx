import Stars from "@/components/elements/Stars";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeaderLayout = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative mt-20 px-6 md:px-14 lg:px-20 md:py-20 lg:py-28 gap-y-14 flex flex-col-reverse md:flex-row items-center justify-between">
      <div className="text-3xl md:text-5xl">
        <p>Hello There 👋.</p>
        <p>
          I'm{" "}
          <span className="relative group">
            <span
              className={`absolute z-0 -rotate-3 h-6 md:h-10 bg-gradient transition-all duration-700 ease-out ${
                loaded ? "w-full  bottom-2" : "w-0 bottom-0"
              }`}
            ></span>
            <span className="relative z-[1]">Derry Alantis,</span>
          </span>
        </p>
        <p>A Junior Web Developer.</p>
      </div>
      <div className="relative w-[300px] h-[300px] flex justify-center items-center ">
        <div className="h-full flex flex-row justify-center items-center gap-x-10">
          <div className="w-8 h-4/6 md:h-full self-center bg-[#D9D9D9]"></div>
          <div className="w-8 h-5/6 md:h-[120%] bg-[#D9D9D9]"></div>
          <div className="w-8 h-4/6 md:h-full self-center bg-[#D9D9D9]"></div>
        </div>
        <div className="absolute -rotate-45 border-b-4 border-l-4 w-40 md:w-52 h-40 md:h-52 border-text bg-"></div>
      </div>
      <Stars />
      <div className="absolute -bottom-40 -right-10 w-28 h-40 bg-transparent border-4 border-text"></div>
    </div>
  );
};

export default HeaderLayout;

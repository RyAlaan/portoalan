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
    <div className="flex flex-row items-center justify-between px-20 mt-20 py-28">
      <div className="text-5xl">
        <p>Hello There 👋.</p>
        <p>
          I'm{" "}
          <span className="relative group">
            <span
              className={`absolute z-0 -rotate-3 h-10 bg-gradient transition-all duration-700 ${
                loaded ? "w-full  bottom-2" : "w-0 bottom-0"
              }`}
            ></span>
            <span className="relative z-[1]">Derry Alantis,</span>
          </span>
        </p>
        <p>A Junior Web Developer.</p>
      </div>
      <div className="w-[300px] h-[300px] flex justify-center items-start">
        <div className="flex flex-row">
          <div className="w-5 h-5/6 bg-[#D9D9D9]">asdf</div>
          <div className="w-5 h-full bg-[#D9D9D9]">asdf</div>
          <div className="w-5 h-5/6 bg-[#D9D9D9]">asdf</div>
        </div>
        <div className="-rotate-45 border-b-4 border-l-4 w-52 h-52 border-text"></div>
      </div>
      <div className="absolute bottom-20 left-10 grid grid-flow-col grid-rows-2 gap-4">
        <Image
          src="/star.svg"
          alt="star"
          className=""
          width={40}
          height={40}
          priority
        />
        <Image
          src="/star.svg"
          alt="star"
          className=""
          width={40}
          height={40}
          priority
        />
        <Image
          src="/star.svg"
          alt="star"
          className=""
          width={40}
          height={40}
          priority
        />
        <Image
          src="/star.svg"
          alt="star"
          className=""
          width={40}
          height={40}
          priority
        />
        <Image
          src="/star.svg"
          alt="star"
          className=""
          width={40}
          height={40}
          priority
        />
        <Image
          src="/star.svg"
          alt="star"
          className=""
          width={40}
          height={40}
          priority
        />
      </div>
    </div>
  );
};

export default HeaderLayout;

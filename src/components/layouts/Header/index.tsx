import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HeaderLayout = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".mark",
      {
        width: "0%",
        bottom: 0,
        rotate: 0,
      },
      {
        width: "100%",
        delay: 0.7,
        bottom: "0.5rem",
        ease: "out",
        rotate: "-3deg",
      }
    );

    gsap.to(".side", {
      height: "100%",
      delay: 0.7,
      ease: "linear",
    });

    gsap.to(".mid", {
      height: "120%",
      delay: 0.7,
      ease: "linear",
    });
  });

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-20 px-6 md:px-14 lg:px-20 md:py-20 lg:py-28 xl:px-0 gap-y-14 flex flex-col-reverse md:flex-row items-center justify-between">
      <div className="text-3xl md:text-5xl">
        <p>Hello There 👋.</p>
        <p>
          I'm{" "}
          <span className="relative group">
            <span
              className={`mark absolute z-0 h-6 md:h-10 bg-gradient `}
            ></span>
            <span className="relative z-[1]">Derry Alantis,</span>
          </span>
        </p>
        <p>A Junior Web Developer.</p>
      </div>
      <div className="relative w-[300px] h-[300px] flex justify-center items-center ">
        <div className="h-full flex flex-row justify-center items-center gap-x-10">
          <div className="side w-8 self-center bg-[#D9D9D9]"></div>
          <div className="mid w-8 bg-[#D9D9D9]"></div>
          <div className="side w-8 self-center bg-[#D9D9D9]"></div>
        </div>
        <div className="absolute -rotate-45 border-b-4 border-l-4 w-48 md:w-52 h-48 md:h-52 border-text bg-"></div>
      </div>
      <div className="absolute bottom-0 left-10 hidden md:grid grid-flow-col grid-rows-2 lg:gap-4">
        <Image
          src="/star.svg"
          alt="star"
          className="-scale-75 lg:scale-100"
          width={40}
          height={40}
          priority
        />
        <Image
          src="/star.svg"
          alt="star"
          className="-scale-75  lg:scale-100"
          width={40}
          height={40}
          priority
        />
        <Image
          src="/star.svg"
          alt="star"
          className="-scale-75  lg:scale-100"
          width={40}
          height={40}
          priority
        />
        <Image
          src="/star.svg"
          alt="star"
          className="-scale-75  lg:scale-100"
          width={40}
          height={40}
          priority
        />
        <Image
          src="/star.svg"
          alt="star"
          className="-scale-75  lg:scale-100"
          width={40}
          height={40}
          priority
        />
        <Image
          src="/star.svg"
          alt="star"
          className="-scale-75  lg:scale-100"
          width={40}
          height={40}
          priority
        />
      </div>
    </div>
  );
};

export default HeaderLayout;

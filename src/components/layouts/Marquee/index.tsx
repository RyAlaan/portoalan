import useResize from "@/hooks/useResize";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Lato } from "next/font/google";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./index.module.css";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  style: ["normal"],
});

const Marquee = () => {
  // useEffect(() => {
  //   // const inner = document.getElementById("marquee__inner");
  //   const parts = document.querySelectorAll<HTMLElement>(".marquee__part");

  //   let totalWidth = 0;
  //   parts.forEach((part) => {
  //     totalWidth += part.offsetWidth;
  //   });

  //   let totalGap = (parts.length - 1) * 32;

  //   gsap.fromTo(
  //     "#marquee__inner",
  //     { x: 0 },
  //     {
  //       x: -1 * (totalWidth + totalGap),
  //       ease: "none",
  //       repeat: -1,
  //       duration: 10,
  //     }
  //   );
  // }, []);

  return (
    <div
      className={`${lato.className} relative mt-12 flex flex-row overflow-hidden gap-4 select-none font-lato text-text font-semibold text-2xl rotate-2 bg-[#E3C696]`}
    >
      <div className={`${styles.marquee} min-w-full justify-around flex flex-row shrink-0`}>
        <div className="marquee__part">
          Student
          <div className="star ">
            <Image
              src="/marquee.svg"
              alt="star"
              className="transition-all mr-8"
              width={40}
              height={40}
            />
          </div>
        </div>
        <div className="marquee__part">
          Derry Alantis
          <div className="star ">
            <Image
              src="/marquee.svg"
              alt="star"
              className="transition-all mr-8"
              width={40}
              height={40}
            />
          </div>
        </div>
        <div className="marquee__part">
          Junior Web Developer
          <div className="star ">
            <Image
              src="/marquee.svg"
              alt="star"
              className="transition-all mr-8"
              width={40}
              height={40}
            />
          </div>
        </div>
        <div className="marquee__part">
          Student
          <div className="star ">
            <Image
              src="/marquee.svg"
              alt="star"
              className="transition-all mr-8"
              width={40}
              height={40}
            />
          </div>
        </div>
        <div className="marquee__part">
          Derry Alantis
          <div className="star ">
            <Image
              src="/marquee.svg"
              alt="star"
              className="transition-all mr-8"
              width={40}
              height={40}
            />
          </div>
        </div>
        <div className="marquee__part">
          Junior Web Developer
          <div className="star ">
            <Image
              src="/marquee.svg"
              alt="star"
              className="transition-all mr-8"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
      <div className={`${styles.marquee} min-w-full justify-around flex flex-row shrink-0`}>
        <div className="marquee__part">
          Student
          <div className="star ">
            <Image
              src="/marquee.svg"
              alt="star"
              className="transition-all mr-8"
              width={40}
              height={40}
            />
          </div>
        </div>
        <div className="marquee__part">
          Derry Alantis
          <div className="star ">
            <Image
              src="/marquee.svg"
              alt="star"
              className="transition-all mr-8"
              width={40}
              height={40}
            />
          </div>
        </div>
        <div className="marquee__part">
          Junior Web Developer
          <div className="star ">
            <Image
              src="/marquee.svg"
              alt="star"
              className="transition-all mr-8"
              width={40}
              height={40}
            />
          </div>
        </div>
        <div className="marquee__part">
          Student
          <div className="star ">
            <Image
              src="/marquee.svg"
              alt="star"
              className="transition-all mr-8"
              width={40}
              height={40}
            />
          </div>
        </div>
        <div className="marquee__part">
          Derry Alantis
          <div className="star ">
            <Image
              src="/marquee.svg"
              alt="star"
              className="transition-all mr-8"
              width={40}
              height={40}
            />
          </div>
        </div>
        <div className="marquee__part">
          Junior Web Developer
          <div className="star ">
            <Image
              src="/marquee.svg"
              alt="star"
              className="transition-all mr-8"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;

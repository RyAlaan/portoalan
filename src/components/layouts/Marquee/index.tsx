import { Lato } from "next/font/google";
import Image from "next/image";
import styles from "./index.module.css";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  style: ["normal"],
});

const MarqueeLayout = () => {
  return (
    <div
      className={`${lato.className} relative my-20 flex flex-row overflow-hidden gap-4 select-none font-lato text-text font-semibold text-2xl rotate-2 bg-tertiary`}
    >
      <div
        className={`${styles.marquee} min-w-full gap-x-5 justify-around flex flex-row items-center shrink-0`}
      >
        <div className="marquee__part">Student</div>
        <div className="star ">
          <Image
            src="/marquee.svg"
            alt="star"
            className="transition-all"
            width={40}
            height={40}
          />
        </div>
        <div className="marquee__part">Derry Alantis</div>
        <div className="star ">
          <Image
            src="/marquee.svg"
            alt="star"
            className="transition-all"
            width={40}
            height={40}
          />
        </div>
        <div className="marquee__part">Junior Web Developer</div>
        <div className="star ">
          <Image
            src="/marquee.svg"
            alt="star"
            className="transition-all"
            width={40}
            height={40}
          />
        </div>
        <div className="marquee__part">Student</div>
        <div className="star ">
          <Image
            src="/marquee.svg"
            alt="star"
            className="transition-all"
            width={40}
            height={40}
          />
        </div>
        <div className="marquee__part">Derry Alantis</div>
        <div className="star ">
          <Image
            src="/marquee.svg"
            alt="star"
            className="transition-all"
            width={40}
            height={40}
          />
        </div>
        <div className="marquee__part">Junior Web Developer</div>
        <div className="star ">
          <Image
            src="/marquee.svg"
            alt="star"
            className="transition-all"
            width={40}
            height={40}
          />
        </div>
      </div>
      <div
        className={`${styles.marquee} min-w-full gap-x-5 justify-around flex flex-row items-center shrink-0`}
      >
        <div className="marquee__part">Student</div>
        <div className="star ">
          <Image
            src="/marquee.svg"
            alt="star"
            className="transition-all"
            width={40}
            height={40}
          />
        </div>
        <div className="marquee__part">Derry Alantis</div>
        <div className="star ">
          <Image
            src="/marquee.svg"
            alt="star"
            className="transition-all"
            width={40}
            height={40}
          />
        </div>
        <div className="marquee__part">Junior Web Developer</div>
        <div className="star ">
          <Image
            src="/marquee.svg"
            alt="star"
            className="transition-all"
            width={40}
            height={40}
          />
        </div>
        <div className="marquee__part">Student</div>
        <div className="star ">
          <Image
            src="/marquee.svg"
            alt="star"
            className="transition-all"
            width={40}
            height={40}
          />
        </div>
        <div className="marquee__part">Derry Alantis</div>
        <div className="star ">
          <Image
            src="/marquee.svg"
            alt="star"
            className="transition-all"
            width={40}
            height={40}
          />
        </div>
        <div className="marquee__part">Junior Web Developer</div>
        <div className="star ">
          <Image
            src="/marquee.svg"
            alt="star"
            className="transition-all"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default MarqueeLayout;

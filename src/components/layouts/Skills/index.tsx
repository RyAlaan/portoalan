import Image from "next/image";
import skillsData from "./skillsData.json";
import { SkillType } from "@/types/skills.types";
import styles from "./skills.module.css";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const SkillsLayout = () => {
  const skills = skillsData.skills as SkillType[];
  const textParallax = useRef(null);

  useEffect(() => {
    const el = textParallax.current;
    gsap.to(el, {
      x: 0.5 * ScrollTrigger.maxScroll(window),
      ease: "linear",
      scrollTrigger: {
        trigger: "#textParallax",
        invalidateOnRefresh: true,
        scrub: 0,
      },
    });
  }, []);

  return (
    <div
      id="skills"
      className="relative w-full min-h-[200vh] px-32 py-28 flex flex-col gap-y-20"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-y-20">
        <div className="w-full gap-x-5 flex flex-row items-center justify-center z-10">
          <span className="w-64 h-0.5 bg-secondary rounded-full"></span>
          <h1 className="text-4xl font-bold">Skills</h1>
          <span className="w-64 h-0.5 bg-secondary rounded-full"></span>
        </div>
        <div className="w-full flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="relative w-36 md:w-56 z-10 cursor-pointer group"
            >
              <div
                className="px-2 py-1 md:px-5 md:py-4 flex flex-row items-center gap-x-4 border-2 border-border
             bg-primary"
              >
                <Image
                  src={`/skills/${skill.image}`}
                  alt={skill.name}
                  width={32}
                  height={32}
                />
                <div className="font-frank md:font-medium">
                  <h3 className="text-sm md:text-xl">{skill.name}</h3>
                  <p className="text-xs">{skill.stack}</p>
                </div>
              </div>
              <div className="absolute left-2 top-2 md:left-4 md:top-4 group-hover:left-0 group-hover:top-0 w-full h-full bg-border -z-10 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
      <h1
        id="textParallax"
        className={`absolute left-0 top-44 text-9xl font-frank font-bold text-transparent ${styles.fontOutline} z-[1]`}
        ref={textParallax}
      >
        My Skills
      </h1>
    </div>
  );
};

export default SkillsLayout;

import Image from "next/image";
import skillsData from "./skillsData.json";
import { SkillType } from "@/types/skills.types";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const SkillsLayout = () => {
  const skills = skillsData.skills as SkillType[];
  const textParallax = useRef(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(textParallax.current, {
      x: 0.5 * ScrollTrigger.maxScroll(window),
      y: 0.2 * ScrollTrigger.maxScroll(window),
      ease: "linear",
      scrollTrigger: {
        start: "bottom bottom",
        end: "800% top",
        trigger: "#textParallax",
        invalidateOnRefresh: true,
        scrub: 0,
      },
    });

    if (skillsRef.current) {
      const elements = skillsRef.current.querySelectorAll(".items-skill");
      elements.forEach((e: any) => {
        gsap.fromTo(
          e,
          { opacity: 0, x: -200 },
          {
            duration: 2,
            ease: "power2.out",
            opacity: 1,
            x: 0,
            scrollTrigger: {
              // markers: true,
              start: "center 95%",
              end: "bottom 95%",
              trigger: e,
              invalidateOnRefresh: true,
              scrub: 0,
            },
          }
        );
      });
    }
  }, []);

  return (
    <div
      id="skills"
      className="relative mx-auto min-h-[calc(100vh+2rem)] md:min-h-0 w-full max-w-7xl px-6 py-10 md:py-28 flex flex-col gap-y-20"
    >
      <div className="w-full gap-x-5 flex flex-row items-center justify-center z-10">
        <span className="w-28 md:w-64 h-0.5 bg-secondary rounded-full"></span>
        <h1 className="text-xl md:text-4xl font-bold">Skills</h1>
        <span className="w-28 md:w-64 h-0.5 bg-secondary rounded-full"></span>
      </div>
      <div
        ref={skillsRef}
        className="w-full flex flex-wrap items-center justify-center gap-8 md:gap-16"
      >
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="items-skill relative w-36 md:w-56 z-10 cursor-pointer group"
          >
            <div
              className="px-2 py-1 md:px-5 md:py-4 flex flex-row items-center gap-x-4 border-2 border-border
            bg-primary"
            >
              <Image
                src={`/skills/${skill.image}`}
                alt={skill.name}
                width={28}
                height={28}
              />
              <div className="font-frank font-medium">
                <h3 className="md:text-xl">{skill.name}</h3>
                <p className="text-sm">{skill.stack}</p>
              </div>
            </div>
            <div className="absolute left-2 top-2 md:left-4 md:top-4 group-hover:left-0 group-hover:top-0 w-full h-full bg-border -z-10 transition-all duration-500"></div>
          </div>
        ))}
      </div>
      <h1
        id="textParallax"
        className={`absolute left-0 top-20 text-9xl font-frank font-bold text-transparent font-outline z-[1]`}
        ref={textParallax}
      >
        My Skills
      </h1>
      <div className="absolute bottom-10 w-1/12 h-64 border-text border-l-4 border-b-4"></div>
    </div>
  );
};

export default SkillsLayout;

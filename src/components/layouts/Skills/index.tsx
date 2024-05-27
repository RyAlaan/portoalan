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
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(textParallax.current, {
      x: 0.5 * ScrollTrigger.maxScroll(window),
      y: 0.2 * ScrollTrigger.maxScroll(window),
      ease: "linear",
      scrollTrigger: {
        // markers: true,
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
              markers: true,
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
      className="relative w-full min-h-[200vh] px-32 py-28 flex flex-col gap-y-20"
    >
      <div className="w-full gap-x-5 flex flex-row items-center justify-center z-10">
        <span className="w-64 h-0.5 bg-secondary rounded-full"></span>
        <h1 className="text-4xl font-bold">Skills</h1>
        <span className="w-64 h-0.5 bg-secondary rounded-full"></span>
      </div>
      <div
        ref={skillsRef}
        className="w-full flex flex-wrap items-center gap-16"
      >
        {skills.map((skill) => (
          <div key={skill.id} className="items-skill relative w-56 z-10 group">
            <div className="px-5 py-4 flex flex-row items-center gap-x-4 border-2 border-border bg-primary cursor-pointer">
              <Image
                src={`/skills/${skill.image}`}
                alt={skill.name}
                width={32}
                height={32}
              />
              <div className="font-frank font-medium">
                <h3 className="text-xl">{skill.name}</h3>
                <p className="text-sm">{skill.stack}</p>
              </div>
            </div>
            <div className="absolute left-4 top-4 group-hover:left-0 group-hover:top-0 w-full h-full bg-border -z-10 transition-all duration-700"></div>
          </div>
        ))}
      </div>
      <h1
        id="textParallax"
        className={`absolute left-0 top-20 text-9xl font-frank font-bold text-transparent ${styles.fontOutline} z-[1]`}
        ref={textParallax}
      >
        My Skills
      </h1>
    </div>
  );
};

export default SkillsLayout;

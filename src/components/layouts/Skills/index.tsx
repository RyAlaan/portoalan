import Image from "next/image";
import skillsData from "./skillsData.json";
import { SkillType } from "@/types/skills.types";
import styles from "./index.module.css";

const SkillsLayout = () => {
  const skills = skillsData.skills as SkillType[];

  return (
    <div
      id="skills"
      className="relative w-full px-3 py-10 md:px-32 md:py-28 xl:p-0 flex flex-col"
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
        className={`absolute left-0 text-9xl font-frank font-bold text-transparent ${styles.fontOutline} z-[1]`}
      >
        My Skills
      </h1>
    </div>
  );
};

export default SkillsLayout;

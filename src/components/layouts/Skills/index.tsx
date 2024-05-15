import Image from "next/image";
import skillsData from "./skillsData.json";
import { SkillType } from "@/types/skills.types";
import styles from "./index.module.css";

const SkillsLayout = () => {
  const skills = skillsData.skills as SkillType[];

  return (
    <div
      id="skills"
      className="relative w-full px-32 py-28 flex flex-col gap-y-20"
    >
      <div className="w-full gap-x-5 flex flex-row items-center justify-center z-10">
        <span className="w-64 h-0.5 bg-secondary rounded-full"></span>
        <h1 className="text-4xl font-bold">Skills</h1>
        <span className="w-64 h-0.5 bg-secondary rounded-full"></span>
      </div>
      <div className="w-full flex flex-wrap items-center gap-16">
        {skills.map((skill) => (
          <div key={skill.id} className="relative w-56 z-10 group">
            <div
              className="px-5 py-4 flex flex-row items-center gap-x-4 border-2 border-border
           bg-primary"
            >
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
        className={`absolute left-0 text-9xl font-frank font-bold text-blue-500 ${
          styles.fontOutline
        } z-[1]`}
      >
        My Skills
      </h1>
    </div>
  );
};

export default SkillsLayout;

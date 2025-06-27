import React from "react";
import SkillsIcon from "../../components/skillsIcon/SkillsIcon";
import { backendDevelopment, cloudAndDeployment, frontEndDevelopment, libraryAndDevTools, programmingLanguages } from "../../utility/constants";


const Skills = () => {
  return (
    <div className="w-full flex flex-col items-center absolute mt-20">
      <h1 className="text-2xl font-bold border-4 border-black py-1 px-10">
        SKILLS
      </h1>
      <div className="w-1/4">
        <h1 className="text-center font-bold text-xl my-4">Programming Languages</h1>
        <div className="flex justify-evenly">
          {programmingLanguages.map((program) => (
            <SkillsIcon
              key={program.name}
              name={program.name}
              icon={program.imgUrl}
            />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-center font-bold text-xl my-4">Frontend Development</h1>
        <div className="flex justify-evenly">
          {frontEndDevelopment.map((program) => (
            <SkillsIcon
              key={program.name}
              name={program.name}
              icon={program.imgUrl}
            />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-center font-bold text-xl my-4">Backend Development</h1>
        <div className="flex justify-evenly">
          {backendDevelopment.map((program) => (
            <SkillsIcon
              key={program.name}
              name={program.name}
              icon={program.imgUrl}
            />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-center font-bold text-xl my-4">Libraries & Devtools</h1>
        <div className="flex justify-evenly">
          {libraryAndDevTools.map((program) => (
            <SkillsIcon
              key={program.name}
              name={program.name}
              icon={program.imgUrl}
            />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-center font-bold text-xl my-4">Cloud</h1>
        <div className="flex justify-evenly">
          {cloudAndDeployment.map((program) => (
            <SkillsIcon
              key={program.name}
              name={program.name}
              icon={program.imgUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

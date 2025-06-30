import React from "react";
import Cards from "../../components/cards/Cards";
import { projects } from "../../utility/constants";

const Projects = () => {
  return (
    <div className="w-full flex flex-col items-center mt-20">
      <h1 className="text-2xl font-bold border-4 border-black py-1 px-10">
        Projects
      </h1>
      <div className="flex m-2 flex-wrap justify-center">
        {projects.map((project) => (
          <Cards
            key={project.projectTitle}
            projectTitle={project.projectTitle}
            projectImg={project.projectImg}
            projectDescription={project.projectDescription}
            gitHubUrl={project.gitHubUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

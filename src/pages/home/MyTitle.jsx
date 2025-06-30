import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaDownload } from "react-icons/fa6";
import {
  GITHUB_LINK,
  LEETCODE_LINK,
  LINKEDIN_LINK,
} from "../../utility/constants";

const MyTitle = () => {
  return (
    <div className="w-1/2 h-96 flex flex-col justify-center mt-20">
      <h2 className="text-4xl my-2 font-bold">Hi, I am Karthik</h2>
      <p className="text-2xl my-2 font-semibold">Software Engineer</p>
      <p className="w-11/12 my-2">
        Experienced Full Stack Developer with 3.5 years of expertise in
        cloud-based web application design, development, and maintenance.
        Proficient in React, JavaScript, and TypeScript, with hands-on
        experience in Node.js for API development, with a passion for continuous
        learning and driving innovation in fast-paced environments.
      </p>
      <div className="w-11/12">
        <h1 className="my-4 text-lg font-semibold">Connect With Me</h1>
        <ul className="flex items-center justify-between">
          <li className="bg-blue-950 p-3 rounded-lg cursor-pointer hover:bg-gradient-to-b from-blue-500">
            <a href={LINKEDIN_LINK} target="_new">
              <FaLinkedin fill="white" fontSize={25} />
            </a>
          </li>
          <li className="bg-blue-950 p-3 rounded-lg cursor-pointer hover:bg-gradient-to-b from-blue-500">
            <a href={GITHUB_LINK} target="_new">
              <FaGithubSquare fill="white" fontSize={25} />
            </a>
          </li>
          <li className="bg-blue-950 p-3 rounded-lg cursor-pointer hover:bg-gradient-to-b from-blue-500">
            <a href={LEETCODE_LINK} target="_new">
              <SiLeetcode fill="white" fontSize={25} />
            </a>
          </li>
          <li>
            <button className="flex items-center text-lg font-bold bg-blue-950 text-white p-2 rounded-lg hover:bg-gradient-to-b from-blue-600">
              
              <span>
                <FaDownload />
              </span>
              <span className="mx-2">Resume</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyTitle;

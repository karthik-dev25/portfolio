import React from "react";

const Cards = ({ projectImg, projectTitle, projectDescription, gitHubUrl }) => {
  return (
    <div className="w-50 h-68 p-2 my-4 mx-2 shadow-2xl rounded-md bg-blue-950 text-white hover:bg-gradient-to-b from-blue-500 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
      <div className="w-50 flex justify-evenly absolute mt-3">
        <button className=" bg-blue-950 text-white text-sm rounded-lg px-2 py-1 hover:bg-gradient-to-b from-blue-500">
          <a href={gitHubUrl} target="_new">Github</a>
        </button>
        <button className=" bg-blue-950 text-white text-sm rounded-lg px-2 py-1 hover:bg-gradient-to-b from-blue-500">
          <a href={gitHubUrl} target="_new">View</a>
        </button>
      </div>
      <img
        className="border-1 border-white rounded-lg"
        src={projectImg}
        alt={projectTitle}
      />
      <h1 className="font-bold text-lg my-1">{projectTitle}</h1>
      <p className="w-full text-xs">{projectDescription}</p>
    </div>
  );
};

export default Cards;

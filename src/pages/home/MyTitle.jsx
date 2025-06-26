import React from "react";

const MyTitle = () => {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-4xl my-2 font-bold">Hi, I am Karthik</h2>
      <p className="text-2xl font-semibold">Software Engineer</p>
      <p>Full Stack Developer </p>
      <div className="my-2">
        <h1 className="my-2 text-lg font-semibold">Connect With Me</h1>
        <ul className="flex justify-between">
          <li>Linkedin</li>
          <li>Github</li>
          <li>LeetCode</li>
        </ul>
      </div>
      <p className="text-xl font-semibold my-2" >Or</p>
      <div>
        <p className="text-xl font-semibold">karthirk0388@gmail.com</p>
        <p className="text-xl font-semibold">7702917785</p>
      </div>
    </div>
  );
};

export default MyTitle;

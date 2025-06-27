import React from "react";
import Header from "../../components/header/Header";
import Skills from "../skills/Skills";
import ProfileContainer from "./ProfileContainer";

const HomePage = () => {
  return (
    <div>
      <Header/>
      <ProfileContainer/>
      <Skills/>
    </div>
  );
};

export default HomePage;

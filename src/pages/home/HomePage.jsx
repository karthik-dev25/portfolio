import React from "react";
import Header from "../../components/header/Header";
import Skills from "../skills/Skills";
import ProfileContainer from "./ProfileContainer";
import Projects from "../projects/Projects";
import ContactMeForm from "../contact/ContactMeForm";

const HomePage = () => {
  return (
    <div>
      <Header/>
      <ProfileContainer/>
      <Skills/>
      <Projects />
      <ContactMeForm />
    </div>
  );
};

export default HomePage;

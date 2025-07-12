import React, { useRef } from "react";
import Header from "../../components/header/Header";
import Skills from "../skills/Skills";
import ProfileContainer from "./ProfileContainer";
import Projects from "../projects/Projects";
import ContactMeForm from "../contact/ContactMeForm";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  const skillRef = useRef(null);
  return (
    <div>
      <Header/>
      <ProfileContainer/>
      <Skills/>
      <Projects />
      <ContactMeForm />
      <Footer />
    </div>
  );
};

export default HomePage;

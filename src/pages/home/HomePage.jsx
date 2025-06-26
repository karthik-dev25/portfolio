import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";

const HomePage = () => {
  return (
    <div>
      <Header/>
      <Outlet />
    </div>
  );
};

export default HomePage;

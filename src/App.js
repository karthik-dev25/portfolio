import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <h1>My Personal Portfolio under Development</h1>
      <Navbar />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

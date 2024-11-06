import React from "react";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import SmoothScrollLayout from "./components/SmoothScrollLayout";
import About from "./sections/About";
import Contacts from "./sections/Contacts";

const App = () => {
  
  return (
    <SmoothScrollLayout>
      <Home />
      <Projects />
      <About/>
      <Contacts/>
    </SmoothScrollLayout>
  );
};

export default App;

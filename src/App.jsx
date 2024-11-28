import React from "react";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import SmoothScrollLayout from "./components/SmoothScrollLayout";
import About from "./sections/About";
import Contacts from "./sections/Contacts";
import Resume from "./sections/Resume";

const App = () => {
  
  return (
    <SmoothScrollLayout>
      <Home />
      <Projects />
      <About/>
      <Contacts/>
      <Resume/>
    </SmoothScrollLayout>
  );
};

export default App;

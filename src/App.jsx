import React, { useEffect, useState } from "react";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import SmoothScrollLayout from "./components/SmoothScrollLayout";
import About from "./sections/About";
import Contacts from "./sections/Contacts";
import Loading from "./sections/Loading";

const App = () => {

  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    const handleLoad = () => {
      setLoading(false);
    }

    window.addEventListener("load",handleLoad);

    return () => window.removeEventListener("load",handleLoad);
  },[])
  
  return (
    <>
    {loading ?
      (<Loading/>) :
      (<SmoothScrollLayout>
      <Home />
      <Projects />
      <About/>
      <Contacts/>
    </SmoothScrollLayout>)
    }
    </>
    
   
  );
};

export default App;

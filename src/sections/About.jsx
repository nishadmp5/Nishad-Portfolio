import React, { useContext, useEffect, useRef, useState } from "react";
import Collaboration from "../components/Collaboration";
import { motion, useScroll, useTransform } from "framer-motion";
import Capabilities from "../components/Capabilities";
import { AppContext } from "../context/AppContext";

const About = () => {

    const [isFixed,setIsFixed] = useState(false);
    // const [isLargeScreen,setIsLargeScreen] = useState(window.innerWidth >= 1024);

  

    const containerRef = useRef()

    const { scrollYProgress } = useScroll({
      target:containerRef,
      offset:["start start","end end"]
    })

    // useEffect(()=>{
    //   const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    //   window.addEventListener("resize",handleResize)
    //   handleResize();
  
    //   return () => {
    //     window.removeEventListener("resize",handleResize);
    //   } 
    // },[])
  

    // useEffect(()=>{
    //   const handleScroll = () => {
    //     const containerTop = containerRef.current.getBoundingClientRect().top;
    //     const containerBottom = containerRef.current.getBoundingClientRect().bottom;
    //     console.log(containerTop);
        
    //     if(isLargeScreen){
    //       if(containerTop <= 0 && containerBottom > 815){
    //         setIsFixed(true);
    //       }else{
    //         setIsFixed(false)
    //       }
    //     }else{
    //       if(containerTop <= 0 && containerBottom > 950){
    //         setIsFixed(true);
    //       }else{
    //         setIsFixed(false)
    //       }
    //     }
    //   };

    //   window.addEventListener("scroll",handleScroll);

    //   return () => {
    //     window.removeEventListener("scroll",handleScroll);
    //   }
    // },[isLargeScreen])
    

    useEffect(()=>{
      const handleScroll = () => {
        const containerTop = containerRef.current.getBoundingClientRect().top;
        const containerBottom = window.innerHeight - containerRef.current.getBoundingClientRect().bottom;
        
          if(containerTop <= 0 && containerBottom <= 0){
            setIsFixed(true);
          }else{
            setIsFixed(false)
          }
      };

      window.addEventListener("scroll",handleScroll);

      return () => {
        window.removeEventListener("scroll",handleScroll);
      }
    },[])


  return (
    <div id="about"  ref={containerRef} className="relative h-auto bg-black">
      <div
        className={`${isFixed ? "fixed" : "hidden"} top-0 left-0 w-screen bg-center h-screen bg-cover z-0`}
        style={{ backgroundImage: `url('/perception.png')`, }}
      >
      </div>
      <div  >
      <Collaboration scrollYProgress={scrollYProgress}/>
        <Capabilities  scrollYProgress={scrollYProgress}/>
      </div>
    </div>
  );
};

export default About;

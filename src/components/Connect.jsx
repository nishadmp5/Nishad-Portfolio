import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TiPhone } from "react-icons/ti";

const Connect = () => {

  const [isHovered,setIsHovered] = useState(false);
  const [duration,setDuration] = useState(window.innerWidth > 768 ? 30000 : 300);

  useEffect(()=>{
    const handleResize = () => {
      setDuration(window.innerWidth > 768 ? 30000 : 300)
    }

    window.addEventListener("resize",handleResize)

    return () => {
      window.removeEventListener("resize",handleResize)
    }
  },[])

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="bg-black border-t border-t-[#450000] cursor-pointer relative  overflow-hidden ">
     <a href="tel:+971502910064" className="overflow-y-hidden">
     <div className="absolute flex items-center top-0 left-0  w-full h-full">
        <div className={`${isHovered ? "lg:h-full" : "lg:h-0 h-full "} w-full  duration-1000 ease-in-out bg-gradient-to-b from-[#450000] to-[#210000]`}></div>
      </div>
      <motion.div
        className="whitespace-nowrap z-20 flex"
        animate={{ x: [0, "-5000%"] }}
        transition={{
          repeat: Infinity,
          duration: duration,
          ease: "linear",
        }}
      >
        {Array.from({length:60}).map((item,index)=>(
           <div key={index} className="flex items-center ">
           <TiPhone className="text-[4rem] lg:text-[6rem] mx-5 pt-5 text-secondary " />
         <h1 className="text-secondary  leading-none text-[5rem] lg:text-[10rem] ">
           Let's Connect{" "}
         </h1>
       </div>
        ))}
      
       
      </motion.div>
     </a>
    </div>
  );
};

export default Connect;

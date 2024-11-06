import React, { useEffect, useState } from "react";
import { motion, useTransform } from "framer-motion";
import assets from "../assets/assets";

const Collaboration = ({ scrollYProgress }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);

    return window.addEventListener("resize", handleResize);
  }, []);

  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.7, 0.7]);
  const scaleinL = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.7, 0.7]);
  const imgHeight = useTransform(scrollYProgress,[0,0.4,1],["13rem","19.2rem","19.5rem"]);

  const translateY = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [0, -300, -1200]
  );
  const translateYinL = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [0, 0, -1500]
  );

  return (
    <motion.div
      style={{
        scale: isLargeScreen ? scaleinL : scale,
        translateY: isLargeScreen ? translateYinL : translateY,
      }}
      className="sticky  top-0 w-full  min-h-screen flex flex-col gap-6 lg:gap-24 bg-secondary text-primary p-5 lg:p-10 pt-10 lg:pt-14"
    >
      <h2 className="text-[1.5rem] text-black lg:text-[3rem] leading-tight font-primaryfont">
        My{" "}
        <span className="text-primary">
          projects are as diverse as they are dynamic.
        </span>{" "}
        From sleek, minimalist interfaces to{" "}
        <span className="text-primary">vibrant, engaging designs,</span> each
        application I build is crafted to meet the unique vision and goals of my
        clients. Explore my portfolio and discover how{" "}
        <span className="text-primary">creativity and functionality</span> come
        together seamlessly
      </h2>
      <div className="flex flex-col lg:flex-row items-start justify-between">
        <div className="flex  lg:flex-col gap-0.5">
          <h4 className="bg-black text-secondary font-primaryfont rounded-md px-2 mr-2 py-1.5 lg:py-1 text-[0.7rem] lg:text-[0.6rem]">
            AVAILABLE FOR
          </h4>
          <h4 className="bg-black text-secondary font-primaryfont rounded-md px-2 py-1.5 lg:py-1 text-[0.7rem] lg:text-[0.6rem]">
            COLLABORATION
          </h4>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-10 w-full lg:max-w-[45%] py-16 lg:py-0  flex-1">
          <h4 className="text-[1.1 rem] leading-tight w-full lg:w-[50%] font-light text-black text-left">
            I am always excited to take on new and interesting projects and open
            to collaboration. Whether you have a fresh idea to bring to life or
            want a new perspective on an existing project,<span className="text-primary">feel free to reach
            out.</span> Let’s build something impactful together!
          </h4>
          <div className="w-[17rem]">
            <motion.img
              className="object-cover object-top w-full h-full"
              src={assets.profileRed}
              style={{height:imgHeight}}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Collaboration;

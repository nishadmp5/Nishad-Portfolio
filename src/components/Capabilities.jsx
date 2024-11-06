import React, { useContext, useEffect, useRef, useState } from 'react'
import { motion,useTransform } from 'framer-motion'
import { keypoints } from '../constants/constants';
import { AppContext } from '../context/AppContext';
import { use } from 'framer-motion/client';
import { log } from 'three/webgpu';

const Capabilities = ({scrollYProgress}) => {

  const [isLargeScreen,setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(()=>{
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize",handleResize)

    return () => {
      window.removeEventListener("resize",handleResize);
    } 
  },[])


    const scale = useTransform(scrollYProgress,[0,0.8,0.9,1],[0.65,0.7,0.75,1])
    const scaleinL = useTransform(scrollYProgress,[0,0.4,0.67,1],[0.6,0.7,0.7,1])

    const translateY = useTransform(scrollYProgress,[0,0.4,0.67,1],[0,0,0,0])
    const translateYinL = useTransform(scrollYProgress,[0,0.4,0.67,1],[0,0,0,812])


  return (
    <motion.div  style={{scale:isLargeScreen ? scaleinL : scale,
                        translateY:isLargeScreen ? translateYinL : translateY}}  className="sticky z-20 top-0 w-full mt-[80vh] lg:mt-[100vh]  min-h-screen  bg-capabilities-gradient text-primary p-5 lg:p-10 pt-16 ">
        <p className='bg-primary inline-flex gap-1 items-center w-auto text-[0.68rem] text-white text-center px-2.5 py-1.5 rounded-full'><div className='bg-secondary rounded-full w-1.5 h-1.5'></div>CAPABILITIES</p>
        <h2 className='text-[1.7rem] leading-[1.2] py-4 w-full lg:w-[40%] text-tertiary'>Web development is always advancing, and <span className='text-secondary'>I stay up-to-date.</span>  Leveraging the latest frameworks and techniques helps me craft websites that are both visually <span className='text-secondary'> engaging and highly responsive.</span></h2>
        <h2 className='text-2xl'>Get in touch •)</h2>
        <div className='grid grid-flow-col lg:grid-flow-row grid-rows-4 lg:grid-rows-none lg:grid-cols-4 mt-20 border-x-0 lg:border-x lg:border-x-neutral-800 border-b-0 lg:border-b lg:border-b-neutral-800'>
          {keypoints.map((keypoint,index)=>(
             <div key={index} className={`lg:border-r border-r-0 lg:border-r-neutral-800 flex flex-col `}>
             <div className='flex pl-4 gap-4 items-start'>
               <h2 className='text-[0.72rem] text-tertiary'>{keypoint.No}</h2>
               <h2 className='text-[1.5rem] leading-none text-secondary'>{keypoint.Point}</h2>
             </div>
             <div className='px-24 py-24'>
               <img src={keypoint.Image} alt="" />
             </div>
           </div>
          ))}

        </div>
    </motion.div>
  )
}

export default Capabilities
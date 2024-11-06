import React,{ useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import assets from '../../assets/assets';


    

const Cards = ({project}) => {

    const cardRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target:cardRef,
        offset:["start end","end start"]
    })

const opacity = useTransform(scrollYProgress, [0,0.2,1], [0,0,1]);
const translateY = useTransform(scrollYProgress,[0,0.6,1], [180,100,0]);
const translateX = useTransform(scrollYProgress,[0,0.6,1],[-150,0,0]);

  return (
    <motion.div
    ref={cardRef}
    style={{opacity:opacity,
        translateY:translateY,
        translateX:translateX
    }}
    
    className='border-t border-t-gray-600 flex flex-col items-center pt-10'>
      <a href={project.domain} target='_blank'>
      <div className='h-[17rem] lg:h-[20rem] w-[17rem] lg:w-[28rem]'>
      <img className='h-full w-full object-cover' src={project.image} alt="" />
      </div>
      <div className='flex justify-between items-start w-full text-[#8c8b7b] pt-5 font-primaryfont'>
          <div className='flex gap-6'>
              <p className='text-xs pt-1'>{project.no}</p>
              <div className='flex flex-col'>
                  <h4 className='font-thin'>{project.name}</h4>
                  <h2 className='text-secondary text-2xl'>{project.category}</h2>
              </div>
          </div>
          <div className='flex text-xs gap-2'>
              <h4 className='border-[0.6px] border-solid border-[#8c8b7b] rounded-md px-1 py-0.5'>
                  {project.stack1}
              </h4>
              <h4 className={`${project.stack2? "block" : "hidden"} border-[0.6px] border-solid border-[#8c8b7b] rounded-md px-1 py-0.5`}>
                  {project.stack2?project.stack2:''}
              </h4>
          </div>
      </div>
      </a>
  </motion.div>
  )
}

export default Cards
import { motion, useScroll, useTransform } from 'framer-motion'
import React,{ useState, useEffect, useRef } from 'react'
import Button from './elements/Button';

const ProjectHeading = ({className}) => {

    const { scrollY } = useScroll();
    const [isFixed,setIsFixed] = useState(false);

    useEffect(()=>{
        return scrollY.onChange((latest) => {
            if(latest>800 && latest<3500){
                setIsFixed(true);
            }else{
                setIsFixed(false);
            }
        })
    },[scrollY])

  return (
    <div className={`${className ? className : ""} relative`}>
        <div className={`${isFixed ? " sticky top-16  ": "absolute top-0 "} pl-56 `}>
            <motion.h1
            whileInView={{translateY:[50,0]}}
            transition={{type:"spring",duration:0.6}}
             className='font-primaryfont text-[6.5rem] font-semibold text-secondary'>Projects</motion.h1>
            <Button className={"mt-5"}/>
        </div>
    </div>
  )
}

export default ProjectHeading
import React, { useEffect } from 'react'
import { initSmoothScroll } from '../libs/smoothScroll';

const SmoothScrollLayout = ({children}) => {

    useEffect(()=>{
       const lenis = initSmoothScroll({
        duration:1.2,
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier:0.5
       });

       return () => {
        lenis.destroy();
       };

    },[]);

    

  return (
    <main>{children}</main>
  )
}

export default SmoothScrollLayout
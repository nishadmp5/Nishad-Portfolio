import React, { useEffect, useRef, useState } from 'react'
import Connect from '../components/Connect'
import Footer from '../components/Footer'


const Contacts = () => {

  const containerRef = useRef();
  const [isFixed,setIsFixed] = useState(false);

  useEffect(()=>{
    const handleScroll = () => {
      const containerTop = containerRef.current.getBoundingClientRect().top ?  containerRef.current.getBoundingClientRect().top : 830;
      console.log(containerTop);
      if(containerTop <= 820){
        setIsFixed(true);
      }else{
        setIsFixed(false);
      }
    }

    window.addEventListener("scroll",handleScroll)

    return () => {
      window.removeEventListener("scroll",handleScroll)
    }
  },[])

  return (
    <div id='contacts' className=' p-0 overflow-x-auto '>
      <div ref={containerRef} className='h-[80vh] lg:h-[63vh] w-full bg-transparent hidden lg:block'></div>
       <div className={`${isFixed ? "lg:fixed bottom-0 overflow-y-hidden z-0" : "lg:hidden"}`}>
       <Connect/>
        <Footer/>
       </div>
    </div>
  )
}



export default Contacts
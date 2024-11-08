import React, { useState } from "react";
import assets from "../assets/assets";
import { RiArrowUpDoubleFill } from "react-icons/ri";
import { motion } from "framer-motion";
import scrollToSection from "../libs/smoothScroll";


const Footer = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="w-screen flex flex-col bg-black px-5 lg:px-10 py-5 pt-10 pb-10 lg:pb-5 gap-16 lg:gap-36">
      <div className="flex w-full flex-col gap-10 lg:gap-0 lg:flex-row justify-between">
        <div className="flex justify-between lg:gap-16">
          <ul className="text-secondary text-[1rem] lg:text-[0.78rem]">
            <li className="text-tertiary mb-3 text-[1.2rem] lg:text-[0.95rem]">
              Contacts
            </li>
            <li><a href="https://wa.me/918113831061?text=Hello! I saw your portfolio and would like to connect with you." target="_blank">WhatsApp</a></li>
            <li><a href="mailto:mohdnishadmp@gmail.com">mail@to.me</a></li>
            <li><a href="tel:+971502910064">Phone</a></li>
          </ul>

          <ul className="text-secondary text-[1rem] lg:text-[0.78rem]">
            <li className="text-tertiary mb-3 text-[1.2rem] lg:text-[0.95rem]">
              Links
            </li>
            <li><a href="https://github.com/nishadmp5" target="_blank">Github</a></li>
            <li><a href="https://www.linkedin.com/in/muhammednishadmp/" target="_blank">LinkedIn</a></li>
          </ul>
        </div>

        <div>
          <motion.a
          onClick={() => scrollToSection('home')}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="text-white border border-tertiary rounded-lg cursor-pointer py-1.5 px-2 gap-2 flex w-[40%] lg:w-auto items-center"
          >
           
            <RiArrowUpDoubleFill className="text-tertiary text-2xl" />
            <h2 className="text-nowrap text-tertiary text-[0.8rem]  lg:hidden">Back To Top</h2>
          </motion.a>
        </div>
      </div>

      <div className="flex justify-between items-center lg:items-end text-tertiary">
        <div className="flex border-[0.1px] border-[#4a473f]">
          <div className="flex justify-center items-center border-r-[0.1px] border-[#4a473f] p-2">
            <img className="w-8 h-8" src={assets.logo} alt="" />
          </div>
          <div className="flex flex-col items-center justify-between text-[0.7rem] font-extralight">
            <h3 className="  border-b-[0.1px] border-[#4a473f] py-1.5 px-2.5">
              All Rights Reserved
            </h3>
            <h3 className="py-1">© 2024 Nishad</h3>
          </div>
        </div>

        <div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

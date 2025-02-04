"use client";

import { motion } from "framer-motion";

const NavBar = (props:any) => {
  const {sections,sectionRefs,activeIndex} = props
  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <motion.div 
      className="fixed top-6 left-[10%] right-[10%] w-full justify-center  -translate-x-1/2 flex flex-wrap  items-center space-x-2 sm:space-x-4 bg-white p-2 shadow-lg rounded-full z-50 sm:w-auto"
      initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
    >
      {sections.map((section: any, index: number) => (
        <span
          key={index}
          onClick={() => scrollToSection(index)}
          className={`cursor-pointer text-[12px] font-medium text-gray-800 ${
            activeIndex === index ? "font-extrabold text-black" : ""
          }`}
        >
          {section}
        </span>
      ))}
    </motion.div>

  );
};

export default NavBar;
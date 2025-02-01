"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const sections = ["Section 1", "Section 2", "Section 3", "Section 4"];

export default function Home() {
  const controls = useAnimation();
  const sectionRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const topOffsets = sectionRefs.current.map((ref) => ref.offsetTop);
      const scrollPosition = window.scrollY + 100;
      const currentIndex = topOffsets.findIndex((offset, i) => 
        scrollPosition >= offset && (topOffsets[i + 1] ? scrollPosition < topOffsets[i + 1] : true)
      );
      if (currentIndex !== -1) setActiveIndex(currentIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index) => {
    sectionRefs.current[index].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full h-screen">
      {/* Floating Menu */}
      <div 
        className="fixed top-4 left-1/2 -translate-x-1/2 flex space-x-4 bg-white p-2 shadow-lg rounded-full z-50"
      >
        {sections.map((section, index) => (
          <button key={index} onClick={() => scrollToSection(index)} className={activeIndex === index ? "bg-blue-500 text-white" : "bg-gray-200"}>
            {section}
          </button>
        ))}
      </div>

      {/* Sections */}
      <div>
        {sections.map((section, index) => (
          <motion.div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="h-screen flex items-center justify-center bg-gray-100 bg-cover bg-no-repeat"
            style={{
              backgroundImage: 'url("https://fastly.picsum.photos/id/59/2464/1632.jpg?hmac=uTfe6jCzLvCzANvJgtpo-a0fKhO8BvjpwLNYX3lqx_Q")',
            }}
            animate={{
              y: [0, -10, 0], 
            }}
            transition={{
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut", 
            }}
          >
            <div
              className={`flex w-[80%] ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <motion.div
                className="w-[40%] h-[250px] rounded-lg shadow-lg bg-[#c66a10] p-4"
                initial={{ x: index % 2 === 0 ? "-100vw" : "100vw", y: "-100vh", opacity: 0 }}
                animate={activeIndex === index ? { x: 0, y: 0, opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <div
                  className={`flex flex-col ${index % 2 === 0 ? "items-start" : "items-end"}`}
                >
                  <h2 className="font-serif text-4xl font-normal leading-tight text-[#efede7]">
                    A Journey Within
                  </h2>
                  <p className="font-sans text-base font-normal leading-6 tracking-[0.5px] text-[#efede7]">
                    Pujya Gurudevshri has revitalised the path to self-realisation. Each spiritual activity taps into a deeper dimension, allowing you to bloom into a fuller existence.
                  </p>
                  <button className="bg-white text-left font-sans text-base">Discover more</button>
                </div>
              </motion.div>
            </div>

          </motion.div>
        ))}
      </div>

    </div>
  );
}



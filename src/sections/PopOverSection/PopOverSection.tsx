"use client";

import { motion } from "framer-motion";
import { MutableRefObject } from "react";

const PopOverSection = (props: { sections: string[]; sectionRefs: MutableRefObject<any[]>; activeIndex: number }) => {
  const { sections, sectionRefs, activeIndex } = props;

  return (
    <>
      {sections.map((section, index) => (
        <motion.div
          key={index}
          ref={(el:any) => (sectionRefs.current[index] = el)}
          className="h-screen flex items-center justify-center bg-gray-100 bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url("https://d3fzplfbemxxxv.cloudfront.net/srmd/wp-content/uploads/2019/08/23104723/PKD_overview_banner.png")',
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
          <div className={`flex w-[80%] ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
            {/* <motion.div
              className="w-[40%] h-[250px] rounded-lg shadow-lg bg-[#c66a10] p-4"
              initial={{ x: index % 2 === 0 ? "-100vw" : "100vw", y: "-100vh", opacity: 0 }}
              animate={activeIndex === index ? { x: 0, y: 0, opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? "items-start" : "items-end text-end"}`}>
                <h2 className="font-serif text-4xl font-normal leading-tight text-[#efede7]">A Journey Within</h2>
                <p className="font-sans text-base font-normal leading-6 tracking-[0.5px] text-[#efede7]">
                  Pujya Gurudevshri has revitalised the path to self-realisation. Each spiritual activity taps into a
                  deeper dimension, allowing you to bloom into a fuller existence.
                </p>
                <button className="rounded-lg bg-white text-left font-sans text-base p-2 mt-4">Discover more</button>
              </div>
            </motion.div> */}

            <motion.div
              className="w-[40%] h-auto rounded-lg shadow-lg bg-[#c66a10] p-4"
              initial={{ x: index % 2 === 0 ? "-100vw" : "100vw", y: "-100vh", opacity: 0 }}
              animate={activeIndex === index ? { x: 0, y: 0, opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? "items-start" : "items-end text-end"} space-y-2`}>
                <h2 className="font-serif text-4xl font-normal leading-tight text-[#efede7]">
                  A Journey Within
                </h2>
                <p className="text-sm sm:text-base leading-6 tracking-[0.5px] text-[#efede7] mt-4">
                  Pujya Gurudevshri has revitalised the path to self-realisation. Each spiritual activity taps into a deeper
                  dimension, allowing you to bloom into a fuller existence.
                </p>
                <button className="rounded-lg bg-white text-sm sm:text-base p-2 mt-4">Discover more</button>
              </div>
            </motion.div>

          </div>
        </motion.div>
      ))}
    </>
  );
};

export default PopOverSection;

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MutableRefObject } from "react";


const Gallery = (props: {sectionRefs: MutableRefObject<any[]>; index: number }) => {
  const {sectionRefs, index } = props;

  return (
    <motion.div 
      className="h-auto mw-[100%] w-[85%] m-auto pt-20 pb-20"
      ref={(el:any) => (sectionRefs.current[index] = el)}
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
        className="grid grid-cols-2 gap-4"
      >
        <div className=" h-auto !rounded-lg  overflow-hidden relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="font-slick px-4 py-1 bg-white font-semibold  text-baseColor rounded-[20px] shadow-lg absolute top-4 left-4 z-40"
          >
            Holistic Wellness
          </motion.button>
          <motion.img
            className="rounded-lg h-[275px] w-full object-cover"
            src="https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2019/10/Pujya-Gurudevshri-Rakeshji-12-1024x731.jpg?x77211"
            alt="Picture of the author"
            whileHover={{ scale: 1.2, x: "5%", y: "5%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ transformOrigin: "center" }}
          />
        </div>
        <div className=" h-auto !rounded-lg  overflow-hidden relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="font-slick px-4 py-1 bg-white font-semibold  text-baseColor rounded-[20px] shadow-lg absolute top-4 left-4 z-40"
          >
            Holistic Wellness
          </motion.button>
          <motion.img
            className="rounded-lg h-[275px] w-full object-cover"
            src="https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2019/10/Pujya-Gurudevshri-Rakeshji-8-1024x735.jpg?x77211"
            alt="Picture of the author"
            whileHover={{ scale: 1.2, x: "5%", y: "5%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ transformOrigin: "center" }}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className=" h-auto !rounded-lg  overflow-hidden relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="font-slick px-4 py-1 bg-white font-semibold  text-baseColor rounded-[20px] shadow-lg absolute top-4 left-4 z-40"
          >
            Holistic Wellness
          </motion.button>
          <motion.img
            className="rounded-lg h-[275px] w-full object-cover"
            src="https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2022/12/Pujya-Gurudevshri-Rakeshji-27-683x1024.jpg?x77211"
            alt="Picture of the author"
            whileHover={{ scale: 1.2, x: "5%", y: "5%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ transformOrigin: "center" }}
          />
        </div>
        <div className=" h-auto !rounded-lg  overflow-hidden relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="font-slick px-4 py-1 bg-white font-semibold  text-baseColor rounded-[20px] shadow-lg absolute top-4 left-4 z-40"
          >
            Holistic Wellness
          </motion.button>
          <motion.img
            className="rounded-lg h-[275px] w-full object-cover"
            src="https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2019/10/Pujya-Gurudevshri-Rakeshji-10-1024x731.jpg?x77211"
            alt="Picture of the author"
            whileHover={{ scale: 1.2, x: "5%", y: "5%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ transformOrigin: "center" }}
          />
        </div>
        <div className=" h-auto !rounded-lg  overflow-hidden relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="font-slick px-4 py-1 bg-white font-semibold  text-baseColor rounded-[20px] shadow-lg absolute top-4 left-4 z-40"
          >
            Holistic Wellness
          </motion.button>
          <motion.img
            className="rounded-lg h-[275px] w-full object-cover"
            src="https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2022/11/Pujya-Gurudevshri-Rakeshji-28-4-1024x683.jpg?x77211"
            alt="Picture of the author"
            whileHover={{ scale: 1.2, x: "5%", y: "5%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ transformOrigin: "center" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Gallery;

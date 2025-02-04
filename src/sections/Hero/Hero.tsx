"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const heroImages = [
  { id: 1, url: "hero/gif/gifn1.gif" },
  { id: 2, url: "hero/gif/gifn2.gif" },
  { id: 3, url: "hero/gif/gifn3.gif" },
  { id: 4, url: "hero/gif/gifn4.gif" },
];

const content = {
  heading: "A Journey Within",
  paragraph: "Pujya Gurudevshri has revitalised the path to self-realisation. Each spiritual activity taps into a deeper dimension, allowing you to bloom into a fuller existence.",
  buttonText: "Watch about videos"
};

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    appendDots: (dots:any) => (
      <div style={{ position: "absolute", bottom: "20px", width: "100%" }}>
        <ul style={{ display: "flex", justifyContent: "center", gap: "8px" }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="w-full overflow-hidden relative">
      <motion.div
        className="absolute -translate-y-1/2 w-[30%] h-auto z-50"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ right:'4rem', top:'30%'}}
      >
        <div className="space-y-2 font-sans">
          <h1 className="text-5xl font-normal leading-tight text-[#efede7]">
            {content.heading}
          </h1>
          <div className="ftext-sm sm:text-base leading-6 tracking-[0.5px] text-[#efede7] mt-4">
            {content.paragraph}
          </div>
          <button className="rounded-lg bg-white text-sm sm:text-base p-2 mt-4">
            {content.buttonText}
          </button>
        </div>
      </motion.div>
      <Slider {...settings} className="w-full">
        {heroImages.map((image) => (
          <div key={image.id} className="w-screen">
            <div
              className="h-screen flex items-center justify-center bg-gray-100 bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${image.url})` }}
            ></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;





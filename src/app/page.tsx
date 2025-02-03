"use client";

import { useState, useEffect, useRef } from "react";
import { useAnimation } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { PopOverSection } from "@/sections/PopOverSection";
import { sections } from "@/utils/sections";
import Carousel from "@/components/Slider/Slider";
import { Hero } from "@/sections/Hero";

//const sections: string[] = ["Section 1", "Section 2", "Section 3", "Section 4"];

export default function Home() {
  const controls = useAnimation();
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]); 
  const [activeIndex, setActiveIndex] = useState<number>(0); 

  useEffect(() => {
    const handleScroll = () => {
      const topOffsets = sectionRefs.current.map((ref) => ref?.offsetTop || 0);
      const scrollPosition = window.scrollY + 100;
      const currentIndex = topOffsets.findIndex((offset, i) =>
        scrollPosition >= offset && (topOffsets[i + 1] ? scrollPosition < topOffsets[i + 1] : true)
      );
      if (currentIndex !== -1) setActiveIndex(currentIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen">
      <NavBar 
        sections={sections}
        sectionRefs={sectionRefs}
        activeIndex={activeIndex}
      />
      <Hero/>
      <PopOverSection 
        sections={sections}
        sectionRefs={sectionRefs}
        activeIndex={activeIndex}
      />
    </div>
  );
}





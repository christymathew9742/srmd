"use client";

import { MutableRefObject } from "react";
import { ReayalizeSection } from "./RealizeSection";
import { Gallery } from "./Gallery";


const Sections = ({ sections, sectionRefs,activeIndex }: { sections: string[]; sectionRefs: MutableRefObject<any[]>; activeIndex: number }) => {
  const renderSection = (section: string, index:number) => {
    switch (section) {
      case "Realize":
        return (
          <ReayalizeSection 
            sectionRefs={sectionRefs}
            index={index}
          />
        )
      case "Gallery":
        return (
          <Gallery 
            sectionRefs={sectionRefs}
            index={index}
          />
        )
      default:
        return;
    }
  };

  return (
    <>
      {sections.map((section, index) => (
        <div
          key={section + index}
          ref={(el:any) => (sectionRefs.current[index] = el)}
          className="h-screen items-center justify-center"
        >
          {renderSection(section,index)}
        </div>
      ))}
    </>
  );
};

export default Sections;

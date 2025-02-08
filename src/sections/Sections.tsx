"use client";

import { MutableRefObject } from "react";
import { ReayalizeSection } from "./RealizeSection";
import { Gallery } from "./Gallery";
import { Founder, Inspiration } from "./PopOverSection";
import { ContactUs } from "./ContactUs";



const Sections = ({ sections, sectionRefs,activeIndex }: { sections: string[]; sectionRefs: MutableRefObject<any[]>; activeIndex: number }) => {
  const renderSection = (section: string, index:number, activeIndex: number) => {
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
      case "Inspiration":
        return (
          <Inspiration 
            sectionRefs={sectionRefs}
            index={index}
            activeIndex={activeIndex}
          />
        )
      case "Founder":
        return (
          <Founder 
            sectionRefs={sectionRefs}
            index={index}
            activeIndex={activeIndex}
          />
        )
      case "ContactUs":
        return (
          <ContactUs 
            sectionRefs={sectionRefs}
            index={index}
            activeIndex={activeIndex}
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
          className="h-auto items-center justify-center"
        >
          {renderSection(section, index, activeIndex)}
        </div>
      ))}
    </>
  );
};

export default Sections;

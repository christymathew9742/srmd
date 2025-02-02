
const NavBar = (props:any) => {
  const {sections,sectionRefs,activeIndex} = props
  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 flex flex-wrap justify-center items-center space-x-2 sm:space-x-4 bg-white p-2 shadow-lg rounded-full z-50 w-[90%] sm:w-auto">
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
    </div>

  );
};

export default NavBar;
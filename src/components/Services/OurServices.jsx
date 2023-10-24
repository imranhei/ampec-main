import React, { useState } from "react";
import cable_assembly from "../../assets/Services/cable_assembly.png";
import box_build_assembly from "../../assets/Services/box_build.png";
import engineering_design from "../../assets/Services/engineering_design.png";
import strategic_sourcing from "../../assets/Services/strategic_sourcing.png";
import { Link } from "react-router-dom";

const OurServices = () => {
  const data = [
    {
      id: 1,
      title: "Cable Assembly",
      image: cable_assembly,
      description:
        "When you need flexible, responsive and quality guaranteed cables, come to us first. Our experience covers requirements for thousands of identical custom cables through to multiple wiring harnesses and assemblies of more than 50 custom cables and connections used in each product. We can build any custom cable from scratch, build custom wiring harnesses and manufacture your finished product connecting any mix of cabling your product requires.",
      link: '/services/cable'
    },
    {
      id: 2,
      title: "Box Build Assembly",
      image: box_build_assembly,
      description:
        "Once you have your components ready to go, you need a well-designed housing and our experience with building boxes and panels means we can build what you need to your exact specifications. Or design the optimum configuration for your product. By considering the box build early in the design process we can ensure that your ideal product is easily manufactured by designing for ease of servicing and optimum performance with custom placement of all components. If you need a low-complexity assembly for your custom cabling or a complex finished product integrating PCBs in the enclosure or on a panel, we can make it happen for you.",
      link: '/services/box-build'
    },
    {
      id: 3,
      title: "Engineering Design",
      image: engineering_design,
      description:
        "When you need flexible, responsive and quality guaranteed cables, come to us first. Our experience covers requirements for thousands of identical custom cables through to multiple wiring harnesses and assemblies of more than 50 custom cables and connections used in each product. We can build any custom cable from scratch, build custom wiring harnesses and manufacture your finished product connecting any mix of cabling your product requires.",
      link: '/services/engineering-design'
    },
    {
      id: 4,
      title: "Strategic Sourcing",
      image: strategic_sourcing,
      description:
        "When you need flexible, responsive and quality guaranteed cables, come to us first. Our experience covers requirements for thousands of identical custom cables through to multiple wiring harnesses and assemblies of more than 50 custom cables and connections used in each product. We can build any custom cable from scratch, build custom wiring harnesses and manufacture your finished product connecting any mix of cabling your product requires.",
      link: '/services/strategic-sourcing'
    },
  ];

  return (
    <div className="sm:pt-24 pt-20 flex flex-col items-center z-10 relative container mx-auto">
      <p className="text-center font-exo lg:text-5xl sm:text-4xl text-2xl text-amBlue tracking-wide sm:pb-16 pb-10 z-10">
        Our Services
      </p>
      <div className="sm:text-center text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 sm:leading-8 leading-6 tracking-wide font-khula sm:pb-16 pb-8 px-10 max-w-[1300px] mx-auto text-justify">
        We specialize in Cable Assembly , Box Build Assembly , Engineering
        Design , Strategic Sourcing and many more things . We can custom
        manufacture all or part of your new or existing products in Australia,
        or outside Australia.
      </div>
      {data.map((item) => (
        <div
          key={item.id}
          className={`flex items-center justify-center lg:py-32 sm:py-14 py-8 pb-8 px-10 max-w-[1300px] mx-auto lg:gap-56 sm:gap-16 gap-10 ${
            item.id % 2 === 1
              ? "lg:flex-row flex-col"
              : "lg:flex-row-reverse flex-col"
          } flex-col}`}
        >
          <div className="lg:w-1/2 sm:w-2/3 w-full lg:h-auto sm:h-80 h-60">
            <img className="w-full h-full object-cover" src={item.image} alt={item.title} />
          </div>
          <div className="lg:w-1/2 w-full">
            <p className="text-amYellow lg:text-4xl sm:text-2xl text-xl font-exo tracking-wide lg:pb-10 pb-4">
              {item.title}
            </p>
            <p className="text-amBlue sm:text-base text-sm sm:leading-9 leading-6 tracking-wide font-khula lg:pb-8 pb-4 text-justify">
              {item.description}
            </p>
            <Link to={item.link} className="w-fit text-amYellow font-lato text-bold sm:text-base text-sm flex gap-2 border border-amBlue/30 px-10 py-3 rounded hover:bg-amBlue group">
              <p>Read more</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-amBlue rotate-45 group-hover:translate-x-1 group-hover:text-amYellow duration-300"
              >
                <path
                  fill="currentColor"
                  d="M11 19.5V7.914l-4.5 4.5L5.086 11L12 4.086L18.914 11L17.5 12.414l-4.5-4.5V19.5h-2Z"
                />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurServices;

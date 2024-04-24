import React, { useState } from "react";
import cable_assembly from "../../assets/Services/cable_assembly.webp";
import box_build_assembly from "../../assets/cable_assembly.jpeg";
import engineering_design from "../../assets/Services/engineering_design.webp";
import strategic_sourcing from "../../assets/Services/strategic_sourcing.webp";
import { Link } from "react-router-dom";

const OurServices = () => {
  const data = [
    {
      id: 1,
      title: "Cable Assembly",
      image: cable_assembly,
      description:
        "When you need flexible, responsive, and quality-guaranteed cables, we're your first choice. Our extensive experience encompasses thousands of identical custom cables and multiple wiring harnesses. Specializing in Cable Harness in Sydney, we can build any custom cable from scratch, ensuring precise integration into your product. Trust us for manufacturing your finished product, seamlessly connecting any mix of cabling required. At our facility, Cable Harness Sydney is not just a service; it's our commitment to delivering excellence in every connection.",
      link: "/services/cable-assembly",
    },
    {
      id: 2,
      title: "Box Build Assembly",
      image: box_build_assembly,
      description:
        "Once your components are prepared, the next crucial step is a well-designed housing. With our expertise in building boxes and panels, we can craft them precisely to your specifications. In the realm of Cable Harness Sydney, our experience allows us to design the optimum configuration for your product or build it to your exact needs. By integrating the box build early in the design process, we ensure your product is easily manufactured and designed for both ease of servicing and optimal performance. Whether you require a low-complexity assembly for your custom cabling or a complex finished product with PCBs integrated into the enclosure or on a panel, we have the capabilities to make it happen for you. At every stage, Cable Harness Sydney is seamlessly woven into our commitment to delivering precision and excellence.",
      link: "/services/box-build",
    },
    {
      id: 3,
      title: "Engineering Design",
      image: engineering_design,
      description:
        "When you seek flexible, responsive, and quality-guaranteed cables, look no further. Our extensive experience spans thousands of identical custom cables, multiple wiring harnesses, and intricate assemblies with over 50 custom cables and connections in each product. Specializing in Cable Harness Sydney, we excel at crafting bespoke solutions, building custom cables from scratch to precisely match your requirements. Trust us to manufacture your finished product, seamlessly connecting any mix of cabling needed for your product in Sydney. Cable Harness Sydney is at the core of our commitment to delivering excellence in every connection.",
      link: "/services/engineering-design",
    },
    {
      id: 4,
      title: "Strategic Sourcing",
      image: strategic_sourcing,
      description:
        "When you need flexible, responsive, and quality-guaranteed cables, come to us first. Our extensive experience covers requirements for thousands of identical custom cables, multiple wiring harnesses, and complex assemblies featuring over 50 custom cables and connections in each product. Specializing in Cable Harness Sydney, we have the expertise to build custom cables from scratch, design custom wiring harnesses, and manufacture your finished product, seamlessly connecting any mix of cabling required. Make us your trusted partner for Cable Harness Sydney, where precision and excellence meet your unique requirements.",
      link: "/services/strategic-sourcing",
    },
  ];

  return (
    <div className="container mx-auto lg:px-20 md:px-10 px-6 lg:pt-24 pt-16 flex flex-col items-center">
      <h1 className="text-center font-exo font-bold lg:text-5xl sm:text-4xl text-2xl text-amBlue tracking-wide sm:pb-16 pb-10 z-10">
        Our Services
      </h1>
      <h2 className="sm:text-center text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 sm:leading-8 leading-6 tracking-wide font-khula sm:pb-16 pb-8 text-justify">
        We specialize in Cable Assembly , Box Build Assembly , Engineering
        Design , Strategic Sourcing and many more things. We can custom
        manufacture all or part of your new or existing products in Australia,
        or outside Australia. Trust us for excellence in Cable Harness Sydney
        and beyond.
      </h2>
      {data.map((item) => (
        <div
          key={item.id}
          className={`flex items-center justify-center lg:py-32 sm:py-14 py-8 pb-8 lg:gap-32 sm:gap-20 gap-10 ${
            item.id % 2 === 1
              ? "lg:flex-row flex-col"
              : "lg:flex-row-reverse flex-col"
          } flex-col}`}
        >
          <div className="xl:w-1/3 sm:w-1/2 w-full lg:h-auto sm:h-80 h-60">
            <img
              className="w-full h-full object-cover"
              src={item.image}
              alt={item.title}
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <p className="text-amYellow lg:text-4xl sm:text-2xl text-xl font-exo font-bold tracking-wide lg:pb-10 pb-4">
              {item.title}
            </p>
            <p className="text-amBlue sm:text-base text-sm sm:leading-9 leading-6 tracking-wide font-khula lg:pb-8 pb-4 text-justify">
              {item.description}
            </p>
            <Link
              to={item.link}
              className="w-fit text-amYellow font-lato text-bold sm:text-base text-sm flex gap-2 border border-amBlue/30 px-10 py-3 rounded hover:bg-amBlue group duration-300"
            >
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

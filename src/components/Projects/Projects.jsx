import React from "react";
import Button from "../Custom/ButtonBuy";
import case_01 from "../../assets/Projects/case_01.webp";
import case_02 from "../../assets/Projects/case_02.webp";
import case_03 from "../../assets/Projects/case_03.webp";
import case_04 from "../../assets/Projects/case_04.webp";
import case_05 from "../../assets/Projects/case_05.webp";
import case_06 from "../../assets/Projects/case_06.webp";
import { Link } from "react-router-dom";
import ButtonSolution from "../Custom/ButtonSolution";


const Projects = () => {
  const data = [
    {
      id: 1,
      image: case_01,
      title: "Case Study 1",
      subTitle: "Sub-assembly of an Emergency Communication System ",
      description:
        "The objective was to design and implement a robust sub-assembly for Railway system ...",
      link: "/projects/case-study-1",
    },
    {
      id: 2,
      image: case_02,
      title: "Case Study 2",
      subTitle: "Too much success",
      description:
        "Demand for a new product was four times more than projections and the client had no capacity ...",
      link: "#"
    },
    {
      id: 3,
      image: case_03,
      title: "Case Study 3",
      subTitle: "New investor, new scrutiny",
      description:
        "A new investor in the business was concerned about the inventory the business held ...",
      link: "#"
    },
    {
      id: 4,
      image: case_04,
      title: "Case Study 4",
      subTitle: "Less is more",
      description:
        "A case of less is more, how to build a lighter, smaller form factor product, with increased functionality ...",
      link: "#"
    },
    {
      id: 5,
      image: case_05,
      title: "Case Study 5",
      subTitle: "Component substitution",
      description:
        "An undisclosed component substitution almost ruined our customer's product expansion ...",
      link: "#"
    },
    {
      id: 6,
      image: case_06,
      title: "Case Study 6",
      subTitle: "Specific industry needs",
      description:
        "Understanding industry specific safety requirements is vital when you are exploring new industries ...",
      link: "#"
    },
  ];

  

  return (
    <div className="lg:pt-24 pt-16 flex flex-col items-center mx-auto">
      <h1 className="text-center font-exo font-bold lg:text-5xl sm:text-4xl text-2xl text-amBlue tracking-wide sm:pb-16 pb-10 z-10">
        Projects
      </h1>
      <h2 className="sm:text-center text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 sm:leading-8 leading-6 tracking-wide font-khula sm:pb-16 pb-8 text-justify container mx-auto lg:px-20 md:px-10 px-6">
        We help our customers source the right components, make better
        manufacturing decisions and improve their bottom line. Ampec supplies
        quality products to your specifications at a competitive price. You
        never have to worry about quality. Whether you're after passive
        components, standard or custom caballing or pre-assembled complex
        box/panel builds, contact us or order from our online catalogue.
      </h2>
      <div className="flex flex-wrap sm:gap-10 gap-5 justify-center items-center sm:pb-20 pb-10 lg:px-20 md:px-10 px-6">
        <Button />
        <ButtonSolution />
      </div>
      <div>
        {data.map((item) => (
          <div
            key={item.id}
            className="w-full flex flex-col justify-center relative text-white overflow-hidden"
          >
            <img
              className="w-screen brightness-75 first-letter:first-line:lg:my-20 sm:my-14 my-10 sm:scale-100 scale-125"
              src={item.image}
              alt="background"
            />
            <div className="absolute lg:px-40 sm:px-20 px-10">
              <p className="font-lato xl:text-3xl md:text-xl tracking-wider lg:pb-4 sm:pb-2">
                {item.title}
              </p>
              <p className="font-lato xl:text-4xl md:text-2xl tracking-wider xl:pb-16 sm:pb-8">
                {item.subTitle}
              </p>
              <p className="font-khula xl:text-2xl md:text-lg text-sm tracking-wide lg:pb-10 sm:pb-4 pb-2">
                {item.description}
              </p>
              <Link className="w-fit text-amYellow font-lato text-bold sm:text-base text-sm flex gap-2 border border-gray-100/30 rounded lg:px-10 sm:px-5 px-2 lg:py-4 sm:py-2 py-1 hover:bg-amBlue group duration-300" to={item.link}>
                <p>Read more</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="text-amYellow rotate-45 group-hover:translate-x-2 group-hover:text-amYellow duration-300"
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
    </div>
  );
};

export default Projects;

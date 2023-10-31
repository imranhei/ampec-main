import React from "react";
import Button from "../Custom/ButtonBuy";
import manufacturing_bg from "../../assets/Manufacturing/manufacturing_bg.png";
import supply_icon from "../../assets/Manufacturing/supply_icon.png";
import time_icon from "../../assets/Manufacturing/time_icon.png";
import ButtonSolution from "../Custom/ButtonSolution";

const UniqueFacility = () => {
  return (
    <div className="flex w-full flex-col items-center py-20">
      <p className="lg:text-5xl sm:text-4xl text-[28px] font-bold tracking-wide font-exo lg:pb-16 sm:pb-14 pb-8 px-6 text-amBlue text-center mx-auto">
        Discover Our Unique Facilities and Expert Services :
      </p>
      <div className="lg:text-center text-justify text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8 xl:w-[1280px] mx-4 px-10">
        Our team of skilled technicians and engineers deliver top-tier services,
        offering custom solutions and unparalleled quality for all your wiring
        and assembly needs. Experience the difference with us, where innovation
        meets excellence. Enhance your business's success through our top-tier
        services and one-of-a-kind facilities.
      </div>
      <div className="flex flex-wrap sm:gap-10 gap-5 justify-center items-center text-sm sm:text-base">
        <Button />
        <ButtonSolution />
      </div>
      <div className="my-24 w-full">
        <img
          className="w-full object-cover h-full"
          src={manufacturing_bg}
          alt="Manufacturing background"
        />
      </div>
      <div className="flex items-center flex-col lg:p-10 p-6 shadow-lg rounded-lg bg-amCard sm:h-[788px] h-96 lg:w-[622px] w-[334px] text-center">
        <img
          className="lg:h-60 h-40 w-auto mx-auto  lg:m-10"
          src={supply_icon}
          alt="icon"
        />
        <p className="text-amBlue font-bold text-4xl py-6 font-lato">
          Supply Chain
        </p>
        {/* <p className="lg:h-40 sm:h-60 h-52 text-amBlue sm:text-base text-sm font-lato font-semibold lg:leading-8 leading-7"></p> */}
        <ul className="text-amBlue font-lato text-left list-disc font-semibold sm:text-xl">
          <li className="leading-10">
            Efficient and streamlined supply chain processes
          </li>
          <li className="leading-10">
            Tailored solutions for individual client needs
          </li>
          <li className="leading-10">High volume manufacturing capabilities</li>
          <li className="leading-10">
            Expertise in managing high mix low volume projects
          </li>
          <li className="leading-10">
            No minimum order quantity (MOQ) on assemblies
          </li>
          <li className="leading-10">
            Comprehensive inventory management solutions
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UniqueFacility;

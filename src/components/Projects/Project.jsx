import React, { useEffect } from "react";
import banner from "../../assets/Projects/case_01_banner.webp";
import overview from "../../assets/Projects/case_01_overview.png";
import time_management from "../../assets/Projects/Time management.png";
import financial_growth from "../../assets/Projects/Financial growth.png";
import CallUs from "../Shared/CallUs";

const Project = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const challenges = [
    "Schedule was aggressive.",
    "Complex supply chain.",
    "Components long lead time.",
    "We have to source components from different parts of the world.",
  ];

  const approach = [
    "We figured out substitute parts.",
    "We chose quality components at a reasonable price.",
    "We worked directly with manufacturer to shorten the lead time",
    "We built some prototype really fast, working with local suppliers.",
    "We did full testing and thorough configuration.",
  ];

  const value = [
    "Reduced their engineering budget by 30%",
    "Delivered the sub-assembly on time",
    "Reduced their inventory cost significantly",
    "We can quickly replace or repair the product if it doesn't work",
  ];

  return (
    <div className="container mx-auto flex w-full flex-col items-center justify-center lg:mt-20 sm:mt-16 mt-8 lg:py-24 py-16 lg:px-20 md:px-10 px-6 relative z-10">
      <h1 className="lg:text-5xl sm:text-[40px] text-2xl font-bold tracking-wide font-exo lg:pb-16 sm:pb-14 pb-8 px-10 text-amBlue text-center">
        Case Study :
      </h1>
      <h2 className="text-center text-amBlue lg:text-3xl sm:text-xl font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-14 pb-8">
        Sub-assembly of an Emergency Communication System
      </h2>
      <div className="container py-6">
        <img src={banner} alt="" className="w-full h-auto object-cover" />
      </div>
      <p className="lg:text-4xl sm:text-3xl text-2xl font-semibold tracking-wide font-exo pt-20 lg:pb-16 sm:pb-14 pb-8 px-10 text-amBlue text-center">
        Project Overview
      </p>
      <div className="sm:text-center text-justify text-amBlue sm:text-base text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula lg:pb-14 pb-8">
        Our client, a leading railway system manufacturer, embarked on a project
        to enhance the emergency communication systems on their trains. The
        objective was to design and implement a robust sub-assembly that could
        seamlessly integrate with the existing train infrastructure while
        meeting stringent safety and reliability standards
      </div>
      <img src={overview} alt="" className="lg:mt-20 mt-10 lg:scale-100 sm:scale-75 sm:h-full h-40" />
      <p className="lg:text-4xl sm:text-3xl text-2xl font-semibold tracking-wide font-exo lg:pt-20 pt-6 lg:pb-16 sm:pb-14 pb-8 px-10 text-amBlue text-center">
        Challenges
      </p>
      <div className="flex sm:gap-10 gap-5 flex-wrap justify-center py-8">
        <div className="flex sm:gap-10 gap-2">
          <div className="lg:border-[13px] sm:border-[10px] border-[6px] border-[#D0ECF9] bg-amCard rounded-full lg:h-[260px] sm:h-[240px] h-[170px] lg:w-[260px] sm:w-[240px] w-[170px] flex items-center justify-center text-khula lg:text-xl sm:text-lg text-sm font-semibold text-amBlue lg:leading-10 sm:leading-7 leading-5 text-center tracking-wider p-6">
            Schedule was aggressive.
          </div>
          <div className="lg:border-[13px] sm:border-[10px] border-[6px] border-[#D0ECF9] bg-amCard rounded-full lg:h-[260px] sm:h-[240px] h-[170px] lg:w-[260px] sm:w-[240px] w-[170px] flex items-center justify-center text-khula lg:text-xl sm:text-lg text-sm font-semibold text-amBlue lg:leading-10 sm:leading-7 leading-5 text-center tracking-wider p-6">
            Complex supply chain.
          </div>
        </div>
        <div className="flex sm:gap-10 gap-2">
          <div className="lg:border-[13px] sm:border-[10px] border-[6px] border-[#D0ECF9] bg-amCard rounded-full lg:h-[260px] sm:h-[240px] h-[170px] lg:w-[260px] sm:w-[240px] w-[170px] flex items-center justify-center text-khula lg:text-xl sm:text-lg text-sm font-semibold text-amBlue lg:leading-10 sm:leading-7 leading-5 text-center tracking-wider p-6">
            Components long lead time.
          </div>
          <div className="lg:border-[13px] sm:border-[10px] border-[6px] border-[#D0ECF9] bg-amCard rounded-full lg:h-[260px] sm:h-[240px] h-[170px] lg:w-[260px] sm:w-[240px] w-[170px] flex items-center justify-center text-khula lg:text-xl sm:text-lg text-sm font-semibold text-amBlue lg:leading-10 sm:leading-7 leading-5 text-center tracking-wider p-6">
            We have to source components from different parts of the world.
          </div>
        </div>
      </div>
      <img src={time_management} alt="" className="lg:mt-20 mt-10 lg:scale-100 sm:scale-75 sm:h-full h-40" />
      <p className="lg:text-4xl sm:text-3xl text-2xl font-semibold tracking-wide font-exo lg:pt-20 pt-6 lg:pb-16 sm:pb-14 pb-8 px-10 text-amBlue text-center">
        How We Approach
      </p>
      <div className="flex lg:gap-20 sm:gap-10 gap-3 flex-wrap justify-center py-8">
        {approach.map((item, index) => (
          <div className="lg:border-[13px] sm:border-[10px] border-[6px] border-[#D0ECF9] bg-amCard rounded-xl md:h-60 sm:h-40 h-32 md:w-80 sm:w-60 w-36 flex items-center justify-center text-khula md:text-xl sm:text-base text-sm font-semibold text-amBlue md:leading-10 sm:leading-6 leading-5 text-center sm:tracking-wider sm:p-6 p-3">
            {item}
          </div>
        ))}
      </div>
      <img src={financial_growth} alt="" className="lg:mt-20 mt-10 lg:scale-100 sm:scale-75 sm:h-full h-40" />
      <p className="lg:text-4xl sm:text-3xl text-2xl font-semibold tracking-wide font-exo lg:pt-20 pt-6 lg:pb-16 sm:pb-14 pb-8 px-10 text-amBlue text-center">
        How We Added Value
      </p>
      <div className="py-8 space-y-10">
        {value.map((item, index) => (
          <div className="lg:border-[13px] sm:border-[10px] border-[6px] border-[#D0ECF9] bg-amCard rounded-xl md:h-40 h-20 max-w-[720px] flex items-center justify-center text-khula md:text-xl sm:text-base text-sm font-semibold text-amBlue md:leading-10 sm:leading-6 leading-5 text-center sm:tracking-wider sm:p-6 p-3">
            {item}
          </div>
        ))}
      </div>
      <p className="lg:text-4xl sm:text-3xl text-2xl font-semibold tracking-wide font-exo pt-20 lg:pb-16 sm:pb-14 pb-8 px-10 text-amBlue text-center">
        Summary
      </p>
      <div className="sm:text-center text-justify text-amBlue sm:text-base text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-14 pb-8">
        The successful outcome of this project highlights our commitment to
        innovation, resulting in improved passenger safety and operational
        reliability across their fleet. Our company prioritized a meticulous
        planning process, collaborating with engineering experts to address
        technical complexities. This case study provides insights into strategic
        planning and technical execution for upgrading critical components in
        safety-critical transportation sectors.
      </div>
      <CallUs />
    </div>
  );
};

export default Project;

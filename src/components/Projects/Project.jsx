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

  const approach = [
    "We figured out substitute parts.",
    "We choose quality components at a reasonable price.",
    "We worked directly with manufacturer to shorten the lead time",
    "We build some prototype really fast, working with local suppliers.",
    "We did full testing and thorough configuration.",
  ];

  const value = [
    "Reduced their engineering budget by 30%",
    "Delivered the sub-assembly on time",
    "Reduced their inventory cost significantly",
    "We can quickly replace or repair the product if it doesn't work",
  ];

  return (
    <div className="container mx-auto flex w-full flex-col items-center justify-center lg:my-20 sm:my-16 my-8 lg:py-24 py-16 lg:px-20 px-10 relative z-10">
      <p className="lg:text-5xl sm:text-[40px] text-2xl font-bold tracking-wide font-exo lg:pb-16 sm:pb-14 pb-8 px-10 text-amBlue text-center">
        Case Study :
      </p>
      <div className="text-center text-amBlue lg:text-3xl sm:text-xl font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-14 pb-8">
        Sub-assembly of an Emergency Communication System
      </div>
      <div className="container py-6">
        <img src={banner} alt="" className="w-full h-auto object-cover" />
      </div>
      <p className="lg:text-4xl sm:text-3xl text-2xl font-semibold tracking-wide font-exo pt-20 lg:pb-16 sm:pb-14 pb-8 px-10 text-amBlue text-center">
        Project Overview
      </p>
      <div className="text-center text-amBlue sm:text-base text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-14 pb-8">
        Our client, a leading railway system manufacturer, embarked on a project
        to enhance the emergency communication systems on their trains. The
        objective was to design and implement a robust sub-assembly that could
        seamlessly integrate with the existing train infrastructure while
        meeting stringent safety and reliability standards
      </div>
      <img src={overview} alt="" className="mt-20" />
      <p className="lg:text-4xl sm:text-3xl text-2xl font-semibold tracking-wide font-exo pt-20 lg:pb-16 sm:pb-14 pb-8 px-10 text-amBlue text-center">
        Challenges
      </p>
      <div className="flex gap-10 flex-wrap justify-center py-8">
        <div className="flex gap-10">
          <div className="border-[13px] border-[#D0ECF9] bg-amCard rounded-full h-[260px] w-[260px] flex items-center justify-center text-khula text-xl font-semibold text-amBlue leading-10 text-center tracking-wider p-6">
            Schedule was aggressive.
          </div>
          <div className="border-[13px] border-[#D0ECF9] bg-amCard rounded-full h-[260px] w-[260px] flex items-center justify-center text-khula text-xl font-semibold text-amBlue leading-10 text-center tracking-wider p-6">
            Complex supply chain.
          </div>
        </div>
        <div className="flex gap-10">
          <div className="border-[13px] border-[#D0ECF9] bg-amCard rounded-full h-[260px] w-[260px] flex items-center justify-center text-khula text-xl font-semibold text-amBlue leading-10 text-center tracking-wider p-6">
            Components long lead time.
          </div>
          <div className="border-[13px] border-[#D0ECF9] bg-amCard rounded-full h-[260px] w-[260px] flex items-center justify-center text-khula text-xl font-semibold text-amBlue leading-10 text-center tracking-wider p-6">
            We have to source components from different parts of the world.
          </div>
        </div>
      </div>
      <img src={time_management} alt="" className="mt-20" />
      <p className="lg:text-4xl sm:text-3xl text-2xl font-semibold tracking-wide font-exo pt-20 lg:pb-16 sm:pb-14 pb-8 px-10 text-amBlue text-center">
        How We Approach
      </p>
      <div className="flex lg:gap-20 gap-10 flex-wrap justify-center py-8">
        {approach.map((item, index) => (
          <div className="border-[13px] border-[#D0ECF9] bg-amCard rounded-xl h-60 w-80 flex items-center justify-center text-khula text-xl font-semibold text-amBlue leading-10 text-center tracking-wider p-6">
            {item}
          </div>
        ))}
      </div>
      <img src={financial_growth} alt="" className="mt-20" />
      <p className="lg:text-4xl sm:text-3xl text-2xl font-semibold tracking-wide font-exo pt-20 lg:pb-16 sm:pb-14 pb-8 px-10 text-amBlue text-center">
        How We Approach
      </p>
      <div className="py-8 space-y-10">
        {value.map((item, index) => (
          <div className="border-[13px] border-[#D0ECF9] bg-amCard rounded-xl h-40 w-[720px] flex items-center justify-center text-khula text-xl font-semibold text-amBlue leading-10 text-center tracking-wider p-6">
            {item}
          </div>
        ))}
      </div>
      <p className="lg:text-4xl sm:text-3xl text-2xl font-semibold tracking-wide font-exo pt-20 lg:pb-16 sm:pb-14 pb-8 px-10 text-amBlue text-center">
        How We Approach
      </p>
      <div className="text-center text-amBlue sm:text-base text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-14 pb-8">
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

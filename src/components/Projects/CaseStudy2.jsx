import React, { useEffect } from "react";
import banner from "../../assets/Projects/case_02_banner.webp";
import CallUs from "../Shared/CallUs";
import overview from "../../assets/Projects/case_02_overview.webp";

const CaseStudy2 = () => {
  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);

  const challenges = [
    "Old systems used rigid, expensive PCBs traditional radios communication has limited range",
    "No remote diagnostics.",
    "Required two SIMs per setup.",
    "Needed reliable off-grid operation.",
  ];

  const approach = [
    "Replaced PCBs with low-cost edge computer. Integrated Lora transmission that can go up to 5km reliably.",
    "Added LAN UI + remote diagnostics website.",
    "Used one modem for both devices.",
    "Developped a central website dedicated to grabbing logs and events.",
  ];

  const value = [
    "50% hardware cost savings",
    "50% SIM/data savings",
    "Easy setup with web UI",
    "Central website for remote logs and event monitoring",
    "Scalable & technician-friendly",
    "Longer communication range enabled",
  ];

  return (
    <div className="container mx-auto flex w-full flex-col items-center justify-center lg:mt-20 sm:mt-16 mt-8 lg:py-24 py-16 lg:px-20 md:px-10 px-6 relative z-10">
      <h1 className="lg:text-5xl sm:text-[40px] text-2xl font-bold tracking-wide font-exo lg:pb-16 sm:pb-14 pb-8 px-10 text-amBlue text-center">
        Case Study :
      </h1>
      <h2 className="text-center text-amBlue lg:text-3xl sm:text-xl font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-14 pb-8">
        Intelligent Radar Signaling System with LoRa Integration
      </h2>
      <div className="container py-6">
        <img src={banner} alt="" className="w-full h-auto object-cover" />
      </div>
      <p className="lg:text-4xl sm:text-3xl text-2xl font-semibold tracking-wide font-exo pt-20 lg:pb-16 sm:pb-14 pb-8 px-10 text-amBlue text-center">
        Project Overview
      </p>
      <div className="sm:text-center text-justify text-amBlue sm:text-base text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula lg:pb-14 pb-8">
        We built a smart signaling system using paired radar devices to detect
        vehicles and trigger alerts across zones. Each unit has LoRa sync, a
        flashing light, solar power, and a web interface. Six units were tested
        by the customer.
      </div>
      <img
        src={overview}
        alt=""
        className="lg:mt-20 mt-10 lg:scale-100 sm:scale-75 sm:h-full h-40"
      />
      <p className="lg:text-4xl sm:text-3xl text-2xl font-semibold tracking-wide font-exo lg:pt-20 pt-6 lg:pb-16 sm:pb-14 pb-8 px-10 text-amBlue text-center">
        Challenges
      </p>
      <div className="flex sm:gap-10 gap-5 flex-wrap justify-center py-8">
        <div className="flex sm:gap-10 gap-2">
          <div className="bg-[#75CCF4] rounded-md lg:h-[260px] sm:h-[240px] h-[170px] lg:w-[260px] sm:w-[240px] w-[170px] flex items-center justify-center text-khula lg:text-lg sm:text-base text-sm text-black lg:leading-10 sm:leading-7 leading-5 text-center tracking-wider p-4">
            Old systems used rigid, expensive PCBs traditional radios communication has limited range.
          </div>
          <div className="bg-[#00ACA9] rounded-md lg:h-[260px] sm:h-[240px] h-[170px] lg:w-[260px] sm:w-[240px] w-[170px] flex items-center justify-center text-khula lg:text-lg sm:text-base text-sm text-black lg:leading-10 sm:leading-7 leading-5 text-center tracking-wider p-4">
            No remote diagnostics
          </div>
        </div>
        <div className="flex sm:gap-10 gap-2">
          <div className="bg-[#E8505B] rounded-md lg:h-[260px] sm:h-[240px] h-[170px] lg:w-[260px] sm:w-[240px] w-[170px] flex items-center justify-center text-khula lg:text-lg sm:text-base text-sm text-black lg:leading-10 sm:leading-7 leading-5 text-center tracking-wider p-4">
            Required two SIMs per setup
          </div>
          <div className="bg-[#FFA829] rounded-md lg:h-[260px] sm:h-[240px] h-[170px] lg:w-[260px] sm:w-[240px] w-[170px] flex items-center justify-center text-khula lg:text-lg sm:text-base text-sm text-black lg:leading-10 sm:leading-7 leading-5 text-center tracking-wider p-4">
            Needed reliable off-grid operation.
          </div>
        </div>
      </div>
      {/* <img src={time_management} alt="" className="lg:mt-20 mt-10 lg:scale-100 sm:scale-75 sm:h-full h-40" /> */}
      {/* <p className="lg:text-4xl sm:text-3xl text-2xl font-semibold tracking-wide font-exo lg:pt-20 pt-6 lg:pb-16 sm:pb-14 pb-8 px-10 text-amBlue text-center">
        How We Approach
      </p>
      <div className="flex lg:gap-20 sm:gap-10 gap-3 flex-wrap justify-center py-8">
        {approach?.map((item, index) => (
          <div className="lg:border-[13px] sm:border-[10px] border-[6px] border-[#D0ECF9] bg-amCard rounded-xl md:h-60 sm:h-40 h-32 md:w-80 sm:w-60 w-36 flex items-center justify-center text-khula md:text-xl sm:text-base text-sm font-semibold text-amBlue md:leading-10 sm:leading-6 leading-5 text-center sm:tracking-wider sm:p-6 p-3">
            {item}
          </div>
        ))}
      </div> */}
      {/* <img src={financial_growth} alt="" className="lg:mt-20 mt-10 lg:scale-100 sm:scale-75 sm:h-full h-40" /> */}
      {/* <p className="lg:text-4xl sm:text-3xl text-2xl font-semibold tracking-wide font-exo lg:pt-20 pt-6 lg:pb-16 sm:pb-14 pb-8 px-10 text-amBlue text-center">
        How We Added Value
      </p>
      <div className="py-8 space-y-10">
        {value?.map((item, index) => (
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
      </div> */}
      <CallUs />
    </div>
  );
};

export default CaseStudy2;

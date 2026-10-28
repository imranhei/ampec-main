import { useEffect } from "react";
import approachpic from "../../assets/Projects/approach.png";
import banner from "../../assets/Projects/case_02_banner.webp";
import overview from "../../assets/Projects/case_02_overview.webp";
import financial_growth from "../../assets/Projects/Financial growth.png";
import CallUs from "../Shared/CallUs";

const CaseStudy2 = () => {
  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);

  const challenges = [
    { text: "Old systems used rigid, expensive PCBs", bg: "#75CCF4" },
    {
      text: "Traditional radios communication has limited range",
      bg: "#61CAC5",
    },
    { text: "No remote diagnostics.", bg: "#EC8187" },
    { text: "Required two SIMs per setup.", bg: "#FBC165" },
    { text: "Needed reliable off-grid operation.", bg: "#91A0E2" },
  ];

  const approach = [
    {
      text: "Replaced PCBs with low-cost edge computer.",
      border: "#75CCF4",
    },
    {
      text: "Integrated Lora transmission that can go up to 5km reliably.",
      border: "#00ACA9",
    },
    { text: "Added LAN UI + remote diagnostics website.", border: "#61CAC5" },
    { text: "Used one modem for both devices.", border: "#EC8187" },
    {
      text: "Developped a central website dedicated to grabbing logs and events.",
      border: "#FBC165",
    },
  ];

  const value = [
    { text: "50% hardware cost savings", boldPart: "50%", border: "#75CCF4" },
    { text: "50% SIM/data savings", boldPart: "50%", border: "#61CAC5" },
    { text: "Easy setup with web UI", border: "#EC8187" },
    {
      text: "Central website for remote logs and event monitoring",
      border: "#91A0E2",
    },
    { text: "Scalable & technician-friendly", border: "#FBC165" },
    { text: "Longer communication range enabled", border: "#7AFE4A" },
  ];

  return (
    <div className="container mx-auto flex w-full flex-col items-center justify-center lg:mt-20 sm:mt-16 mt-8 lg:py-24 py-16 lg:px-20 md:px-10 px-6 relative z-10">
      <h1 className="lg:text-5xl sm:text-[40px] text-2xl font-bold tracking-wide font-exo lg:pb-16 sm:pb-14 pb-8 px-10 text-amBlue text-center">
        Case Study :
      </h1>
      <h2 className="text-center text-amBlue lg:text-3xl sm:text-xl font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-14 pb-8">
        Smart Radar Signaling System
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
        className="lg:mt-12 mt-6 lg:scale-75 sm:scale-50 sm:h-full h-40"
      />
      <p className="lg:text-4xl sm:text-3xl text-2xl font-semibold tracking-wide font-exo lg:pt-20 pt-10 lg:pb-16 sm:pb-14 pb-8 px-10 text-amBlue text-center">
        Challenges
      </p>
      <div className="flex lg:gap-20 sm:gap-10 gap-3 flex-wrap justify-center py-8">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            style={{ background: challenge.bg }}
            className="rounded-md lg:h-[260px] sm:h-[240px] h-[170px] lg:w-[260px] sm:w-[240px] w-[170px] flex items-center justify-center text-khula lg:text-lg sm:text-base text-sm font-semibold text-gray-800 lg:leading-10 sm:leading-7 leading-5 text-center tracking-wider p-4"
          >
            {challenge.text}
          </div>
        ))}
      </div>
      <img
        src={approachpic}
        alt=""
        className="lg:mt-20 mt-10 lg:scale-100 sm:scale-75 sm:h-full h-40"
      />
      <p className="lg:text-4xl sm:text-3xl text-2xl font-semibold tracking-wide font-exo lg:pt-20 pt-6 lg:pb-16 sm:pb-14 pb-8 px-10 text-amBlue text-center">
        How We Approach
      </p>
      <div className="flex lg:gap-20 sm:gap-10 gap-3 flex-wrap justify-center py-8">
        {approach?.map((item, index) => (
          <div
            key={index}
            style={{ borderColor: item.border }}
            className="lg:border-[8px] sm:border-[6px] border-[4px] bg-amCard rounded-2xl md:h-60 sm:h-48 h-40 md:w-80 sm:w-60 w-40 flex items-center justify-center text-khula md:text-xl sm:text-base text-sm font-semibold text-amBlue md:leading-10 sm:leading-6 leading-5 text-center sm:tracking-wider sm:p-6 p-3 border-solid"
          >
            {item.text}
          </div>
        ))}
      </div>
      <img
        src={financial_growth}
        alt=""
        className="lg:mt-20 mt-10 lg:scale-100 sm:scale-75 sm:h-full h-40"
      />
      <p className="lg:text-4xl sm:text-3xl text-2xl font-semibold tracking-wide font-exo lg:pt-20 pt-6 lg:pb-16 sm:pb-14 pb-8 px-10 text-amBlue text-center">
        How We Added Value
      </p>
      <div className="py-8 sm:space-y-10 space-y-4">
        {value.map((item, index) => {
          const { text, boldPart, border } = item;
          let content;

          if (boldPart && text.includes(boldPart)) {
            const parts = text.split(boldPart);
            content = (
              <>
                {parts[0]}
                <span className="font-extrabold">{boldPart}&nbsp;</span>
                {parts[1]}
              </>
            );
          } else {
            content = text;
          }

          return (
            <div
              key={index}
              style={{ borderColor: border }}
              className="lg:border-[8px] sm:border-[6px] border-[4px] bg-amCard rounded-2xl md:h-40 h-20 max-w-[720px] flex items-center justify-center text-khula md:text-xl sm:text-base text-sm font-semibold text-amBlue md:leading-10 sm:leading-6 leading-5 text-center sm:tracking-wider sm:p-6 p-3"
            >
              {content}
            </div>
          );
        })}
      </div>
      <p className="lg:text-4xl sm:text-3xl text-2xl font-semibold tracking-wide font-exo pt-20 lg:pb-16 sm:pb-14 pb-8 px-10 text-amBlue text-center">
        Summary
      </p>
      <div className="sm:text-center text-justify text-amBlue sm:text-base text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-14 pb-8">
        We developed a smart, cost-effective radar signaling system that
        overcomes the limitations of traditional solutions. By replacing
        expensive PCBs with an edge computer and using long-range LoRa
        transmission, we enabled reliable communication up to 5km with just one
        modem for two devices. Our system features solar power, a local web
        interface, and a centralized diagnostics website — delivering a
        scalable, technician-friendly solution with significant savings on
        hardware and SIM costs.
      </div>
      <CallUs />
    </div>
  );
};

export default CaseStudy2;

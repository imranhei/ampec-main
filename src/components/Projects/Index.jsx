import React, { useEffect } from "react";
import Projects from "./Projects";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sm:py-20 py-10 z-10 relative">
      <Projects />
      <div className="pt-16 flex flex-col items-center z-10 relative mx-auto">
        <p className="text-center font-exo font-bold lg:text-5xl sm:text-4xl text-2xl text-amBlue tracking-wide sm:pb-16 pb-10 z-10">
          Partner with us
        </p>
        <div className="sm:text-center text-amBlue sm:text-base text-sm font-semibold sm:leading-9 leading-6 tracking-wide font-khula sm:pb-16 pb-8 px-10 max-w-[1300px] mx-auto text-justify">
          Partnering with us is good business. We have the expertise to help you
          perfect your designs and create profitable products. Using our
          contract manufacturing services enables you to ramp up and down on
          production without having to commit to new plant and equipment.
          Whether you're expanding in Australia or branching out into Asia, when
          you work with Ampec you have an expert on hand to get past the hurdles
          that come with new ventures.
        </div>
      </div>
      <p className="text-center sm:py-6 sm:mt-8 mt-4 py-5 font-khula lg:text-5xl sm:text-4xl text-xl text-amBlue font-semibold tracking-wider">
        Call us now on :{" "}
        <span className="font-semibold text-amYellow">+612 8741 5000</span>
      </p>
      <p className="font-khula lg:text-3xl sm:text-2xl text-md text-amBlue text-center sm:pb-6 pb-10">
        We Can Help You Make Your Plans a Reality
      </p>
    </div>
  );
};

export default Index;

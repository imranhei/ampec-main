import React from "react";
import Button from "../Custom/ButtonBuy";

const Partner = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <p className="lg:text-5xl sm:text-4xl text-[28px] font-bold tracking-wide font-exo lg:pb-16 sm:pb-14 pb-8 px-6 text-amBlue text-center mx-auto">
        Partner with us
      </p>
      <div className="text-center text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8 xl:w-[1260px] px-10">
        Partnering with us is good business. We have the expertise to help you
        perfect your designs and create profitable products. Using our contract
        manufacturing services enables you to ramp up and down on production
        without having to commit to new plant and equipment. Whether you’re
        expanding in Australia or branching out into Asia, when you work with
        Ampec you have an expert on hand to get past the hurdles that come with
        new ventures.
      </div>
      <div className="flex flex-wrap sm:gap-10 gap-5 justify-center items-center text-sm sm:text-base sm:pb-24 pb-10">
        <Button />
        <button className="sm:font-semibold font-lato text-amGray text-lg border hover:text-white hover:bg-amGray border-amGray sm:py-3 py-2 sm:rounded-lg rounded w-60 tracking-widest hover:shadow-button duration-100">
          See Our Solutions
        </button>
      </div>
    </div>
  );
};

export default Partner;

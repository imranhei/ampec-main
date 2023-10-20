import React from "react";
import Quality_bg from "../../assets/quality.png";

const Quality = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <p className="lg:text-5xl sm:text-4xl text-[28px] font-bold tracking-wide font-exo lg:pb-16 sm:pb-14 pb-8 px-6 text-amBlue text-center mx-auto">
        Quality
      </p>
      <div className="text-center text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8 lg:w-[1300px] mx-4 px-10">
        We firmly believe that superior quality not only ensures the reliability
        and longevity of our products but also fosters trust and satisfaction
        among our customers. Our commitment to quality permeates every aspect of
        our operations, from design and manufacturing to testing and delivery.
      </div>
      <img className="w-full py-8" src={Quality_bg} alt="Quality background" />
    </div>
  );
};

export default Quality;

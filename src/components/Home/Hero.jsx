import React from "react";
import hero from "../../assets/hero.webp";
import Button from "../Custom/ButtonBuy";
import ButtonSolution from "../Custom/ButtonSolution";

const Hero = () => {
  return (
    <div className="w-full lg:mt-44 sm:mt-36 mt-24">
      <div className="container mx-auto lg:px-20 md:px-10 px-6">
        <h1 className="lg:text-5xl sm:text-[40px] text-2xl font-bold tracking-wide sm:leading-10 font-exo lg:pb-16 sm:pb-14 pb-8 text-amBlue text-center">
          Custom Manufacturing at Scale
        </h1>
        <h2 className="text-center mx-auto text-amBlue lg:text-lg sm:text-base text-sm font-semibold lg:leading-10 sm:leading-7 leading-7 tracking-wide font-khula sm:pb-14 pb-8 lg:w-[800px] md:w-[660px]">
          Established Leader in Contract Engineering and Manufacturing in
          Australia, Specializing in Cable Harness and Box Build Assembly
        </h2>
        <div className="flex flex-wrap sm:gap-10 gap-5 justify-center items-center sm:pb-20 pb-10">
          <Button />
          <ButtonSolution />
        </div>
      </div>
      <img
        className="w-screen sm:h-[478px] h-60 object-cover"
        src={hero}
        alt="Hero banner"
      />
    </div>
  );
};

export default Hero;

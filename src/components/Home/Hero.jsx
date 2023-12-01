import React from "react";
import hero from "../../assets/hero.jpg";
import Button from "../Custom/ButtonBuy";
import ButtonSolution from "../Custom/ButtonSolution";

const Hero = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center lg:mt-44 sm:mt-36 mt-24">
      <p className="lg:text-5xl sm:text-[40px] text-2xl font-bold tracking-wide font-exo lg:pb-16 sm:pb-14 pb-8 px-10 text-amYellow text-center">
        Custom Manufacturing at Scale
      </p>
      <div className="text-center text-amBlue lg:text-lg sm:text-base text-sm font-semibold lg:leading-10 sm:leading-7 leading-7 tracking-wide font-khula sm:pb-14 pb-8 px-10 lg:w-[800px] sm:w-[660px]">
        Established Leader in Contract Engineering and Manufacturing in
        Australia, Specializing in Cable Harness and Box Build Assembly
      </div>
      <div className="flex flex-wrap sm:gap-10 gap-5 justify-center items-center sm:pb-20 pb-10 sm:px-20 px-10">
        <Button />
        <ButtonSolution />
      </div>
      <img
        className="w-full sm:h-[478px] h-60 object-cover"
        src={hero}
        alt="Hero banner"
      />
    </div>
  );
};

export default Hero;

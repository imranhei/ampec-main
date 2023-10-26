import React from "react";
import hero from "../../assets/hero.jpg";
import Button from "../Custom/ButtonBuy";
import ButtonSolution from "../Custom/ButtonSolution";

const Hero = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center relative z-10 lg:mt-44 sm:mt-36 mt-24">
      <p className="lg:text-5xl sm:text-4xl text-[28px] font-bold tracking-wide font-exo lg:pb-16 sm:pb-14 pb-8 px-6 text-amYellow text-center">
        Custom Manufacturing at Scale
      </p>
      <div className="text-center text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8 sm:w-[720px] mx-4">
        Established Leader in Contract Engineering and Manufacturing in
        Australia, Specializing in Cable Harness and Box Build Assembly
      </div>
      <div className="flex flex-wrap sm:gap-10 gap-5 justify-center items-center text-sm sm:text-base sm:pb-20 pb-10">
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

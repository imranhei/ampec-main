import React from "react";
import take_service from "../../assets/Services/service_take.webp";
import Button from "../Custom/ButtonBuy";
import ButtonSolution from "../Custom/ButtonSolution";
// container mx-auto lg:px-20 md:px-10 px-6
const TakeService = () => {
  return (
    <div className="lg:py-24 sm:py-20 py-10 flex flex-col items-center overflow-hidden mx-auto">
      <p className="text-center font-exo font-bold lg:text-4xl sm:text-2xl text-xl text-amBlue tracking-wide container lg:px-20 md:px-10 px-6 sm:pb-16 pb-10 z-10">
        Take our Service to Improve your Business
      </p>
      <div className="sm:text-center text-amBlue sm:text-base text-sm font-semibold sm:leading-9 leading-6 tracking-wide font-khula sm:pb-20 pb-10 container lg:px-20 md:px-10 px-6 text-justify">
        Ampec supplies quality products to your specifications at a competitive
        price. Whether you're after passive components, standard or custom
        cabling, or pre-assembled complex box or panel builds in Sydney, Ampec
        is your go-to supplier. Contact us directly or conveniently order from
        our online catalogue for all your Cable Harness Sydney needs.
      </div>
      <div className="flex flex-wrap sm:gap-10 gap-5 justify-center items-center text-sm sm:text-base sm:font-semibold font-lato lg:px-20 md:px-10 px-6 sm:pb-20 pb-10">
        <Button />
        <ButtonSolution />
      </div>
      <img
        className="w-full sm:scale-100 scale-125 sm:mt-0 mt-10"
        src={take_service}
        alt="Take our Service to Improve your Business"
      />
    </div>
  );
};

export default TakeService;

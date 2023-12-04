import React from "react";
import take_service from "../../assets/Services/service_take.webp";
import Button from "../Custom/ButtonBuy";
import ButtonSolution from "../Custom/ButtonSolution";

const TakeService = () => {
  return (
    <div className="lg:py-24 sm:py-20 py-10 flex flex-col items-center mx-auto">
      <p className="text-center font-exo font-bold lg:text-4xl sm:text-2xl text-xl text-amBlue tracking-wide px-10 sm:pb-16 pb-10 z-10">
        Take our Service to Improve your Business
      </p>
      <div className="sm:text-center text-amBlue sm:text-base text-sm font-semibold sm:leading-9 leading-6 tracking-wide font-khula sm:pb-20 pb-10 px-10 max-w-[1300px] mx-auto text-justify">
        Ampec supplies quality products to your specifications at a competitive
        price. Whether you're after passive components, standard or custom
        cabling or pre-assembled complex box/panel builds, contact us or order
        from our online catalogue.
      </div>
      <div className="flex flex-wrap sm:gap-10 gap-5 justify-center items-center text-sm sm:text-base sm:font-semibold font-lato px-10 sm:pb-20 pb-10">
        <Button />
        <ButtonSolution />
      </div>
      <img
        className="w-full"
        src={take_service}
        alt="Take our Service to Improve your Business"
      />
    </div>
  );
};

export default TakeService;

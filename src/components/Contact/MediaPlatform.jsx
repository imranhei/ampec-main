import React from "react";
import whats_app from "../../assets/icons/whats_app.png";
import messanger from "../../assets/icons/messanger.png";
import telegram from "../../assets/icons/telegram.png";
import tweeter from "../../assets/icons/tweeter.png";

const MediaPlatform = () => {
  return (
    <div className="py-10 sm:mt-10">
      <p className="text-center sm:py-6 font-khula lg:text-5xl sm:text-4xl text-xl text-amBlue font-semibold tracking-wider">
        Send Us a message :
      </p>
      <div className="flex justify-center lg:gap-20 sm:gap-16 gap-8 sm:py-12 py-6">
        <img className="sm:w-20 w-12 sm:h-20 h-12" src={whats_app} alt="whats app" />
        <img className="sm:w-20 w-12 sm:h-20 h-12" src={messanger} alt="messanger" />
        <img className="sm:w-20 w-12 sm:h-20 h-12" src={telegram} alt="telegram" />
        <img className="sm:w-20 w-12 sm:h-20 h-12" src={tweeter} alt="tweeter" />
      </div>
      <p className="font-khula lg:text-3xl sm:text-2xl text-md text-amBlue text-center sm:pb-6">
        We will get back to you within 24 hours
      </p>
    </div>
  );
};

export default MediaPlatform;

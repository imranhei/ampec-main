import React from "react";
import whats_app from "../../assets/icons/whats_app.png";
import messanger from "../../assets/icons/messanger.png";
import telegram from "../../assets/icons/telegram.png";
import tweeter from "../../assets/icons/tweeter.png";

const MediaPlatform = () => {
  return (
    <div className="py-10">
      <p className="text-center sm:py-6 py-5 font-khula lg:text-5xl sm:text-4xl text-xl text-amBlue font-semibold tracking-wider">
        Send Us a message :
      </p>
      <div className="flex justify-center gap-24 py-12">
        <img className="w-28 h-28" src={whats_app} alt="whats app" />
        <img className="w-28 h-28" src={messanger} alt="messanger" />
        <img className="w-28 h-28" src={telegram} alt="telegram" />
        <img className="w-28 h-28" src={tweeter} alt="tweeter" />
      </div>
      <p className="font-khula lg:text-3xl sm:text-2xl text-md text-amBlue text-center sm:pb-6 pb-10">
        We will get back to you within 24 hours
      </p>
    </div>
  );
};

export default MediaPlatform;

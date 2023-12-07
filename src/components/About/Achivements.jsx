import React, { useState, useEffect } from "react";
import badge from "../../assets/badge.png";
import cup from "../../assets/cup.png";
import CountUp from "react-countup";

const Achivements = () => {
  const [isDelayed, setIsDelayed] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
        setIsDelayed(true);
    }, 2000);

    return () => {
      clearTimeout(delay);
    };
  }, []);

  return (
    <div className="lg:py-24 py-16 flex flex-col items-center container mx-auto lg:px-20 md:px-10 px-6">
      <h1 className="text-center font-exo font-bold lg:text-5xl sm:text-4xl text-2xl text-amBlue tracking-wide sm:pb-16 pb-8 z-10">
        About Us
      </h1>
      <div>
        <h2 className="sm:text-center text-justify text-amBlue lg:text-lg sm:text-base text-sm font-semibold lg:leading-10 sm:leading-7 leading-7 tracking-wide font-khula sm:pb-16 pb-8">
          Ampec supplies quality products to your specifications at a
          competitive price. Ampec's current management team has been helping
          business design and manufacture new products in Australia and
          overseas. We're helping them take advantage of the rapid growth in
          demand for internet connected products (the internet of things or
          IoT).
        </h2>
        <div className="flex flex-wrap sm:gap-y-20 gap-y-10 sm:pt-20 pt-10">
          <div className="flex items-center lg:gap-10 sm:gap-4 gap-2 w-1/2 md:md:pr-20 pr-5">
            <div className="flex justify-center items-center lg:h-24 sm:h-20 h-10 lg:w-24 sm:w-20 w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 84 84"
                fill="none"
              >
                <path
                  d="M42 40.25C39.6794 40.25 37.4538 39.3281 35.8128 37.6872C34.1719 36.0462 33.25 33.8206 33.25 31.5C33.25 29.1794 34.1719 26.9538 35.8128 25.3128C37.4538 23.6719 39.6794 22.75 42 22.75C44.3206 22.75 46.5462 23.6719 48.1872 25.3128C49.8281 26.9538 50.75 29.1794 50.75 31.5C50.75 32.6491 50.5237 33.7869 50.0839 34.8485C49.6442 35.9101 48.9997 36.8747 48.1872 37.6872C47.3747 38.4997 46.4101 39.1442 45.3485 39.5839C44.2869 40.0237 43.1491 40.25 42 40.25ZM42 7C35.5022 7 29.2705 9.58124 24.6759 14.1759C20.0812 18.7705 17.5 25.0022 17.5 31.5C17.5 49.875 42 77 42 77C42 77 66.5 49.875 66.5 31.5C66.5 25.0022 63.9188 18.7705 59.3241 14.1759C54.7295 9.58124 48.4978 7 42 7Z"
                  fill="#FFD233"
                />
              </svg>
            </div>
            <div className="font-lato flex-1 font-bold text-amBlue sm:space-y-2">
              <CountUp end={3} duration={2} className="lg:text-6xl sm:text-5xl text-2xl font-khula font-bold" />
              <p className="sm:text-xl text-xs">
                locations across the globe Sydney , Hongkong and Dhaka
              </p>
            </div>
          </div>
          <div className="flex items-center lg:gap-10 gap-4 w-1/2 md:pl-20 pl-5">
            <div className="flex justify-center lg:h-24 sm:h-20 h-10 lg:w-24 sm:w-20 w-10">
              <img className="lg:h-24 sm:h-20 h-10 lg:w-24 sm:w-20 w-10 object-cover" src={badge} alt="badge" />
            </div>
            <div className="font-lato font-bold text-amBlue sm:space-y-2">
              <p className="lg:text-6xl sm:text-5xl text-2xl font-khula font-bold">
                <CountUp end={2000} duration={2} className="" />
                {isDelayed && "+"}
              </p>
              <p className="sm:text-xl text-xs">Customer Served</p>
            </div>
          </div>
          <div className="flex items-center lg:gap-10 gap-4 w-1/2 md:pr-20 pr-5">
            <div className="flex justify-center lg:h-24 sm:h-20 h-10 lg:w-24 sm:w-20 w-10">
              <img className="lg:h-24 sm:h-20 h-10 lg:w-24 sm:w-20 w-10 object-cover" src={cup} alt="badge" />
            </div>
            <div className="font-lato font-bold text-amBlue sm:space-y-2">
            <p className="lg:text-6xl sm:text-5xl text-2xl font-khula font-bold">
                <CountUp end={25} duration={2} />
                {isDelayed && "+"}
              </p>
              <p className="sm:text-xl text-xs">Years of experience</p>
            </div>
          </div>
          <div className="flex items-center lg:gap-10 gap-4 w-1/2 md:pl-20 pl-5">
            <div className="flex justify-center items-center lg:h-24 sm:h-20 h-10 lg:w-24 sm:w-20 w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="95"
                height="95"
                viewBox="0 0 95 95"
                fill="none"
              >
                <path
                  d="M74.0221 48.6868L51.0638 44.3327L43.3451 22.166L35.8242 24.7389L43.543 46.7077L28.1055 64.5202L34.043 69.666L49.4805 51.8535L72.4388 56.2077L74.0221 48.6868Z"
                  fill="#FF9800"
                />
                <path
                  d="M47.4974 37.6035C41.9557 37.6035 37.6016 41.9577 37.6016 47.4993C37.6016 53.041 41.9557 57.3952 47.4974 57.3952C53.0391 57.3952 57.3932 53.041 57.3932 47.4993C57.3932 41.9577 53.0391 37.6035 47.4974 37.6035ZM47.4974 51.4577C45.3203 51.4577 43.5391 49.6764 43.5391 47.4993C43.5391 45.3223 45.3203 43.541 47.4974 43.541C49.6745 43.541 51.4557 45.3223 51.4557 47.4993C51.4557 49.6764 49.6745 51.4577 47.4974 51.4577Z"
                  fill="#FFBC0E"
                />
                <path
                  d="M80.5502 53.4375C80.946 51.4583 81.144 49.4792 81.144 47.5C81.144 45.5208 80.946 43.5417 80.5502 41.5625L87.0814 36.8125C87.8731 36.2188 88.2689 35.0312 87.6752 34.0417L79.1648 19.3958C78.571 18.4062 77.5815 18.0104 76.5919 18.6042L69.269 21.7708C66.3002 19.1979 62.7377 17.2188 58.9773 15.8333L58.1856 7.71875C57.9877 6.72917 57.196 5.9375 56.2065 5.9375H39.1856C38.196 5.9375 37.2065 6.72917 37.2065 7.71875L36.019 15.8333C32.2585 17.2188 28.696 19.1979 25.7273 21.7708L18.4044 18.4062C17.4148 18.0104 16.2273 18.4062 15.8315 19.3958L7.32104 34.0417C6.72729 35.0312 7.12312 36.2188 7.91479 36.8125L14.446 41.5625C14.0502 43.5417 13.8523 45.5208 13.8523 47.5C13.8523 49.4792 14.0502 51.4583 14.446 53.4375L7.91479 58.1875C7.12312 58.7812 6.72729 59.9687 7.32104 60.9583L15.8315 75.6042C16.4252 76.5938 17.4148 76.9896 18.4044 76.3958L25.7273 73.2292C28.696 75.8021 32.2585 77.7812 36.019 79.1667L36.8106 87.2812C37.0085 88.2708 37.8002 89.0625 38.7898 89.0625H55.8106C56.8002 89.0625 57.7898 88.2708 57.7898 87.2812L58.5815 79.1667C62.3419 77.7812 65.9044 75.8021 68.8731 73.2292L76.196 76.5938C77.1856 76.9896 78.3731 76.5938 78.7689 75.8021L87.2794 61.1562C87.8731 60.1667 87.4773 58.9792 86.6856 58.3854L80.5502 53.4375ZM47.4981 69.2708C35.4252 69.2708 25.7273 59.5729 25.7273 47.5C25.7273 35.4271 35.4252 25.7292 47.4981 25.7292C59.571 25.7292 69.269 35.4271 69.269 47.5C69.269 59.5729 59.571 69.2708 47.4981 69.2708Z"
                  fill="#FFBC0E"
                />
              </svg>
            </div>
            <div className="font-lato font-bold text-amBlue sm:space-y-2">
            <p className="lg:text-6xl sm:text-5xl text-2xl font-khula font-bold">
                <CountUp end={5000} duration={2} />
                {isDelayed && "+"}
              </p>
              <p className="sm:text-xl text-xs">
                Parts successfully designed and manufactured
              </p>
            </div>
          </div>
          <div className="flex items-center lg:gap-10 gap-4 w-1/2 md:pr-20 pr-5">
            <div className="flex justify-center items-center lg:h-24 sm:h-20 h-8 lg:w-24 sm:w-20 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="63"
                height="68"
                viewBox="0 0 63 68"
                fill="none"
              >
                <path
                  d="M31.5 34C34.8547 34 38.134 33.003 40.9233 31.135C43.7126 29.267 45.8866 26.612 47.1704 23.5056C48.4542 20.3993 48.7901 16.9811 48.1356 13.6835C47.4812 10.3858 45.8657 7.35668 43.4936 4.97919C41.1215 2.6017 38.0993 0.982606 34.809 0.326658C31.5188 -0.329291 28.1084 0.00736581 25.0091 1.29406C21.9098 2.58074 19.2608 4.75968 17.397 7.55531C15.5332 10.3509 14.5385 13.6377 14.5385 17C14.5385 21.5087 16.3255 25.8327 19.5064 29.0208C22.6873 32.2089 27.0015 34 31.5 34ZM31.5 38.8571C20.9869 38.8571 0 45.3657 0 58.2857V68H63V58.2857C63 45.3657 42.0131 38.8571 31.5 38.8571Z"
                  fill="#FFD233"
                />
              </svg>
            </div>
            <div className="font-lato font-bold text-amBlue sm:space-y-2">
            <p className="lg:text-6xl sm:text-5xl text-2xl font-khula font-bold">
                <CountUp end={50} duration={2} />
                {isDelayed && "+"}
              </p>
              <p className="sm:text-xl text-xs">Talented Professionals</p>
            </div>
          </div>
          <div className="flex items-center lg:gap-10 gap-4 w-1/2 md:pl-20 pl-5">
            <div className="flex justify-center items-center lg:h-24 sm:h-20 h-8 lg:w-24 sm:w-20 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="78"
                height="77"
                viewBox="0 0 78 77"
                fill="none"
              >
                <path
                  d="M55.6725 66.4125L69.225 53.13L65.13 49.0875L55.6725 58.2313L51.87 54.4775L47.775 58.6163L55.6725 66.4125ZM11.7 23.1H58.5V15.4H11.7V23.1ZM58.5 77C53.105 77 48.5056 75.1225 44.7018 71.3675C40.898 67.6124 38.9974 63.0733 39 57.75C39 52.4242 40.9019 47.8837 44.7057 44.1287C48.5095 40.3737 53.1076 38.4974 58.5 38.5C63.895 38.5 68.4944 40.3775 72.2982 44.1326C76.102 47.8876 78.0026 52.4267 78 57.75C78 63.0758 76.0981 67.6163 72.2943 71.3713C68.4905 75.1263 63.8924 77.0026 58.5 77ZM0 73.15V7.70001C0 5.58251 0.7644 3.76916 2.2932 2.25996C3.822 0.750756 5.6576 -0.00256013 7.8 6.53651e-06H62.4C64.545 6.53651e-06 66.3819 0.754607 67.9107 2.26381C69.4395 3.77301 70.2026 5.58507 70.2 7.70001V33.3988C68.38 32.5004 66.4781 31.8421 64.4943 31.4237C62.5105 31.0053 60.5124 30.7974 58.5 30.8H11.7V38.5H39.39C38.285 39.5908 37.2619 40.7779 36.3207 42.0613C35.3795 43.3446 34.5501 44.7242 33.8325 46.2H11.7V53.9H31.4925C31.3625 54.5417 31.2806 55.1679 31.2468 55.7788C31.213 56.3897 31.1974 57.0467 31.2 57.75C31.2 60.445 31.5744 63.0284 32.3232 65.5001C33.072 67.9718 34.1926 70.3292 35.685 72.5725L35.1 73.15L29.25 67.375L23.4 73.15L17.55 67.375L11.7 73.15L5.85 67.375L0 73.15Z"
                  fill="#FFD233"
                />
              </svg>
            </div>
            <div className="font-lato font-bold text-amBlue sm:space-y-2">
            <p className="lg:text-6xl sm:text-5xl text-2xl font-khula font-bold">
                <CountUp end={50000} duration={2} />
                {isDelayed && "+"}
              </p>
              <p className="sm:text-xl text-xs">Order Fulfilled</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achivements;

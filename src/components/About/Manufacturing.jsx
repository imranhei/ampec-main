import React from "react";
import australia from "../../assets/australia.png";
import asia from "../../assets/asia.png";

const Manufacturing = () => {
  return (
    <div className="sm:py-24 py-16 flex flex-col items-center z-10 relative container mx-auto">
      <p className="text-center font-exo lg:text-5xl sm:text-4xl text-2xl text-amBlue tracking-wide sm:pb-16 pb-10 z-10">
        Our Manufacturing
      </p>
      <div>
        <div className="max-w-[1300px] mx-auto sm:text-center text-justify text-amBlue sm:text-base text-sm font-semibold sm:leading-9 leading-6 tracking-wider font-khula sm:pb-16 pb-8 px-10">
          We understand that the best manufacturing decisions are made with the
          product and markets in mind. We work closely with you to ensure that
          your design meets your market and is optimized for fast and timely
          manufacturability. We become your virtual manufacturing cell,
          delivering, quality products on time and on budget.
          <br /> <br />
          Here's a <span className="text-amYellow">
            download-able snapshot
          </span>{" "}
          of our Cable and Box Build Assembly capabilities.
        </div>
      </div>
      <div className="lg:w-4/5 lg:flex justify-between items-center sm:py-20 py-10 px-10">
        <div className="flex w-64 h-64 lg:mx-0 mx-auto lg:mb-0 mb-10">
          <img src={australia} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="lg:w-3/5 text-justify">
          <p className="font-exo lg:text-4xl sm:text-3xl text-xl text-amBlue tracking-wide sm:pb-8 pb-6 z-10 lg:text-left text-center">
            Australia
          </p>
          <p className="text-amBlue sm:text-base text-sm font-semibold sm:leading-9 leading-6 tracking-wider font-khula">
            Our Australian factory is ISO 9001 Certified and UL listed, fully
            staffed and ready to meet your requirements. We self-perform so we
            have full control over quality and customer satisfaction. All our
            staff are IPC/WHMA-A-620 trained and our equipment is state of the
            art. Here we focus on low to mid volume products, including
            ultra-specialised devices and individually customised units.
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col-reverse lg:w-4/5 justify-between items-center sm:py-20 py-0 lg:px-0 px-10">
        <div className="lg:w-3/5 text-justify">
          <p className="font-exo lg:text-4xl sm:text-3xl text-xl text-amBlue tracking-wide sm:pb-8 pb-6 z-10 lg:text-left text-center">
            Asia
          </p>
          <p className="text-amBlue sm:text-base text-sm font-semibold sm:leading-9 leading-6 tracking-wider font-khula">
            When our customers need larger volumes, we have already established
            relationships with proven Asian factories. Our Asian partners share
            our commitment to providing our customers superior service and
            highest quality, components at a genuinely competitive price. We
            support our customers, with Asian manufacturing operations by
            supplying our products directly to the factories through our office
            in Routech, Hong Kong.
          </p>
        </div>
        <div className="flex w-auto sm:h-64 lg:mb-0 mb-10">
          <img
            src={asia}
            alt=""
            className="w-auto h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Manufacturing;

import React, { useState, useEffect } from "react";
import { getService } from "../../data/service";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import DedicatedToSuccess from "../Shared/DedicatedToSuccess";
import Slider from "react-slick";
import { Helmet } from "react-helmet";

const Service = () => {
  const [data, setData] = useState([]); // [data, setData
  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    const temp = getService(params.serviceId);
    setData(temp);
  }, [params.serviceId]);

  if (data === undefined || data === null)
    return (
      <div className="container mx-auto lg:px-20 md:px-10 px-6 relative z-10 lg:pt-44 sm:pt-36 pt-24 flex flex-col items-center">
        No data found
      </div>
    );
  if (data?.length === 0) return <div>Loading...</div>;

  return (
    <div className="container mx-auto lg:px-20 md:px-10 px-6 relative z-10 lg:pt-44 sm:pt-36 pt-24 flex flex-col items-center">
      <Helmet>
        <title>Ampec Technologies | Services</title>
        <meta name="description"
          content={data?.point_2_desc || ""}
        />
        <meta name="keywords" content="Cable harness Australia" />
      </Helmet>
      <h1 className="lg:text-5xl sm:text-4xl text-[28px] font-bold tracking-wide font-exo lg:pb-16 sm:pb-14 pb-8 text-amBlue text-center mx-auto">
        {data?.title || ""}
      </h1>
      <h2 className="sm:text-center text-justify text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8">
        {data?.description || ""}
      </h2>
      <img
        className="w-full py-8 transition-transform duration-300"
        src={data?.banner}
        alt="Quality background"
      />
      <div className="py-20">
        <div className="md:w-1/2 w-64 mx-auto md:float-left xl:pr-20 md:pr-12 xl:pb-12 md:pb-4 pb-10 ">
          <img src={data?.contentImg} alt="" className="w-full h-auto" />
        </div>
        <div className="">
          <p className="lg:text-4xl sm:text-[26px] text-2xl font-bold tracking-wide font-exo lg:pb-8 sm:pb-6 pb-4 text-amBlue mx-auto">
            {data?.subTitle || ""}
          </p>
          <div className="text-justify text-amBlue sm:text-base text-sm lg:leading-10 leading-6 tracking-wide font-khula sm:pb-6 pb-2">
            {data?.subDesc || ""}
          </div>
          <Link
            to="/contact"
            className="text-amYellow w-fit font-lato text-bold sm:text-base text-sm flex gap-2 border border-amBlue/30 px-10 py-3 rounded hover:bg-amBlue group"
          >
            <p>Contact Us</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-amBlue rotate-45 group-hover:translate-x-1 group-hover:text-amYellow duration-300"
            >
              <path
                fill="currentColor"
                d="M11 19.5V7.914l-4.5 4.5L5.086 11L12 4.086L18.914 11L17.5 12.414l-4.5-4.5V19.5h-2Z"
              />
            </svg>
          </Link>
        </div>
      </div>
      <p className="w-full lg:text-2xl sm:text-xl text-lg font-bold tracking-wide font-exo lg:pb-10 sm:pb-8 pb-6 text-amBlue">
        {data?.point_1_title || ""}
      </p>
      <div className="text-justify text-amBlue sm:text-base text-sm  lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8">
        {data?.point_1_desc || ""}
      </div>
      <p className="w-full lg:text-2xl sm:text-xl text-lg font-bold tracking-wide font-exo lg:pb-10 sm:pb-8 pb-6 text-amBlue">
        {data?.point_2_title || ""}
      </p>
      <div className="text-justify text-amBlue sm:text-base text-sm  lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8">
        {data?.point_2_desc || ""}
      </div>
      <p className="w-full lg:text-2xl sm:text-xl text-lg font-bold tracking-wide font-exo lg:pb-10 sm:pb-8 pb-6 text-amBlue">
        {data?.point_3_title || ""}
      </p>
      <div className="text-justify text-amBlue sm:text-base text-sm  lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8">
        {data?.point_3_desc || ""}
      </div>
      
      <div className="flex justify-between w-full overflow-hidden py-10">
        {data?.imgs && data?.imgs?.length > 0 ? (
          <img src={data?.imgs[0]} alt="" className="sm:w-[30%] w-[32%] h-auto" />
        ) : null}
        {data?.imgs && data?.imgs?.length > 1 ? (
          <img src={data?.imgs[1]} alt="" className="sm:w-[30%] w-[32%] h-auto" />
        ) : null}
        {data?.imgs && data?.imgs?.length > 0 ? (
          <img src={data?.imgs[2]} alt="" className="sm:w-[30%] w-[32%] h-auto" />
        ) : null}
      </div>
      <DedicatedToSuccess />
    </div>
  );
};

export default Service;

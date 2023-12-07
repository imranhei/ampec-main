import React, { useState, useEffect } from "react";
import { getService } from "../../data/service";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import DedicatedToSuccess from "../Shared/DedicatedToSuccess";
import Slider from "react-slick";

const Service = () => {
  const [data, setData] = useState([]); // [data, setData
  const params = useParams();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    slidesPerRow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 0,
    gap: 20,
    arrows: false,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

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
  if (data.length === 0) return <div>Loading...</div>;

  return (
    <div className="container mx-auto lg:px-20 md:px-10 px-6 relative z-10 lg:pt-44 sm:pt-36 pt-24 flex flex-col items-center">
      <h1 className="lg:text-5xl sm:text-4xl text-[28px] font-bold tracking-wide font-exo lg:pb-16 sm:pb-14 pb-8 text-amBlue text-center mx-auto">
        {data.title || ""}
      </h1>
      <h2 className="sm:text-center text-justify text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8">
        {data.description || ""}
      </h2>
      <img
        className="w-full py-8 transition-transform duration-300"
        src={data.banner}
        alt="Quality background"
      />
      <div className="py-20">
        <div className="md:w-1/2 w-64 mx-auto md:float-left xl:pr-20 md:pr-12 xl:pb-12 md:pb-4 pb-10 ">
          <img src={data.contentImg} alt="" className="w-full h-auto" />
        </div>
        <div className="">
          <p className="lg:text-4xl sm:text-[26px] text-2xl font-bold tracking-wide font-exo lg:pb-8 sm:pb-6 pb-4 text-amBlue mx-auto">
            {data.subTitle || ""}
          </p>
          <div className="text-justify text-amBlue sm:text-base text-sm lg:leading-10 leading-6 tracking-wide font-khula sm:pb-6 pb-2">
            {data.subDesc || ""}
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
        {data.point_1_title || ""}
      </p>
      <div className="text-justify text-amBlue sm:text-base text-sm  lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8">
        {data.point_1_desc || ""}
      </div>
      <p className="w-full lg:text-2xl sm:text-xl text-lg font-bold tracking-wide font-exo lg:pb-10 sm:pb-8 pb-6 text-amBlue">
        {data.point_2_title || ""}
      </p>
      <div className="text-justify text-amBlue sm:text-base text-sm  lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8">
        {data.point_2_desc || ""}
      </div>
      <p className="w-full lg:text-2xl sm:text-xl text-lg font-bold tracking-wide font-exo lg:pb-10 sm:pb-8 pb-6 text-amBlue">
        {data.point_3_title || ""}
      </p>
      <div className="text-justify text-amBlue sm:text-base text-sm  lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8">
        {data.point_3_desc || ""}
      </div>
      {/* <Slider
          {...settings}
          className="card container mx-auto pb-10 overflow-hidden z-10 mt-16"
        >
          {data.img((item, index) => (
            <div key={index} className="w-full h-full flex justify-center">
              <div className="border bg-nav hover:bg-amCard hover:shadow-lg border-amBlue lg:h-[400px] sm:h-[380px] h-[400px] 2xl:w-[428px] lg:w-[400px] sm:w-[350px] w-80 p-6 m-6 mx-auto test rounded duration-150">
                <div className="w-full h-auto overflow-hidden rounded">
                <img src={item.img} alt="" className="w-full test-hover:scale-105 duration-300" />
                </div>
                <div className="flex gap-5 pt-6">
                  <div className="w-40">
                    <p className="font-exo font-semibold text-xl text-amYellow mb-5">
                      {item.title}
                    </p>
                    <div>
                    <Link
                      to={item.link}
                      className="flex gap-1 group md:text-base text-sm py-2 w-36 border border-amBlue rounded px-1 z-20"
                    >
                      <p className="text-amBlue font-lato tracking-widest">
                        Read more
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="text-amBlue rotate-45 group-hover:ml-2 group-hover:rotate-90 duration-300"
                      >
                        <path
                          fill="currentColor"
                          d="M11 19.5V7.914l-4.5 4.5L5.086 11L12 4.086L18.914 11L17.5 12.414l-4.5-4.5V19.5h-2Z"
                        />
                      </svg>
                    </Link>
                    </div>
                  </div>
                  <div className="w-60 font-khula text-amBlue lg:leading-9 leading-7">{item.des}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider> */}
      <div className="flex justify-between w-full overflow-hidden py-10">
        {data.imgs && data.imgs.length > 0 ? (
          <img src={data?.imgs[0]} alt="" className="sm:w-[30%] w-[32%] h-auto" />
        ) : null}
        {data.imgs && data.imgs.length > 1 ? (
          <img src={data?.imgs[1]} alt="" className="sm:w-[30%] w-[32%] h-auto" />
        ) : null}
        {data.imgs && data.imgs.length > 0 ? (
          <img src={data?.imgs[2]} alt="" className="sm:w-[30%] w-[32%] h-auto" />
        ) : null}
      </div>
      <DedicatedToSuccess />
    </div>
  );
};

export default Service;

import React, { useState, useEffect } from "react";
import { getIndustry } from "../../data/industry";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Partner from "../Shared/PartnerWithUs";
import Slider from "react-slick";

const Industry = () => {
  const [data, setData] = useState([]);
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
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
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
    const temp = getIndustry(params.industryId);
    setData(temp);
  }, [params.industryId]);

  if (data === undefined || data === null)
    return (
      <div className="container mx-auto relative z-10 lg:pt-44 sm:pt-36 pt-24 flex flex-col items-center">
        No data found
      </div>
    );

  if (data.length === 0) return <div>Loading...</div>;

  return (
    <div className="w-full overflow-hidden relative z-10">
      <div className="flex w-full flex-col items-center justify-center lg:mt-44 sm:mt-36 mt-24 container mx-auto">
        <p className="lg:text-5xl sm:text-[40px] text-2xl font-bold tracking-wide font-exo lg:pb-16 sm:pb-14 pb-8 px-10 text-amBlue text-center">
          {data.title || ""}
        </p>
        <div className="md:text-center text-justify text-amBlue lg:text-lg sm:text-base text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-14 pb-8 lg:px-20 px-10">
          {data.description || ""}
        </div>
        <img
          src={data.banner}
          alt="background"
          className="w-full pb-10 lg:px-20 sm:px-10"
        />
        <div className="container mx-auto lg:px-20 px-10">
          <Slider
            {...settings}
            className="card mx-auto pb-10 overflow-hidden z-10"
          >
            {data?.card && data.card.map((item, index) => (
              <div
                key={index}
                className="w-full h-full flex justify-center sm:p-4 p-2"
              >
                <div className="flex justify-center">
                  <div className="bg-amCard hover:bg-gray-100 rounded-xl p-8 sm:w-[350px] w-80 md:h-[470px] sm:h-[410px] h-[350px] shadow-md space-y-2 relative z-10">
                    <div className="sm:h-36 h-16 sm:w-36 w-24 sm:scale-100 scale-90 mx-auto flex justify-center items-center">
                      {item.icon}
                    </div>
                    <p className="font-bold font-exo text-amBlue pt-4 tracking-widest lg:text-xl sm:text-lg text-center pb-2">
                      {item.title}
                    </p>
                    <p className="font-khula text-amBlue md:text-base text-sm sm:text-center text-justify lg:leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="lg:px-20 px-10 py-10">
          <div className="xl:w-fit md:w-1/2 sm:w-2/3 float-none mx-auto md:float-left pb-10 md:pb-0">
          {data.imgs && data.imgs.length > 0 ? <img src={data.imgs[0]} alt="" className="xl:pr-20 md:pr-10 md:pb-5" /> : null}
          </div>
          <div className="text-amBlue flex-1">
            <p className="font-exo font-bold lg:text-4xl sm:text-3xl text-xl sm:pb-10 pb-5">
              {data.subTitle || ""}
            </p>
            <p className="font-khula sm:leading-9 leading-7 pb-10 text-justify sm:text-base text-sm whitespace-pre-line">
              {data.subDescription || ""}
            </p>
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
      </div>
      <div className="w-full py-20 container mx-auto lg:px-20 px-10 text-amBlue text-justify">
        <p className="lg:text-4xl sm:text-2xl text-xl font-exo font-bold md:pb-20 pb-10">
          {data.subHeader || ""}
        </p>
        <p className="lg:text-2xl sm:text-xl text-lg font-exo font-bold pb-4 text-left">
          {data.point_01 || ""}
        </p>
        <p className="text-justify text-amBlue sm:text-base text-sm lg:leading-10 leading-6 tracking-wide font-khula sm:pb-10 pb-6">
          {data.point_01_description || ""}
        </p>

        <p className="lg:text-2xl sm:text-xl text-lg font-exo font-bold pb-4">
          {data.point_02 || ""}
        </p>
        <p className="text-justify text-amBlue sm:text-base text-sm lg:leading-10 leading-6 tracking-wide font-khula sm:pb-10 pb-6">
          {data.point_02_description || ""}
        </p>

        <p className="lg:text-2xl sm:text-xl text-lg font-exo font-bold pb-4">
          {data.point_03 || ""}
        </p>
        <p className="text-justify text-amBlue sm:text-base text-sm lg:leading-10 leading-6 tracking-wide font-khula sm:pb-10 pb-6">
          {data.point_03_description || ""}
        </p>

        <p className="lg:text-2xl sm:text-xl text-lg font-exo font-bold pb-4">
          {data.point_04 || ""}
        </p>
        <p className="text-justify text-amBlue sm:text-base text-sm lg:leading-10 leading-6 tracking-wide font-khula sm:pb-6 pb-2">
          {data.point_04_description || ""}
        </p>
        <div className="flex justify-between sm:py-20 py-10 w-full">
          {data.imgs && data.imgs.length > 1 ? (
            <img src={data.imgs[1]} alt="" className="w-3/5 object-cover " />
          ) : (
            <></>
          )}
          {data.imgs && data.imgs.length > 2 ? (
            <img src={data.imgs[2]} alt="" className="w-1/3 object-cover" />
          ) : (
            <></>
          )}
        </div>
      </div>
      <Partner />
    </div>
  );
};

export default Industry;

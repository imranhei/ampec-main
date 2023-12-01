import React, { useState, useEffect } from "react";
import { getService } from "../../data/service";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../Custom/ButtonBuy";
import ButtonSolution from "../Custom/ButtonSolution";
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

  if(data === undefined || data === null) return (<div className="container mx-auto relative z-10 lg:pt-44 sm:pt-36 pt-24 flex flex-col items-center">No data found</div>)
  if (data.length === 0) return <div>Loading...</div>;

  return (
    <div className="container mx-auto relative z-10 lg:pt-44 sm:pt-36 pt-24 flex flex-col items-center">
      <p className="lg:text-5xl sm:text-4xl text-[28px] font-bold tracking-wide font-exo lg:pb-16 sm:pb-14 pb-8 px-6 text-amBlue text-center mx-auto">
        {data.title || ''}
        
      </p>
      <div className="sm:text-center text-justify text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8 xl:w-[1300px] px-10">
        {data.description || ''}
      </div>
      <img
        className="w-full sm:px-10 py-8 transition-transform duration-300"
        src={data.banner}
        alt="Quality background"
      />
      <div className="py-20 px-10">
        <div className="md:w-1/2 w-64 mx-auto md:float-left xl:pr-20 md:pr-12 xl:pb-12 md:pb-4 pb-10 ">
          <img src={data.contentImg} alt="" className="w-full h-auto" />
        </div>
        <div className="">
          <p className="lg:text-4xl sm:text-[26px] text-2xl font-bold tracking-wide font-exo lg:pb-8 sm:pb-6 pb-4 text-amBlue mx-auto">
            {data.subTitle || ''}
          </p>
          <div className="text-justify text-amBlue sm:text-base text-sm lg:leading-10 leading-6 tracking-wide font-khula sm:pb-6 pb-2">
            {data.subDesc || ''}
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
      <div className="px-10">
        <p className="lg:text-2xl sm:text-xl text-lg font-bold tracking-wide font-exo lg:pb-10 sm:pb-8 pb-6 text-amBlue">
          {data.point_1_title || ''}
        </p>
        <div className="text-justify text-amBlue sm:text-base text-sm  lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8">
          {data.point_1_desc || ''}
        </div>
      </div>
      <div className="px-10">
        <p className="lg:text-2xl sm:text-xl text-lg font-bold tracking-wide font-exo lg:pb-10 sm:pb-8 pb-6 text-amBlue">
          {data.point_2_title || ''}
        </p>
        <div className="text-justify text-amBlue sm:text-base text-sm  lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8">
          {data.point_2_desc || ''}
        </div>
      </div>
      <div className="px-10">
        <p className="lg:text-2xl sm:text-xl text-lg font-bold tracking-wide font-exo lg:pb-10 sm:pb-8 pb-6 text-amBlue">
          {data.point_3_title || ''}
        </p>
        <div className="text-justify text-amBlue sm:text-base text-sm  lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8">
          {data.point_3_desc || ''}
        </div>
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
      <div className="flex justify-between px-10 w-full overflow-hidden py-10">
        {data.imgs && data.imgs.length > 0 ? <img src={data?.imgs[0]} alt="" className="w-[30%] h-auto" /> : null}
        {data.imgs && data.imgs.length > 1 ? <img src={data?.imgs[1]} alt="" className="w-[30%] h-auto" /> : null}
        {data.imgs && data.imgs.length > 0 ? <img src={data?.imgs[2]} alt="" className="w-[30%] h-auto" /> : null}
      </div>
      <div className="flex flex-col items-center px-10 py-10">
        <p className="lg:text-4xl sm:text-3xl text-2xl font-bold tracking-wide font-exo lg:pb-16 sm:pb-14 pb-8 px-6 text-amBlue text-center mx-auto">
          Dedicated to Your Success
        </p>
        <div className="text-center text-amBlue font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8">
          We're not just a supplier; we're a partner dedicated to your success.
          We pride ourselves on being flexible and responsive to your needs. Our
          commitment to quality is unwavering, ensuring that every cable
          assembly we provide is reliable and built to last. We understand the
          importance of your project's success, and our team of experts is here
          to provide the technical support and guidance you need.
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-5 justify-center items-center text-sm sm:text-base sm:pb-20 pb-10">
          <Button />
          <ButtonSolution />
        </div>
      </div>
    </div>
  );
};

export default Service;

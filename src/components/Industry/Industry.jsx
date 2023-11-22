import React, { useState, useEffect } from "react";
import { getIndustry } from "../../data/industry";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Partner from "../Shared/PartnerWithUs";

const Industry = () => {
  const [data, setData] = useState([]); // [data, setData
  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    const temp = getIndustry(params.industryId);
    setData(temp);
    console.log(temp);
  }, [params.industryId]);

  if(data === undefined || data === null) return (<div className="container mx-auto relative z-10 lg:pt-44 sm:pt-36 pt-24 flex flex-col items-center">No data found</div>)

  if (data.length === 0) return <div>Loading...</div>;

  return (
    <div className="w-full overflow-hidden relative z-10">
      <div className="flex w-full flex-col items-center justify-center lg:mt-44 sm:mt-36 mt-24 container mx-auto">
        <p className="lg:text-5xl sm:text-[40px] text-2xl font-bold tracking-wide font-exo lg:pb-16 sm:pb-14 pb-8 px-10 text-amBlue text-center">
          {data.title || ""}
        </p>
        <div className="text-center text-amBlue lg:text-lg sm:text-base text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-14 pb-8 sm:px-20 px-10">
            {data.description || ""}
        </div>
        <img src={data.banner} alt="background" className="w-full pb-10 px-20" />
        {/* <div className="container mx-auto px-10">
          <Slider
            {...settings}
            className="card mx-auto pb-10 overflow-hidden z-10"
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="w-full h-full flex justify-center p-4"
              >
                <div className="flex justify-center">
                  <div className="bg-amCard hover:ring-1 ring-amYellow/30 hover:bg-gray-100 rounded-xl p-8 sm:w-[370px] w-80 sm:h-[450px] h-[380px] shadow-md space-y-2 relative z-10">
                    <div className="sm:h-36 h-24 sm:w-36 w-24 sm:scale-100 scale-90 mx-auto flex justify-center items-center">
                      {item.icon}
                    </div>
                    <p className="font-bold font-exo text-amBlue pt-4 tracking-widest sm:text-xl text-center pb-2">
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
        </div> */}
        <div className="flex lg:gap-20 gap-10 sm:px-20 px-10 py-10">
          {data.imgs && data.imgs.length > 0 ? <img src={data.imgs[0]} alt="" className="flex-1" /> : null} 
          <div className="text-amBlue flex-1">
            <p className="font-exo font-bold lg:text-4xl sm:text-3xl text-xl pb-10">
              {data.subTitle || ''}
            </p>
            <p className="font-khula leading-7 pb-10 text-justify whitespace-pre-line">
                {data.subDescription || ''}
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
      <p className="lg:text-4xl sm:text-3xl text-2xl font-exo font-bold pb-20">
        {data.subHeader || ''}
      </p>
      <p className="lg:text-2xl sm:text-xl text-lg font-exo font-bold pb-4">
        {data.point_01 || ''}
      </p>
      <p className="font-khula sm:text-base text-sm pb-6">
        {data.point_01_description || ''}
      </p>

      <p className="lg:text-2xl sm:text-xl text-lg font-exo font-bold pb-4">
        {data.point_02 || ''}
      </p>
      <p className="font-khula sm:text-base text-sm pb-6">
        {data.point_02_description || ''}
      </p>

      <p className="lg:text-2xl sm:text-xl text-lg font-exo font-bold pb-4">
        {data.point_03 || ''}
      </p>
      <p className="font-khula sm:text-base text-sm pb-6">
        {data.point_03_description || ''}
      </p>

      <p className="lg:text-2xl sm:text-xl text-lg font-exo font-bold pb-4">
        {data.point_04 || ''}
      </p>
      <p className="font-khula sm:text-base text-sm">
        {data.point_04_description || ''}
      </p>
      <div className="flex justify-between gap-10 py-20">
       {data.imgs && data.imgs.length > 1 ? <img src={data.imgs[1]} alt="" className="w-3/5 object-cover" /> : <></>}
       {data.imgs && data.imgs.length > 2 ? <img src={data.imgs[2]} alt="" className="flex-1 object-cover"/> : <></>}
      </div>
    </div>
    <Partner />
    </div>
  );
};

export default Industry;

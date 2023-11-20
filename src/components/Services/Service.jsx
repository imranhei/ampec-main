import React, { useState, useEffect } from "react";
import { getService } from "../../data/service";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../Custom/ButtonBuy";

const Service = () => {
  const [data, setData] = useState([]); // [data, setData
  const params = useParams();

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
      <div className="text-center text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8 lg:w-[1300px] mx-4 px-10">
        {data.description || ''}
      </div>
      <img
        className="w-full px-10 py-8 transition-transform duration-300"
        src={data.banner}
        alt="Quality background"
      />
      <div className="flex gap-20 py-20 px-10">
        <div className="w-1/2">
          <img src={data.contentImg} alt="" className="w-full h-auto" />
        </div>
        <div className="w-1/2">
          <p className="lg:text-4xl sm:text-3xl text-2xl font-bold tracking-wide font-exo lg:pb-8 sm:pb-6 pb-4 px-6 text-amBlue text-center mx-auto">
            {data.subTitle || ''}
          </p>
          <div className="text-justify text-amBlue lg:text-xl sm:text-lg text-sm lg:leading-10 leading-6 tracking-wide font-khula sm:pb-6 pb-2">
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
        <div className="text-justify text-amBlue lg:text-xl sm:text-lg text-sm  lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8">
          {data.point_1_desc || ''}
        </div>
      </div>
      <div className="px-10">
        <p className="lg:text-2xl sm:text-xl text-lg font-bold tracking-wide font-exo lg:pb-10 sm:pb-8 pb-6 text-amBlue">
          {data.point_2_title || ''}
        </p>
        <div className="text-justify text-amBlue lg:text-xl sm:text-lg text-sm  lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8">
          {data.point_2_desc || ''}
        </div>
      </div>
      <div className="px-10">
        <p className="lg:text-2xl sm:text-xl text-lg font-bold tracking-wide font-exo lg:pb-10 sm:pb-8 pb-6 text-amBlue">
          {data.point_3_title || ''}
        </p>
        <div className="text-justify text-amBlue lg:text-xl sm:text-lg text-sm  lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8">
          {data.point_3_desc || ''}
        </div>
      </div>
      <div className="flex lg:gap-10 gap-10 px-10 w-full overflow-hidden py-10">
        {data.imgs && data.imgs.length > 0 ? <img src={data?.imgs[0]} alt="" className="w-1/3 h-auto" /> : null}
        {data.imgs && data.imgs.length > 1 ? <img src={data?.imgs[1]} alt="" className="w-1/3 h-auto" /> : null}
        {data.imgs && data.imgs.length > 0 ? <img src={data?.imgs[2]} alt="" className="w-1/3 h-auto" /> : null}
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
          <button className="sm:font-semibold font-lato text-amGray text-lg border hover:text-white hover:bg-amGray border-amGray sm:py-3 py-2 sm:rounded-lg rounded w-60 tracking-widest hover:shadow-button duration-100">
            See Our Solutions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;

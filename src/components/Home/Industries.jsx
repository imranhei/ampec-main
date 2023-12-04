import React, { useRef } from "react";
import Slider from "react-slick";
import air_defence from "../../assets/air-defence.webp";
import excavator from "../../assets/excavator.jpeg";
import medical from "../../assets/medical.jpeg";
import train from "../../assets/train.jpeg";
import power_plant from "../../assets/power_plant.jpeg";
import gaming from "../../assets/gaming.jpeg";
import { Link } from "react-router-dom";

const Industries = () => {
  const containerRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true,
        },
      },
      // {
      //   breakpoint: 500,
      //   settings: {
      //     slidesToShow: 1,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
    ],
  };

  const handleTextHover = () => {
    if (containerRef.current) {
      containerRef.current.classList.add("hovered");
    }
  };

  const handleTextLeave = () => {
    if (containerRef.current) {
      containerRef.current.classList.remove("hovered");
    }
  };

  return (
    <div className="lg:py-24 sm:py-20 py-16 relative z-10 -mt-10">
      <p className="text-center font-exo font-semibold lg:text-5xl sm:text-4xl text-2xl text-amBlue tracking-wide sm:pb-16 pb-10">
        Industries
      </p>
      <p className="font-khula font-semibold text-amBlue sm:text-base text-sm sm:leading-9 leading-7 tracking-wider text-center sm:px-20 px-10">
        We work across different industries around the world
      </p>
      <div className="w-full sm:pt-24 pt-16 font-exo">
        <Slider {...settings}>
          <Link className="slider-item group" to="/industries/defense-industry">
            <div
              className="image-container relative"
              ref={containerRef}
              onMouseEnter={handleTextHover}
              onMouseLeave={handleTextLeave}
            >
              <img
                className="group-hover:scale-105 duration-300"
                src={air_defence}
                alt="Air Defence"
              />
              <div className="opacity-0 group-hover:opacity-100 to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 duration-500" />
              <p
                className="absolute sm:text-5xl text-xl font-bold text-white top-1/2 sm:-mt-6 -mt-4 text-center w-full duration-500 opacity-0 group-hover:opacity-100 group-hover:tracking-normal tracking-[10px]"
                onMouseEnter={handleTextHover}
                onMouseLeave={handleTextLeave}
              >
                Defence
              </p>
            </div>
          </Link>
          <Link className="slider-item group" to="/industries/transport-industry">
            <div className="image-container relative"
            ref={containerRef}
            onMouseEnter={handleTextHover}
            onMouseLeave={handleTextLeave}>
              <img
                className="group-hover:scale-105 duration-300"
                src={train}
                alt="Train"
              />
              <div className="opacity-0 group-hover:opacity-100 to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 duration-500" />
              <p className="absolute sm:text-5xl text-xl font-bold text-white top-1/2 sm:-mt-6 -mt-4 text-center w-full duration-500 opacity-0 group-hover:opacity-100 group-hover:tracking-normal tracking-[10px]"
              onMouseEnter={handleTextHover}
              onMouseLeave={handleTextLeave}>
                Transport
              </p>
            </div>
          </Link>
          <Link className="slider-item group" to="/industries/mining-industry">
            <div
              className="image-container relative"
              ref={containerRef}
              onMouseEnter={handleTextHover}
              onMouseLeave={handleTextLeave}
            >
              <img
                className="group-hover:scale-105 duration-300"
                src={excavator}
                alt="Excavator"
              />
              <div className="opacity-0 group-hover:opacity-100 to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 duration-500" />
              <p
                className="absolute sm:text-5xl text-xl font-bold text-white top-1/2 sm:-mt-6 -mt-4 text-center w-full duration-500 opacity-0 group-hover:opacity-100 group-hover:tracking-normal tracking-[10px]"
                onMouseEnter={handleTextHover}
                onMouseLeave={handleTextLeave}
              >
                Mining
              </p>
            </div>
          </Link>
          <Link className="slider-item group" to="/industries/medical-industry">
            <div
              className="image-container relative"
              ref={containerRef}
              onMouseEnter={handleTextHover}
              onMouseLeave={handleTextLeave}
            >
              <img
                className="group-hover:scale-105 duration-300"
                src={medical}
                alt="Medical"
              />
              <div className="opacity-0 group-hover:opacity-100 to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 duration-500" />
              <p
                className="absolute sm:text-5xl text-xl font-bold text-white top-1/2 sm:-mt-6 -mt-4 text-center w-full duration-500 opacity-0 group-hover:opacity-100 group-hover:tracking-normal tracking-[10px]"
                onMouseEnter={handleTextHover}
                onMouseLeave={handleTextLeave}
              >
                Medical
              </p>
            </div>
          </Link>
          <Link className="slider-item group" to="/industries/energy-industry">
            <div
              className="image-container relative"
              ref={containerRef}
              onMouseEnter={handleTextHover}
              onMouseLeave={handleTextLeave}
            >
              <img
                className="group-hover:scale-105 duration-300"
                src={power_plant}
                alt="Power Plant"
              />
              <div className="opacity-0 group-hover:opacity-100 to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 duration-500" />
              <p
                className="absolute sm:text-5xl text-xl font-bold text-white top-1/2 sm:-mt-6 -mt-4 text-center w-full duration-500 opacity-0 group-hover:opacity-100 group-hover:tracking-normal tracking-[10px]"
                onMouseEnter={handleTextHover}
                onMouseLeave={handleTextLeave}
              >
                Renewable Energy
              </p>
            </div>
          </Link>
          <Link className="slider-item group" to="/industries/gaming-industry">
            <div
              className="image-container relative"
              ref={containerRef}
              onMouseEnter={handleTextHover}
              onMouseLeave={handleTextLeave}
            >
              <img
                className="group-hover:scale-105 duration-300"
                src={gaming}
                alt="Gaming"
              />
              <div className="opacity-0 group-hover:opacity-100 to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 duration-500" />
              <p
                className="absolute sm:text-5xl text-xl font-bold text-white top-1/2 sm:-mt-6 -mt-4 text-center w-full duration-500 opacity-0 group-hover:opacity-100 group-hover:tracking-normal tracking-[10px]"
                onMouseEnter={handleTextHover}
                onMouseLeave={handleTextLeave}
              >
                Gaming
              </p>
            </div>
          </Link>
        </Slider>
      </div>
    </div>
  );
};

export default Industries;

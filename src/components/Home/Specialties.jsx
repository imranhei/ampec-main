import React from "react";
import { Link } from "react-router-dom";
import specialties_01 from "../../assets/specialties_01.png";
import specialties_02 from "../../assets/specialties_02.png";
import specialties_03 from "../../assets/specialties_03.png";
import Slider from "react-slick";

const Specialties = () => {
  const product = [
    {
      img: specialties_01,
      title: "Engineering",
      des: "Transform ideas into reality through simul-ation & precision 2D/ 3D drawing",
      link: "/services/engineering-design",
    },
    {
      img: specialties_02,
      title: "Quality",
      des: "Excellence You Can Trust: ISO 9001, UL Listed and IPC Certified Manufacturing",
      link: "/quality",
    },
    {
      img: specialties_03,
      title: "Manufacturing",
      des: "Cost effective from prototype to scale",
      link: "/manufacturing",
    },
  ];

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

  return (
    <div className="lg:py-24 sm:py-20 py-16 md:mt-10 mt-4 container mx-auto lg:px-20 md:px-10 px-6">
      <p className="text-center font-exo font-semibold lg:text-5xl sm:text-4xl text-2xl text-amBlue tracking-wide sm:pb-16 pb-10">
        Explore our Specialties
      </p>
      <p className="font-khula font-semibold text-amBlue sm:text-base text-sm sm:leading-9 leading-7 tracking-wide sm:text-center text-justify">
        At Ampec, we are committed to delivering top-notch cable harness and box
        assembly solutions. Explore our specialties, and you'll discover a
        partner dedicated to manufacturing excellence, quality assurance, and
        cutting-edge engineering.
      </p>
      <div className="container mx-auto">
        <Slider
          {...settings}
          className="card container mx-auto pb-10 overflow-hidden z-10 mt-16"
        >
          {product.map((item, index) => (
            <div key={index} className="w-full h-full flex justify-center duration-200 ease-in-out hover:-mt-8">
              <div className="border bg-nav hover:bg-amCard hover:shadow-lg border-amBlue lg:h-[400px] h-[380px] 2xl:w-[428px] lg:w-[360px] sm:w-[330px] w-[300px] p-6 m-6 mx-auto test rounded duration-150">
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
                  <div className="w-60 font-khula text-amBlue lg:leading-8 leading-6">{item.des}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Specialties;

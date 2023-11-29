import React from "react";
import facility_01 from "../../assets/facility_01.jpeg";
import facility_02 from "../../assets/facility_02.jpeg";
import facility_03 from "../../assets/facility_03.jpeg";
import facility_04 from "../../assets/ampec_map_view.png";
import facility_05 from "../../assets/factory building.jpg";
import Slider from "react-slick";

const Facilities = () => {
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
    // arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="lg:py-24 sm:py-16 py-12 container mx-auto sm:px-20 px-10">
      <p className="text-center font-exo font-semibold lg:text-5xl sm:text-4xl text-2xl text-amBlue tracking-wide lg:pb-16 pb-14">
        Our Facilities
      </p>
      <div className="inline-block">
        <div className="xl:w-[600px] sm:w-[400px] overflow-hidden mx-auto lg:float-left xl:pr-20 lg:pr-12 lg:pb-8 pb-10">
          <img className="xl:h-80 sm:h-72 h-52 w-full object-cover" src={facility_01} alt="" />
        </div>
        <p className=" font-khula sm:font-semibold font-medium sm:text-base text-sm text-amBlue text-justify lg:leading-10 sm:leading-8 leading-6 tracking-wider">
          The office and manufacturing facilities of our tech company blend
          innovation and efficiency seamlessly. Our modern office space is
          designed to foster collaboration and creativity, with open-plan work
          areas, cozy breakout zones, and cutting-edge technology at every turn.
          <br /> <br />
          Meanwhile, our state-of-the-art manufacturing facilities are equipped
          with advanced machinery and automated systems, ensuring precision and
          productivity. The floor layout is optimized for seamless workflow,
          from the assembly lines to quality control areas. Clean and organized,
          our facilities embody our commitment to excellence in both design and
          production.
        </p>
      </div>
      <div className="lg:pt-24 pt-16">
        <Slider {...settings} className="carousel pb-10 overflow-hidden">
          <div className="w-full xl:h-64 h-48 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={facility_02}
              alt="facility"
            />
          </div>
          <div className="w-full xl:h-64 h-48 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={facility_03}
              alt="facility"
            />
          </div>
          <div className="w-full xl:h-64 h-48 overflow-hidden">
            <img
              className="w-full h-full object-cover scale-150"
              src={facility_04}
              alt="facility"
            />
          </div>
          <div className="w-full xl:h-64 h-48 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={facility_05}
              alt="facility"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Facilities;

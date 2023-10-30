import React from "react";
import facility_01 from "../../assets/facility_01.jpeg";
import facility_02 from "../../assets/facility_02.jpeg";
import facility_03 from "../../assets/facility_03.jpeg";
import facility_04 from "../../assets/facility_04.jpeg";
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
      <div className="lg:flex gap-20 justify-center items-center lg:space-y-0 space-y-6">
        <div className="md:h-80 h-60 lg:w-2/5 w-full overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={facility_01}
            alt=""
          />
        </div>
        <p className="flex-1 font-khula sm:font-semibold font-medium sm:text-base text-sm text-amBlue text-justify md:pt-0 sm:pt-14 pt-6 lg:leading-10 sm:leading-8 leading-6 tracking-wider">
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
            <div className="w-full h-full overflow-hidden">
                <img className="w-full h-full object-cover" src={facility_02} alt="facility" />
            </div>
            <div className="w-full h-full overflow-hidden">
                <img className="w-full h-full object-cover" src={facility_03} alt="facility" />
            </div>
            <div className="w-full h-full overflow-hidden">
                <img className="w-full h-full object-cover" src={facility_04} alt="facility" />
            </div>
            <div className="w-full h-full overflow-hidden">
                <img className="w-full h-full object-cover" src={facility_04} alt="facility" />
            </div>
        </Slider>
      </div>
    </div>
  );
};

export default Facilities;

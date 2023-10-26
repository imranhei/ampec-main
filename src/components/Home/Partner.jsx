import React, { useEffect } from "react";
import watlow_logo from "../../assets/watlow_logo.png";
import oupiin_logo from "../../assets/oupiin_logo.png";
import cde_logo from "../../assets/cde_logo.png";
import deca_logo from "../../assets/deca_logo.png";
import holin_logo from "../../assets/holin_logo.png";
import sakae_logo from "../../assets/sakae_logo.png";
import pem_logo from "../../assets/pem_logo.png";
import avatar from "../../assets/avatar.jpg";
import Slider from "react-slick";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Partner = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    speed: 1500,
    slidesPerRow: 1,
    autoplay: true,
    autoplaySpeed: 100,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="lg:py-24 sm:py-20 py-16 relative z-10 -mt-10">
      <p className="text-center font-exo lg:text-5xl sm:text-4xl text-2xl text-amBlue tracking-wide lg:pb-24 sm:pb-16 pb-10">
        Our Business Partners
      </p>
      <div className="w-full sm:px-10 px-4">
        <Slider {...settings}>
          <div className="w-full h-full overflow-hidden">
            <img
              className="w-full h-full object-cover sm:scale-50 scale-75"
              src={watlow_logo}
              alt="watlow_logo"
            />
          </div>
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover sm:scale-50 scale-75"
              src={oupiin_logo}
              alt="watlow_logo"
            />
          </div>
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover sm:scale-50 scale-75"
              src={cde_logo}
              alt="watlow_logo"
            />
          </div>
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover sm:scale-50 scale-75"
              src={deca_logo}
              alt="watlow_logo"
            />
          </div>
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover sm:scale-50 scale-75"
              src={holin_logo}
              alt="watlow_logo"
            />
          </div>
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover sm:scale-50 scale-75"
              src={sakae_logo}
              alt="watlow_logo"
            />
          </div>
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover sm:scale-50 scale-75"
              src={pem_logo}
              alt="watlow_logo"
            />
          </div>
        </Slider>
      </div>
      <div className="lg:px-10 lg:flex gap-20 container mx-auto pt-28 items-center justify-evenly px-10">
        <div data-aos="fade-right" className="w-60 text-center lg:mx-0 mx-auto lg:pb-0 pb-6">
          <div className="h-40 w-40 rounded-lg overflow-hidden mx-auto mb-4">
            <img src={avatar} alt="" className="w-full h-full object-cover" />
          </div>
          <p className="font-khula font-bold text-lg">Sr. Engineer</p>
          <p>Large Electrical Device OEM</p>
        </div>
        <div data-aos="fade-left" className="lg:w-1/2 text-justify leading-8 font-khula tracking-wider relative text-amBlue">
          <span className="text-8xl text-amYellow absolute -left-14 -top-5 italic">
            "
          </span>
          I recently had the pleasure of partnering with AMPEC TECHNOLOGIES for
          my technology needs, and I must say that their service and expertise
          exceeded my expectations in every way possible. First and foremost,
          their team of professionals is incredibly knowledgeable and
          experienced. They took the time to understand my specific requirements
          and provided tailored solutions that perfectly met my needs. Their
          expertise in the field was evident as they effortlessly addressed any
          concerns or questions I had, guiding me through the entire process
          with patience and clarity.{" "}
          <span className="text-8xl text-amYellow italic absolute -bottom-20">
            "
          </span>
        </div>
      </div>
      <div className="lg:px-10 flex flex-col-reverse lg:flex-row lg:gap-20 container mx-auto sm:pt-32 pt-20 items-center justify-evenly px-10">
        <div data-aos="fade-right" className="lg:w-1/2 text-justify leading-8 font-khula tracking-wider relative text-amBlue">
          <span className="text-8xl text-amYellow absolute -left-14 -top-5 italic">
            "
          </span>
          I am extremely satisfied with the cable assemblies provided by this
          company. The quality of their products is exceptional, and their
          attention to detail is evident in every piece. The team's
          responsiveness and professionalism throughout the process were truly
          commendable. I highly recommend AMPEC TECHNOLOGIES to anyone in need
          of cable assembly services. Their expertise, attention to detail,
          reliability, and outstanding customer service make them a top choice
          in the industry. I look forward to working with them again on future
          projects.
          <span className="text-8xl text-amYellow italic absolute -bottom-20">
            "
          </span>
        </div>
        <div data-aos="fade-left" className="w-60 text-center lg:pb-0 pb-6">
          <div className="h-40 w-40 rounded-lg overflow-hidden mx-auto mb-4">
            <img
              src={avatar}
              alt=""
              className="w-full h-full object-top object-cover"
            />
          </div>
          <p className="font-khula font-bold text-lg">Sr . Buyer</p>
          <p>Large Electrical Device OEM</p>
        </div>
      </div>
    </div>
  );
};

export default Partner;

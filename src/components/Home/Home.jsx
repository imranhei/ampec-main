import { useEffect } from "react";
import engineering from "../../assets/icon _engineering.png";
import manufacturing from "../../assets/icon_manufacturing.png";
import quality from "../../assets/icon_quality.png";
import React from "react";
import Hero from "./Hero";
import Specialties from "./Specialties";
import Card from "./Card";
import Product from "./Product";
import Industries from "./Industries";
import Contact from "./Contact";
import Partner from "./Partner";
import Facilities from "./Facilities";
import iso_logo from "../../assets/Quality/iso_logo.png";
import ul_logo from "../../assets/Quality/ul_logo.png";
import ipc_logo from "../../assets/Quality/ipc_logo.png";
import iso_certificate from "../../assets/Quality/iso_certificate.pdf";
import bsi_logo from "../../assets/Quality/bsi_logo.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Home = () => {
  const engage = [
    {
      icon: engineering,
      title: "Engineering",
      para: "Transform ideas into reality through simulation & precision 2D/ 3D drawing",
      link: "#",
    },
    {
      icon: manufacturing,
      title: "Manufacturing",
      para: "Cost effective from prototype to scale",
      link: "/manufacturing",
    },
    {
      icon: quality,
      title: "Quality",
      para: "Excellence You Can Trust: ISO 9001, UL Listed and IPC Certified Manufacturing",
      link: "/quality",
    },
  ];

  const handleViewCertificate = () => {
    window.open(iso_certificate, "_blank");
  };

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
  }, []);

  return (
    <div className="w-full overflow-hidden relative z-10">
      <Hero />
      {/* <Slider
        {...settings}
        className="card container mx-auto pb-10 overflow-hidden -mt-10 lg:hidden"
      >
        {engage.map((item, index) => (
          <div key={index} className="w-full h-full flex justify-center">
            <div className="flex justify-center">
              <Card key={index} props={item} index={index} />
            </div>
          </div>
        ))}
      </Slider>
      <div className="lg:flex justify-center gap-10 mx-auto container hidden -mt-10 pb-24">
        {engage.map((item, index) => (
          <Card key={index} props={item} index={index} />
        ))}
      </div> */}
      <Specialties />
      <div className="flex w-full flex-col items-center container mx-auto lg:px-20 md:px-10 px-6">
        <p className="lg:text-5xl sm:text-4xl text-[28px] font-bold tracking-wide font-exo lg:py-16 sm:py-14 py-8 text-amBlue text-center">
          Certifications and Compliance
        </p>
        <div className="sm:text-center text-justify text-amBlue sm:text-base text-sm sm:leading-9 leading-7 tracking-wide font-semibold font-khula sm:pb-16 pb-8">
          We take pride in meeting and often exceeding industry standards and
          certifications. We take our commitment to quality seriously, and
          that's why we hold several industry certifications and comply with
          relevant standards, including:
        </div>
        <div className="flex gap-8 w-full justify-around items-center flex-wrap sm:pb-20 pb-10">
          <Link onClick={handleViewCertificate}>
            <img
              className="md:p-4 lg:h-36 md:h-32 h-24 "
              src={iso_logo}
              alt=""
            />
          </Link>
          <img
            className="md:p-4 lg:h-36 md:h-32 h-24"
            src={ipc_logo}
            alt=""
          />
          <img
            className="md:p-4 lg:h-[144px] md:h-[115px] h-[72px]"
            src={bsi_logo}
            alt=""
          />
          <img
            className="md:p-4 lg:h-36 md:h-32 h-24"
            src={ul_logo}
            alt=""
          />
        </div>
      </div>
      <Product />
      <Industries />
      <Facilities />
      <Partner />
      <Contact />
    </div>
  );
};

export default Home;

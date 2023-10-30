import { useEffect } from "react";
import engineering from "../../assets/icon _engineering.png";
import manufacturing from "../../assets/icon_manufacturing.png";
import quality from "../../assets/icon_quality.png";
import React from "react";
import Hero from "./Hero";
import Card from "./Card";
import Product from "./Product";
import Industries from "./Industries";
import Contact from "./Contact";
import Partner from "./Partner";
import Facilities from "./Facilities";
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
      <Slider
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

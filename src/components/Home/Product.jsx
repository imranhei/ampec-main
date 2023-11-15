import React from "react";
import cable_assebly from "../../assets/cable_assembly.jpeg";
import engineering_design from "../../assets/engineering_design.jpeg";
import box_build_assembly from "../../assets/box_build_assembly.jpeg";
import strategic_source from "../../assets/strategic_source.jpeg";
import ProductCard from "./ProductCard";
import Slider from "react-slick";

const Product = () => {
  const product = [
    {
      icon: cable_assebly,
      title: "Cable Assembly",
      link: "/services/cable-assembly",
    },
    {
      icon: engineering_design,
      title: "Engineering Design",
      link: "/services/engineering-design",
    },
    {
      icon: box_build_assembly,
      title: "Box Build Assembly",
      link: "/services/box-build",
    },
    {
      icon: strategic_source,
      title: "Strategic Sourcing",
      link: "/services/strategic-sourcing",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="lg:py-24 sm:py-20 py-16">
      <p className="text-center font-exo font-semibold lg:text-5xl sm:text-4xl text-2xl text-amBlue tracking-wide sm:pb-16 pb-10 px-10">
        Product & Services
      </p>
      <p className="font-khula font-semibold text-amBlue sm:text-base text-sm tracking-wide text-center sm:px-20 px-10">
        Exporting to all major markets including US, Europe, China, and South
        East Asia
      </p>
      <div className="lg:w-[1000px] 2xl:w-[1400px] sm:w-[640px] mx-auto">
        <Slider
          {...settings}
          className="card container mx-auto pb-10 overflow-hidden z-10 mt-16"
        >
          {product.map((item, index) => (
            <div key={index} className="w-full h-full flex justify-center">
              <div className="flex justify-center">
                <ProductCard key={index} product={item} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Product;

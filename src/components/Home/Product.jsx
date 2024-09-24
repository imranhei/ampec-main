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
      des: "Cable assembly is the process of creating custom cables and harnesses by combining wires, connectors, and other components.",
    },
    {
      icon: engineering_design,
      title: "Engineering Design",
      link: "/services/engineering-design",
      des: "Engineering design for a company involves the systematic process of creating, planning, and refining products, systems, or structures to meet specific needs and goals.",
    },
    {
      icon: box_build_assembly,
      title: "Box Build Assembly",
      link: "/services/box-build",
      des: "Box build assembly is a process in which various components, including printed circuit boards , electronic components, wiring, and mechanical elements, are assembled and integrated into a final enclosure or housing.",
    },
    {
      icon: strategic_source,
      title: "Strategic Sourcing",
      link: "/services/strategic-sourcing",
      des: "Strategic sourcing is a process that involves the identification, evaluation, and selection of suppliers that are best suited to meet a company's needs.",
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
        breakpoint: 1279,
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
    <div className="lg:py-24 sm:py-20 py-16 container mx-auto lg:px-20 md:px-10 px-6">
      <p className="text-center font-exo font-semibold lg:text-5xl sm:text-4xl text-2xl text-amBlue tracking-wide sm:pb-16 pb-10">
        Product & Services
      </p>
      <p className="font-khula font-semibold text-amBlue sm:text-base sm:leading-9 leading-7 text-sm tracking-wide text-center">
        Exporting to all major markets including US, Europe, China, and South
        East Asia
      </p>
      <div className="lg:w-[800px] 2xl:w-[1300px] xl:w-[1000px] md:w-[650px] sm:w-[590px] mx-auto">
        <Slider
          {...settings}
          className="card container mx-auto pb-10 overflow-hidden z-10 mt-16"
        >
          {product.map((item, index) => (
            <div key={index} className="w-full h-full flex justify-center pt-8">
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

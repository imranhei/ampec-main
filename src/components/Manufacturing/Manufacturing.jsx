import React from "react";
import design_icon from "../../assets/Manufacturing/design_icon.png";
import material_icon from "../../assets/Manufacturing/material_icon.png";
import assembly_icon from "../../assets/Manufacturing/assembly_icon.png";
import testing_icon from "../../assets/Manufacturing/testing_icon.png";
import packaging_icon from "../../assets/Manufacturing/packaging_icon.png";
import Slider from "react-slick";

const Manufacturing = () => {
  const data = [
    {
      id: 1,
      icon: design_icon,
      title: "Design and Prototyping:",
      detail:
        "Our engineering team collaborates closely with you to understand your unique requirements and design the optimal solution. We use state-of-the-art software and hardware for prototyping and validation.",
    },
    {
      id: 2,
      icon: material_icon,
      title: "Materials Procurement:",
      detail:
        "We source high-quality materials and components from trusted suppliers to ensure the longevity and reliability of our products.",
    },
    {
      id: 3,
      icon: assembly_icon,
      title: "Assembly and Integration:",
      detail:
        "Skilled technicians use advanced equipment to assemble and integrate components, ensuring precise connections and functionality.",
    },
    {
      id: 4,
      icon: testing_icon,
      title: "Testing and Quality Assurance:",
      detail:
        "Rigorous testing procedures are conducted at various stages to maintain the highest standards of quality and performance.",
    },
    {
      id: 5,
      icon: packaging_icon,
      title: "Packaging and Shipping:",
      detail:
        "Products are carefully packaged to prevent damage during transportation and promptly delivered to your location.",
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

  return (
    <div className="flex w-full flex-col items-center">
      <p className="lg:text-5xl sm:text-4xl text-[28px] font-bold tracking-wide font-exo lg:pb-16 sm:pb-14 pb-8 px-6 text-amBlue text-center mx-auto">
        Manufacturing
      </p>
      <div className="lg:text-center text-justify text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8 xl:w-[1280px] mx-4 px-10">
        Our commitment to excellence in manufacture, cost management, and supply
        chain optimization sets us apart in the industry. Our manufacturing
        process is a finely-tuned blend of innovation, precision, and expertise.
        We specialize in cable and box build assembly, a complex process that
        requires meticulous attention to detail. Discover the benefits of
        partnering with us for all your cable and box assembly needs.
      </div>
      <div className="lg:flex container hidden lg:flex-wrap justify-center lg:gap-10 gap-5 lg:py-24 py-10 px-10">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center flex-col lg:p-10 p-6 shadow-lg rounded-lg bg-amCard hover:bg-gray-100 sm:h-[553px] h-96 lg:w-[564px] w-[334px] text-center"
          >
            <img
              className="lg:h-40 h-20 w-auto mx-auto  lg:m-10"
              src={item.icon}
              alt="icon"
            />
            <p className="text-amBlue font-bold text-2xl py-5 font-lato">
              {item.title}
            </p>
            <p className="lg:h-40 sm:h-60 h-52 text-amBlue sm:text-base text-sm font-lato font-semibold lg:leading-8 leading-7">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
      <Slider
        {...settings}
        className="container mx-auto pb-10 overflow-hidden z-10 lg:hidden"
      >
        {data.map((item, index) => (
          <div className="p-6">
            <div
            key={item.id}
            className="flex items-center mx-auto flex-col lg:p-10 p-6 shadow-lg rounded-lg bg-amCard hover:bg-gray-100 sm:h-[553px] h-96 lg:w-[564px] w-[334px] text-center"
          >
            <img
              className="lg:h-40 h-20 w-auto mx-auto  lg:m-10"
              src={item.icon}
              alt="icon"
            />
            <p className="text-amBlue font-bold text-2xl py-5 font-lato">
              {item.title}
            </p>
            <p className="lg:h-40 sm:h-60 h-52 text-amBlue sm:text-base text-sm font-lato font-semibold lg:leading-8 leading-7">
              {item.detail}
            </p>
          </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Manufacturing;

import React from "react";
import Button from "../Custom/ButtonBuy";
import manu_icon from "../../assets/Quality/manu_icon.png";
import material_icon from "../../assets/Quality/material_icon.png";
import design_icon from "../../assets/Quality/design_icon.png";
import testing_icon from "../../assets/Quality/testing_icon.png";

const QualityAssurance = () => {
  const data = [
    {
      id: 1,
      icon: design_icon,
      title: "Design and Engineering:",
      detail:
        "Our experienced team of engineers and designers is well-versed in industry best practices and standards. They work tirelessly to ensure that your box build and cable harness solutions are designed for optimal performance and reliability from the very beginning.",
    },
    {
      id: 2,
      icon: material_icon,
      title: "Materials and Components:",
      detail:
        "We source only the highest quality materials and components from trusted suppliers. Each component undergoes rigorous inspection and testing to ensure it meets our strict quality standards.",
    },
    {
      id: 3,
      icon: manu_icon,
      title: "Manufacturing:",
      detail:
        "Our state-of-the-art manufacturing facility is equipped with the latest technology and staffed by skilled technicians who are committed to producing products of the highest caliber. We employ cutting-edge manufacturing processes and adhere to industry-specific quality standards.",
    },
    {
      id: 4,
      icon: testing_icon,
      title: "Testing and Inspection:",
      detail:
        "Before any product leaves our facility, it undergoes thorough testing and inspection. Our Quality Control team meticulously examines each box build and cable harness to verify its functionality, durability, and compliance with specifications.",
    },
  ];

  return (
    <div className="flex w-full flex-col items-center py-20">
      <p className="lg:text-5xl sm:text-4xl text-[28px] font-bold tracking-wide font-exo lg:pb-16 sm:pb-14 pb-8 px-6 text-amBlue text-center mx-auto">
        Quality Assurance at Every Stage
      </p>
      <div className="text-center text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8 lg:w-[1300px] mx-4 px-10">
        Quality is not a static goal but an ongoing pursuit. We continuously
        seek ways to improve our processes and products, ensuring that we stay
        at the forefront of technological advancements and industry standards.
      </div>
      <div className="flex flex-wrap sm:gap-10 gap-5 justify-center items-center text-sm sm:text-base">
        <Button />
        <button className="bg-amGray sm:font-semibold font-lato text-white sm:py-4 py-2 sm:rounded-lg rounded w-60 tracking-widest hover:shadow-button duration-100">
          See Our Solutions
        </button>
      </div>
      <div className="flex flex-wrap justify-center lg:gap-10 gap-5 lg:py-24 py-10 px-10">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center flex-col lg:p-10 p-6 shadow-lg rounded-lg bg-amCard sm:h-[553px] h-96 lg:w-[564px] w-[334px] text-center"
          >
            <img
              className="lg:h-40 h-20 w-auto mx-auto  lg:m-5"
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
      <div className="pb-20">
        <p className="text-center sm:py-6 sm:mt-8 mt-4 py-5 font-khula lg:text-5xl sm:text-4xl text-xl text-amBlue font-semibold tracking-wider">
          Call us now on :{" "}
          <span className="font-semibold text-amYellow">+612 8741 5000</span>
        </p>
        <p className="font-khula lg:text-3xl sm:text-2xl text-md text-amBlue text-center">
          We Can Help You Make Your Plans a Reality
        </p>
      </div>
    </div>
  );
};

export default QualityAssurance;

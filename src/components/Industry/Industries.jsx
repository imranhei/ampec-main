import React from "react";
import mining from "../../assets/Industries/mining.webp";
import defence from "../../assets/Industries/defense.webp";
import transport from "../../assets/train.jpeg";
import gaming from "../../assets/Industries/gaming.webp";
import medical from "../../assets/medical.jpeg";
import energy from "../../assets/Industries/energy.webp";
import { Link } from "react-router-dom";

const Industries = () => {
  const data = [
    {
      id: 1,
      title: "Mining Industry",
      image: mining,
      description:
        "Our cable harnesses & box assemblies are built to withstand the toughest conditions encountered in the mining industry. They are constructed using durable materials that can resist extreme temperatures, moisture, vibrations, and abrasion. Our Company provides comprehensive solutions that cater to the unique needs of mining operations.",
      link: "/industries/mining-industry",
    },
    {
      id: 2,
      title: "defence Industry",
      image: defence,
      description:
        "Ampec Technologies is a pioneering company that specializes in the design and manufacturing of cable harness and box assemblies tailored specifically for the defence industry. With a commitment to precision and reliability, our expert team engineers custom solutions that meet the stringent demands of defence applications.",
      link: "/industries/defence-industry",
    },
    {
      id: 3,
      title: "Transport Industry",
      image: transport,
      description:
        "With a commitment to innovation and precision engineering, we cater to the unique wiring and connectivity needs of the transportation sector. We focus on quality, durability, and compliance with industry standards, so Ampec Technologies is the trusted partner for businesses seeking superior electrical solutions in the transport industry.",
      link: "/industries/transport-industry",
    },
    {
      id: 4,
      title: "Gaming Industry",
      image: gaming,
      description:
        "At Ampec, we understand the thrill and excitement of immersive gaming experiences. That's why we are proud to present our state-of-the-art Cable Harness, designed specifically for gaming machines.With unparalleled quality and performance, our cable harness ensures seamless connectivity and uninterrupted gameplay, taking yourgaming adventures to new heights.",
      link: "/industries/gaming-industry",
    },
    {
      id: 5,
      title: "Medical Industry",
      image: medical,
      description:
        "Choose Ampec for our commitment to quality, reliability, and customized cable harness solutions in the medical industry. Streamline your equipment's performance, ensure compliance, and achieve peace of mind with our cutting-edge solutions.",
      link: "/industries/medical-industry",
    },
    {
      id: 6,
      title: "Energy Industry",
      image: energy,
      description:
        "We specialize in providing high-quality cable harness solutions for the energy industry. Our custom-designed harnesses are engineered to meet the rigorous demands of power transmission, ensuring efficient and reliable performance. With a proven track record of delivering precision-engineered solutions, Ampec is the go-to partner for businesses seeking reliable and efficient electrical systems .",
      link: "/industries/energy-industry",
    },
  ];

  return (
    <div className="container mx-auto lg:px-20 md:px-10 px-6 flex w-full flex-col items-center">
      <h1 className="lg:text-5xl sm:text-4xl text-[28px] font-bold tracking-wide font-exo lg:pb-16 sm:pb-14 pb-8 text-amBlue text-center">
        Industries
      </h1>
      <h2 className="sm:text-center text-justify text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 sm:leading-8 leading-7 tracking-wide font-khula sm:pb-16 pb-8">
        Ampec Technologies is a specialized company in cable harness and box
        assemblies, serving a diverse range of industries. Our custom solutions
        meet the exacting requirements , ensuring seamless connectivity and
        optimal performance for various applications
      </h2>
      {data.map((item) => (
        <div
          key={item.id}
          className={`flex items-center  justify-center lg:py-24 sm:py-14 py-8 pb-8 xl:gap-24 gap-10 ${
            item.id % 2 === 1
              ? "lg:flex-row flex-col"
              : "lg:flex-row-reverse flex-col"
          } flex-col}`}
        >
          <div className="xl:w-2/3 lg:w-3/5 w-full lg:h-auto sm:h-80 h-60">
            <img
              className="w-full h-full object-cover"
              src={item.image}
              alt={item.title}
            />
          </div>
          <div className="xl:w-1/3 lg:w-1/2 w-full">
            <p className="text-amBlue lg:text-4xl sm:text-2xl text-xl font-exo font-bold tracking-wide lg:pb-10 pb-4">
              {item.title}
            </p>
            <p className="text-amBlue sm:text-base text-sm sm:leading-9 leading-6 tracking-wide font-khula lg:pb-8 pb-4 text-justify">
              {item.description}
            </p>

            <Link
              to={item.link}
              className="w-fit text-amYellow font-lato text-bold sm:text-base text-sm flex gap-2 border border-amBlue/30 px-10 py-3 rounded hover:bg-amBlue group"
            >
              <p>Read more</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-amBlue rotate-45 group-hover:translate-x-1 group-hover:text-amYellow duration-300"
              >
                <path
                  fill="currentColor"
                  d="M11 19.5V7.914l-4.5 4.5L5.086 11L12 4.086L18.914 11L17.5 12.414l-4.5-4.5V19.5h-2Z"
                />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Industries;

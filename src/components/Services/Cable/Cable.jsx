import React, { useEffect } from "react";
import cable_01 from "../../../assets/Services/cable_01.png";
import cable_02 from "../../../assets/Services/cable_02.png";
import cable_03 from "../../../assets/Services/cable_03.png";
import cable_04 from "../../../assets/Services/cable_04.png";
import cable_05 from "../../../assets/Services/cable_05.png";
import { Link } from "react-router-dom";
import Button from "../../Custom/ButtonBuy";

const Cable = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full relative z-10 lg:pt-44 sm:pt-36 pt-24 flex flex-col items-center">
      <p className="lg:text-5xl sm:text-4xl text-[28px] font-bold tracking-wide font-exo lg:pb-16 sm:pb-14 pb-8 px-6 text-amBlue text-center mx-auto">
        Cable Assembly
      </p>
      <div className="text-center text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8 lg:w-[1300px] mx-4 px-10">
        Cable assembly is the process of creating custom cables and harnesses by
        combining wires, connectors, and other components. These assemblies
        serve as the backbone of modern technology, ensuring that data, power,
        and signals flow seamlessly between devices. At Ampec, we are passionate
        about precision and connectivity. With years of experience and a
        dedicated team of experts, we specialize in cable assembly solutions
        that drive innovation and enable seamless communication.
      </div>
      <img
        className="w-full py-8 transition-transform duration-300"
        src={cable_01}
        alt="Quality background"
      />
      <div className="flex gap-20 py-20 px-10">
        <div className="w-1/2">
          <img src={cable_02} alt="" className="w-full h-auto" />
        </div>
        <div className="w-1/2">
          <p className="lg:text-4xl sm:text-3xl text-2xl font-bold tracking-wide font-exo lg:pb-16 sm:pb-14 pb-8 px-6 text-amBlue text-center mx-auto">
            Experience You Can Trust
          </p>
          <div className="text-justify text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8">
            Our experience is as diverse as the unique needs of our clients.
            Whether you're in need of thousands of identical custom cables or
            complex wiring harnesses and assemblies containing over 50 custom
            cables and connections within each product, we have the knowledge
            and capability to deliver. Our portfolio is a testament to our
            ability to meet your demands, no matter how intricate they may be.
            <br />
            When it comes to flexible, responsive, and quality-guaranteed cable
            assemblies, Ampec Technologies is the name you can trust. Contact us
            today, and let's discuss how we can create custom solutions that
            exceed your expectations. Your success is our mission, and we're
            ready to make it happen.
          </div>
          <Link
            to="/contact"
            className="text-amYellow w-fit font-lato text-bold sm:text-base text-sm flex gap-2 border border-amBlue/30 px-10 py-3 rounded hover:bg-amBlue group"
          >
            <p>Contact Us</p>
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
      <div className="px-10">
        <p className="lg:text-2xl sm:text-xl text-lg font-bold tracking-wide font-exo lg:pb-10 sm:pb-8 pb-6 text-amBlue">
          Bespoke Cable Assemblies from Scratch
        </p>
        <div className="text-justify text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8">
          At Ampec, we understand that each project is unique, and off-the-shelf
          solutions may not always fit. That's why we take pride in our ability
          to build custom cables from scratch. Our team of expert engineers and
          technicians will work closely with you to design and manufacture cable
          assemblies that are tailored to your exact specifications. This level
          of customization ensures that your cables will perform optimally in
          your specific application.
        </div>
      </div>
      <div className="px-10">
        <p className="lg:text-2xl sm:text-xl text-lg font-bold tracking-wide font-exo lg:pb-10 sm:pb-8 pb-6 text-amBlue">
          Custom Wiring Harnesses
        </p>
        <div className="text-justify text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8">
          In addition to custom cables, we specialize in crafting custom wiring
          harnesses. These harnesses are meticulously designed and manufactured
          to integrate seamlessly into your systems, ensuring that your devices
          and machinery function smoothly and efficiently. We have the expertise
          to create complex wiring solutions, providing the connectivity your
          project demands.
        </div>
      </div>
      <div className="px-10">
        <p className="lg:text-2xl sm:text-xl text-lg font-bold tracking-wide font-exo lg:pb-10 sm:pb-8 pb-6 text-amBlue">
          Complete Product Integration
        </p>
        <div className="text-justify text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8">
          Our commitment to your success extends beyond just cables and wiring
          harnesses. We can take your project to the next level by manufacturing
          your finished product. This means we can assemble and connect any mix
          of cabling that your product requires, providing you with a turnkey
          solution. Whether it's for industrial machinery, consumer electronics,
          or any other application, we have the expertise and facilities to
          bring your product to life
        </div>
      </div>
      <div className="flex gap-20 px-10 w-full py-10">
        <img src={cable_03} alt="" className="w-1/3 h-auto" />
        <img src={cable_04} alt="" className="w-1/3 h-auto" />
        <img src={cable_05} alt="" className="w-1/3 h-auto" />
      </div>
      <div className="flex flex-col items-center px-10 py-10">
        <p className="lg:text-4xl sm:text-3xl text-2xl font-bold tracking-wide font-exo lg:pb-16 sm:pb-14 pb-8 px-6 text-amBlue text-center mx-auto">
          Dedicated to Your Success
        </p>
        <div className="text-justify text-amBlue font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8">
          We're not just a supplier; we're a partner dedicated to your success.
          We pride ourselves on being flexible and responsive to your needs. Our
          commitment to quality is unwavering, ensuring that every cable
          assembly we provide is reliable and built to last. We understand the
          importance of your project's success, and our team of experts is here
          to provide the technical support and guidance you need.
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-5 justify-center items-center text-sm sm:text-base sm:pb-20 pb-10">
          <Button />
          <button className="sm:font-semibold font-lato text-amGray text-lg border hover:text-white hover:bg-amGray border-amGray sm:py-3 py-2 sm:rounded-lg rounded w-60 tracking-widest hover:shadow-button duration-100">
            See Our Solutions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cable;

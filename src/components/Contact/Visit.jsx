import React from "react";
import clock from "../../assets/icons/clock.png";
import location from "../../assets/icons/location.png";
import phone from "../../assets/icons/phone.png";

const Visit = () => {
  return (
    <div className="py-20">
      <p className="text-center font-exo font-bold lg:text-5xl sm:text-4xl text-2xl text-amBlue tracking-wide sm:pb-16 pb-10 z-10">
        Visit Our Office
      </p>
      <div className="sm:text-center text-amBlue sm:text-base text-sm font-semibold sm:leading-9 leading-6 tracking-wide font-khula sm:pb-16 pb-8 text-justify container mx-auto lg:px-20 md:px-10 px-6">
        We welcome you to visit us and experience firsthand the cutting-edge
        technology, skilled craftsmanship, and commitment to quality that sets
        us apart. Schedule a visit today to explore our capabilities and meet
        our dedicated team of experts who are ready to turn your ideas into
        reality.
      </div>
      <div className="justify-around flex flex-wrap text-amBlue font-khula lg:text-xl font-semibold sm:leading-9 tracking-wide text-center gap-y-6 container mx-auto lg:px-20 md:px-10 px-6">
        <div className="w-fit sm:space-y-8 space-y-4 px-2">
          <img src={clock} alt="Clock" className="mx-auto h-16 w-16" />
          <p className="">
            Open Office Hours <br /> Monday - Friday: <br /> 9am - 6pm
          </p>
        </div>
        <div className="w-fit sm:space-y-8 space-y-4 px-2">
          <img src={location} alt="Location" className="mx-auto h-16 w-16" />
          <p className="">
            Ampec Technologies Pty Ltd
            <br /> Unit 1, 63-79 Parramatta Road
            <br />
            Silverwater NSW 2128, Australia
          </p>
        </div>
        <div className="w-fit sm:space-y-8 space-y-4 px-2">
          <img
            src={phone}
            alt="Phone"
            className="rotate-180 scale-90 mx-auto h-16 w-16"
          />
          <p className="">
            Call us now on : <br /> +612 8741 5000 <br /> 9am - 6pm
          </p>
        </div>
      </div>
      <iframe
        className="w-full h-[450px] mt-20"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1656.8753930164162!2d151.041056049308!3d-33.844537048338765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a35361e85ffb%3A0xe93545b983760c4!2sAmpec%20Technologies!5e0!3m2!1sen!2sus!4v1698123230901!5m2!1sen!2sus"
        loading="lazy"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default Visit;

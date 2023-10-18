import React from "react";
import clock from "../../assets/icons/clock.png";
import location from "../../assets/icons/location.png";
import phone from "../../assets/icons/phone.png";

const Visit = () => {
  return (
    <div className="py-20">
      <p className="text-center font-exo lg:text-5xl sm:text-4xl text-2xl text-amBlue tracking-wide sm:pb-16 pb-10 z-10">
        Visit Our Office
      </p>
      <div className="sm:text-center text-amBlue sm:text-base text-sm font-semibold sm:leading-9 leading-6 tracking-wide font-khula sm:pb-16 pb-8 px-10 max-w-[1300px] mx-auto text-justify">
        We welcome you to visit us and experience firsthand the cutting-edge
        technology, skilled craftsmanship, and commitment to quality that set us
        apart. Schedule a visit today to explore our capabilities and meet our
        dedicated team of experts who are ready to turn your ideas into reality.
      </div>
      <div className="container justify-around flex flex-wrap text-amBlue font-khula lg:text-xl font-semibold sm:leading-9 tracking-wide text-center mx-auto gap-y-6">
        <div className="w-fit space-y-8">
          <img src={clock} alt="Clock" className="mx-auto h-16 w-16" />
          <p className="">
            Open Office Hours <br /> Monday - Friday: <br /> 9am - 6pm
          </p>
        </div>
        <div className="w-fit space-y-8">
          <img src={location} alt="Location" className="mx-auto h-16 w-16" />
          <p className="">
            Ampec Technologies Pty Ltd Unit 1, <br /> 63-79 Parramatta Road
            Silverwater <br />
            NSW 2128, Australia
          </p>
        </div>
        <div className="w-fit space-y-8">
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
        src={`https://maps.google.com/maps?q=-33.84454094962137, 151.043490731228734&z=15&output=embed`}
        className="w-full h-[450px] mt-20"
        title="google map"
      ></iframe>
    </div>
  );
};

export default Visit;

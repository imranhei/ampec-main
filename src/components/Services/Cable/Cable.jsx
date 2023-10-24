import React, { useEffect } from "react";
import cable_01 from "../../../assets/Services/cable_01.png";

const Cable = () => {
    useEffect(() => {
        const handleScroll = () => {
          const image = document.getElementById('scrollImage');
          const text = document.getElementById('scrollText');
          const scrollY = window.scrollY;
    
          // Adjust the translateY property based on the scroll position
          image.style.transform = `translateY(${scrollY * 0.5}px)`; // You can adjust the factor for a smoother or faster effect
        };
    
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        // Remove event listener when the component is unmounted
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <div className="w-full relative z-10 lg:pt-44 sm:pt-36 pt-24 flex flex-col items-center">
      <p
        id="scrollText"
        className="lg:text-5xl sm:text-4xl text-[28px] font-bold tracking-wide font-exo lg:pb-16 sm:pb-14 pb-8 px-6 text-amBlue text-center mx-auto"
      >
        Cable Assembly
      </p>
      <div
        className="text-center text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8 lg:w-[1300px] mx-4 px-10"
      >
        {/* Your text content */}
      </div>
      <img
        id="scrollImage"
        className="w-full py-8 transition-transform duration-300"
        src={cable_01}
        alt="Quality background"
      />
    </div>
  );
};

export default Cable;

import React, { useEffect } from "react";
import OurServices from "./OurServices";
import TakeService from "./TakeService";
import Products from "./Products";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="md:py-20 z-10 relative ">
      <OurServices />
      <TakeService />
      <Products />
    </div>
  );
};

export default Services;

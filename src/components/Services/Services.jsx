import React, { useEffect } from "react";
import OurServices from "./OurServices";
import TakeService from "./TakeService";
import Products from "./Products";
import { Helmet } from "react-helmet";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sm:py-20 py-10 z-10 relative">
      <Helmet>
        <title>Ampec Technologies | Services</title>
        <meta name="description"
          content="We specialize in Cable Assembly, Box Build Assembly, Engineering Design, Strategic Sourcing and many more things. We can custom manufacture all or part of your new or existing products in Australia, or outside Australia. Trust us for excellence in Cable Harness Sydney and beyond."
        />
        <meta name="keywords" content="Cable harness Sydney" />
      </Helmet>
      <OurServices />
      <TakeService />
      <Products />
    </div>
  );
};

export default Services;

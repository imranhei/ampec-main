import React, { useEffect } from "react";
import Achivements from "./Achivements";
import History from "./History";
import Manufacturing from "./Manufacturing";
import Service from "./Service";
import { Helmet } from "react-helmet";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sm:py-20 py-10 z-10 relative">
      <Helmet>
        <title>Ampec Technologies | About Us</title>
        <meta name="description"
          content="Ampec supplies quality products to your specifications at a competitive price, including cable harness solutions in Sydney. Our current management team has been assisting businesses in designing and manufacturing new products in Australia and overseas. We're helping them take advantage of the rapid growth in demand for internet-connected products (the Internet of Things or IoT)."
        />
        <meta name="keywords" content="Cable harness Sydney" />
      </Helmet>
      <Achivements />
      <History />
      <Manufacturing />
      <Service />
    </div>
  );
};

export default About;

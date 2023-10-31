import React, { useEffect } from "react";
import Achivements from "./Achivements";
import History from "./History";
import Manufacturing from "./Manufacturing";
import Service from "./Service";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sm:py-20 py-10 z-10 relative">
      <Achivements />
      <History />
      <Manufacturing />
      <Service />
    </div>
  );
};

export default About;

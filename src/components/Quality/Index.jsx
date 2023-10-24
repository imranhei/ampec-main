import React, { useEffect } from "react";
import Quality from "./Quality";
import Certifications from "./Certifications";
import QualityAssurance from "./QualityAssurance";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full relative z-10 lg:pt-44 sm:pt-36 pt-24">
      <Quality />
      <Certifications />
      <QualityAssurance />
    </div>
  );
};

export default Index;

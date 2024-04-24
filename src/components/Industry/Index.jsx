import React, { useEffect } from "react";
import Industries from "./Industries";
import Partner from "../Shared/PartnerWithUs";
import { Helmet } from "react-helmet";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full relative z-10 lg:pt-44 sm:pt-36 pt-24">
      <Helmet>
        <title>Ampec Technologies | Industries</title>
        <meta
          name="description"
          content="Ampec Technologies, based in Sydney, is a specialized company in cable harness and box assemblies, serving a diverse range of industries. Our custom solutions meet the exacting requirements, ensuring seamless connectivity and optimal performance for various applications."
        />
        <meta name="keywords" content="Cable harness Sydney" />
      </Helmet>
      <Industries />
      <div className="container mx-auto lg:px-20 md:px-10 px-6">
        <Partner />
      </div>
    </div>
  );
};

export default Index;

import React, { useEffect } from "react";
import Projects from "./Projects";
import CallUs from "../Shared/CallUs";
import { Helmet } from "react-helmet";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sm:py-20 py-10 z-10 relative">
      <Helmet>
        <title>Ampec Technologies | Projects</title>
        <meta
          name="description"
          content="We help our customers source the right components, make better manufacturing decisions, and improve their bottom line. Ampec, headquartered in Sydney, supplies quality products to your specifications at a competitive price. You never have to worry about quality. Whether you're after passive components, standard or custom cabling, or pre-assembled complex box/panel builds, contact us or order from our online catalog."
        />
        <meta name="keywords" content="Cable harness Sydney" />
      </Helmet>
      <Projects />
      <div className="pt-16 flex flex-col items-center z-10 relative container mx-auto lg:px-20 md:px-10 px-6">
        <p className="text-center font-exo font-bold lg:text-5xl sm:text-4xl text-2xl text-amBlue tracking-wide sm:pb-16 pb-10 z-10">
          Partner with us
        </p>
        <div className="sm:text-center text-amBlue sm:text-base text-sm font-semibold sm:leading-9 leading-6 tracking-wide font-khula sm:pb-16 pb-8 text-justify">
          Partnering with us is good business. We have the expertise to help you
          perfect your designs and create profitable products. Using our
          contract manufacturing services enables you to ramp up and down on
          production without having to commit to new plant and equipment.
          Whether you're expanding in Australia or branching out into Asia, when
          you work with Ampec you have an expert on hand to get past the hurdles
          that come with new ventures.
        </div>
      </div>
      <div className="lg:px-20 md:px-10 px-6">
        <CallUs />
      </div>
    </div>
  );
};

export default Index;

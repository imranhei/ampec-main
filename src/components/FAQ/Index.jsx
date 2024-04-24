import React, { useEffect } from "react";
import FAQ from "./FAQ";
import CallUs from "../Shared/CallUs";
import { Helmet } from "react-helmet";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full relative z-10 lg:pt-44 sm:pt-36 pt-24 pb-20">
      <Helmet>
        <title>Ampec Technologies | FAQ</title>
        <meta
          name="description"
          content="Welcome to our FAQ section, where we provide answers to common inquiries about our cable harness and box assembly services in Sydney. We're here to help you understand our offerings better so you can make informed decisions for your project. If you don't find the information you're looking for, feel free to reach out to our team for personalized assistance."
        />
        <meta name="keywords" content="Cable harness Sydney" />
      </Helmet>
      <h1 className="lg:text-5xl sm:text-4xl text-[28px] font-bold tracking-wide font-exo lg:pb-16 sm:pb-14 pb-8 px-6 text-amBlue text-center mx-auto">
        FAQ
      </h1>
      <h2 className="sm:text-center text-justify text-amBlue lg:text-lg sm:text-base text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8 container mx-auto lg:px-20 md:px-10 px-6">
        Welcome to our FAQ section, where we provide answers to common inquiries
        about our cable harness and box assembly services. We're here to help
        you understand our offerings better, so you can make informed decisions
        for your project. If you don't find the information you're looking for,
        feel free to reach out to our team for personalized assistance.
      </h2>
      <FAQ />
      <div className="lg:px-20 md:px-10 px-6">
        <CallUs />
      </div>
    </div>
  );
};

export default Index;

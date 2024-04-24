import React, { useEffect, useRef } from "react";
import Contact from "./Contact";
import MediaPlatform from "./MediaPlatform";
import Quotation from "./Quotation";
import Visit from "./Visit";
import CallUs from "../Shared/CallUs";
import { Helmet } from "react-helmet";
// import { animateScroll as scroll } from 'react-scroll';

const Index = () => {
  // console.log(animateScroll)
  // useEffect(() => {
  //     if (animateScroll) {
  //       // Scroll to the component with the specified ID with animation
  //       scroll.scrollTo('Quotation', {
  //         duration: 800,
  //         smooth: 'easeInOutQuart',
  //       });
  //     } else {
  //         console.log('scrolling');
  //       // Scroll to the top without animation
  //       scroll.scrollToTop();
  //     }
  //   }, [animateScroll]);

  return (
    <div className="sm:py-20 py-10 z-10 relative">
      <Helmet>
        <title>Ampec Technologies | Contact Us</title>
        <meta
          name="description"
          content="Get in touch with us for a Priority Quotation, a query, or to discover how we, based in Sydney, can help you deliver on your upcoming projects. Our dedicated team is here to assist you with any questions, concerns, or suggestions you may have about our technology products and services."
        />
        <meta name="keywords" content="Cable harness Sydney" />
      </Helmet>
      <Contact />
      <CallUs />
      <MediaPlatform />
      <Quotation id="quotation" />
      <Visit />
    </div>
  );
};

export default Index;

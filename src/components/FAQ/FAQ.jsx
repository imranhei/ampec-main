import React, { useState } from "react";
import faq from "../../assets/faq.png";
import { Collapse } from "@material-tailwind/react";

const FAQ = () => {
  const data = [
    {
      que: "Where are you located?",
      ans: "Our factory is in Silverwater NSW, Australia",
    },
    {
      que: "How long have you been in business?",
      ans: "Under the current management, more than 25 years",
    },
    {
      que: "I just want to order components; can I do that?",
      ans: "Yes, we are here to provide expert advice We may know of a better component for your application",
    },
    {
      que: "Do you impose minimum order quantities?",
      ans: "Normally there are no MOQs, however we apply MOQs in some circumstances: for example, when we are bound by component MOQ, if the lead time is unexpectedly long, if the customer has a last-minute change in the BOM, to offer more flexibility to customers or when serving as an on-call backup for overseas manufacturing.",
    },

    {
      que: "Can you just manufacture part of our product?",
      ans: "Yes, all or part. Whatever is right for your product and market.",
    },
    {
      que: "Can you make custom cables?",
      ans: "Yes, that was the first area of diversification. we are a supplier of choice for custom cables and cable harnesses, box and panel builds. Contact us to discuss your needs.",
    },
    {
      que: "Are you ISO certified?",
      ans: "Our operation is ISO 9001 Certified, fully staffed and ready to meet your requirements. We self-perform so we have full control over quality and customer satisfaction.",
    },
    {
      que: "Can you manufacture a finished product for us?",
      ans: "Yes, we can, in fact, we can work with you to turn an idea into a prototype, test the prototype, manufacture the finished product and ship it for you.",
    },
    {
      que: "Do you substitute components if the specified component is not available?",
      ans: "We can substitute, but only after securing your approval for the change. This may result in a new drawing and signoff on the change. We manage all our suppliers and they ascribe to the same quality specifications that we do.",
    },
    {
      que: "We want to start producing products that are network enabled, can you do that?",
      ans: "Yes, our fully owned subsidiary Wireless Tech Australia supplies a range of industry leading wireless solutions perfect for networked or internet enabled services and devices.",
    },
    {
      que: "Do you do printed circuit board assemblies?",
      ans: "Yes, we can assemble PCBs for your prototype, test and production needs.",
    },
    {
      que: "I have an idea, but can't make a prototype within my existing factory.",
      ans: "Yes, we can create a prototype and test it for manufacturability and ease of support.",
    },
    {
      que: "We want to start manufacturing in Asia, can you help with that?",
      ans: "Yes, we manage overseas manufacturing for many of our customers. Contact us to discuss your plans.",
    },
    {
      que: "The market for my product is huge, can you manufacture for me in large enough quantities?",
      ans: "Yes, the choice is yours. In Australia we focus on low to mid volume products, including ultra-specialised devices and individually customised units, as well as high volume production. Alternatively, for high volume production we can manage your manufacturing in Asia.",
    },
  ];

  const [ansIndex, setAnsIndex] = useState(-1);

  return (
    <div className="flex w-full flex-col items-center container mx-auto lg:px-20 md:px-10 px-6">
      <img src={faq} alt="" className="z-10 sm:scale-100 scale-75" />
      <div className="bg-amCard container rounded-xl -mt-20 sm:pt-28 pt-14 sm:p-16 p-4 mb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className={`sm:py-6 py-4 border-b border-amBlue text-amBlue hover:bg-nav ${
              ansIndex === index ? "bg-nav" : ""
            }`}
            onClick={() => {
              ansIndex === index ? setAnsIndex(-1) : setAnsIndex(index);
            }}
          >
            <div className="flex justify-between items-center duration-300">
              <p className="lg:text-2xl sm:text-xl text-lg font-semibold font-khula tracking-wide">
                {item.que}
              </p>
              <div className="flex justify-center items-center relative bg-amBlue rounded-full sm:scale-100 scale-75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 29 29"
                  fill="none"
                  className={
                    ansIndex === index
                      ? "rotate-90 duration-300"
                      : "rotate-0 duration-300"
                  }
                >
                  <rect x="14" y="5" width="2" height="19" fill="#FFBC0E" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 29"
                  fill="none"
                  className="absolute rotate-90"
                >
                  <rect x="14" y="5" width="2" height="19" fill="#FFBC0E" />
                </svg>
              </div>
            </div>
            <Collapse open={ansIndex === index}>
              <p className="lg:text-xl sm:text-lg text-base font-khula tracking-wide pt-2">
                {item.ans}
              </p>
            </Collapse>
          </div>
        ))}
      </div>
      <p className="text-center font-exo font-bold lg:text-5xl sm:text-4xl text-2xl text-amBlue tracking-wide sm:pb-16 pb-10 z-10 pt-10">
        Contact Us
      </p>
      <div className="sm:text-center text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 sm:leading-8 leading-6 tracking-wide font-khula sm:pb-16 pb-8 container mx-auto text-justify">
        If you find that your specific query isn't addressed in our FAQ section
        or if you need tailored assistance, don't hesitate to reach out to us
        through our "Contact Us" feature. Our dedicated team of experts is ready
        to provide you with prompt and detailed responses to ensure your needs
        are met. Whether you're seeking custom solutions, have project-specific
        questions, or require additional information, we're here to help.
      </div>
      <div className="space-y-6 mt-4 font-exo text-amBlue">
        <div className="flex lg:w-[850px] sm:w-[700px] w-[360px] justify-between lg:pt-10 pt-6">
          <div className="sm:space-y-4 space-y-2 flex-1 px-5">
            <p className="lg:text-2xl sm:text-xl tracking-wide">First Name :</p>
            <input
              className="p-2 w-full lg:h-16 sm:h-12 h-8 sm:rounded-lg rounded border border-gray-400"
              type="text"
            />
          </div>
          <div className="sm:space-y-4 space-y-2 flex-1 px-5">
            <p className="lg:text-2xl sm:text-xl tracking-wide">Last Name :</p>
            <input
              className="p-2 w-full lg:h-16 sm:h-12 h-8 sm:rounded-lg rounded border border-gray-400"
              type="text"
            />
          </div>
        </div>
        <div className="flex lg:w-[850px] sm:w-[700px] w-[360px] justify-between">
          <div className="sm:space-y-4 space-y-2 flex-1 px-5">
            <p className="lg:text-2xl sm:text-xl tracking-wide">
              Email Address :
            </p>
            <input
              className="p-2 w-full lg:h-16 sm:h-12 h-8 sm:rounded-lg rounded border border-gray-400"
              type="text"
            />
          </div>
          <div className="sm:space-y-4 space-y-2 flex-1 px-5">
            <p className="lg:text-2xl sm:text-xl tracking-wide">
              Contact Number :
            </p>
            <input
              className="p-2 w-full lg:h-16 sm:h-12 h-8 sm:rounded-lg rounded border border-gray-400"
              type="text"
            />
          </div>
        </div>
        <div className="sm:space-y-4 space-y-2 lg:w-[850px] sm:w-[700px] w-[360px] px-5">
          <p className="lg:text-2xl sm:text-xl tracking-wide">Message :</p>
          <textarea className="w-full lg:h-56 sm:h-44 h-24 max-h-80 sm:rounded-lg rounded border border-gray-400 p-2"></textarea>
        </div>
        <div className="sm:pt-6 pb-10">
          <button className="mx-auto text-amBlue tracking-widest font-bold sm:text-xl flex justify-center gap-4 bg-amYellow w-64 sm:py-4 py-2 border-2 font-lato border-amYellow sm:rounded-lg rounded hover:shadow-button duration-100 group">
            Submit
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-white group-hover:translate-x-2 group-hover:text-amBlue duration-300"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M6 19L19 6m0 0v12.48M19 6H6.52"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

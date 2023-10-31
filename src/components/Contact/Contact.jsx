import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lg:py-24 py-16 flex flex-col items-center">
      <p className="text-center font-exo font-bold lg:text-5xl sm:text-4xl text-2xl text-amBlue tracking-wide sm:pb-16 pb-10 z-10">
        Contact Us
      </p>
      <div className="sm:text-center text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 sm:leading-8 leading-6 tracking-wide font-khula sm:pb-16 pb-8 px-10 max-w-[1300px] mx-auto text-justify">
        Get in touch with us for a Priority Quotation, a query or to discover
        how we can help you deliver on your upcoming projects . Our dedicated
        team is here to assist you with any questions, concerns, or suggestions
        you may have about our technology products and services.
      </div>
      <div className="space-y-6 mt-4 font-exo text-amBlue">
        <div className="flex lg:w-[850px] sm:w-[700px] w-[360px] justify-between lg:pt-10 pt-6">
          <div className="sm:space-y-4 space-y-2 flex-1 px-5">
            <p className="lg:text-2xl sm:text-xl tracking-wide">
              First Name :
            </p>
            <input
              className="p-2 w-full lg:h-16 sm:h-12 h-8 sm:rounded-lg rounded border border-gray-400"
              type="text"
            />
          </div>
          <div className="sm:space-y-4 space-y-2 flex-1 px-5">
            <p className="lg:text-2xl sm:text-xl tracking-wide">
              Last Name :
            </p>
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
          <p className="lg:text-2xl sm:text-xl tracking-wide">
            Message :
          </p>
          <textarea className="w-full lg:h-56 sm:h-44 h-24 max-h-80 sm:rounded-lg rounded border border-gray-400 p-2"></textarea>
        </div>
        <div className="sm:pt-6">
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

export default Contact;

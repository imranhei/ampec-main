import React from "react";

const Quotation = () => {
  return (
    <div className="flex flex-col items-center space-y-6 py-10">
      <p className="text-center font-exo lg:text-5xl sm:text-4xl text-2xl text-amBlue tracking-wide sm:py-16 py-10 z-10">
        Priority Quotation Requests
      </p>
      <div className="text-center text-amBlue lg:text-3xl sm:text-xl text-base font-semibold sm:leading-9 leading-6 tracking-wide font-khula sm:pb-16 pb-8 px-10">
        Cable Assembly / Sub-Assembly (Box Build) Quotation:
      </div>

      <div className="flex lg:w-[850px] sm:w-[700px] w-[360px] justify-between lg:pt-10 pt-6">
        <div className="sm:space-y-4 space-y-2 flex-1 px-5">
          <p className="font-lato lg:text-2xl sm:text-xl tracking-wide">
            First Name :
          </p>
          <input
            className="p-2 w-full lg:h-16 sm:h-12 h-8 sm:rounded-lg rounded border border-gray-400"
            type="text"
          />
        </div>
        <div className="sm:space-y-4 space-y-2 flex-1 px-5">
          <p className="font-lato lg:text-2xl sm:text-xl tracking-wide">
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
          <p className="font-lato lg:text-2xl sm:text-xl tracking-wide">
            Email Address :
          </p>
          <input
            className="p-2 w-full lg:h-16 sm:h-12 h-8 sm:rounded-lg rounded border border-gray-400"
            type="text"
          />
        </div>
        <div className="sm:space-y-4 space-y-2 flex-1 px-5">
          <p className="font-lato lg:text-2xl sm:text-xl tracking-wide">
            Contact Number :
          </p>
          <input
            className="p-2 w-full lg:h-16 sm:h-12 h-8 sm:rounded-lg rounded border border-gray-400"
            type="text"
          />
        </div>
      </div>
      <div className="sm:space-y-4 space-y-2 lg:w-[850px] sm:w-[700px] w-[360px] px-5">
        <p className="font-lato lg:text-2xl sm:text-xl tracking-wide">
          Cable or Sub-Assembly Description :
        </p>
        <textarea className="w-full lg:h-56 sm:h-44 h-24 max-h-80 sm:rounded-lg rounded border border-gray-400 p-2"></textarea>
      </div>
      <div className="sm:space-y-4 space-y-2 lg:w-[850px] sm:w-[700px] w-[360px] px-5">
        <p className="font-lato lg:text-2xl sm:text-xl tracking-wide">
          Date Required :
        </p>
        <textarea className="w-full lg:h-24 sm:h-44 h-16 max-h-80 sm:rounded-lg rounded border border-gray-400 p-2"></textarea>
      </div>
      <div className="sm:pt-6">
        <button className="text-amBlue tracking-widest font-bold sm:text-xl flex  justify-center gap-4 bg-amYellow w-64 sm:py-4 py-2 border-2 font-lato border-amYellow sm:rounded-lg rounded hover:shadow-button duration-100">
          Send Request
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-white"
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
  );
};

export default Quotation;

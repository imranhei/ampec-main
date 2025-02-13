import React from "react";

const Compliance = () => {
  return (
    <div>
      <div className="relative w-full h-[600px] transform justify-center">
        {/* <div className="absolute left-1/2 -translate-x-[50%] w-4 h-4 bg-teal-300"></div>
          <div className="absolute left-1/2 w-4 h-4 bg-black "></div> */}
        {/* 3rd */}

        <div className="absolute left-1/2 -translate-x-[50%] w-full bg-teal-300"></div>

        <div className="absolute left-[35%] -translate-x-[50%] z-50">
          <div
            className="relative"
            // style={{ perspective: "800px" }}
          >
            <div
              className="absolute top-20 w-48 h-48 rounded-full bg-[#24559E] transform shadow-md"
              style={{ transform: "rotateX(40deg)" }}
            >
              <div
                className="absolute -top-2 w-48 h-48 rounded-full bg-[#80B4FF] transform flex items-center justify-center font-semibold font-exo text-amBlue"
                style={{ transform: "rotateX(20deg)" }}
              >
                Corporate
              </div>
            </div>
          </div>
        </div>
        {/* 2nd */}
        <div className="absolute left-[50%] z-40">
          <div
            className="relative"
            // style={{ perspective: "800px" }}
          >
            <div
              className="absolute w-48 h-48 rounded-full bg-[#D3B007] transform shadow-md"
              style={{ transform: "rotateX(40deg)" }}
            >
              <div
                className="absolute -top-2 w-48 h-48 rounded-full bg-[#f8db00] transform flex items-center justify-center font-semibold font-exo text-amBlue"
                style={{ transform: "rotateX(20deg)" }}
              >
                Product
              </div>
            </div>
          </div>
        </div>
        {/* 1st */}
        <div className="absolute left-[65%] -translate-x-[50%] z-30">
          <div
            className="relative"
            // style={{ perspective: "800px" }}
          >
            <div
              className="absolute top-20 w-48 h-48 rounded-full bg-[#4C8D25] transform shadow-md"
              style={{ transform: "rotateX(40deg)" }}
            >
              <div
                className="absolute -top-2 w-48 h-48 rounded-full bg-[#78C43E] transform flex items-center justify-center font-semibold font-exo text-amBlue"
                style={{ transform: "rotateX(20deg)" }}
              >
                Environmental
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-4 text-sm">
          <div className="flex items-start">
            <ul className="text-blue-700 font-medium space-y-1">
              <li>Anti modern slavery policy</li>
              <li>Anti bullying policy</li>
              <li>Anti Bribery</li>
              <li>Anti Corruption</li>
              <li>Health & Safety</li>
              <li>Data privacy & protection</li>
              <li>Hiring policy: Open to all</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;

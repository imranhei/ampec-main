import React, { useState, useEffect } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [message, setMessage] = useState("");

  const SendMessage = () => {
    const data = {
      firstName,
      lastName,
      emailAddress,
      contactNumber,
      message,
    };
    console.log(data);
    // fetch("https://api.apispreadsheets.com/data/17281/", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     data,
    //   }),
    // })
    //   .then((res) => {
    //     if (res.status === 201) {
    //       alert("Your Quotation Request has been sent successfully!");
    //     } else {
    //       alert("There was an error sending your Quotation Request!");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lg:py-24 py-16 flex flex-col items-center">
      <h1 className="text-center font-exo font-bold lg:text-5xl sm:text-4xl text-2xl text-amBlue tracking-wide sm:pb-16 pb-10 z-10 ">
        Contact Us
      </h1>
      <h2 className="sm:text-center text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 sm:leading-8 leading-6 tracking-wide font-khula sm:pb-16 pb-8 text-justify container mx-auto lg:px-20 md:px-10 px-6">
        Get in touch with us for a Priority Quotation, a query or to discover
        how we can help you deliver on your upcoming projects. Our dedicated
        team is here to assist you with any questions, concerns, or suggestions
        you may have about our technology products and services.
      </h2>
      {/* <div className="space-y-6 sm:mt-4 font-exo text-amBlue">
        <div className="flex lg:w-[850px] sm:w-[700px] w-[360px] justify-between lg:pt-10 pt-6">
          <div className="sm:space-y-4 space-y-2 flex-1 px-5">
            <p className="lg:text-2xl sm:text-xl tracking-wide">
              First Name :
            </p>
            <input
              className="p-2 w-full lg:h-16 sm:h-12 h-8 sm:rounded-lg rounded border border-gray-400"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="sm:space-y-4 space-y-2 flex-1 px-5">
            <p className="lg:text-2xl sm:text-xl tracking-wide">
              Last Name :
            </p>
            <input
              className="p-2 w-full lg:h-16 sm:h-12 h-8 sm:rounded-lg rounded border border-gray-400"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
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
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </div>
          <div className="sm:space-y-4 space-y-2 flex-1 px-5">
            <p className="lg:text-2xl sm:text-xl tracking-wide">
              Contact Number :
            </p>
            <input
              className="p-2 w-full lg:h-16 sm:h-12 h-8 sm:rounded-lg rounded border border-gray-400"
              type="text"
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="sm:space-y-4 space-y-2 lg:w-[850px] sm:w-[700px] w-[360px] px-5">
          <p className="lg:text-2xl sm:text-xl tracking-wide">
            Message :
          </p>
          <textarea className="w-full lg:h-56 sm:h-44 h-24 max-h-80 sm:rounded-lg rounded border border-gray-400 p-2" onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        <div className="sm:pt-6">
          <button className="mx-auto text-amBlue tracking-widest font-bold sm:text-xl flex justify-center gap-4 bg-amYellow w-64 sm:py-4 py-2 border-2 font-lato border-amYellow sm:rounded-lg rounded hover:shadow-button duration-100 group" onClick={SendMessage}>
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
      </div> */}

      <div className="flex gap-2 text-amBlue lg:text-2xl sm:text-xl text-lg font-semibold">
        <h2>Contact us at:</h2>
        <a href="mailto:sales@ampec.com.au">
          <h2>sales@ampec.com.au</h2>
        </a>
      </div>
    </div>
  );
};

export default Contact;

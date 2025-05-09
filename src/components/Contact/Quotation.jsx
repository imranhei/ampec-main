import React, { useState, useRef, useEffect } from "react"; //

const Quotation = () => {
  const quotationRef = useRef(null); //
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [cableDescription, setCableDescription] = useState("");
  const [dateRequired, setDateRequired] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      // Check if there is a hash in the URL
      if (window.location.hash === '#quotation') {
        // Scroll to the Quotation component when the hash is present
        if (quotationRef.current) {
          const yOffset = -50; // adjust the offset as needed
          const elementPosition = quotationRef.current.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: elementPosition + yOffset, behavior: 'smooth' });
        }
      } else {
        // Scroll to the top when there is no hash (direct visit to the Contact page)
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // Add hash change event listener
    window.addEventListener('hashchange', handleHashChange);

    // Call the handleHashChange on component mount
    handleHashChange();

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  const QuotationRequest = () => {
    const data = {
      firstName,
      lastName,
      emailAddress,
      contactNumber,
      cableDescription,
      dateRequired,
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
  
  return (
    <div className="flex flex-col items-center sm:space-y-6 space-y-4 py-10" ref={quotationRef}>
      <p className="text-center font-exo font-bold lg:text-5xl sm:text-4xl text-2xl text-amBlue tracking-wide sm:py-16 z-10">
        Priority Quotation Requests
      </p>
      <div className="text-center text-amBlue lg:text-3xl sm:text-xl text-base font-semibold sm:leading-9 leading-6 tracking-wide font-khula sm:pb-16 lg:px-20 md:px-10 px-6">
        Cable Assembly / Sub-Assembly (Box Build) Quotation:
      </div>

      <div className="flex lg:w-[850px] sm:w-[700px] w-[360px] justify-between lg:pt-10 sm:pt-6 pt-3 font-exo text-amBlue">
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
      <div className="flex lg:w-[850px] sm:w-[700px] w-[360px] justify-between font-exo text-amBlue">
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
      <div className="sm:space-y-4 space-y-2 lg:w-[850px] sm:w-[700px] w-[360px] px-5 font-exo text-amBlue">
        <p className="lg:text-2xl sm:text-xl tracking-wide">
          Cable or Sub-Assembly Description :
        </p>
        <textarea className="w-full lg:h-56 sm:h-44 h-20 max-h-80 sm:rounded-lg rounded border border-gray-400 p-2" onChange={(e) => setCableDescription(e.target.value)}></textarea>
      </div>
      <div className="sm:space-y-4 space-y-2 lg:w-[850px] sm:w-[700px] w-[360px] px-5 font-exo text-amBlue">
        <p className="lg:text-2xl sm:text-xl tracking-wide">
          Date Required :
        </p>
        <textarea className="w-full lg:h-24 sm:h-44 h-10 max-h-80 sm:rounded-lg rounded border border-gray-400 sm:p-2 p-1" onChange={(e) => setDateRequired(e.target.value)}></textarea>
      </div>
      <div className="sm:pt-6 pt-2">
        <button className="text-amBlue tracking-widest font-bold sm:text-xl flex  justify-center gap-4 bg-amYellow w-64 sm:py-4 py-2 border-2 font-lato border-amYellow sm:rounded-lg rounded hover:shadow-button duration-100 group"
        onClick={QuotationRequest}
        >
          Send Request
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
  );
};

export default Quotation;
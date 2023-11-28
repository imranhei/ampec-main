import React, { useEffect } from "react";
import bg from "./assets/background.jpeg";
import { Routes, Route } from "react-router-dom";
// import Scroll from "./SmoothScroll";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Index";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Index";
import Quality from "./components/Quality/Index";
import Manufacturing from "./components/Manufacturing/Index";
import Industries from "./components/Industry/Index";
// import Cable from "./components/Services/Cable/Cable";
// import Defence from "./components/Industry/Defence/Index";
import Industry from "./components/Industry/Industry";
import FAQ from "./components/FAQ/Index";
import Service from "./components/Services/Service";

function App() {

  useEffect(() => {
    const handleResize = () => {
      document.title = window.innerWidth;
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative">
      <div className="fixed bottom-10 right-10 z-[1000] bg-amYellow rounded-lg p-2 opacity-70 hover:opacity-100 animate-[bounce_1.5s_ease-in-out_infinite]">
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="2em" viewBox="0 0 640 512"><path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"/></svg>
        </div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bg})`,
          opacity: "0.015",
          backgroundPosition: "center",
          zIndex: "1",
        }}
      ></div>
      <div className="bg-nav">
        {/* <Scroll /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<Service />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:industryId" element={<Industry />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          {/* <Route path="/services/cable-assembly" element={<Cable />} /> */}
          {/* <Route path="/industries/defence" element={<Defence />} /> */}
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
        
      </div>
    </div>
  );
}

export default App;

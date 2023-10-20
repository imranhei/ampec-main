import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import bg from "./assets/background.jpeg";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Index";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Index";
import Quality from "./components/Quality/Index";
import Manufacturing from "./components/Manufacturing/Index";
import Industry from "./components/Industry/Index";

function App() {
  
  return (
    <div className="relative">
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
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/industries" element={<Industry />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;

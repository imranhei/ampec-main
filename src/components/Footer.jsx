import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-amBlue flex flex-col items-center p-10 gap-10 text-white relative z-10">
      <img
        className="w-32 h-12 sm:scale-100 scale-90 sm:self-center sm:ml-0 -ml-1 self-start"
        src={logo}
        alt="ampec logo"
      />
      <div className="flex flex-wrap lg:gap-0 gap-8 justify-between container xl:px-40 sm:text-base text-sm">
        <div className="lg:text-center">
          <p className="font-medium pb-4">Sydney</p>
          <p className="w-64">
            Unit 1, 63-79 Parramatta Rd Silverwater, NSW 2128 Australia <br />{" "}
            Phone: +612 8741 5000
          </p>
        </div>
        <div className="lg:text-center block">
          <p className="font-medium pb-4">Hongkong</p>
          <p className="w-64">
            Unit 2007, Peninsula Tower 538 Castle Peak Road, Lai Chi Kok,
            Kowloon, Hong Kong <br /> Phone: +852 3520 1746 <br />{" "}
            www.routech.com.hk
          </p>
        </div>
        <div className="lg:text-center ">
          <p className="font-medium pb-4">Dhaka</p>
          <p className="w-64">
            Uttara Tower, level 5 <br />
            Jasimuddn Avenue, Sector-3 Uttara, <br />
            Dhaka-1230, Bangladesh
          </p>
        </div>
      </div>
      <div className="flex gap-10 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          // fill="none"
          className="fill-white hover:fill-[#0A66C2] duration-300"
        >
          <path d="M30.2222 0C31.2241 0 32.185 0.398015 32.8935 1.10649C33.602 1.81496 34 2.77585 34 3.77778V30.2222C34 31.2241 33.602 32.185 32.8935 32.8935C32.185 33.602 31.2241 34 30.2222 34H3.77778C2.77585 34 1.81496 33.602 1.10649 32.8935C0.398015 32.185 0 31.2241 0 30.2222V3.77778C0 2.77585 0.398015 1.81496 1.10649 1.10649C1.81496 0.398015 2.77585 0 3.77778 0H30.2222ZM29.2778 29.2778V19.2667C29.2778 17.6335 28.629 16.0673 27.4742 14.9125C26.3194 13.7577 24.7531 13.1089 23.12 13.1089C21.5144 13.1089 19.6444 14.0911 18.7378 15.5644V13.4678H13.4678V29.2778H18.7378V19.9656C18.7378 18.5111 19.9089 17.3211 21.3633 17.3211C22.0647 17.3211 22.7373 17.5997 23.2332 18.0956C23.7292 18.5916 24.0078 19.2642 24.0078 19.9656V29.2778H29.2778ZM7.32889 10.5022C8.17051 10.5022 8.97766 10.1679 9.57277 9.57277C10.1679 8.97766 10.5022 8.17051 10.5022 7.32889C10.5022 5.57222 9.08556 4.13667 7.32889 4.13667C6.48226 4.13667 5.6703 4.47299 5.07165 5.07165C4.47299 5.6703 4.13667 6.48226 4.13667 7.32889C4.13667 9.08556 5.57222 10.5022 7.32889 10.5022ZM9.95444 29.2778V13.4678H4.72222V29.2778H9.95444Z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          // fill="none"
          className="fill-white hover:fill-[#1877f2] duration-300"
        >
          <path d="M40.3346 21.9994C40.3346 11.8793 32.1213 3.66602 22.0013 3.66602C11.8813 3.66602 3.66797 11.8793 3.66797 21.9994C3.66797 30.8727 9.97464 38.261 18.3346 39.966V27.4994H14.668V21.9994H18.3346V17.416C18.3346 13.8777 21.213 10.9993 24.7513 10.9993H29.3346V16.4993H25.668C24.6596 16.4993 23.8346 17.3244 23.8346 18.3327V21.9994H29.3346V27.4994H23.8346V40.241C33.093 39.3244 40.3346 31.5144 40.3346 21.9994Z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="32"
          viewBox="0 0 45 32"
          // fill="none"
          className="fill-white hover:fill-[#CD201F] duration-300"
        >
          <path d="M18 22.8571L29.6775 16L18 9.14286V22.8571ZM44.01 4.96C44.3025 6.03429 44.505 7.47429 44.64 9.30286C44.7975 11.1314 44.865 12.7086 44.865 14.08L45 16C45 21.0057 44.64 24.6857 44.01 27.04C43.4475 29.0971 42.1425 30.4229 40.1175 30.9943C39.06 31.2914 37.125 31.4971 34.155 31.6343C31.23 31.7943 28.5525 31.8629 26.0775 31.8629L22.5 32C13.0725 32 7.2 31.6343 4.8825 30.9943C2.8575 30.4229 1.5525 29.0971 0.99 27.04C0.6975 25.9657 0.495 24.5257 0.36 22.6971C0.2025 20.8686 0.135 19.2914 0.135 17.92L0 16C0 10.9943 0.36 7.31429 0.99 4.96C1.5525 2.90286 2.8575 1.57714 4.8825 1.00571C5.94 0.708572 7.875 0.502857 10.845 0.365714C13.77 0.205714 16.4475 0.137143 18.9225 0.137143L22.5 0C31.9275 0 37.8 0.365714 40.1175 1.00571C42.1425 1.57714 43.4475 2.90286 44.01 4.96Z" />
        </svg>
        <div className="relative group">
          <div className="absolute w-full group-hover:bg-white top-0 left-0 -z-10 rounded-lg h-8 mt-1.5"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="41.15"
            viewBox="0 0 448 512"
            className="fill-white hover:fill-black duration-300 group"
          >
            <path
              // fill="white"
              d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5h47.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z"
            />
          </svg>
        </div>
      </div>
      <div className="sm:flex lg:gap-5 gap-3 font-medium flex-wrap sm:text-base text-sm hidden">
        <Link to="/" className="text-shadow hover:text-amYellow">
          Home
        </Link>
        <p className="text-shadow">|</p>
        <Link to="/about" className="text-shadow hover:text-amYellow">
          About us
        </Link>
        <p className="text-shadow">|</p>
        <Link to="/services" className="text-shadow hover:text-amYellow">
          Services
        </Link>
        <p className="text-shadow">|</p>
        <Link to="/industries" className="text-shadow hover:text-amYellow">
          Industries
        </Link>
        <p className="text-shadow">|</p>
        <Link to="/quality" className="text-shadow hover:text-amYellow">
          Quality
        </Link>
        <p className="text-shadow">|</p>
        <Link to="/projects" className="text-shadow hover:text-amYellow">
          Projects
        </Link>
        <p className="text-shadow">|</p>
        <Link to="/contact" className="text-shadow hover:text-amYellow">
          Contact Us
        </Link>
        <p className="text-shadow">|</p>
        <Link to="/faq" className="text-shadow hover:text-amYellow">
          FAQ 
        </Link>
      </div>
      {/* <div className="w-screen h-px bg-amYellow opacity-25"/> */}
      <p className="text-xs text-slate-400">
        &copy; Copyright Ampec 2019 | All Rights Reserved | All other logos are
        the property of their respective owners
      </p>
    </div>
  );
};

export default Footer;

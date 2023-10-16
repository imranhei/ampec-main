import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  Button,
  Collapse,
} from "@material-tailwind/react";

const Nav = () => {
  const location = useLocation();
  const options = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About Us",
      link: "/about",
    },
    {
      label: "Services",
      link: "/services",
    },
    {
      label: "Industries",
      link: "/industries",
    },
    {
      label: "Projects",
      link: "/projects",
    },
    {
      label: "Contact Us",
      link: "/contact",
    },
  ];
  const [search, setSearch] = React.useState("");

  // return (
  //   <div className="fixed top-0 text-lg flex justify-center h-fit bg-nav w-full shadow  z-50">
  //     <div className="container sm:px-10 items-center h-20 flex justify-between">
  //       <div className="font-khula pt-1 flex lg:flex-row flex-col gap-3">
  //         {options.map((option, index) => (
  //           <Link
  //             key={index}
  //             to={option.link}
  //             className={`font-semibold px-2 hover:text-yellow-400 ${
  //               location.pathname === option.link
  //                 ? "text-amYellow"
  //                 : "text-amBlue"
  //             }`}
  //           >
  //             {option.label}
  //           </Link>
  //         ))}
  //       </div>
  //       <div className="flex gap-4">
  //         <div className="relative h-12">
  //           <input
  //             className="xl:w-64 w-56 h-full border rounded-2xl placeholder:italic placeholder:text-xs outline-none pl-2 pr-10 text-base"
  //             type="text"
  //             onChange={(e) => setSearch(e.target.value)}
  //             placeholder="Search here"
  //           />
  //           <svg
  //             className="absolute top-3 right-4 opacity-30"
  //             xmlns="http://www.w3.org/2000/svg"
  //             width="24"
  //             height="24"
  //             viewBox="0 0 24 24"
  //           >
  //             <g
  //               fill="none"
  //               stroke="currentColor"
  //               strokeLinecap="round"
  //               strokeWidth="2"
  //             >
  //               <path
  //                 strokeDasharray="16"
  //                 strokeDashoffset="16"
  //                 d="M10.5 13.5L3 21"
  //               >
  //                 <animate
  //                   fill="freeze"
  //                   attributeName="stroke-dashoffset"
  //                   begin="0.4s"
  //                   dur="0.2s"
  //                   values="16;0"
  //                 />
  //               </path>
  //               <path
  //                 strokeDasharray="40"
  //                 strokeDashoffset="40"
  //                 d="M10.7574 13.2426C8.41421 10.8995 8.41421 7.10051 10.7574 4.75736C13.1005 2.41421 16.8995 2.41421 19.2426 4.75736C21.5858 7.10051 21.5858 10.8995 19.2426 13.2426C16.8995 15.5858 13.1005 15.5858 10.7574 13.2426Z"
  //               >
  //                 <animate
  //                   fill="freeze"
  //                   attributeName="stroke-dashoffset"
  //                   dur="0.4s"
  //                   values="40;0"
  //                 />
  //               </path>
  //             </g>
  //           </svg>
  //         </div>
  //         <img className="w-32" src={logo} alt="ampec technologies" />
  //       </div>
  //     </div>
  //   </div>
  // );

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 950 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4 z-40 font-lato tracking-wider text-sm sm:text-base">
      {options.map((option, index) => (
        <Link
          key={index}
          to={option.link}
          className={`sm:font-semibold px-2 hover:text-amYellow ${
            location.pathname === option.link ? "text-amYellow" : "text-amBlue"
          }`}
        >
          {option.label}
        </Link>
      ))}
    </ul>
  );

  return (
    <div className="fixed top-0 left-0 py-2 px-4 lg:px-8 lg:py-6 z-50 w-full shadow-md bg-nav/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900 relative">
        <Button
          variant="text"
          className="mr-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden z-50"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </Button>
        <div className="hidden lg:block">{navList}</div>
        <div className="lg:relative absolute w-full lg:w-fit flex justify-center">
          <div className="relative sm:h-12 h-8 mr-3 sm:mr-10 lg:mr-0">
            <input
              className="xl:w-64 sm:w-56 w-44 h-full border rounded-2xl placeholder:italic placeholder:text-xs outline-none pl-4 tracking-widest pr-10 text-base"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search here"
            />
            <svg
              className="absolute sm:top-3 top-1 sm:right-4 right-2 opacity-30"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              >
                <path
                  strokeDasharray="16"
                  strokeDashoffset="16"
                  d="M10.5 13.5L3 21"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.4s"
                    dur="0.2s"
                    values="16;0"
                  />
                </path>
                <path
                  strokeDasharray="40"
                  strokeDashoffset="40"
                  d="M10.7574 13.2426C8.41421 10.8995 8.41421 7.10051 10.7574 4.75736C13.1005 2.41421 16.8995 2.41421 19.2426 4.75736C21.5858 7.10051 21.5858 10.8995 19.2426 13.2426C16.8995 15.5858 13.1005 15.5858 10.7574 13.2426Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.4s"
                    values="40;0"
                  />
                </path>
              </g>
            </svg>
          </div>
        </div>
        <Link to='/'><img className="sm:w-32 w-20" src={logo} alt="ampec technologies" /></Link>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </Collapse>
    </div>
  );
};

export default Nav;

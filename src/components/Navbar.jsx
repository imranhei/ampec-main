import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import logo_phone from "../assets/logo_phone.jpg";
import { Button, Collapse } from "@material-tailwind/react";

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
      submenu: [
        { label: "Cable Assembly", link: "/services/cable-assembly" },
        { label: "Box Build Assembly", link: "/services/box-build" },
        { label: "Engineering Design", link: "/services/engineering-design" },
        { label: "Strategic Sourcing", link: "/services/strategic-sourcing" },
      ],
    },
    {
      label: "Industries",
      link: "/industries",
      submenu: [
        { label: "Mining Industry", link: "/industries/mining-industry" },
        { label: "Defense Industry", link: "/industries/defense-industry" },
        { label: "Transport Industry", link: "/industries/transport-industry" },
        { label: "Gaming Industry", link: "/industries/gaming-industry" },
        { label: "Medical Industry", link: "/industries/medical-industry" },
        { label: "Energy Industry", link: "/industries/energy-industry" },
      ],
    },
    {
      label: "Projects",
      link: "/projects",
      submenu: [
        { label: "Case Study 1", link: "/projects/case-study-1" },
        { label: "Case Study 2", link: "/projects/case-study-2" },
        { label: "Case Study 3", link: "/projects/case-study-3" },
        { label: "Case Study 4", link: "/projects/case-study-4" },
        { label: "Case Study 5", link: "/projects/case-study-5" },
        { label: "Case Study 6", link: "/projects/case-study-6" },
      ],
    },
    {
      label: "Contact Us",
      link: "/contact",
    },
    {
      label: "FAQ",
      link: "/faq",
    },
  ];

  const [search, setSearch] = useState("");
  const [openNav, setOpenNav] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleSubmenuToggle = (submenu) => {
    if (submenuOpen === submenu) {
      setSubmenuOpen(false);
    }
    else {
      setSubmenuOpen(submenu);
    }
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 1280 && setOpenNav(false) || setSubmenuOpen(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 xl:mb-0 xl:mt-0 xl:flex-row xl:items-center xl:gap-4 z-40 font-lato tracking-wider text-sm sm:text-base">
      {/* lg converted to xl */}
      {options.map((option, index) => (
        <div key={index} className="relative group">
          <div className="flex items-center xl:px-2 px-6 py-1 cursor-pointer w-fit">
            <Link
              to={option.link}
              className={`sm:font-semibold xl:py-4 hover:text-amYellow ${
                location.pathname.includes(option.link) &&
                (location.pathname === option.link || option.link !== "/")
                  ? "text-amYellow"
                  : "text-amBlue"
              }`}
              onClick={() => setOpenNav(false)}
            >
              {option.label}{" "}
            </Link>
            {option.submenu && (
              <svg
                className="group-hover:xl:rotate-0 rotate-180 duration-300 w-10"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 1024 1024"
                onClick={() => handleSubmenuToggle(option.label)}
              >
                <path
                  fill="currentColor"
                  d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"
                />
              </svg>
            )}
          </div>
          {option.submenu && (
            <Collapse open={submenuOpen === option.label}>
              <ul
                className={`xl:absolute z-50 xl:hidden group-hover:xl:block left-0 xl:py-2 xl:space-y-2 xl:bg-nav/90 xl:border xl:rounded-lg xl:shadow-lg xl:w-52 w-full xl:pl-0 pl-6`}
              >
                {/* lg converted to xl */}
                {option.submenu.map((subItem, subIndex) => (
                  <li key={subIndex} className="xl:border-none border-b xl:w-52 w-80">
                    <Link
                      to={subItem.link}
                      className={`block px-4 py-1 hover:text-amYellow sm:font-semibold ${
                        location.pathname === subItem.link
                          ? "text-amYellow"
                          : "text-amBlue"
                      }`}
                      onClick={() => setOpenNav(false)}
                    >
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Collapse>
          )}
        </div>
      ))}
    </ul>
  );

  return (
    <div className="fixed top-0 left-0 py-2 px-4 lg:px-8 lg:py-6 z-50 w-full shadow-md bg-nav/90 backdrop-blur-md overflow-y">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900 relative overflow-y">
        <Button
          variant="text"
          className="mr-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent xl:hidden z-50"
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
        <div className="hidden xl:block">{navList}</div>
        <div className="xl:relative absolute w-full xl:w-fit flex justify-center">
          {/* lg converted to xl */}
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
        <div className="z-50">
          <Link to="/">
            <img
              className="sm:w-32 w-20 xl:mr-1 mr-6 sm:block hidden"
              src={logo}
              alt="ampec technologies"
            />
          </Link>
          <Link to="/">
            <img
              className="w-8 mr-7 sm:hidden block"
              src={logo_phone}
              alt="ampec technologies"
            />
          </Link>
        </div>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          <div className="max-h-screen overflow-y-auto">{navList}</div>
        </div>
      </Collapse>
    </div>
  );
};

export default Nav;

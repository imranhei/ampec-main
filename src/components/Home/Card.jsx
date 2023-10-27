import React from "react";
import { Link } from "react-router-dom";

const Card = ({ props, index }) => {
  return (
    <div className="bg-amCard hover:bg-gray-100 rounded-xl p-10 sm:w-[354px] w-72 sm:h-[390px] h-[350px] lg:shadow-lg space-y-2 relative z-10">
      <div className="sm:h-40 h-24 sm:w-40 w-24 mx-auto flex justify-center items-center">
        <img
          src={props.icon}
          alt={props.title}
          className={`mx-auto sm:h-28 h-20 sm:w-28 w-20 object-contain ${
            index === 0 ? "sm:h-24 sm:w-24" : ""
          }`}
        />
      </div>
      <p className="font-bold sm:text-lg font-lato text-amYellow pt-2 tracking-widest">
        {props.title}
      </p>
      <p className="font-lato font-semibold text-amBlue sm:w-60 tracking-wider">
        {props.para}
      </p>
      <Link to={props.link} className="flex absolute bottom-6 gap-2 group py-2">
        <p className="text-amber-400 font-lato font-semibold tracking-widest">
          Read more
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="text-amYellow rotate-45 group-hover:ml-2 group-hover:rotate-90 duration-300"
        >
          <path
            fill="currentColor"
            d="M11 19.5V7.914l-4.5 4.5L5.086 11L12 4.086L18.914 11L17.5 12.414l-4.5-4.5V19.5h-2Z"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Card;

import React from 'react';
import { Link } from 'react-router-dom';

const Button = ( ) => {
    return (
        <Link className="text-amBlue tracking-widest lg:text-lg sm:text-base text-sm flex items-center justify-center bg-amYellow hover:shadow-button duration-100 sm:py-3.5 py-2 sm:rounded-lg rounded lg:gap-4 gap-2 lg:w-60 w-48 cursor-pointer sm:font-semibold font-lato group">
          Buy Online
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="text-white group-hover:lg:translate-x-2 group-hover:translate-x-1 group-hover:text-amBlue duration-300"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M6 19L19 6m0 0v12.48M19 6H6.52"
            />
          </svg>
        </Link>
    );
}

export default Button;

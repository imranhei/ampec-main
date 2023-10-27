import React from 'react';
import { Link } from 'react-router-dom';

const Button = ( ) => {
    return (
        <Link className="text-amBlue tracking-widest text-lg flex items-center justify-center bg-amYellow hover:shadow-button duration-100 sm:py-3.5 py-2 sm:rounded-lg rounded sm:gap-4 gap-2 w-60 cursor-pointer sm:font-semibold font-lato group">
          Buy Online
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
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
        </Link>
    );
}

export default Button;

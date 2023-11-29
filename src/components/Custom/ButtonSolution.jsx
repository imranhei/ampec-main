import React from 'react';
import { Link } from 'react-router-dom';

const ButtonSolution = () => {
    return (
        <Link className="sm:font-semibold font-lato text-amBlue lg:text-lg sm:text-base text-sm border hover:text-white hover:bg-amGray border-amGray sm:py-3 py-2 sm:rounded-lg rounded lg:w-60 w-48 bg-nav tracking-widest hover:shadow-button duration-100 text-center"
        to="/services"
        >
          See Our Solutions
        </Link>
    );
}

export default ButtonSolution;

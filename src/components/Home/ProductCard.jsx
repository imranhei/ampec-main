import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <Link to={product.link} className='w-[300px] h-[440px] relative rounded-lg overflow-hidden shadow-md group'>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="absolute text-white translate-x-2 group-hover:right-5 opacity-0 group-hover:opacity-100 duration-300 z-20 rotate-45 top-4 right-8"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M6 19L19 6m0 0v12.48M19 6H6.52"
            />
          </svg>
            <img className='w-full h-full object-cover duration-300 group-hover:scale-105'  src={product.icon} alt="Product" />
            <div className="group-hover:opacity-100 opacity-0 to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 duration-300" />
            <div className="bg-amCard w-full absolute bottom-0 h-16 group-hover:h-40 duration-300 text-amBlue group">
                <p className="text-center font-exo font-bold text-lg pt-5 tracking-widest">{product.title}</p>
                <p className='px-6 font-khula text-justify opacity-0 group-hover:opacity-100 duration-150 pt-2 line-clamp-3'>{product.des}</p>
            </div>
        </Link>
    );
}

export default ProductCard;

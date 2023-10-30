import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className='w-[300px] h-[440px] relative rounded-lg overflow-hidden shadow-md group'>
            <img className='w-full h-full object-cover duration-300 group-hover:scale-105'  src={product.icon} alt="Product" />
            <div className="group-hover:opacity-100 opacity-0 to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 duration-300" />
            <div className="bg-gray-200 w-full absolute bottom-0 h-16 group-hover:h-40 duration-300 group-hover:border-t-4 border-amYellow text-amBlue group">
                <p className="text-center font-khula font-bold text-lg pt-5 tracking-widest">{product.title}</p>
                <p className='px-6 text-justify opacity-0 group-hover:opacity-100 duration-150 pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, tempora laudantium.</p>
            </div>
        </div>
    );
}

export default ProductCard;

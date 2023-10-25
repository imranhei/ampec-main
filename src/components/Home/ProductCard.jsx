import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className='w-[300px] h-[440px] relative rounded-lg overflow-hidden shadow-md'>
            <img className='w-full h-full object-cover duration-300'  src={product.icon} alt="Product" />
            {/* <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" /> */}
            <div className="bg-gray-200 w-full absolute bottom-0 h-16">
                <p className="text-center font-khula font-bold text-lg pt-5 tracking-widest text-amBlue">{product.title}</p>
            </div>
        </div>
    );
}

export default ProductCard;

import React from 'react';
import Button from '../Custom/ButtonBuy';
import ButtonSolution from '../Custom/ButtonSolution';

const DedicatedToSuccess = () => {
    return (
        <div className="flex flex-col items-center py-10">
        <p className="lg:text-4xl sm:text-3xl text-2xl font-bold tracking-wide font-exo lg:pb-16 sm:pb-14 pb-8 text-amBlue text-center">
          Dedicated to Your Success
        </p>
        <div className="sm:text-center text-justify text-amBlue font-semibold lg:leading-10 leading-7 tracking-wide font-khula sm:pb-16 pb-8">
          We're not just a supplier; we're a partner dedicated to your success.
          We pride ourselves on being flexible and responsive to your needs. Our
          commitment to quality is unwavering, ensuring that every cable
          assembly we provide is reliable and built to last. We understand the
          importance of your project's success, and our team of experts is here
          to provide the technical support and guidance you need.
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-5 justify-center items-center text-sm sm:text-base sm:pb-20 pb-10">
          <Button />
          <ButtonSolution />
        </div>
      </div>
    );
}

export default DedicatedToSuccess;

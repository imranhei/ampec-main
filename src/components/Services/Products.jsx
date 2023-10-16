import React from "react";
import pem from "../../assets/Services/pem.png";
import holin_logo from "../../assets/holin_logo.png";
import ad from "../../assets/Services/ad.png";
import cde_logo from "../../assets/cde_logo.png";
import Button from '../Custom/Button'

const Products = () => {
  const data = [
    {
      id: 1,
      icon: pem,
      detail:
        "PEM® brand fasteners utilize self-clinching, broaching, flaring, surface mount, or weld technology to provide strong, reusable, and permanent threads and mounting points in thin sheet metal, P.C. board materials, and other ductile or non-ductile thin material.",
    },
    {
      id: 2,
      icon: holin_logo,
      detail:
        "We are a supplier of a leading manufacturer of waterproof/harsh environment connectors.",
    },
    {
      id: 3,
      icon: ad,
      detail:
        "Being a supplier of Advanced Interconnection, we offer a wider range of IC & BGA sockets, Terminals, Customised connectors.",
    },
    {
      id: 4,
      icon: cde_logo,
      detail:
        "Whether you’re looking for the ultimate in reliability or custom capacitor solutions, you'll find we are easy to work with because we work together with your team to help energize your ideas. With a fine attention to detail, our goal is to help you find the best solution for the job.",
    },
  ];

  return (
    <div className="lg:pt-24 sm:pt-20 pt-10 flex flex-col items-center z-10 relative container mx-auto">
      <p className="text-center font-exo lg:text-5xl sm:text-4xl text-2xl text-amBlue tracking-wide sm:pb-16 pb-10 z-10">
        Our Products
      </p>
      <div className="sm:text-center text-amBlue sm:text-base text-sm font-semibold sm:leading-9 leading-6 tracking-wide font-khula sm:pb-16 pb-8 px-10 max-w-[1300px] mx-auto text-justify">
        Ampec Technologies is a proud and authorised distributor of all types of
        electronic components, fasteners and wireless technologies for almost 25
        years. Please see the list below for a listing of some of the
        manufacturers' products we offer. If you do not see a manufacturer
        below, please contact us and one of our customer service representatives
        will be happy to discuss acquiring those products for you.
      </div>
      <div className="flex flex-wrap justify-center lg:gap-10 gap-5 lg:py-24 py-10 px-10">
        {data.map((item) => (
          <div key={item.id} className="flex items-center flex-col lg:p-10 p-6 shadow-lg rounded-lg bg-amCard sm:h-[440px] h-96 lg:w-[580px] w-[334px] text-center">
              <img className="lg:h-28 h-20 w-auto mx-auto p-4 lg:m-2" src={item.icon} alt="icon" />
            <p className="lg:h-40 sm:h-60 h-52 text-amBlue sm:text-base text-sm font-lato font-semibold lg:leading-8 leading-7">{item.detail}</p>
            <Button />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

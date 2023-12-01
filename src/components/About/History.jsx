import React, { useState } from "react";
import history_01 from "../../assets/history_01.jpeg";
import history_02 from "../../assets/history_02.jpeg";
import history_03 from "../../assets/history_03.jpeg";
import history_04 from "../../assets/history_04.jpeg";

const History = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="sm:py-24 flex flex-col container mx-auto">
      <p className="text-center font-exo font-bold lg:text-5xl sm:text-4xl text-2xl text-amBlue tracking-wide sm:pb-16 pb-10 z-10">
        Our History
      </p>
      <div className={`max-w-[1300px] mx-auto text-justify text-amBlue sm:text-base text-sm font-semibold sm:leading-10 leading-7 tracking-wide font-khula px-10 ${readMore ? 'line-clamp-none' : 'sm:line-clamp-none line-clamp-5'}`}>
        Ampec started out as a supplier of passive electronic components of all
        types and a manufacturer of custom cable assemblies. By focusing on
        customer REQUIREMENTS our business has continued to grow and diversify.
        We are now recognised as a supplier of choice for electronic components
        through to prototype and contract manufacturing products and services to
        the OEMs for the electronics industries, such as, healthcare, gaming,
        lighting, transport and communications industries.
        <br /> <br />
        We've grown our business by putting our electro-mechanical assembly,
        cable assembly and metalwork experience to work for our customers who
        are able to have their products manufactured by Ampec, as experts,
        resulting in less risk, more confidence and faster time to market.We
        understand that our customers want flexibility and we deliver, from
        component supply to comprehensive product build, testing, packing and
        logistics services. Our experienced team are able to assist our
        customers with their designs to ensure the best outcome technically,
        aesthetically and commercially.
        <br /> <br />
        And our customers are, taking advantage of our services in turnkey
        supply chain management, fast-turn refurbishment and/or minor
        modifications to suit different requirements, volumes or industries. For
        more than 25 years, one thing hasn't changed, our commitment to
        providing our customers superior service and highest quality, components
        at a genuinely competitive price.
      </div>
      <button onClick={() => setReadMore(!readMore)} className="px-10 text-amYellow w-fit sm:hidden text-sm">{readMore ? 'Read less' : 'Read more'}</button>
      <div className="flex flex-wrap lg:px-0 px-10 lg:w-4/5 sm:mt-16 mt-8 mx-auto">
        <div className="w-2/3 max-h-96 aspect-video">
            <img className="lg:p-2 p-1 h-full w-full object-cover" src={history_01} alt="History" />
        </div>
        <div className="w-1/3 max-h-96 aspect-square">
            <img className="lg:p-2 p-1 h-full w-full object-cover object-right" src={history_02} alt="History" />
        </div>
        <div className="w-1/3 max-h-96 aspect-square">
            <img className="lg:p-2 p-1 h-full w-full object-cover" src={history_03} alt="History" />
        </div>
        <div className="w-2/3 max-h-96 aspect-video">
            <img className="lg:p-2 p-1 h-full w-full object-cover" src={history_04} alt="History" />
        </div>
      </div>
    </div>
  );
};

export default History;

import React from "react";
import defence_03 from "../../../assets/Industries/defence_03.webp";
import defence_04 from "../../../assets/Industries/defence_04.webp";

const KeyFeatures = () => {
  return (
    <div className="w-full py-20 container mx-auto lg:px-20 px-10 text-amBlue text-justify">
      <p className="lg:text-4xl sm:text-3xl text-2xl font-exo font-bold pb-20">
        Key Features of Our Cable Harness and Box Assemblies:
      </p>
      <p className="lg:text-2xl sm:text-xl text-lg font-exo font-bold pb-4">
        Robust Durability:
      </p>
      <p className="font-khula sm:text-base text-sm pb-6">
        Our cable harness and box assemblies are meticulously engineered to
        endure the harshest conditions. Whether it's extreme temperatures,
        high-impact vibrations, or exposure to the elements, our products are
        built to perform. We understand that reliability is paramount in defence
        applications, and our solutions deliver just that.
      </p>

      <p className="lg:text-2xl sm:text-xl text-lg font-exo font-bold pb-4">
        Cutting-Edge Technology:
      </p>
      <p className="font-khula sm:text-base text-sm pb-6">
        We stay at the forefront of technological advancements. Our design and
        manufacturing processes incorporate the latest innovations, ensuring
        that your defence systems benefit from the most advanced components
        available. This dedication to cutting-edge technology allows us to
        continually enhance the performance and reliability of our products.
      </p>

      <p className="lg:text-2xl sm:text-xl text-lg font-exo font-bold pb-4">
        Compliance with Industry Standards:
      </p>
      <p className="font-khula sm:text-base text-sm pb-6">
        We take compliance seriously. Our cable harness and box assemblies meet
        and exceed all relevant industry standards and regulations. We
        understand that adherence to these standards is not negotiable in the
        defence sector. You can rely on us to provide products that are fully
        compliant with the stringent requirements of the defence industry.
      </p>

      <p className="lg:text-2xl sm:text-xl text-lg font-exo font-bold pb-4">
        Scalability for Your Needs:
      </p>
      <p className="font-khula sm:text-base text-sm">
        No project is too big or too small for us. Our production capabilities
        are highly scalable, making us a versatile partner for your cable
        harness and box assembly needs. Whether you require a limited run of
        specialized components or need large volume orders fulfilled, we
        maintain the same level of precision and quality assurance throughout
        the production process.
      </p>
      <div className="flex justify-between gap-10 py-20">
        <img src={defence_03} alt="" className="w-3/5 object-cover" />
        <img src={defence_04} alt="" className="flex-1 object-cover" />
      </div>
    </div>
  );
};

export default KeyFeatures;

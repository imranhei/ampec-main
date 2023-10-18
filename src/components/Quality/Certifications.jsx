import React from "react";
import iso_logo from "../../assets/Quality/iso_logo.png";
import ul_logo from "../../assets/Quality/ul_logo.png";
import ipc_logo from "../../assets/Quality/ipc_logo.png";

const Certifications = () => {
  return (
    <div className="flex w-full flex-col items-center py-20">
      <p className="lg:text-5xl sm:text-4xl text-[28px] font-bold tracking-wide font-exo lg:py-16 sm:py-14 py-8 px-6 text-amBlue text-center mx-auto">
        Certifications and Compliance
      </p>
      <div className="text-center text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8 sm:w-[1300px] mx-4 px-10">
        We take pride in meeting and often exceeding industry standards and
        certifications. We take our commitment to quality seriously, and that's
        why we hold several industry certifications and comply with relevant
        standards, including:
      </div>
      <img className="p-10" src={iso_logo} alt="" />
      <div className="text-center text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8 sm:w-[1300px] mx-4 px-10">
        ISO 9001: Our quality management system is certified to ISO 9001
        standards, demonstrating our dedication to quality control and
        continuous improvement. With ISO 9001 certification, you can trust that
        our processes and products are held to the highest quality standards.
      </div>
      <img className="p-10" src={ul_logo} alt="" />
      <div className="text-center text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8 sm:w-[1300px] mx-4 px-10">
        UL Certification: We have received UL certification for our products,
        signifying that they meet the highest safety and performance standards.
        UL is a globally recognized safety science organization that tests and
        certifies products to meet stringent safety standards.
      </div>
      <img className="p-10" src={ipc_logo} alt="" />
      <div className="text-center text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8 sm:w-[1300px] mx-4 px-10">
        All our workers are IPC/WHMA-A-620 trained. This program has polished
        the Cable and Wire Harness Assemblies skill of our workers although most
        of them have been working for us for many years. This program has
        formalized their qualification in this field.
      </div>
    </div>
  );
};

export default Certifications;

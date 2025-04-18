import React from "react";
import iso_logo from "../../assets/Quality/iso_logo.png";
import ul_logo from "../../assets/Quality/ul_logo.png";
import ipc_logo from "../../assets/Quality/ipc_logo.png";
import iso_certificate from "../../assets/Quality/iso_certificate.pdf";
import bsi_logo from "../../assets/Quality/bsi_logo.png";
import { Link } from "react-router-dom";

const Certifications = () => {
  const handleViewCertificate = () => {
    window.open(iso_certificate, "_blank");
  };

  return (
    <div className="flex w-full flex-col items-center py-20 container mx-auto lg:px-20 md:px-10 px-6">
      <p className="lg:text-5xl sm:text-4xl text-[28px] font-bold tracking-wide font-exo lg:py-16 sm:py-14 py-8 text-amBlue text-center">
        Certifications
      </p>
      <div className="sm:text-center text-justify text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8">
        We take pride in meeting and often exceeding industry standards and
        certifications. We take our commitment to quality seriously, and that's
        why we hold several industry certifications and comply with relevant
        standards, including:
      </div>
      <div className="flex w-full justify-between items-center flex-wrap sm:pb-20 pb-10">
        <Link onClick={handleViewCertificate}>
          <img
            className="md:p-4 lg:scale-[80%] md:scale-[60%] scale-50"
            src={iso_logo}
            alt=""
          />
        </Link>
        <img
          className="md:p-4 lg:scale-[80%] md:scale-[60%] scale-50"
          src={ipc_logo}
          alt=""
        />
        <img
          className="md:p-4 lg:w-[300px] md:w-[240px] w-[150px] lg:h-[180px] md:h-[144px] h-[90px]"
          src={bsi_logo}
          alt=""
        />
        <img
          className="md:p-4 lg:scale-[80%] md:scale-[60%] scale-50"
          src={ul_logo}
          alt=""
        />
      </div>
      <Link onClick={handleViewCertificate}>
        <img
          className="md:p-10 lg:scale-100 md:scale-75 scale-50"
          src={iso_logo}
          alt=""
        />
      </Link>
      <div className="sm:text-center text-justify text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8">
        ISO 9001: Our quality management system is certified to ISO 9001
        standards, demonstrating our dedication to quality control and
        continuous improvement. With ISO 9001 certification, you can trust that
        our processes and products are held to the highest quality standards.{" "}
        <Link
          className="text-blue-600 underline"
          onClick={handleViewCertificate}
        >
          Click here
        </Link>{" "}
        to view our ISO certificate.
      </div>
      <img
        className="md:p-10 lg:scale-100 md:scale-75 scale-50"
        src={ul_logo}
        alt=""
      />
      <div className="sm:text-center text-justify text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-8 pb-4">
        UL Certification: We have received UL certification for our products,
        signifying that they meet the highest safety and performance standards.
        UL is a globally recognized safety science organization that tests and
        certifies products to meet stringent safety standards.
      </div>
      <div className="sm:text-center text-justify text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8">
        <p>
          Some of the UL-listed cables we use include: UL 1007, UL 2651, UL
          1569, UL 1015, UL 1571.
        </p>
      </div>
      <img
        className="md:p-10 lg:scale-100 md:scale-75 scale-50"
        src={ipc_logo}
        alt=""
      />
      <div className="sm:text-center text-justify text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8">
        All our workers are IPC620 trained. This program has polished the Cable
        and Wire Harness Assemblies skill of our workers although most of them
        have been working for us for many years. This program has formalized
        their qualification in this field.
      </div>
      <img
        className="md:p-10 lg:w-[400px] md:w-[320px] w-[200px] lg:h-[240px] md:h-[180px] h-[120px]"
        src={bsi_logo}
        alt=""
      />
      <div className="sm:text-center text-justify text-amBlue lg:text-xl sm:text-lg text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-16 pb-8">
      This BSI Certificate of Registration for Quality Management Systems under AS9100D and ISO 9001:2015 confirms that our company adheres to rigorous international standards for quality in aerospace and general industries. This certification reflects a strong commitment to continuous improvement, ensuring that products and services consistently meet customer and regulatory requirements at the highest level of quality and reliability.
      </div>
    </div>
  );
};

export default Certifications;

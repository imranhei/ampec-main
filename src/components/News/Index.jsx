import React, { useEffect } from "react";
import iso_certificate from "../../assets/News/iso_certificate.png";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full relative z-10 lg:pt-44 sm:pt-36 pt-24 pb-20">
      <div className="flex w-full flex-col items-center container mx-auto lg:px-20 md:px-10 px-6">
        <h1 className="text-center font-exo font-bold lg:text-5xl sm:text-4xl text-2xl text-amBlue tracking-wide sm:pb-16 pb-8 z-10">
          News
        </h1>
        <h2 className="sm:text-center text-justify text-amBlue lg:text-lg sm:text-base text-sm font-semibold lg:leading-10 sm:leading-7 leading-7 tracking-wide font-khula sm:pb-16 pb-8">
          The News section serves as a dynamic hub for the latest updates,
          achievements, and innovations within the company. This section keeps
          clients, partners, and stakeholders informed about significant
          milestones, new technologies, and the company's contributions to the
          electrical engineering field, reflecting its ongoing growth and
          leadership in the industry.
        </h2>
        <div>
          <h2 className="text-justify text-amBlue sm:text-xl text-lg font-semibold sm:leading-10 leading-7 tracking-wide font-khula sm:py-2 py-0 sm:mt-10 mt-6">
            October 22, 2024
          </h2>
          <h2 className="text-justify text-amBlue sm:text-lg font-semibold sm:leading-10 leading-7 tracking-wide font-khula">
            AS9100D and ISO 9001:2015
          </h2>
          <p
            className={`text-justify text-amBlue sm:text-base text-sm font-semibold sm:leading-10 leading-7 tracking-wide font-khula`}
          >
            That's great news! "Ampec has recently achieved AS9100D and ISO
            9001:2015 certifications,, especially in the aerospace, defense, and
            manufacturing sectors. These certifications indicate that Ampec
            meets rigorous quality management standards, particularly for cable
            and wire harness assemblies, as well as electro-mechanical box build
            assemblies.
          </p>
        </div>
        <img src={iso_certificate} alt="" className="my-20" />
        <div>
          <h2 className="text-justify text-amBlue sm:text-xl text-lg font-semibold sm:leading-10 leading-7 tracking-wide font-khula sm:py-2 py-0 sm:mt-10 mt-6">
            October 16, 2024
          </h2>
          <h2 className="text-justify text-amBlue sm:text-lg font-semibold sm:leading-10 leading-7 tracking-wide font-khula">
            Our Box-build capabilities
          </h2>
          <p
            className={`text-justify text-amBlue sm:text-base text-sm font-semibold sm:leading-10 leading-7 tracking-wide font-khula`}
          >
            Ampec Technologies' expertise in box build assembly shines through
            our ability to provide high-quality, tailored solutions. Our focus
            on continuous learning and innovation ensures that the technology
            used is always cutting-edge, Keeping our projects effective and
            aligned with the latest industry trends. This commitment makes us a
            preferred choice in the industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

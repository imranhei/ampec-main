import React, { useEffect } from "react";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full relative z-10 lg:pt-44 sm:pt-36 pt-24 lg:pb-40 sm:pb-28 pb-20">
      <div className="flex flex-col container mx-auto lg:px-20 md:px-10 px-6">
        <h1 className="lg:text-5xl sm:text-4xl text-[28px] font-bold tracking-wide font-exo lg:pb-4 sm:pb-2 pb-0 text-amBlue">
          Terms and Conditions:
        </h1>
        <h2 className="lg:text-xl sm:text-lg text-sm sm:font-semibold tracking-wide font-exo lg:pb-16 sm:pb-14 pb-8 text-amBlue">
          Updated: Feb 12,2025
        </h2>
        <div className="text-amBlue font-khula sm:font-semibold">
          <h3 className="lg:text-3xl sm:text-2xl text-xl font-semibold tracking-wide lg:pb-10 sm:pb-8 pb-4">
            1. Ruggedized for Mining Environments :
          </h3>
          <p className="py-4 sm:font-bold font-semibold">
            In these Terms and Conditions:
          </p>
          <ul className="space-y-4 list-disc pl-6">
            <li>
              <span className="sm:font-bold font-semibold">"Vendor"</span>{" "}
              refers to{" "}
              <span className="sm:font-bold font-semibold">
                Ampec Technologies Pty Ltd, ABN 17 654 380 239,
              </span>{" "}
              located at{" "}
              <span className="sm:font-bold font-semibold">
                Unit 1, 63-79 Parramatta Road, Silverwater, NSW 2128.
              </span>
            </li>
            <li>
              <span className="sm:font-bold font-semibold">"Customer"</span>{" "}
              refers to any individual, company, or entity purchasing goods or
              services from the Vendor.
            </li>
            <li>
              <span className="sm:font-bold font-semibold">"Goods"</span> means
              all products, components, and assemblies supplied by the Vendor.
            </li>
            <li>
              <span className="sm:font-bold font-semibold">"Services"</span>{" "}
              means any support, manufacturing, or additional work provided by
              the Vendor.
            </li>
            <li>
              <span className="sm:font-bold font-semibold">"Order"</span> means
              the Customer's purchase request accepted by the Vendor.
            </li>
          </ul>
          <p className="py-4">
            These Terms and Conditions{" "}
            <span className="sm:font-bold font-semibold">
              supersede any conflicting terms
            </span>{" "}
            unless explicitly agreed upon in writing.
          </p>
        </div>
        <div className="text-amBlue font-khula lg:pt-12 sm:pt-10 pt-6 sm:font-semibold">
          <h3 className="lg:text-3xl sm:text-2xl text-xl font-semibold tracking-wide lg:pb-10 sm:pb-8 pb-6">
            2. Quotations & Orders :
          </h3>
          <div className="space-y-4 font">
            <p>
              <span className="sm:font-bold font-semibold">1. Quotations:</span>{" "}
              All quotations issued by the Vendor are non-binding invitations to
              treat. Prices are valid for 30 days, unless otherwise stated.
            </p>
            <p>
              <span className="sm:font-bold font-semibold">
                2. Order Acceptance:
              </span>{" "}
              Orders are subject to acceptance and are not binding until
              confirmed in writing by the Vendor. Any modifications require
              written agreement.
            </p>
            <p>
              <span className="sm:font-bold font-semibold">
                3. Minimum Order Quantities (MOQs):
              </span>{" "}
              The Vendor reserves the right to impose MOQs for certain products.
            </p>
            <p>
              <span className="sm:font-bold font-semibold">
                4. Changes & Cancellations:
              </span>{" "}
              Customers may not cancel or modify an order without prior written
              consent. If cancellation is accepted, the Customer may be liable
              for incurred costs
            </p>
          </div>
        </div>
        <div className="text-amBlue font-khula lg:pt-12 sm:pt-10 pt-6 sm:font-semibold">
          <h3 className="lg:text-3xl sm:text-2xl text-xl font-semibold tracking-wide lg:pb-10 sm:pb-8 pb-6">
            3. Pricing & Payment Terms{" "}
          </h3>
          <div className="space-y-4">
            <p className="pb-4 sm:font-bold font-semibold">1. Prices:</p>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                All prices are{" "}
                <span className="sm:font-bold font-semibold">
                  exclusive of GST,
                </span>{" "}
                duties, freight, and insurance unless explicitly stated. The
                Customer is responsible for all applicable taxes.
              </li>
              <li>
                If the cost to the Vendor of supplying the goods/services or any
                items thereof varies as a result of or changes to government tax
                or customs duties or similar charges (including any change to
                administrative policy), then the price shall increase by the
                amount by which the cost to the Vendor increases.
              </li>
              <li>All GST for domestic sales will be paid by the Customer.</li>
            </ul>
            <p className="pb-4 sm:font-bold font-semibold">2. Payment Terms:</p>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                The Customer must pay based on the{" "}
                <span className="sm:font-bold font-semibold">
                  agreed-upon payment terms.
                </span>
              </li>
              <li>
                Payments must be made to{" "}
                <span className="sm:font-bold font-semibold">
                  Commonwealth Bank of Australia
                </span>{" "}
                (CBA) or another bank specified by the Vendor.
              </li>
              <li>
                The Vendor reserves the right{" "}
                <span className="sm:font-bold font-semibold">
                  to modify or withdraw credit terms based
                </span>{" "}
                on the Customer's financial standing.
              </li>
            </ul>
            <p className="pb-4 sm:font-bold font-semibold">3. Late Payments:</p>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                Overdue invoices incur{" "}
                <span className="sm:font-bold font-semibold">
                  interest at the prevailing overdraft rate
                </span>
                set by Commonwealth Bank of Australia (CBA).
              </li>
              <li>
                If the Customer defaults on payment, the Vendor reserves the
                right to{" "}
                <span className="sm:font-bold font-semibold">
                  suspend deliveries, recover goods, and claim legal and
                  collection costs.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-amBlue font-khula lg:pt-12 sm:pt-10 pt-6 sm:font-semibold">
          <h3 className="lg:text-3xl sm:text-2xl text-xl font-semibold tracking-wide lg:pb-10 sm:pb-8 pb-6">
            4. Pricing & Payment Terms
          </h3>
          <div className="space-y-4">
            <p className="pb-4 sm:font-bold font-semibold">1. Prices:</p>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                All prices are{" "}
                <span className="sm:font-bold font-semibold">
                  exclusive of GST,
                </span>{" "}
                duties, freight, and insurance unless explicitly stated. The
                Customer is responsible for all applicable taxes.
              </li>
              <li>
                If the cost to the Vendor of supplying the goods/services or any
                items thereof varies as a result of or changes to government tax
                or customs duties or similar charges (including any change to
                administrative policy), then the price shall increase by the
                amount by which the cost to the Vendor increases.
              </li>
              <li>All GST for domestic sales will be paid by the Customer.</li>
            </ul>
            <p className="pb-4 sm:font-bold font-semibold">2. Payment Terms:</p>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                The Customer must pay based on the{" "}
                <span className="sm:font-bold font-semibold">
                  agreed-upon payment terms.
                </span>
              </li>
              <li>
                Payments must be made to{" "}
                <span className="sm:font-bold font-semibold">
                  Commonwealth Bank of Australia
                </span>{" "}
                (CBA) or another bank specified by the Vendor.
              </li>
              <li>
                The Vendor reserves the right{" "}
                <span className="sm:font-bold font-semibold">
                  to modify or withdraw credit terms based
                </span>{" "}
                on the Customer's financial standing.
              </li>
            </ul>
            <p className="pb-4 sm:font-bold font-semibold">3. Late Payments:</p>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                Overdue invoices incur{" "}
                <span className="sm:font-bold font-semibold">
                  interest at the prevailing overdraft rate
                </span>
                set by Commonwealth Bank of Australia (CBA).
              </li>
              <li>
                If the Customer defaults on payment, the Vendor reserves the
                right to{" "}
                <span className="sm:font-bold font-semibold">
                  suspend deliveries, recover goods, and claim legal and
                  collection costs.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;

import { useEffect } from "react";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full relative z-10 lg:pt-44 sm:pt-36 pt-24 lg:pb-40 sm:pb-28 pb-20">
      <div className="flex flex-col container mx-auto lg:px-20 md:px-10 px-6">
        <div className="mb-12 border-b border-amBlue/10 pb-8 sm:pb-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h1 className="mt-4 lg:text-5xl sm:text-4xl text-[30px] font-bold tracking-tight font-exo text-amBlue leading-[1.1]">
                Terms & Conditions
              </h1>

              <p className="mt-3 lg:text-xl sm:text-lg text-sm sm:font-semibold tracking-wide font-exo text-amBlue">
                Updated: February 12, 2025
              </p>
            </div>

            <a
              href="/Ampec_Standard_Terms_and_Conditions_v1.1.pdf"
              download
              className="group inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-full border border-yellow-500/70 bg-yellow-400 px-6 text-sm sm:text-base font-semibold text-amBlue shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-[1px]"
              >
                <path d="M12 4v10" />
                <path d="M8.5 11.5L12 15l3.5-3.5" />
                <path d="M5 19h14" />
              </svg>

              <span>Download PDF</span>
            </a>
          </div>
        </div>
        {/* <div className="text-amBlue font-khula sm:font-semibold">
          <h3 className="lg:text-3xl sm:text-2xl text-xl font-semibold tracking-wide lg:pb-10 sm:pb-8 pb-4">
            1. Definitions :
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
        </div> */}
        <div className="text-amBlue font-khula sm:font-semibold">
          <h3 className="lg:text-3xl sm:text-2xl text-xl font-semibold tracking-wide lg:pb-10 sm:pb-8 pb-4">
            1. Definitions :
          </h3>
          <p className="py-4 sm:font-bold font-semibold">
            In these Terms and Conditions the following definitions apply:
          </p>
          <ul className="space-y-4 list-disc pl-6">
            <li>
              <span className="sm:font-bold font-semibold">"Vendor"</span> Ampec
              Technologies Pty Ltd, ABN 17 654 380 239, Unit 1, 63–79 Parramatta
              Road, Silverwater NSW 2128.
            </li>
            <li>
              <span className="sm:font-bold font-semibold">"Customer"</span> Any
              individual, company, or entity that purchases, or requests a
              quotation for, goods or services from the Vendor.
            </li>
            <li>
              <span className="sm:font-bold font-semibold">"Goods"</span> All
              products, components, cable harness assemblies, box-build
              assemblies, and any other items supplied by the Vendor.
            </li>
            <li>
              <span className="sm:font-bold font-semibold">"Services"</span>{" "}
              Design assistance, engineering support, manufacturing, testing,
              inspection, and any other work performed by the Vendor.
            </li>
            <li>
              <span className="sm:font-bold font-semibold">"Order"</span> A
              Customer purchase request accepted in writing by the Vendor.
            </li>
            <li>
              <span className="sm:font-bold font-semibold">
                "Approved Drawings / Specification"
              </span>{" "}
              Customer-supplied or customer-approved engineering drawings,
              schematics, bills of material, and technical specifications that
              form the authorised design basis for manufacture.
            </li>
            <li>
              <span className="sm:font-bold font-semibold">
                "Customer-Supplied Materials"
              </span>{" "}
              Components, sub-assemblies, wire, connector backshells, or other
              materials provided by the Customer for incorporation into the
              Goods.
            </li>
            <li>
              <span className="sm:font-bold font-semibold">"NCR"</span>{" "}
              Non-Conformance Report issued by the Vendor to authorise a return
              or remedial action.
            </li>
          </ul>
        </div>

        <div className="text-amBlue font-khula lg:pt-12 sm:pt-10 pt-6 sm:font-semibold">
          <h3 className="lg:text-3xl sm:text-2xl text-xl font-semibold tracking-wide lg:pb-10 sm:pb-8 pb-6">
            2. Quotations & Orders :
          </h3>
          <div className="space-y-4">
            <p>
              <span className="sm:font-bold font-semibold">2.1 Quotations</span>
            </p>
            <ul className="space-y-4 list-disc pl-6">
              <li>All quotations are non-binding invitations to treat.</li>
              <li>
                Prices are valid for 30 days from the quotation date unless
                otherwise stated in writing.
              </li>
              <li>
                Quotations are based on the Approved Drawings or specifications
                current at the time of quoting. Changes to design or
                specifications after quotation may require re-pricing.
              </li>
            </ul>

            <p className="pt-4">
              <span className="sm:font-bold font-semibold">
                2.2 Order Acceptance
              </span>
            </p>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                No Order is binding on the Vendor until confirmed in writing by
                the Vendor.
              </li>
              <li>
                The Vendor reserves the right to decline any Order without
                giving reasons.
              </li>
              <li>
                Any modifications to a confirmed Order require written agreement
                from both parties and may affect price and delivery.
              </li>
            </ul>

            <p className="pt-4">
              <span className="sm:font-bold font-semibold">
                2.3 Minimum Order Quantities
              </span>
            </p>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                The Vendor may impose minimum order quantities (MOQs) for
                certain products or assembly runs. MOQs will be stated on the
                relevant quotation.
              </li>
            </ul>

            <p className="pt-4">
              <span className="sm:font-bold font-semibold">
                2.4 Changes & Cancellations
              </span>
            </p>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                The Customer may not cancel or modify a confirmed Order without
                the Vendor’s prior written consent.
              </li>
              <li>
                Where cancellation is accepted, the Customer is liable for all
                costs reasonably incurred by the Vendor up to the point of
                cancellation, including materials purchased, work-in-progress,
                and tooling.
              </li>
            </ul>
          </div>
        </div>

        <div className="text-amBlue font-khula lg:pt-12 sm:pt-10 pt-6 sm:font-semibold">
          <h3 className="lg:text-3xl sm:text-2xl text-xl font-semibold tracking-wide lg:pb-10 sm:pb-8 pb-6">
            3. Design Approval & Specifications
          </h3>
          <div className="space-y-4">
            <p>
              <span className="sm:font-bold font-semibold">
                3.1 Customer-Approved Drawings
              </span>
            </p>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                All Goods are manufactured strictly to Approved Drawings and/or
                specifications provided or formally approved in writing by the
                Customer prior to the commencement of production.
              </li>
              <li>
                The Customer is solely responsible for the accuracy,
                completeness, and fitness-for-purpose of all Approved Drawings
                and specifications.
              </li>
              <li>
                The Vendor is not liable for any defect, non-performance, or
                unsuitability of Goods that arises from errors, omissions, or
                inadequacies in the Approved Drawings or specifications.
              </li>
            </ul>

            <p className="pt-4">
              <span className="sm:font-bold font-semibold">
                3.2 Vendor Design Assistance
              </span>
            </p>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                Where the Vendor provides engineering or design input, such
                input constitutes assistance only and does not transfer design
                responsibility to the Vendor unless explicitly agreed in
                writing.
              </li>
              <li>
                Any design or drawing produced by the Vendor with Customer
                involvement must be formally approved in writing by the Customer
                before production commences. Approval by the Customer
                constitutes acceptance of full design responsibility for that
                drawing.
              </li>
              <li>
                Design approval records will be retained by the Vendor as part
                of the production file.
              </li>
            </ul>

            <p className="pt-4">
              <span className="sm:font-bold font-semibold">
                3.3 Engineering Changes
              </span>
            </p>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                No change to Approved Drawings, materials, components, or
                processes may be made during or after production without prior
                written approval from the Customer.
              </li>
              <li>
                Approved engineering changes will be documented,
                revision-controlled, and agreed in writing before
                implementation. Changes may affect price and/or delivery.
              </li>
            </ul>
          </div>
        </div>

        <div className="text-amBlue font-khula lg:pt-12 sm:pt-10 pt-6 sm:font-semibold">
          <h3 className="lg:text-3xl sm:text-2xl text-xl font-semibold tracking-wide lg:pb-10 sm:pb-8 pb-6">
            4. Customer-Supplied Materials
          </h3>
          <ul className="space-y-4 list-disc pl-6">
            <li>
              Where the Customer supplies materials for incorporation into the
              Goods, the Customer is responsible for their quality, suitability,
              and timely delivery to the Vendor.
            </li>
            <li>
              The Vendor will use Customer-Supplied Materials in reasonable
              reliance on the Customer’s representation that they are fit for
              purpose and conform to the Approved Drawings.
            </li>
            <li>
              The Vendor is not liable for defects in Goods that arise from
              defective, non-conforming, or incorrectly specified
              Customer-Supplied Materials.
            </li>
            <li>
              The Vendor will use reasonable care in handling Customer-Supplied
              Materials but is not liable for loss or damage unless caused by
              the Vendor’s negligence.
            </li>
            <li>
              Excess or unused Customer-Supplied Materials will be returned or
              disposed of as directed by the Customer. Storage beyond 30 days
              from Order completion may attract a storage fee.
            </li>
          </ul>
        </div>

        <div className="text-amBlue font-khula lg:pt-12 sm:pt-10 pt-6 sm:font-semibold">
          <h3 className="lg:text-3xl sm:text-2xl text-xl font-semibold tracking-wide lg:pb-10 sm:pb-8 pb-6">
            5. Tooling & Fixtures
          </h3>
          <ul className="space-y-4 list-disc pl-6">
            <li>
              Tooling, jigs, fixtures, and test equipment fabricated or
              purchased by the Vendor to fulfil an Order remain the property of
              the Vendor unless explicitly agreed otherwise in writing.
            </li>
            <li>
              Where the Customer has funded specific tooling, ownership of that
              tooling transfers to the Customer only upon full payment of the
              tooling cost. Until transfer, the Vendor retains a lien over the
              tooling.
            </li>
            <li>
              The Vendor will maintain tooling in good working order for the
              duration of the supply arrangement. Tooling maintenance costs are
              borne by the Vendor unless otherwise agreed.
            </li>
          </ul>
        </div>

        <div className="text-amBlue font-khula lg:pt-12 sm:pt-10 pt-6 sm:font-semibold">
          <h3 className="lg:text-3xl sm:text-2xl text-xl font-semibold tracking-wide lg:pb-10 sm:pb-8 pb-6">
            6. Pricing & Payment Terms
          </h3>
          <div className="space-y-4">
            <p>
              <span className="sm:font-bold font-semibold">6.1 Pricing</span>
            </p>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                All prices are exclusive of GST, duties, freight, and insurance
                unless explicitly stated. The Customer is responsible for all
                applicable taxes and duties.
              </li>
              <li>
                Prices are based on the Approved Drawings and specifications
                current at the time of quotation. Design changes, specification
                changes, or increases in material cost may result in price
                adjustments, notified to the Customer in writing before being
                applied.
              </li>
              <li>
                If the Vendor’s cost of supply increases due to changes in
                government taxes, customs duties, or similar charges, the price
                may be increased by that amount with written notice to the
                Customer.
              </li>
            </ul>

            <p className="pt-4">
              <span className="sm:font-bold font-semibold">
                6.2 Payment Terms
              </span>
            </p>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                Payment terms are as stated on the Vendor’s invoice or as agreed
                in writing. In the absence of agreed terms, payment is due 30
                days from invoice date.
              </li>
              <li>
                Payment must be made to Commonwealth Bank of Australia (CBA) or
                such other account as the Vendor specifies in writing.
              </li>
              <li>
                The Vendor reserves the right to review or withdraw credit terms
                based on the Customer’s payment history or financial standing.
              </li>
            </ul>

            <p className="pt-4">
              <span className="sm:font-bold font-semibold">
                6.3 Late Payments
              </span>
            </p>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                Overdue invoices accrue interest at the prevailing CBA overdraft
                rate, calculated daily from the due date until payment in full.
              </li>
              <li>
                If the Customer defaults on payment, the Vendor may suspend
                deliveries, withhold release of completed Goods, recover
                delivered Goods (where title has not passed), and claim all
                reasonable legal and debt recovery costs.
              </li>
            </ul>
          </div>
        </div>

        <div className="text-amBlue font-khula lg:pt-12 sm:pt-10 pt-6 sm:font-semibold">
          <h3 className="lg:text-3xl sm:text-2xl text-xl font-semibold tracking-wide lg:pb-10 sm:pb-8 pb-6">
            7. Inspection & Acceptance
          </h3>
          <ul className="space-y-4 list-disc pl-6">
            <li>
              The Vendor performs quality inspection against the Approved
              Drawings prior to shipment. Inspection records are retained and
              available to the Customer on request.
            </li>
            <li>
              The Customer shall inspect all Goods promptly upon receipt. Any
              claim for visible damage, shortage, or incorrect delivery must be
              made in writing within five (5) business days of receipt. Claims
              not made within this period will not be recognised.
            </li>
            <li>
              Where the Customer requires witness inspection, hold points, or
              first-article inspection (FAI), these must be agreed in writing at
              the time of Order and may affect lead time and price.
            </li>
            <li>
              Acceptance of Goods by the Customer (including use, incorporation,
              or on-sale) constitutes confirmation that the Goods conform to the
              Approved Drawings unless a written non-conformance claim has been
              raised.
            </li>
          </ul>
        </div>

        <div className="text-amBlue font-khula lg:pt-12 sm:pt-10 pt-6 sm:font-semibold">
          <h3 className="lg:text-3xl sm:text-2xl text-xl font-semibold tracking-wide lg:pb-10 sm:pb-8 pb-6">
            8. Delivery & Risk
          </h3>
          <div className="space-y-4">
            <p>
              <span className="sm:font-bold font-semibold">
                8.1 Delivery Estimates
              </span>
            </p>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                All delivery dates are estimates only and are not guaranteed.
                The Vendor will use reasonable endeavours to meet quoted lead
                times.
              </li>
              <li>
                The Vendor is not liable for delays caused by supply chain
                disruptions, carrier delays, Customer-caused delays (including
                late approval of drawings or late supply of Customer-Supplied
                Materials), or force majeure events.
              </li>
              <li>
                Lead times commence from the later of: (a) receipt of a
                confirmed Order; (b) receipt of written Approved Drawings or
                specifications; or (c) receipt of any agreed Customer-Supplied
                Materials or deposit.
              </li>
            </ul>

            <p className="pt-4">
              <span className="sm:font-bold font-semibold">
                8.2 Partial Deliveries
              </span>
            </p>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                The Vendor may fulfil an Order in multiple shipments. The
                Customer must accept and pay for each partial delivery as
                invoiced.
              </li>
            </ul>

            <p className="pt-4">
              <span className="sm:font-bold font-semibold">
                8.3 Risk & Title
              </span>
            </p>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                Risk in the Goods passes to the Customer upon delivery to the
                Customer’s nominated delivery address or, if collected by the
                Customer, upon collection.
              </li>
              <li>
                Title to the Goods remains with the Vendor until full payment of
                all amounts owing is received. Until title passes, the Customer
                holds the Goods as bailee and must not encumber or deal with the
                Goods in a way that is inconsistent with the Vendor’s ownership.
              </li>
            </ul>
          </div>
        </div>

        <div className="text-amBlue font-khula lg:pt-12 sm:pt-10 pt-6 sm:font-semibold">
          <h3 className="lg:text-3xl sm:text-2xl text-xl font-semibold tracking-wide lg:pb-10 sm:pb-8 pb-6">
            9. Warranty & Claims
          </h3>
          <div className="space-y-4">
            <p>
              <span className="sm:font-bold font-semibold">
                9.1 Vendor-Manufactured Goods
              </span>
            </p>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                Goods manufactured by the Vendor are warranted against defects
                in workmanship and materials for a period of 12 months from the
                date of delivery, provided that:
              </li>
              <li>
                The Goods have been manufactured strictly to the Customer’s
                Approved Drawings and specifications;
              </li>
              <li>
                The Goods have been stored, handled, installed, and used in
                accordance with applicable specifications and the Vendor’s
                recommendations;
              </li>
              <li>
                The defect has not been caused by misuse, unauthorised
                modification, accident, neglect, or external damage.
              </li>
              <li>
                The warranty does not extend to defects arising from design
                errors in the Customer’s Approved Drawings or from defective
                Customer-Supplied Materials, even if such defects become
                apparent during the warranty period.
              </li>
            </ul>

            <p className="pt-4">
              <span className="sm:font-bold font-semibold">
                9.2 Third-Party Manufactured Goods
              </span>
            </p>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                For Goods manufactured by a third party and on-sold by the
                Vendor, warranty coverage is limited to whatever the original
                manufacturer provides. The Vendor will, on request, assign or
                pass through any available manufacturer warranty to the
                Customer.
              </li>
            </ul>

            <p className="pt-4">
              <span className="sm:font-bold font-semibold">
                9.3 Claims & Returns
              </span>
            </p>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                Warranty claims must be submitted in writing, with a description
                of the defect and supporting evidence (photographs, test data,
                etc.), within the warranty period.
              </li>
              <li>
                Claims for physical damage or shortages visible on delivery must
                be made within five (5) business days of receipt (see Clause 7).
              </li>
              <li>
                Returns require prior written authorisation from the Vendor and
                an NCR reference number. Goods returned without authorisation
                will not be accepted.
              </li>
              <li>
                Warranty remedies are limited to, at the Vendor’s election:
                repair of the defective Goods; replacement of the defective
                Goods; or a credit not exceeding the invoiced value of the
                defective Goods.
              </li>
              <li>
                Warranty claims do not entitle the Customer to withhold payment
                for non-defective Goods or unrelated invoices.
              </li>
            </ul>
          </div>
        </div>

        <div className="text-amBlue font-khula lg:pt-12 sm:pt-10 pt-6 sm:font-semibold">
          <h3 className="lg:text-3xl sm:text-2xl text-xl font-semibold tracking-wide lg:pb-10 sm:pb-8 pb-6">
            10. Intellectual Property
          </h3>
          <ul className="space-y-4 list-disc pl-6">
            <li>
              The Customer retains ownership of all intellectual property in
              drawings, specifications, and designs supplied by the Customer to
              the Vendor. The Customer grants the Vendor a limited,
              non-exclusive licence to use such materials solely for the purpose
              of fulfilling the relevant Order.
            </li>
            <li>
              The Vendor retains ownership of all intellectual property in its
              manufacturing processes, proprietary tooling, know-how, and
              internal procedures, even where developed in the course of
              fulfilling a Customer Order.
            </li>
            <li>
              Where the Vendor creates new designs or documentation at the
              Customer’s request and expense, ownership of such deliverables
              vests in the Customer upon full payment, unless agreed otherwise
              in writing.
            </li>
            <li>
              Neither party shall use the other’s intellectual property for any
              purpose other than fulfilling obligations under the relevant Order
              without prior written consent.
            </li>
          </ul>
        </div>

        <div className="text-amBlue font-khula lg:pt-12 sm:pt-10 pt-6 sm:font-semibold">
          <h3 className="lg:text-3xl sm:text-2xl text-xl font-semibold tracking-wide lg:pb-10 sm:pb-8 pb-6">
            11. Confidentiality
          </h3>
          <ul className="space-y-4 list-disc pl-6">
            <li>
              Each party agrees to keep confidential all non-public information
              of the other party received in connection with an Order, including
              but not limited to drawings, specifications, pricing, and
              manufacturing processes (“Confidential Information”).
            </li>
            <li>
              Confidential Information may only be disclosed to employees or
              subcontractors who have a need to know for the purposes of
              fulfilling the Order and who are bound by equivalent
              confidentiality obligations.
            </li>
            <li>
              These obligations do not apply to information that: (a) is or
              becomes publicly available through no fault of the receiving
              party; (b) was already known to the receiving party; or (c) is
              required to be disclosed by law or regulatory authority.
            </li>
            <li>
              Confidentiality obligations survive the termination or expiry of
              any Order for a period of five (5) years.
            </li>
          </ul>
        </div>

        <div className="text-amBlue font-khula lg:pt-12 sm:pt-10 pt-6 sm:font-semibold">
          <h3 className="lg:text-3xl sm:text-2xl text-xl font-semibold tracking-wide lg:pb-10 sm:pb-8 pb-6">
            12. Liability & Limitations
          </h3>
          <div className="space-y-4">
            <p>
              <span className="sm:font-bold font-semibold">
                12.1 Exclusion of Implied Warranties
              </span>
            </p>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                To the maximum extent permitted by applicable law (including the
                Australian Consumer Law where it applies), the Vendor excludes
                all implied warranties, representations, and conditions,
                including warranties of fitness for a particular purpose, except
                to the extent such exclusions are prohibited by law.
              </li>
            </ul>

            <p className="pt-4">
              <span className="sm:font-bold font-semibold">
                12.2 Liability Cap
              </span>
            </p>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                The Vendor’s total liability for any claim, whether in contract,
                tort, or otherwise, is limited to one of the following at the
                Vendor’s election:
              </li>
              <li>Replacement or re-manufacture of the defective Goods;</li>
              <li>Repair of the defective Goods; or</li>
              <li>
                A refund limited to the invoiced value of the defective Goods.
              </li>
            </ul>

            <p className="pt-4">
              <span className="sm:font-bold font-semibold">
                12.3 No Liability for Design Defects
              </span>
            </p>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                The Vendor is not liable for any loss, damage, or injury arising
                from defects in the Customer’s design, from errors in the
                Approved Drawings or specifications, or from Customer-Supplied
                Materials, even if the Vendor provided design assistance.
              </li>
            </ul>

            <p className="pt-4">
              <span className="sm:font-bold font-semibold">
                12.4 Exclusion of Consequential Loss
              </span>
            </p>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                The Vendor is not liable for any indirect, incidental, special,
                or consequential loss or damage, including loss of profits, loss
                of production, business interruption, or third-party claims,
                whether or not such loss was foreseeable.
              </li>
            </ul>
          </div>
        </div>

        <div className="text-amBlue font-khula lg:pt-12 sm:pt-10 pt-6 sm:font-semibold">
          <h3 className="lg:text-3xl sm:text-2xl text-xl font-semibold tracking-wide lg:pb-10 sm:pb-8 pb-6">
            13. Force Majeure
          </h3>
          <ul className="space-y-4 list-disc pl-6">
            <li>
              The Vendor is not liable for any failure or delay in performance
              caused by events beyond its reasonable control, including but not
              limited to: natural disasters, pandemics, industrial disputes,
              supplier shortages, transport failures, or government actions.
            </li>
            <li>
              The Vendor will notify the Customer promptly of any force majeure
              event and its expected impact on delivery.
            </li>
            <li>
              If a force majeure event continues for more than 60 days, either
              party may terminate the affected Order by written notice, without
              liability to the other, except for payment for Goods already
              delivered.
            </li>
          </ul>
        </div>

        <div className="text-amBlue font-khula lg:pt-12 sm:pt-10 pt-6 sm:font-semibold">
          <h3 className="lg:text-3xl sm:text-2xl text-xl font-semibold tracking-wide lg:pb-10 sm:pb-8 pb-6">
            14. Compliance & Export Restrictions
          </h3>
          <ul className="space-y-4 list-disc pl-6">
            <li>
              The Customer agrees to comply with all applicable Australian laws
              and regulations governing the purchase, use, and export of the
              Goods.
            </li>
            <li>
              The Customer is responsible for obtaining any licences, permits,
              or approvals required for the export, re-export, or transfer of
              Goods to a third country.
            </li>
            <li>
              The Customer must not use or permit the use of Goods in any
              application or jurisdiction prohibited by applicable export
              control or sanctions laws without the Vendor’s written consent.
            </li>
          </ul>
        </div>

        <div className="text-amBlue font-khula lg:pt-12 sm:pt-10 pt-6 sm:font-semibold">
          <h3 className="lg:text-3xl sm:text-2xl text-xl font-semibold tracking-wide lg:pb-10 sm:pb-8 pb-6">
            15. Governing Law & Dispute Resolution
          </h3>
          <ul className="space-y-4 list-disc pl-6">
            <li>
              These Terms and Conditions are governed by the laws of New South
              Wales, Australia.
            </li>
            <li>
              Any dispute will first be subject to good-faith negotiations
              between senior representatives of each party for a period of not
              less than 20 business days before any formal proceedings are
              commenced.
            </li>
            <li>
              If a dispute cannot be resolved by negotiation, it will be
              referred to binding arbitration or the courts of New South Wales,
              at the election of the party initiating formal proceedings.
            </li>
          </ul>
        </div>

        <div className="text-amBlue font-khula lg:pt-12 sm:pt-10 pt-6 sm:font-semibold">
          <h3 className="lg:text-3xl sm:text-2xl text-xl font-semibold tracking-wide lg:pb-10 sm:pb-8 pb-6">
            16. Amendments & Entire Agreement
          </h3>
          <ul className="space-y-4 list-disc pl-6">
            <li>
              The Vendor may update these Terms and Conditions from time to
              time. The version current at the date an Order is accepted by the
              Vendor applies to that Order.
            </li>
            <li>
              The current version will be published on the Vendor’s website at
              www.ampec.com.au.
            </li>
            <li>
              These Terms and Conditions, together with any written quotation
              and Order confirmation, constitute the entire agreement between
              the parties with respect to the Goods and Services supplied and
              supersede all prior representations, negotiations, or agreements.
            </li>
          </ul>
        </div>

        <div className="text-amBlue font-khula lg:pt-12 sm:pt-10 pt-6 sm:font-semibold">
          <h3 className="lg:text-3xl sm:text-2xl text-xl font-semibold tracking-wide lg:pb-10 sm:pb-8 pb-6">
            Contact
          </h3>
          <div className="rounded-2xl border border-amBlue/15 bg-white shadow-sm overflow-hidden">
            <div className="overflow-hidden rounded-xl border border-amBlue/15 bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr]">
                {[
                  ["Company", "Ampec Technologies Pty Ltd"],
                  ["ABN", "17 654 380 239"],
                  [
                    "Address",
                    "Unit 1, 63–79 Parramatta Road, Silverwater NSW 2128",
                  ],
                  ["Website", "www.ampec.com.au"],
                  ["Email", "customerservice@ampec.com.au"],
                ].map(([label, value], index) => (
                  <div key={label} className="contents">
                    <div
                      className={`bg-[#f4f7fb] px-4 py-4 text-amBlue font-khula font-bold border-amBlue/10 ${
                        index !== 4 ? "sm:border-b border-b" : ""
                      }`}
                    >
                      {label}
                    </div>
                    <div
                      className={`px-4 py-4 text-amBlue font-khula border-amBlue/10 ${
                        index !== 4 ? "sm:border-b border-b" : ""
                      }`}
                    >
                      {label === "Website" ? (
                        <a
                          href="https://www.ampec.com.au"
                          target="_blank"
                          rel="noreferrer"
                          className="underline underline-offset-4 break-all"
                        >
                          {value}
                        </a>
                      ) : label === "Email" ? (
                        <a
                          href="mailto:customerservice@ampec.com.au"
                          className="underline underline-offset-4 break-all"
                        >
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;

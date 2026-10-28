const challengeCards = [
  {
    title: "End-Face Quality",
    body: "MIL-PRF-29504 termini require sub-micron ferrule concentricity and APC/PC polish geometry. A single contaminated end-face increases insertion loss by more than 3 dB — silently degrading system performance with no visible fault indication.",
  },
  {
    title: "Environmental Performance",
    body: "Tactical fibre cables operate from −40 to +85 °C under continuous vibration and repeated deployment cycles. Commercial patch cord construction fails in field conditions. Military tactical cable construction is mandatory — not optional.",
  },
  {
    title: "EMI Immunity — The Core Advantage",
    body: "The primary reason defence systems specify fibre over copper is complete EMI immunity. Any metallic strength member, grounding fault or conduction path in the loom defeats this advantage entirely. Fully dielectric construction must be verified.",
  },
  {
    title: "Class 3 Traceability",
    body: "ASDEFCON and AS9100D require full assembly traceability: cable lot numbers, operator records, OTDR test data and end-face inspection images. Every Ampec loom ships with a complete data pack — not a pass/fail stamp.",
  },
];

const specRows = [
  [
    "Fibre Type",
    "SM 9/125 OS2 or MM 50/125 OM4",
    "SM 9/125 OS2",
    "SM OS2 or PM fibre",
  ],
  [
    "Terminus Standard",
    "Commercial LC / SC crimp",
    "MIL-PRF-29504 in MIL-DTL-38999",
    "MIL-PRF-29504 QPL",
  ],
  ["Insertion Loss (typ.)", "< 0.5 dB", "< 0.3 dB", "< 0.2 dB"],
  ["Return Loss (min.)", "> 30 dB (UPC)", "> 45 dB (APC)", "> 55 dB (APC)"],
  ["Operating Temperature", "−20 to +70 °C", "−40 to +85 °C", "−55 to +125 °C"],
  ["Mechanical Mating Cycles", "500", "2,000", "5,000+"],
  [
    "Cable Construction",
    "Tactical flexible, PVC jacket",
    "MIL ruggedised, armoured",
    "MIL ruggedised, fully dielectric",
  ],
  [
    "Vibration Standard",
    "MIL-STD-810 Meth. 514",
    "MIL-STD-810G",
    "MIL-STD-810H",
  ],
  [
    "End-Face Inspection",
    "IEC 61300-3-35 Grade B",
    "IEC 61300-3-35 Grade A",
    "Grade A + interferometry",
  ],
];

const capabilities = [
  {
    num: "01",
    title: "End-Face Inspection Every Terminus",
    body: "Every end-face is inspected with a 400× video probe to IEC 61300-3-35 Grade A. Inspection images are archived to the assembly record. No loom ships with an unverified end-face.",
  },
  {
    num: "02",
    title: "OTDR-Verified Every Loom",
    body: "Each loom is tested on a calibrated single-mode OTDR. Insertion loss, return loss and event location are recorded in a full test data pack with NATA-traceable calibration references.",
  },
  {
    num: "03",
    title: "MIL-PRF-29504 Termination",
    body: "Precision and Ultra grades use MIL-PRF-29504 termini in MIL-DTL-38999 circular connectors. Epoxy-polish controlled to ±2 °C cure profile. Ferrule geometry verified by interferometry.",
  },
  {
    num: "04",
    title: "IPC/WHMA-A-620 Class 3",
    body: "All cable looms assembled and inspected to Class 3 — the highest workmanship tier. Certified inspectors sign off each assembly. Records retained per AS9100D requirements.",
  },
  {
    num: "05",
    title: "Tactical Cable Expertise",
    body: "Military tactical fibre cables use heavy Kevlar strength members, crush-resistant jackets and specialised strip and cleave requirements. Our team is trained on military cable types.",
  },
  {
    num: "06",
    title: "Australian Sovereign Manufacture",
    body: "Designed and assembled in Sydney, NSW. AS9100D certified. Meets ADF Sovereign Industrial Capability priorities, Commonwealth Procurement Rules and ASDEFCON contract standards.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Spec Review",
    body: "Fibre type, connector, grade, length and environment confirmed in writing.",
  },
  {
    num: "02",
    title: "Cable Selection",
    body: "Military tactical cable selected. Same reel lot for matched sets.",
  },
  {
    num: "03",
    title: "Terminate & Cure",
    body: "Termini fitted, epoxy cured, hand-polished to APC/PC geometry.",
  },
  {
    num: "04",
    title: "Inspect & Clean",
    body: "400× end-face inspection. Clean-inspect-clean until Grade A.",
  },
  {
    num: "05",
    title: "OTDR Test & Report",
    body: "Full OTDR trace, IL, RL. NATA-traceable test report issued.",
  },
];

const applicationCards = [
  {
    title: "Passive & Bistatic Radar",
    body: "Distributed sensor arrays require low-latency, high-bandwidth data links from each receive node to the central processor. Fully dielectric fibre eliminates ground loops and RF ingress that would corrupt the passive receiver chain.",
  },
  {
    title: "Electronic Warfare Systems",
    body: "EW platforms require fibre interconnects that maintain signal integrity in environments saturated with high-power RF. Metallic interconnects at these power levels risk signal contamination and equipment damage.",
  },
  {
    title: "Counter-UAS Systems",
    body: "Counter-drone arrays process multiple receive channels simultaneously. Fibre looms must match in length and loss to maintain timing integrity across all detection channels for reliable threat localisation.",
  },
  {
    title: "SATCOM Ground Terminals",
    body: "Tactical SATCOM terminals face rapid deployment, temperature extremes and field maintenance regimes — all demanding military-grade loom construction and full traceability documentation.",
  },
  {
    title: "Vehicle Platform Integration",
    body: "Vehicle-mounted sensor systems require looms rated for continuous vibration, temperature cycling and EMC compliance. Military tactical cable with armoured jacket and circular MIL connectors is the standard.",
  },
  {
    title: "Test & Laboratory Systems",
    body: "Multi-port test systems and antenna calibration rigs require phase- and loss-matched fibre sets to eliminate measurement artefacts. Traceable test data supplied with every loom.",
  },
];

const certs = [
  ["AS9100D", "Aerospace QMS Certified"],
  ["ISO 9001:2015", "Quality Management System"],
  ["NATA-Traceable", "ISO/IEC 17025 Cal References"],
  ["Australian Made", "Sovereign Supply Chain"],
  ["ASDEFCON", "Defence Contract Standards"],
];

const relatedCards = [
  {
    title: "Phase-Matched RF Cable Assemblies",
    body: "Precision phase-matched RF looms for phased-array radar, EW and SATCOM. ±1° tolerance to 40 GHz. 100% VNA verified. AS9100D.",
  },
  {
    title: "Cable Harness & Assembly",
    body: "Defence, industrial and commercial cable assemblies to IPC-A-620 Class 3. MIL-spec connectors. Complex multi-conductor looms.",
  },
  {
    title: "Box Build & System Assembly",
    body: "Complete electromechanical assembly from PCB through to integrated, tested system enclosures. Functional test under one roof.",
  },
];

const coverStats = [
  ["<0.5 dB", "Insertion Loss"],
  ["MIL-29504", "Terminus Spec"],
  ["AS9100D", "Certified QMS"],
  ["100%", "OTDR Inspected"],
];

function SectionHeader({ eyebrow, title, dark = false }) {
  return (
    <div
      className={`mb-4 border-l-4 px-4 py-3 ${
        dark
          ? "border-l-[#fccf1b] bg-[#093f68] text-white"
          : "border-l-[#fccf1b] bg-[#f8fafc] text-[#093f68]"
      }`}
    >
      <div
        className={`font-['Barlow_Condensed'] text-[10px] font-bold uppercase tracking-[1.5px] ${
          dark ? "text-[#fccf1b]" : "text-[#e0b700]"
        }`}
      >
        {eyebrow}
      </div>
      <h2 className="font-['Barlow'] text-[22px] font-bold leading-tight">
        {title}
      </h2>
    </div>
  );
}

function InfoCard({ title, body }) {
  return (
    <div className="border border-[#e3eaf0] border-t-2 border-t-[#093f68] bg-white px-4 py-3">
      <h3 className="mb-2 font-['Barlow'] text-[14px] font-bold text-[#093f68]">
        {title}
      </h3>
      <p className="text-[12px] leading-[1.5] text-[#093f68]">{body}</p>
    </div>
  );
}

function CapabilityCard({ num, title, body }) {
  return (
    <div className="border border-[#e3eaf0] border-t-2 border-t-[#fccf1b] bg-white px-4 py-3">
      <div className="mb-1 font-['Barlow'] text-[26px] font-extrabold leading-none text-[#fccf1b]">
        {num}
      </div>
      <h3 className="mb-1.5 font-['Barlow'] text-[13.5px] font-bold leading-[1.2] text-[#093f68]">
        {title}
      </h3>
      <p className="text-[11.5px] leading-[1.5] text-[#093f68]">{body}</p>
    </div>
  );
}

export default function FibreOpticLooms() {
  return (
    <div className="bg-white font-['Barlow'] text-[#093f68] antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&family=Barlow+Condensed:wght@400;600;700;800&display=swap');
        @page { size: A4; margin: 0; }
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print-break {
            page-break-after: always;
            break-after: page;
          }
          .avoid-break {
            page-break-inside: avoid;
            break-inside: avoid;
          }
        }
      `}</style>

      {/* Cover */}
      <section className="print-break relative grid min-h-screen grid-rows-[1fr_auto_auto] overflow-hidden bg-[#093f68] text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
        <svg
          className="pointer-events-none absolute right-[-180px] top-[34%] h-[560px] w-[560px] opacity-35"
          viewBox="0 0 700 700"
        >
          <circle
            cx="250"
            cy="350"
            r="260"
            fill="none"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="0.8"
          />
          <circle
            cx="250"
            cy="350"
            r="200"
            fill="none"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="0.8"
          />
          <circle
            cx="250"
            cy="350"
            r="140"
            fill="none"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="0.8"
          />
          <circle
            cx="250"
            cy="350"
            r="80"
            fill="none"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="0.8"
          />
          <line
            x1="250"
            y1="350"
            x2="600"
            y2="350"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="0.8"
          />
          <line
            x1="250"
            y1="350"
            x2="500"
            y2="550"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="0.8"
          />
        </svg>

        <div className="relative z-10 flex flex-col justify-center px-8 md:px-12">
          <div className="mb-6 h-1 w-12 bg-[#fccf1b]" />
          <h1 className="mb-5 font-['Barlow'] text-[clamp(38px,6vw,72px)] font-extrabold leading-[1.02] tracking-[-0.5px]">
            <span className="block text-white">MILITARY-GRADE</span>
            <span className="block text-[#fccf1b]">FIBRE OPTIC</span>
            <span className="block text-[#fccf1b]">LOOM ASSEMBLIES</span>
          </h1>
          <p className="max-w-[520px] text-[15px] leading-[1.6] text-white/85">
            Ruggedised MIL-spec fibre optic cable assemblies for passive radar,
            electronic warfare, counter-UAS and tactical communications.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-2 border-t border-white/12 px-6 py-4 md:grid-cols-4 md:px-10">
          {coverStats.map(([value, label], idx) => (
            <div
              key={label}
              className={`px-4 py-2 text-center ${idx < coverStats.length - 1 ? "md:border-r md:border-white/12" : ""}`}
            >
              <div className="font-['Barlow'] text-[24px] font-extrabold leading-none text-[#fccf1b]">
                {value}
              </div>
              <div className="mt-1 font-['Barlow_Condensed'] text-[10px] font-bold uppercase tracking-[1.5px] text-white/75">
                {label}
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 border-t border-white/10 px-6 py-3 text-center text-[11px] text-white/75 md:px-10">
          Ampec Technologies Pty Ltd · +61 2 9550 8388 · sales@ampec.com.au ·
          www.ampec.com.au
        </div>
      </section>

      {/* Page 2 */}
      <section className="print-break lg:my-52 md:my-32 my-20 bg-white px-6 py-6 md:px-12 md:py-6">
        <SectionHeader
          eyebrow="The Challenge"
          title="Why Military Fibre Optics Demands Specialist Assembly"
        />

        <p className="mb-4 max-w-[820px] text-[13px] leading-[1.6] text-[#093f68]">
          Defence fibre optic looms are not telecommunications patch cords. They
          operate under sustained mechanical shock, extreme temperature cycling
          and EMI-saturated environments. Every terminated end-face, every crimp
          and every strain relief must meet IPC/WHMA-A-620 Class 3 workmanship
          standards. A single failure is not a rework event — it is a mission
          failure.
        </p>

        <div className="mb-4 grid gap-3 md:grid-cols-2">
          {challengeCards.map((card) => (
            <div key={card.title} className="avoid-break">
              <InfoCard {...card} />
            </div>
          ))}
        </div>

        <div className="avoid-break border-l-4 border-l-[#fccf1b] bg-[#eef3f7] px-5 py-4">
          <p className="mb-1.5 text-[13px] italic leading-[1.55] text-[#093f68]">
            "In defence EW and passive radar, the fibre interconnect is as
            system-critical as the antenna. A compromised loom is a compromised
            capability."
          </p>
          <div className="text-[10.5px] font-medium text-[#5a7388]">
            — IPC/WHMA-A-620 Class 3 Assembly Standard
          </div>
        </div>
      </section>

      {/* Page 3 */}
      <section className="print-break lg:my-52 md:my-32 my-20 bg-white px-6 py-6 md:px-12 md:py-6">
        <SectionHeader
          eyebrow="Technical Primer"
          title="Understanding the OTDR Trace"
        />

        <div className="grid items-start gap-5 lg:grid-cols-2">
          <div className="avoid-break">
            <svg
              viewBox="0 0 480 240"
              className="w-full border border-[#e3eaf0] bg-white"
            >
              <line
                x1="45"
                y1="25"
                x2="45"
                y2="200"
                stroke="#5a7388"
                strokeWidth="0.8"
              />
              <line
                x1="45"
                y1="200"
                x2="465"
                y2="200"
                stroke="#5a7388"
                strokeWidth="0.8"
              />

              <line
                x1="45"
                y1="60"
                x2="465"
                y2="60"
                stroke="#e3eaf0"
                strokeWidth="0.6"
              />
              <line
                x1="45"
                y1="100"
                x2="465"
                y2="100"
                stroke="#e3eaf0"
                strokeWidth="0.6"
              />
              <line
                x1="45"
                y1="140"
                x2="465"
                y2="140"
                stroke="#e3eaf0"
                strokeWidth="0.6"
              />
              <line
                x1="45"
                y1="175"
                x2="465"
                y2="175"
                stroke="#e3eaf0"
                strokeWidth="0.6"
              />

              <text
                x="10"
                y="32"
                fill="#093f68"
                fontFamily="Barlow"
                fontWeight="600"
                fontSize="10"
              >
                dB
              </text>
              <text
                x="405"
                y="222"
                fill="#093f68"
                fontFamily="Barlow"
                fontWeight="600"
                fontSize="10"
              >
                length (m)
              </text>

              <path
                d="M45,38 L70,55 L90,56 L195,100 L195,90 L330,128 L430,150 L430,70 L460,72"
                stroke="#093f68"
                strokeWidth="2"
                fill="none"
              />

              <circle
                cx="195"
                cy="95"
                r="4"
                fill="#fccf1b"
                stroke="#093f68"
                strokeWidth="1"
              />
              <text
                x="135"
                y="82"
                fill="#093f68"
                fontFamily="Barlow"
                fontWeight="600"
                fontSize="10"
              >
                connector event
              </text>

              <circle
                cx="430"
                cy="110"
                r="4"
                fill="#fccf1b"
                stroke="#093f68"
                strokeWidth="1"
              />
              <text
                x="365"
                y="175"
                fill="#093f68"
                fontFamily="Barlow"
                fontWeight="600"
                fontSize="10"
              >
                end-face reflection
              </text>

              <text
                x="45"
                y="232"
                fill="#5a7388"
                fontFamily="Barlow"
                fontWeight="500"
                fontSize="9"
              >
                OTDR TRACE — SINGLE-MODE 1550 nm
              </text>
            </svg>

            <p className="mt-2 text-center text-[10.5px] text-[#5a7388]">
              Typical OTDR trace — launch pulse, linear fibre attenuation,
              connector event, clean end-face reflection.
            </p>
          </div>

          <div className="avoid-break">
            <p className="mb-3 text-[12.5px] leading-[1.6] text-[#093f68]">
              Every finished loom is characterised on a NATA-calibrated
              single-mode OTDR. The trace reveals attenuation, splice and
              connector events, end-face reflection and cable length — in a
              single measurement. Unlike a pass/fail insertion loss test, the
              OTDR trace is the definitive record that every element of the loom
              is sound.
            </p>

            <p className="mb-3 text-[12.5px] leading-[1.6] text-[#093f68]">
              Ampec archives the raw OTDR data, 400× end-face inspection images,
              and the operator traveller against the loom serial number. Every
              loom ships with a full data pack designed to meet ASDEFCON and
              defence quality system requirements — no additional documentation
              effort required by the buying authority.
            </p>

            <div className="mt-3 grid border border-[#e3eaf0] md:grid-cols-[1.2fr_1fr]">
              <div className="bg-[#093f68] px-4 py-3 font-mono text-[11px] leading-[1.7] text-[#fccf1b]">
                IL (dB) = 10·log(Pout/Pin)
                <br />
                <br />
                RL (dB) = −10·log(Pref/Pin)
              </div>
              <div className="bg-[#062d4a] px-4 py-3 font-mono text-[10.5px] leading-[1.6] text-white/85">
                IL = insertion loss
                <br />
                RL = return loss
                <br />
                Both measured
                <br />
                against NATA cal
                <br />
                references
              </div>
            </div>

            <div className="mt-4">
              <div className="mb-2 font-['Barlow_Condensed'] text-[10px] font-bold uppercase tracking-[1.5px] text-[#e0b700]">
                What Ships With Every Loom
              </div>
              <ul className="space-y-1 text-[12px] leading-[1.65] text-[#093f68]">
                <li>● OTDR trace (raw + PDF)</li>
                <li>● Insertion loss &amp; return loss measurements</li>
                <li>● End-face inspection images per terminus</li>
                <li>● Cable lot and operator traveller</li>
                <li>● NATA calibration reference certificates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Page 4 */}
      <section className="print-break lg:my-52 md:my-32 my-20 bg-white px-6 py-6 md:px-12 md:py-6">
        <SectionHeader
          eyebrow="Product Data"
          title="Standard Specification Range"
        />

        <p className="mb-4 max-w-[820px] text-[13px] leading-[1.6] text-[#093f68]">
          Three performance grades to match application requirements. Custom
          specifications including non-standard lengths, military connector
          types and specialist termini available on request.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse border border-[#e3eaf0] text-[12px]">
            <thead>
              <tr className="bg-[#093f68] text-white">
                <th className="px-3 py-2 text-left font-['Barlow'] text-[12px] font-bold">
                  Parameter
                </th>
                <th className="px-3 py-2 text-left font-['Barlow'] text-[12px] font-bold">
                  Field Grade
                </th>
                <th className="px-3 py-2 text-left font-['Barlow'] text-[12px] font-bold">
                  Precision Grade
                </th>
                <th className="px-3 py-2 text-left font-['Barlow'] text-[12px] font-bold">
                  Ultra Grade
                </th>
              </tr>
            </thead>
            <tbody>
              {specRows.map((row, idx) => (
                <tr
                  key={row[0]}
                  className={`border-b border-[#e3eaf0] ${idx % 2 === 1 ? "bg-[#f8fafc]" : "bg-white"}`}
                >
                  <td className="px-3 py-2 font-semibold text-[#093f68]">
                    {row[0]}
                  </td>
                  <td className="px-3 py-2 text-[#093f68]">{row[1]}</td>
                  <td className="px-3 py-2 text-[#093f68]">{row[2]}</td>
                  <td className="px-3 py-2 text-[#093f68]">{row[3]}</td>
                </tr>
              ))}
              <tr className="border-b border-[#e3eaf0] bg-[#f8fafc]">
                <td className="px-3 py-2 font-semibold text-[#093f68]">
                  Test Documentation
                </td>
                <td className="px-3 py-2 font-bold text-[#e0b700]">
                  ✓ OTDR + IL
                </td>
                <td className="px-3 py-2 font-bold text-[#e0b700]">
                  ✓ OTDR + IL + RL
                </td>
                <td className="px-3 py-2 font-bold text-[#e0b700]">
                  ✓ Full S-params + thermal
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-3 py-2 font-semibold text-[#093f68]">
                  Measurement Traceability
                </td>
                <td className="px-3 py-2 font-bold text-[#e0b700]">
                  NATA-traceable
                </td>
                <td className="px-3 py-2 font-bold text-[#e0b700]">
                  NATA-traceable
                </td>
                <td className="px-3 py-2 font-bold text-[#e0b700]">
                  NATA-traceable
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Page 5 */}
      <section className="print-break lg:my-52 md:my-32 my-20 bg-white px-6 py-6 md:px-12 md:py-6">
        <SectionHeader eyebrow="Our Capability" title="What Sets Ampec Apart" />

        <div className="mb-5 grid gap-3 md:grid-cols-3">
          {capabilities.map((item) => (
            <div key={item.num} className="avoid-break">
              <CapabilityCard {...item} />
            </div>
          ))}
        </div>

        <SectionHeader
          eyebrow="Manufacturing Process"
          title="From Specification to Verified Delivery"
          dark
        />

        <div className="grid gap-3 md:grid-cols-5">
          {processSteps.map((step) => (
            <div key={step.num} className="avoid-break px-1 text-center">
              <div className="mx-auto mb-2 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#fccf1b] font-['Barlow'] text-[15px] font-extrabold text-[#093f68]">
                {step.num}
              </div>
              <div className="mb-1.5 font-['Barlow_Condensed'] text-[10.5px] font-bold uppercase tracking-[1px] text-[#093f68]">
                {step.title}
              </div>
              <p className="text-[11px] leading-[1.4] text-[#093f68]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Page 6 */}
      <section className="print-break lg:my-52 md:my-32 my-20 bg-white px-6 py-6 md:px-12 md:py-6">
        <SectionHeader
          eyebrow="Applications"
          title="Where Fibre Optic Looms Are Required"
        />

        <div className="mb-4 grid gap-3 md:grid-cols-2">
          {applicationCards.map((card) => (
            <div key={card.title} className="avoid-break">
              <InfoCard {...card} />
            </div>
          ))}
        </div>

        <div className="mb-4 grid grid-cols-2 border-y-[3px] border-y-[#fccf1b] bg-[#093f68] py-2 md:grid-cols-5">
          {certs.map(([title, sub], idx) => (
            <div
              key={title}
              className={`px-3 py-1.5 text-center ${idx < certs.length - 1 ? "md:border-r md:border-white/15" : ""}`}
            >
              <div className="font-['Barlow'] text-[11px] font-bold text-[#fccf1b]">
                {title}
              </div>
              <div className="text-[9.5px] leading-[1.3] text-white/82">
                {sub}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-3 text-center font-['Barlow_Condensed'] text-[10px] font-bold uppercase tracking-[2px] text-[#5a7388]">
          Also From Ampec Technologies
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {relatedCards.map((card) => (
            <div
              key={card.title}
              className="avoid-break bg-[#093f68] px-4 py-3 text-center text-white"
            >
              <h4 className="mb-2 font-['Barlow'] text-[13px] font-bold leading-[1.25] text-[#fccf1b]">
                {card.title}
              </h4>
              <p className="text-[11px] leading-[1.5] text-white/90">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Page 7 */}
      <section className="lg:mt-52 md:mt-32 mt-20 bg-white px-6 py-6 md:px-12 md:py-6">
        <div className="bg-[#fccf1b] px-5 py-5">
          <h2 className="mb-2 text-center font-['Barlow'] text-[24px] font-bold text-[#093f68]">
            Ready to Discuss Your Requirement?
          </h2>
          <p className="mx-auto mb-4 max-w-[640px] text-center text-[12.5px] leading-[1.55] text-[#093f68]">
            Ampec&apos;s engineering team is available to review your fibre
            optic loom specification — from a single pilot assembly through to
            volume production supply.
          </p>

          <div className="grid bg-white md:grid-cols-3">
            <div className="border-b border-[#e3eaf0] px-4 py-4 text-center md:border-b-0 md:border-r">
              <div className="mb-1 font-['Barlow_Condensed'] text-[10px] font-bold uppercase tracking-[1.5px] text-[#5a7388]">
                Phone
              </div>
              <div className="font-['Barlow'] text-[14px] font-bold text-[#093f68]">
                +61 2 9550 8388
              </div>
            </div>
            <div className="border-b border-[#e3eaf0] px-4 py-4 text-center md:border-b-0 md:border-r">
              <div className="mb-1 font-['Barlow_Condensed'] text-[10px] font-bold uppercase tracking-[1.5px] text-[#5a7388]">
                Email
              </div>
              <div className="font-['Barlow'] text-[14px] font-bold text-[#093f68]">
                sales@ampec.com.au
              </div>
            </div>
            <div className="px-4 py-4 text-center">
              <div className="mb-1 font-['Barlow_Condensed'] text-[10px] font-bold uppercase tracking-[1.5px] text-[#5a7388]">
                Web
              </div>
              <div className="font-['Barlow'] text-[14px] font-bold text-[#093f68]">
                www.ampec.com.au
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 text-center text-[10.5px] leading-[1.5] text-[#5a7388]">
          Sydney, NSW · Australian Owned &amp; Operated · AS9100D / ISO
          9001:2015 Certified · All specifications subject to confirmation · ©
          2026 Ampec Technologies Pty Ltd
        </div>
      </section>
    </div>
  );
}

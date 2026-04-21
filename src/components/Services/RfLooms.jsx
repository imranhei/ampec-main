const stats = [
  { value: "±1°", label: "Phase Tolerance Achievable" },
  { value: "40 GHz", label: "Maximum Test Frequency" },
  { value: "AS9100D", label: "Aerospace QMS Certified" },
  { value: "100%", label: "VNA Tested & Documented" },
];

const whyCards = [
  {
    title: "Phased Array Radar (AESA)",
    body: "Active electronically scanned arrays rely on precisely phased signals at every antenna element for beam steering. A phase error as small as 5° across a multi-element array shifts beam pointing, directly reducing detection range and fire control accuracy. Every element feed cable must be electrically matched.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 2 L20 6.5 L20 15.5 L11 20 L2 15.5 L2 6.5 Z"
          stroke="#093f68"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="11" cy="11" r="3" fill="#093f68" opacity="0.4" />
        <path
          d="M2 6.5 L20 15.5 M20 6.5 L2 15.5"
          stroke="#093f68"
          strokeWidth="0.5"
          opacity="0.3"
        />
      </svg>
    ),
  },
  {
    title: "Passive & Bistatic Radar",
    body: "Passive radar systems exploit ambient RF energy across multiple receive channels simultaneously. Coherent signal processing across all channels demands sub-degree phase consistency — mismatched cables directly corrupt target range, bearing and velocity estimates, undermining the core surveillance mission.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle
          cx="11"
          cy="11"
          r="9"
          stroke="#093f68"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="11"
          cy="11"
          r="5"
          stroke="#093f68"
          strokeWidth="0.5"
          fill="none"
          opacity="0.4"
        />
        <circle cx="11" cy="11" r="1.5" fill="#093f68" />
        <path
          d="M4 11 L18 11 M11 4 L11 18"
          stroke="#093f68"
          strokeWidth="0.5"
          opacity="0.3"
        />
      </svg>
    ),
  },
  {
    title: "Electronic Warfare Systems",
    body: "EW systems performing direction finding, jamming or signal exploitation require phase-coherent antenna arrays across wide frequency bands. Amplitude and phase imbalance from unmatched cables introduces false bearing errors and reduces jamming effectiveness — operationally unacceptable in contested environments.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect
          x="2"
          y="8"
          width="18"
          height="6"
          stroke="#093f68"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M5 8 Q8 5 11 8 Q14 11 17 8"
          stroke="#093f68"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="5" cy="8" r="1.2" fill="#093f68" opacity="0.6" />
        <circle cx="17" cy="8" r="1.2" fill="#ffd020" />
      </svg>
    ),
  },
  {
    title: "Satellite & SATCOM Ground Systems",
    body: "Phased array SATCOM terminals require precise phase matching across all radiating elements to maintain beam pointing toward moving LEO satellites. Phase-mismatched looms introduce pointing loss that degrades link margin and reduces effective throughput — critical for defence tactical communications.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <ellipse
          cx="11"
          cy="14"
          rx="8"
          ry="4"
          stroke="#093f68"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M3 14 Q11 4 19 14"
          stroke="#093f68"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="11" cy="14" r="1.5" fill="#ffd020" />
        <path
          d="M11 8 L11 2 M9 3 L11 2 L13 3"
          stroke="#093f68"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    ),
  },
];

const capabilities = [
  {
    num: "01",
    title: "VNA-Verified Every Assembly",
    body: "Every phase-matched set is measured on a calibrated Vector Network Analyser. S21 phase data is recorded across the specified frequency range and verified against the customer specification. No assembly ships without a documented pass.",
  },
  {
    num: "02",
    title: "NATA-Traceable Test Data",
    body: "All measurements are performed using NATA ISO/IEC 17025 accredited calibrated equipment. Calibration certificates are current and referenced in every test report — meeting defence quality system and ASDEFCON requirements.",
  },
  {
    num: "03",
    title: "Same-Lot Cable Matching",
    body: "All cables within a phase-matched set are sourced from the same manufacturer's reel and production lot. This controls velocity factor variation from the outset, improving consistency across batches and reducing trim iteration.",
  },
  {
    num: "04",
    title: "Iterative Trim-to-Tolerance",
    body: "Our precision trim-and-measure process uses calibrated VNA phase readings to determine exact trim increments, achieving tolerances as tight as ±1° at frequencies up to 40 GHz. Each trim cycle is documented for process control traceability.",
  },
  {
    num: "05",
    title: "Full Connector Range",
    body: "From standard SMA and N-type to precision 2.92mm and 3.5mm interfaces, all connectors are terminated with controlled torque, inspected with a connector gauge, and cleaned to IPC standards before measurement.",
  },
  {
    num: "06",
    title: "Australian Sovereign Manufacture",
    body: "Manufactured in Australia by Australians, AS9100D certified. Our capability supports the ADF's sovereign industrial priorities and meets Commonwealth Procurement Rules for Australian Industry Capability.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Spec Review",
    body: "Frequency range, phase tolerance, connector type, length, environment and quantity confirmed in writing with the customer.",
  },
  {
    num: "02",
    title: "Lot Selection",
    body: "Cable type and production lot selected. All cables in the set sourced from the same reel. Lot number recorded on job traveller.",
  },
  {
    num: "03",
    title: "Terminate & Measure",
    body: "Cables cut, connectors terminated and torqued. Initial S21 phase measurement taken on calibrated, warmed-up VNA.",
  },
  {
    num: "04",
    title: "Trim to Tolerance",
    body: "Long cables trimmed and re-measured iteratively until all cables in the set are within the specified phase window.",
  },
  {
    num: "05",
    title: "Final Test & Report",
    body: "Final verification, full test report generated, cables individually labelled, loom assembled and packed for delivery.",
  },
];

const applications = [
  {
    title: "Passive & Bistatic Radar",
    body: "Multi-channel passive radar systems require phase-coherent signal paths across all receive channels for accurate target localisation. Phase-matched looms connect the antenna array to the receiver subsystem with controlled electrical path length, enabling coherent signal processing.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="#093f68"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="12"
          cy="12"
          r="5"
          stroke="#093f68"
          strokeWidth="0.5"
          fill="none"
          opacity="0.5"
        />
        <circle cx="12" cy="12" r="1.5" fill="#093f68" />
        <line
          x1="3"
          y1="12"
          x2="21"
          y2="12"
          stroke="#093f68"
          strokeWidth="0.5"
          opacity="0.4"
        />
        <line
          x1="12"
          y1="3"
          x2="12"
          y2="21"
          stroke="#093f68"
          strokeWidth="0.5"
          opacity="0.4"
        />
      </svg>
    ),
  },
  {
    title: "Active Phased Array Radar (AESA)",
    body: "AESA radar systems use phase-matched looms from transmit/receive modules to antenna elements, and from subarray outputs to the signal processor. Phase consistency across the array directly determines detection range and angular resolution of the complete system.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect
          x="2"
          y="9"
          width="20"
          height="6"
          stroke="#093f68"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M5 9 L5 4 M9 9 L9 4 M13 9 L13 4 M17 9 L17 4 M21 9 L21 9"
          stroke="#093f68"
          strokeWidth="1"
          opacity="0.7"
        />
        <circle cx="5" cy="4" r="1.5" fill="#093f68" opacity="0.6" />
        <circle cx="9" cy="4" r="1.5" fill="#093f68" opacity="0.6" />
        <circle cx="13" cy="4" r="1.5" fill="#093f68" opacity="0.6" />
        <circle cx="17" cy="4" r="1.5" fill="#093f68" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: "Electronic Warfare Systems",
    body: "EW platforms require phase-matched wideband antenna interconnects for accurate direction finding, threat geolocation and effective jamming across broad frequency ranges. Australian sovereign EW manufacturers require locally supported, quality-assured supply chain partners.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 21 L4 7 L20 7 Z"
          stroke="#093f68"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M12 15 L8 7 L16 7 Z"
          stroke="#093f68"
          strokeWidth="0.5"
          fill="none"
          opacity="0.4"
        />
        <line
          x1="12"
          y1="21"
          x2="12"
          y2="23"
          stroke="#093f68"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "Counter-UAS & Drone Detection",
    body: "Counter-drone systems using RF antenna arrays for signal detection and geolocation require phase-matched looms to ensure spatial signal processing algorithms deliver accurate bearing and range data for threat neutralisation — critical in both military and homeland security applications.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M2 18 Q12 4 22 18"
          stroke="#093f68"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M6 16 Q12 8 18 16"
          stroke="#093f68"
          strokeWidth="0.5"
          fill="none"
          opacity="0.5"
        />
        <circle cx="12" cy="18" r="2" fill="#093f68" opacity="0.5" />
        <line
          x1="12"
          y1="20"
          x2="12"
          y2="22"
          stroke="#093f68"
          strokeWidth="1.5"
        />
        <line
          x1="10"
          y1="22"
          x2="14"
          y2="22"
          stroke="#093f68"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "Satellite Communications",
    body: "Phased array SATCOM ground terminals for LEO and GEO constellations require phase-coherent feed networks. Phase-matched looms from LNBs to the combiner network ensure maximum aperture efficiency and maintain link margin in demanding tactical environments.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <ellipse
          cx="12"
          cy="16"
          rx="8"
          ry="4"
          stroke="#093f68"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M4 16 Q12 5 20 16"
          stroke="#093f68"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="12" cy="16" r="1.5" fill="#ffd020" />
      </svg>
    ),
  },
  {
    title: "Test & Measurement Systems",
    body: "Multi-port VNA test setups, antenna range calibration systems, and multi-channel signal analysers all require phase-matched test cable sets to ensure measured results reflect the device under test — not cable phase mismatch. Ampec supplies matched test cable sets for lab and production environments.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          stroke="#093f68"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M7 9 L7 15 M11 7 L11 17 M15 9 L15 15 M19 9 L19 15"
          stroke="#093f68"
          strokeWidth="1"
          opacity="0.6"
        />
        <line
          x1="3"
          y1="12"
          x2="21"
          y2="12"
          stroke="#093f68"
          strokeWidth="0.5"
          opacity="0.3"
        />
      </svg>
    ),
  },
];

const certs = [
  {
    badge: (
      <>
        AS
        <br />
        9100D
      </>
    ),
    title: "AS9100D Certified",
    sub: "Aerospace Quality Management System",
  },
  {
    badge: (
      <>
        ISO
        <br />
        9001
      </>
    ),
    title: "ISO 9001:2015",
    sub: "Quality Management System",
  },
  {
    badge: (
      <>
        NATA
        <br />
        17025
      </>
    ),
    title: "NATA-Traceable",
    sub: "ISO/IEC 17025 Calibration References",
  },
  {
    badge: (
      <>
        AUS
        <br />
        MADE
      </>
    ),
    title: "Australian Manufactured",
    sub: "Sovereign Supply Chain Qualified",
  },
  {
    badge: (
      <>
        AS
        <br />
        DEF
      </>
    ),
    title: "ASDEFCON Compliant",
    sub: "Defence Contract Quality Standards",
  },
];

const specRows = [
  ["Frequency Range", "DC – 6", "DC – 18", "DC – 40", "GHz", true],
  ["Phase Matching Tolerance", "± 5", "± 3", "± 1", "degrees (relative)"],
  ["Impedance", "50", "50", "50", "Ohms"],
  ["Insertion Loss (typ. @ max freq.)", "< 1.5", "< 2.5", "< 4.0", "dB/m"],
  ["VSWR (max)", "1.35:1", "1.25:1", "1.20:1", "—"],
  ["Temperature Range", "-40 to +85", "-55 to +125", "-55 to +125", "°C"],
  ["Phase Stability vs Temp (typ.)", "± 15", "± 10", "± 5", "°/100°C"],
];

export default function RFLooms() {
  return (
    <div className="bg-white font-sans text-[#1a2332] leading-[1.6]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700;800&family=Open+Sans:wght@300;400;600&display=swap');

        .font-exo { font-family: 'Exo', sans-serif; }
        .font-open { font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif; }

        @keyframes radarPulse {
          0%   { opacity: 0; r: 20; }
          30%  { opacity: 1; }
          100% { opacity: 0; r: 200; }
        }

        .radar-circle {
          fill: none;
          stroke: white;
          stroke-width: 1;
          opacity: 0;
          animation: radarPulse 4s ease-in-out infinite;
        }

        .radar-circle:nth-child(1) { animation-delay: 0s; }
        .radar-circle:nth-child(2) { animation-delay: 1s; }
        .radar-circle:nth-child(3) { animation-delay: 2s; }
        .radar-circle:nth-child(4) { animation-delay: 3s; }
      `}</style>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#093f68_0%,#0d5490_60%,#1a6faa_100%)] px-5 py-20 text-white md:px-10">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <svg
          className="pointer-events-none absolute right-[5%] top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 opacity-[0.15] lg:block"
          viewBox="0 0 420 420"
        >
          <circle className="radar-circle" cx="210" cy="210" r="20" />
          <circle className="radar-circle" cx="210" cy="210" r="20" />
          <circle className="radar-circle" cx="210" cy="210" r="20" />
          <circle className="radar-circle" cx="210" cy="210" r="20" />
          <line
            x1="210"
            y1="10"
            x2="210"
            y2="410"
            stroke="white"
            strokeWidth="0.5"
            opacity="0.2"
          />
          <line
            x1="10"
            y1="210"
            x2="410"
            y2="210"
            stroke="white"
            strokeWidth="0.5"
            opacity="0.2"
          />
          <circle
            cx="210"
            cy="210"
            r="60"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            opacity="0.2"
          />
          <circle
            cx="210"
            cy="210"
            r="120"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            opacity="0.2"
          />
          <circle
            cx="210"
            cy="210"
            r="180"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            opacity="0.2"
          />
        </svg>

        <div className="relative z-[1] mx-auto max-w-[640px] pt-20">
          <div className="font-exo mb-4 flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[3px] text-[#ffd020]">
            <span className="inline-block h-[2px] w-8 bg-[#ffd020]" />
            Specialised Capability
          </div>

          <h1 className="font-exo mb-5 text-[clamp(36px,5vw,60px)] font-extrabold leading-[1.1] text-white">
            Phase-Matched
            <br />
            <span className="text-[#ffd020]">RF Cable Looms</span>
          </h1>

          <p className="mb-9 max-w-[560px] text-[17px] font-light leading-[1.7] text-[rgba(255,255,255,0.85)]">
            Precision RF cable assemblies manufactured and verified to the
            exacting phase tolerance requirements of phased-array radar,
            electronic warfare, passive surveillance and satellite
            communications systems. Designed, built and tested in Australia.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="font-exo inline-block cursor-pointer border-none bg-[#ffd020] px-8 py-[14px] text-[14px] font-bold tracking-[1px] text-[#093f68] transition hover:-translate-y-[1px] hover:bg-[#e6b800]"
            >
              Request a Quote
            </a>
            <a
              href="#specifications"
              className="font-exo inline-block border-2 border-[rgba(255,255,255,0.5)] bg-transparent px-8 py-[13px] text-[14px] font-semibold tracking-[1px] text-white transition hover:border-white"
            >
              View Specifications
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-2 border-t-[3px] border-t-[#ffd020] bg-[#093f68] md:grid-cols-4">
        {stats.map((item, idx) => (
          <div
            key={item.label}
            className={`px-8 py-6 text-center ${
              idx !== stats.length - 1
                ? "border-r border-r-[rgba(255,255,255,0.1)]"
                : ""
            }`}
          >
            <div className="font-exo mb-1 text-[36px] font-extrabold leading-none text-[#ffd020]">
              {item.value}
            </div>
            <div className="text-[12px] font-semibold uppercase tracking-[1px] text-[rgba(255,255,255,0.7)]">
              {item.label}
            </div>
          </div>
        ))}
      </section>

      {/* WHY PHASE MATCHING */}
      <section className="mx-auto max-w-[1100px] px-5 py-20 md:px-10">
        <div className="font-exo mb-3 flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[3px] text-[#e6b800]">
          <span className="inline-block h-[2px] w-6 bg-[#e6b800]" />
          The Challenge
        </div>

        <h2 className="font-exo mb-4 text-[clamp(28px,3.5vw,44px)] font-extrabold leading-[1.15] text-[#093f68]">
          Why Phase Matching <span className="text-[#e6b800]">Matters</span>
        </h2>

        <p className="mb-[52px] max-w-[680px] text-[17px] leading-[1.75] text-[#4a5568]">
          In phased-array and coherent multi-channel RF systems, every
          nanosecond of delay difference between signal paths corrupts beam
          pointing accuracy, degrades detection range and compromises system
          performance. Phase-matched cable looms are a system-critical
          requirement — not an option.
        </p>

        <div className="mb-[52px] grid grid-cols-1 gap-[2px] bg-[#e2e8f0] md:grid-cols-2">
          {whyCards.map((card) => (
            <div
              key={card.title}
              className="relative z-[1] bg-white border-t-[3px] border-t-transparent px-10 py-9 transition hover:border-t-[#ffd020] hover:shadow-[0_8px_32px_rgba(9,63,104,0.12)]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#dfeaef]">
                {card.icon}
              </div>
              <h3 className="font-exo mb-2.5 text-[18px] font-bold text-[#093f68]">
                {card.title}
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#4a5568]">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-2 border-l-4 border-l-[#e6b800] bg-[#dfeaef] px-7 py-5">
          <p className="mb-2.5 text-[16px] italic leading-[1.65] text-[#093f68]">
            "Phase errors between cables of only a few degrees cause the main
            lobe of a phased-array antenna to shift off boresight — directly
            impacting radar range, tracking accuracy and electronic warfare
            effectiveness."
          </p>
          <p className="text-[12px] font-semibold uppercase tracking-[1px] text-[#718096]">
            IEEE Antenna & Propagation — Industry Consensus
          </p>
        </div>
      </section>

      {/* PHASE DIAGRAM */}
      <section className="bg-[#dfeaef] px-5 py-20 md:px-10">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-[60px] lg:grid-cols-2">
          <div>
            <svg
              className="w-full"
              viewBox="0 0 480 220"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="wave1grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#093f68" stopOpacity="0" />
                  <stop offset="10%" stopColor="#093f68" stopOpacity="1" />
                  <stop offset="90%" stopColor="#093f68" stopOpacity="1" />
                  <stop offset="100%" stopColor="#093f68" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="wave2grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#ffd020" stopOpacity="0" />
                  <stop offset="10%" stopColor="#ffd020" stopOpacity="1" />
                  <stop offset="90%" stopColor="#ffd020" stopOpacity="1" />
                  <stop offset="100%" stopColor="#ffd020" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="wave3grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#2d7a47" stopOpacity="0" />
                  <stop offset="10%" stopColor="#2d7a47" stopOpacity="1" />
                  <stop offset="90%" stopColor="#2d7a47" stopOpacity="1" />
                  <stop offset="100%" stopColor="#2d7a47" stopOpacity="0" />
                </linearGradient>
              </defs>

              <rect width="480" height="220" fill="white" rx="2" />
              <rect width="480" height="220" fill="rgba(9,63,104,0.03)" />

              <line
                x1="40"
                y1="0"
                x2="40"
                y2="220"
                stroke="#e2e8f0"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="55"
                x2="480"
                y2="55"
                stroke="#e2e8f0"
                strokeWidth="0.5"
              />
              <line
                x1="0"
                y1="110"
                x2="480"
                y2="110"
                stroke="#e2e8f0"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="165"
                x2="480"
                y2="165"
                stroke="#e2e8f0"
                strokeWidth="0.5"
              />

              <text
                x="8"
                y="42"
                fill="#093f68"
                fontFamily="'Exo',sans-serif"
                fontSize="9"
                fontWeight="700"
                letterSpacing="1"
              >
                CH1
              </text>
              <text
                x="8"
                y="99"
                fill="#ffd020"
                fontFamily="'Exo',sans-serif"
                fontSize="9"
                fontWeight="700"
                letterSpacing="1"
              >
                CH2
              </text>
              <text
                x="8"
                y="153"
                fill="#2d7a47"
                fontFamily="'Exo',sans-serif"
                fontSize="9"
                fontWeight="700"
                letterSpacing="1"
              >
                CH3
              </text>

              <rect
                x="360"
                y="8"
                width="108"
                height="18"
                fill="rgba(9,63,104,0.08)"
                rx="2"
              />
              <text
                x="368"
                y="20"
                fill="#093f68"
                fontFamily="'Exo',sans-serif"
                fontSize="9"
                fontWeight="700"
                letterSpacing="1"
              >
                UNMATCHED
              </text>
              <rect
                x="360"
                y="62"
                width="108"
                height="18"
                fill="rgba(45,122,71,0.08)"
                rx="2"
              />
              <text
                x="368"
                y="74"
                fill="#2d7a47"
                fontFamily="'Exo',sans-serif"
                fontSize="9"
                fontWeight="700"
                letterSpacing="1"
              >
                MATCHED ✓
              </text>

              <path
                d="M40,32 C58,32 63,10 77,10 C91,10 96,54 110,54 C124,54 129,10 143,10 C157,10 162,54 176,54 C190,54 195,10 209,10 C223,10 228,54 242,54 C256,54 261,10 275,10 C289,10 294,54 308,54 C322,54 327,10 341,10 C355,10 360,54 374,54 C388,54 393,10 407,10 C421,10 426,54 440,54 C454,54 459,32 477,32"
                stroke="url(#wave1grad)"
                strokeWidth="2.5"
                fill="none"
              />

              <path
                d="M40,87 C52,87 60,65 74,65 C88,65 96,109 110,109 C124,109 132,65 146,65 C160,65 168,109 182,109 C196,109 204,65 218,65 C232,65 240,109 254,109 C268,109 276,65 290,65 C304,65 312,109 326,109 C340,109 348,65 362,65 C376,65 384,109 398,109 C412,109 420,87 440,87"
                stroke="url(#wave2grad)"
                strokeWidth="2.5"
                fill="none"
                strokeDasharray="6,3"
              />

              <path
                d="M40,143 C58,143 63,121 77,121 C91,121 96,165 110,165 C124,165 129,121 143,121 C157,121 162,165 176,165 C190,165 195,121 209,121 C223,121 228,165 242,165 C256,165 261,121 275,121 C289,121 294,165 308,165 C322,165 327,121 341,121 C355,121 360,165 374,165 C388,165 393,121 407,121 C421,121 426,165 440,165 C454,165 459,143 477,143"
                stroke="url(#wave3grad)"
                strokeWidth="2.5"
                fill="none"
              />

              <line
                x1="110"
                y1="54"
                x2="125"
                y2="65"
                stroke="#e6b800"
                strokeWidth="1"
                strokeDasharray="3,2"
              />
              <text
                x="127"
                y="63"
                fill="#e6b800"
                fontFamily="'Exo',sans-serif"
                fontSize="9"
                fontWeight="700"
              >
                Δφ error
              </text>

              <text
                x="40"
                y="210"
                fill="#718096"
                fontFamily="'Exo',sans-serif"
                fontSize="9"
              >
                5 kHz
              </text>
              <text
                x="390"
                y="210"
                fill="#718096"
                fontFamily="'Exo',sans-serif"
                fontSize="9"
              >
                20 GHz
              </text>
              <text
                x="180"
                y="210"
                fill="#718096"
                fontFamily="'Exo',sans-serif"
                fontSize="9"
              >
                Frequency →
              </text>
            </svg>

            <p className="mt-2 text-center text-[11px] italic text-[#718096]">
              CH1 &amp; CH3 phase-matched (solid). CH2 unmatched with phase
              error Δφ (dashed).
            </p>
          </div>

          <div>
            <div className="font-exo mb-3 flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[3px] text-[#e6b800]">
              <span className="inline-block h-[2px] w-6 bg-[#e6b800]" />
              Technical Primer
            </div>

            <h3 className="font-exo mb-[14px] text-[26px] font-bold text-[#093f68]">
              Understanding Phase Delay in RF Cables
            </h3>

            <p className="mb-[14px] text-[14px] leading-[1.75] text-[#4a5568]">
              Phase matching controls electrical length — not just physical
              length. Electrical length depends on physical length, the
              cable&apos;s dielectric constant, and temperature coefficient.
              Even cables of identical physical length from different production
              lots can have different electrical lengths.
            </p>

            <p className="mb-[14px] text-[14px] leading-[1.75] text-[#4a5568]">
              Ampec measures and trims each cable assembly using a calibrated
              VNA to achieve and verify the specified phase tolerance across the
              full defined frequency range before any loom leaves our facility.
            </p>

            <div className="my-5 border-l-4 border-l-[#ffd020] bg-[#093f68] px-6 py-[18px] text-white">
              <div className="mb-1.5 font-mono text-[14px] text-[#ffd020]">
                Δφ = 360 × f × ΔL / v_p
              </div>
              <div className="text-[12px] tracking-[0.5px] text-[rgba(255,255,255,0.7)]">
                f = frequency (Hz) · ΔL = path length difference (m) · v_p =
                propagation velocity
              </div>
            </div>

            <div className="my-5 border-l-4 border-l-[#ffd020] bg-[#093f68] px-6 py-[18px] text-white">
              <div className="mb-1.5 font-mono text-[14px] text-[#ffd020]">
                At 10 GHz: 1 mm path difference ≈ 12° phase error
              </div>
              <div className="text-[12px] tracking-[0.5px] text-[rgba(255,255,255,0.7)]">
                Dimensional precision is the foundation of phase matching
                quality
              </div>
            </div>

            <div className="mt-6">
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-[2px] text-[#718096]">
                Phase Tolerance vs Application
              </div>

              <div className="mb-[5px] flex justify-between text-[13px] font-semibold text-[#4a5568]">
                <span>Standard Production</span>
                <span className="text-[#093f68]">± 5°</span>
              </div>
              <div className="mb-[14px] h-2 overflow-hidden bg-[#e2e8f0]">
                <div className="h-full w-[40%] bg-[#093f68] transition-all duration-1000 ease-in-out" />
              </div>

              <div className="mb-[5px] flex justify-between text-[13px] font-semibold text-[#4a5568]">
                <span>Electronic Warfare</span>
                <span className="text-[#093f68]">± 3°</span>
              </div>
              <div className="mb-[14px] h-2 overflow-hidden bg-[#e2e8f0]">
                <div className="h-full w-[25%] bg-[#093f68] transition-all duration-1000 ease-in-out" />
              </div>

              <div className="mb-[5px] flex justify-between text-[13px] font-semibold text-[#4a5568]">
                <span>Phased Array Radar</span>
                <span className="text-[#e6b800]">± 1°</span>
              </div>
              <div className="mb-[14px] h-2 overflow-hidden bg-[#e2e8f0]">
                <div className="h-full w-[10%] bg-[#e6b800] transition-all duration-1000 ease-in-out" />
              </div>

              <p className="mt-1 text-[11px] text-[#718096]">
                Tighter tolerance → higher beam pointing accuracy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section id="specifications" className="bg-[#f8fafc] px-5 py-20 md:px-10">
        <div className="mx-auto max-w-[1100px]">
          <div className="font-exo mb-3 flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[3px] text-[#e6b800]">
            <span className="inline-block h-[2px] w-6 bg-[#e6b800]" />
            Product Data
          </div>

          <h2 className="font-exo mb-4 text-[clamp(28px,3.5vw,44px)] font-extrabold leading-[1.15] text-[#093f68]">
            Standard <span className="text-[#e6b800]">Specification Range</span>
          </h2>

          <p className="mb-12 max-w-[680px] text-[17px] leading-[1.75] text-[#4a5568]">
            Available in three performance grades to match your application
            requirements. Custom specifications including non-standard lengths,
            connector types and tighter tolerances are available on request.
          </p>

          <div className="mb-12 overflow-x-auto border border-[#e2e8f0] shadow-[0_2px_12px_rgba(9,63,104,0.08)]">
            <table className="w-full min-w-[900px] border-collapse bg-white text-[14px]">
              <thead>
                <tr className="bg-[#093f68]">
                  {[
                    "Parameter",
                    "Standard Grade",
                    "Precision Grade",
                    "Ultra Grade",
                    "Unit",
                  ].map((head, idx) => (
                    <th
                      key={head}
                      className={`font-exo px-5 py-[14px] text-left text-[12px] font-bold uppercase tracking-[1.5px] text-white ${
                        idx === 0 ? "border-l-4 border-l-[#ffd020]" : ""
                      }`}
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {specRows.map((row) => (
                  <tr
                    key={row[0]}
                    className={`border-b border-b-[#e2e8f0] transition ${
                      row[5]
                        ? "[&>td]:bg-[rgba(9,63,104,0.04)] hover:[&>td]:bg-[#dfeaef]"
                        : "hover:[&>td]:bg-[#dfeaef]"
                    }`}
                  >
                    <td className="font-exo px-5 py-[13px] text-[14px] font-semibold text-[#093f68] transition-colors">
                      {row[0]}
                    </td>
                    <td className="px-5 py-[13px] text-[13px] text-[#4a5568] transition-colors">
                      {row[1]}
                    </td>
                    <td className="px-5 py-[13px] text-[13px] text-[#4a5568] transition-colors">
                      {row[2]}
                    </td>
                    <td className="px-5 py-[13px] text-[13px] text-[#4a5568] transition-colors">
                      {row[3]}
                    </td>
                    <td className="px-5 py-[13px] text-[13px] text-[#4a5568] transition-colors">
                      {row[4]}
                    </td>
                  </tr>
                ))}

                <tr className="border-b border-b-[#e2e8f0] transition hover:[&>td]:bg-[#dfeaef]">
                  <td className="font-exo px-5 py-[13px] text-[14px] font-semibold text-[#093f68] transition-colors">
                    Connectors Available
                  </td>
                  <td
                    colSpan={3}
                    className="px-5 py-[13px] text-[13px] text-[#4a5568] transition-colors"
                  >
                    SMA · N-Type · TNC · BNC · SMA-RA · 3.5mm · 2.92mm (K) ·
                    Custom
                  </td>
                  <td className="px-5 py-[13px] text-[13px] text-[#4a5568] transition-colors">
                    —
                  </td>
                </tr>

                <tr className="border-b border-b-[#e2e8f0] transition hover:[&>td]:bg-[#dfeaef]">
                  <td className="font-exo px-5 py-[13px] text-[14px] font-semibold text-[#093f68] transition-colors">
                    Cable Types Available
                  </td>
                  <td
                    colSpan={3}
                    className="px-5 py-[13px] text-[13px] text-[#4a5568] transition-colors"
                  >
                    RG-316 · RG-402 Semi-rigid · LMR-195 · LMR-400 ·
                    Phase-stable specialist types · Custom
                  </td>
                  <td className="px-5 py-[13px] text-[13px] text-[#4a5568] transition-colors">
                    —
                  </td>
                </tr>

                <tr className="border-b border-b-[#e2e8f0] transition hover:[&>td]:bg-[#dfeaef]">
                  <td className="font-exo px-5 py-[13px] text-[14px] font-semibold text-[#093f68] transition-colors">
                    Length Range
                  </td>
                  <td className="px-5 py-[13px] text-[13px] text-[#4a5568] transition-colors">
                    100mm – 5m
                  </td>
                  <td className="px-5 py-[13px] text-[13px] text-[#4a5568] transition-colors">
                    100mm – 5m
                  </td>
                  <td className="px-5 py-[13px] text-[13px] text-[#4a5568] transition-colors">
                    100mm – 3m
                  </td>
                  <td className="px-5 py-[13px] text-[13px] text-[#4a5568] transition-colors">
                    —
                  </td>
                </tr>

                <tr className="border-b border-b-[#e2e8f0] transition hover:[&>td]:bg-[#dfeaef]">
                  <td className="font-exo px-5 py-[13px] text-[14px] font-semibold text-[#093f68] transition-colors">
                    Cables per Matched Set
                  </td>
                  <td className="px-5 py-[13px] text-[13px] text-[#4a5568] transition-colors">
                    2 – 16
                  </td>
                  <td className="px-5 py-[13px] text-[13px] text-[#4a5568] transition-colors">
                    2 – 16
                  </td>
                  <td className="px-5 py-[13px] text-[13px] text-[#4a5568] transition-colors">
                    2 – 8
                  </td>
                  <td className="px-5 py-[13px] text-[13px] text-[#4a5568] transition-colors">
                    cables
                  </td>
                </tr>

                <tr className="border-b border-b-[#e2e8f0] transition hover:[&>td]:bg-[#dfeaef]">
                  <td className="font-exo px-5 py-[13px] text-[14px] font-semibold text-[#093f68] transition-colors">
                    Test Documentation
                  </td>
                  <td className="px-5 py-[13px] text-[13px] font-bold text-[#2d7a47] transition-colors">
                    ✓ S21 Phase Report
                  </td>
                  <td className="px-5 py-[13px] text-[13px] font-bold text-[#2d7a47] transition-colors">
                    ✓ Full S-Parameters
                  </td>
                  <td className="px-5 py-[13px] text-[13px] font-bold text-[#2d7a47] transition-colors">
                    ✓ Full S-Params + Temp Data
                  </td>
                  <td className="px-5 py-[13px] text-[13px] text-[#4a5568] transition-colors">
                    —
                  </td>
                </tr>

                <tr className="transition hover:[&>td]:bg-[#dfeaef]">
                  <td className="font-exo px-5 py-[13px] text-[14px] font-semibold text-[#093f68] transition-colors">
                    Measurement Traceability
                  </td>
                  <td className="px-5 py-[13px] text-[13px] font-bold text-[#2d7a47] transition-colors">
                    NATA-traceable
                  </td>
                  <td className="px-5 py-[13px] text-[13px] font-bold text-[#2d7a47] transition-colors">
                    NATA-traceable
                  </td>
                  <td className="px-5 py-[13px] text-[13px] font-bold text-[#2d7a47] transition-colors">
                    NATA-traceable
                  </td>
                  <td className="px-5 py-[13px] text-[13px] text-[#4a5568] transition-colors">
                    —
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="mx-auto max-w-[1100px] px-5 py-20 md:px-10">
        <div className="font-exo mb-3 flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[3px] text-[#e6b800]">
          <span className="inline-block h-[2px] w-6 bg-[#e6b800]" />
          Our Capability
        </div>

        <h2 className="font-exo mb-4 text-[clamp(28px,3.5vw,44px)] font-extrabold leading-[1.15] text-[#093f68]">
          What Sets <span className="text-[#e6b800]">Ampec Apart</span>
        </h2>

        <p className="mb-[52px] max-w-[680px] text-[17px] leading-[1.75] text-[#4a5568]">
          Decades of precision cable assembly manufacturing in Australia, now
          delivering verified phase-matched RF looms to the nation&apos;s
          sovereign defence supply chain.
        </p>

        <div className="mb-[52px] grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item) => (
            <div
              key={item.num}
              className="border border-[#e2e8f0] border-t-[3px] border-t-[#093f68] bg-white p-7 shadow-[0_2px_12px_rgba(9,63,104,0.08)] transition hover:border-t-[#e6b800] hover:shadow-[0_8px_32px_rgba(9,63,104,0.12)]"
            >
              <div className="font-exo mb-2.5 text-[42px] font-extrabold leading-none text-[#dfeaef]">
                {item.num}
              </div>
              <h3 className="font-exo mb-2 text-[16px] font-bold text-[#093f68]">
                {item.title}
              </h3>
              <p className="text-[13px] leading-[1.65] text-[#4a5568]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#093f68] px-5 py-20 text-white md:px-10">
        <div className="mx-auto max-w-[1100px]">
          <div className="font-exo mb-3 flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[3px] text-[#ffd020]">
            <span className="inline-block h-[2px] w-6 bg-[#ffd020]" />
            Manufacturing Process
          </div>

          <h2 className="font-exo mb-4 text-[clamp(28px,3.5vw,44px)] font-extrabold leading-[1.15] text-white">
            From Specification{" "}
            <span className="text-[#ffd020]">to Verified Delivery</span>
          </h2>

          <p className="mb-[52px] max-w-[680px] text-[17px] leading-[1.75] text-[rgba(255,255,255,0.75)]">
            A rigorous, documented five-stage process ensures every
            phase-matched loom set meets your specification before it leaves our
            facility.
          </p>

          <div className="relative mt-[52px] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            <div className="absolute left-[10%] right-[10%] top-[30px] hidden h-[2px] bg-[rgba(255,208,32,0.3)] lg:block" />

            {processSteps.map((step) => (
              <div key={step.num} className="px-3 text-center">
                <div className="font-exo relative z-[1] mx-auto mb-5 flex h-[60px] w-[60px] items-center justify-center bg-[#ffd020] text-[22px] font-extrabold text-[#093f68]">
                  {step.num}
                </div>
                <div className="font-exo mb-2 text-[13px] font-bold uppercase tracking-[0.5px] text-[#ffd020]">
                  {step.title}
                </div>
                <div className="text-[12px] leading-[1.5] text-[rgba(255,255,255,0.7)]">
                  {step.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-[#f8fafc] px-5 py-20 md:px-10">
        <div className="mx-auto max-w-[1100px]">
          <div className="font-exo mb-3 flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[3px] text-[#e6b800]">
            <span className="inline-block h-[2px] w-6 bg-[#e6b800]" />
            Applications
          </div>

          <h2 className="font-exo mb-4 text-[clamp(28px,3.5vw,44px)] font-extrabold leading-[1.15] text-[#093f68]">
            Where Phase-Matched{" "}
            <span className="text-[#e6b800]">RF Looms Are Required</span>
          </h2>

          <p className="mb-[52px] max-w-[680px] text-[17px] leading-[1.75] text-[#4a5568]">
            Phase-matched RF cable assemblies are a critical component across
            the full spectrum of Australian defence and advanced technology
            programs.
          </p>

          <div className="mb-[52px] grid grid-cols-1 gap-5 lg:grid-cols-2">
            {applications.map((app) => (
              <div
                key={app.title}
                className="flex gap-5 border border-[#e2e8f0] border-l-4 border-l-[#dfeaef] bg-white p-7 shadow-[0_2px_12px_rgba(9,63,104,0.08)] transition hover:border-l-[#e6b800] hover:shadow-[0_8px_32px_rgba(9,63,104,0.12)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[4px] bg-[#dfeaef]">
                  {app.icon}
                </div>
                <div>
                  <h3 className="font-exo mb-1.5 text-[17px] font-bold text-[#093f68]">
                    {app.title}
                  </h3>
                  <p className="text-[13px] leading-[1.65] text-[#4a5568]">
                    {app.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="border-y-[3px] border-y-[#ffd020] bg-[#dfeaef] px-5 py-9 md:px-10">
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-around gap-6">
          {certs.map((cert) => (
            <div key={cert.title} className="flex items-center gap-[14px]">
              <div className="font-exo flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#093f68] text-center text-[10px] font-bold leading-[1.2] tracking-[0.5px] text-white">
                {cert.badge}
              </div>
              <div>
                <div className="font-exo text-[15px] font-bold text-[#093f68]">
                  {cert.title}
                </div>
                <div className="text-[12px] text-[#4a5568]">{cert.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#ffd020] px-5 py-[72px] text-center md:px-10">
        <div className="mx-auto max-w-[700px]">
          <h2 className="font-exo mb-4 text-[clamp(28px,4vw,46px)] font-extrabold leading-[1.15] text-[#093f68]">
            Ready to Discuss Your Requirement?
          </h2>

          <p className="mb-9 text-[16px] leading-[1.7] text-[rgba(9,63,104,0.8)]">
            Ampec&apos;s engineering team is available to review your
            phase-matching specification and provide a rapid quotation — from a
            pilot set of four cables through to volume production runs.
          </p>

          <div className="mb-9 grid grid-cols-1 gap-3 md:grid-cols-3">
            <div className="rounded-[2px] bg-white p-5">
              <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-[#718096]">
                Call Us
              </div>
              <div className="font-exo text-[15px] font-bold text-[#093f68]">
                +61 2 9550 8388
              </div>
            </div>
            <div className="rounded-[2px] bg-white p-5">
              <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-[#718096]">
                Email
              </div>
              <div className="font-exo text-[15px] font-bold text-[#093f68]">
                sales@ampec.com.au
              </div>
            </div>
            <div className="rounded-[2px] bg-white p-5">
              <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-[#718096]">
                Web
              </div>
              <div className="font-exo text-[15px] font-bold text-[#093f68]">
                www.ampec.com.au
              </div>
            </div>
          </div>

          <a
            href="/contact-us"
            className="font-exo inline-block bg-[#093f68] px-10 py-4 text-[14px] font-bold tracking-[1px] text-white transition hover:bg-[#0d5490]"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}

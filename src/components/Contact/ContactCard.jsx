import { useState } from "react";

import { ArrowUpRight, Globe2, Mail, MapPin, Phone } from "lucide-react";

const COMPANY = {
  name: "Ampec Technologies Pty Ltd",
  displayName: "AMPEC Technologies",
  phone: "+61287415000",
  phoneDisplay: "+612 8741 5000",
  email: "sales@ampec.com.au",
  website: "https://ampec.com.au",
  street: "Unit 1, 63-79 Parramatta Road",
  city: "Silverwater",
  state: "NSW",
  postcode: "2128",
  country: "Australia",
  logo: "/ampec_logo.jpg",
};

const ADDRESS = [
  COMPANY.street,
  `${COMPANY.city} ${COMPANY.state} ${COMPANY.postcode}`,
  COMPANY.country,
].join(", ");

const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${COMPANY.name}, ${ADDRESS}`,
)}`;

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1656.8753930164162!2d151.041056049308!3d-33.844537048338765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a35361e85ffb%3A0xe93545b983760c4!2sAmpec%20Technologies!5e0!3m2!1sen!2sus!4v1698123230901!5m2!1sen!2sus";

// Escape special characters for the vCard format.
function escapeVCard(value) {
  return String(value || "")
    .replace(/\\/g, "\\\\")
    .replace(/\r?\n/g, "\\n")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,");
}

function buildVCard() {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${escapeVCard(COMPANY.name)}`,
    `ORG:${escapeVCard(COMPANY.name)}`,
    `TEL;TYPE=WORK,VOICE:${COMPANY.phone}`,
  ];

  if (COMPANY.email) {
    lines.push(`EMAIL;TYPE=WORK,INTERNET:${COMPANY.email}`);
  }

  lines.push(
    `URL:${COMPANY.website}`,
    `ADR;TYPE=WORK:;;${escapeVCard(COMPANY.street)};${escapeVCard(
      COMPANY.city,
    )};${escapeVCard(COMPANY.state)};${escapeVCard(
      COMPANY.postcode,
    )};${escapeVCard(COMPANY.country)}`,
    "END:VCARD",
  );

  // Fold long vCard lines using CRLF.
  const encoder = new TextEncoder();

  const foldedLines = lines.map((line) => {
    const characters = Array.from(line);
    const result = [];

    let current = "";
    let bytes = 0;

    for (const character of characters) {
      const size = encoder.encode(character).length;
      const limit = result.length ? 74 : 75;

      if (bytes + size > limit) {
        result.push(current);
        current = " ";
        bytes = 1;
      }

      current += character;
      bytes += size;
    }

    result.push(current);

    return result.join("\r\n");
  });

  return foldedLines.join("\r\n") + "\r\n";
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  external = false,
}) {
  return (
    <div className="flex w-full min-w-0 items-center gap-4 py-5">
      {/* Icon */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amBlue/5 text-amBlue sm:h-14 sm:w-14">
        <Icon size={22} strokeWidth={1.8} />
      </div>

      {/* Contact details */}
      <div className="min-w-0 flex-1">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
          {label}
        </p>

        {href ? (
          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="relative inline-flex max-w-full cursor-pointer items-start gap-2 text-sm font-semibold leading-relaxed text-slate-800 transition-colors hover:text-amBlue [overflow-wrap:anywhere] sm:text-base"
          >
            <span className="min-w-0 break-words">
              {value}
            </span>

            <ArrowUpRight
              size={18}
              className="mt-0.5 shrink-0"
            />
          </a>
        ) : (
          <p className="break-words text-sm font-semibold leading-relaxed text-slate-800 sm:text-base">
            {value}
          </p>
        )}
      </div>
    </div>
  );
}

export default function ContactCard() {
  const [saved, setSaved] = useState(false);

  const handleSaveContact = () => {
    const vCard = buildVCard();

    const blob = new Blob([vCard], {
      type: "text/vcard;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = "AMPEC-Contact.vcf";

    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    window.setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 1000);

    setSaved(true);

    window.setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return (
    <main className="relative isolate min-h-screen w-full min-w-0 max-w-full overflow-x-hidden bg-[#f4f7fb] font-khula">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-amBlue">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20" />

        <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full border-[50px] border-white/5" />

        <div className="pointer-events-none absolute -left-36 top-40 h-80 w-80 rounded-full border-[55px] border-white/5" />
      </div>

      <div className="relative z-20 mx-auto w-full min-w-0 max-w-3xl px-4 pb-16 pt-10 sm:px-6 sm:pt-16">
        {/* Main Card */}
        <div className="relative w-full min-w-0 overflow-hidden rounded-3xl bg-white shadow-[0_20px_70px_rgba(15,43,77,0.12)]">
          {/* Header */}
          <section className="relative overflow-hidden bg-white px-5 pb-9 pt-10 text-center sm:px-10 sm:pb-12 sm:pt-12">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-amYellow" />

            {/* Logo */}
            <div className="mx-auto mb-7 flex w-fit max-w-full items-center justify-center">
              <img
                src={COMPANY.logo}
                alt="AMPEC Technologies Logo"
                className="h-12 w-auto max-w-[120px] object-contain sm:h-16"
              />
            </div>

            <h1 className="break-words text-2xl font-bold tracking-tight text-amBlue sm:text-3xl">
              {COMPANY.displayName}
            </h1>
          </section>

          <div className="mx-5 h-px bg-slate-100 sm:mx-10" />

          {/* Contact Information */}
          <section className="relative w-full min-w-0 px-5 py-8 sm:px-10 sm:py-10">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-7 w-1 shrink-0 rounded-full bg-amYellow" />

              <h2 className="text-xl font-bold text-amBlue">
                Contact Information
              </h2>
            </div>

            <div className="divide-y divide-slate-100">
              <ContactRow
                icon={Phone}
                label="Phone"
                value={COMPANY.phoneDisplay}
                href={`tel:${COMPANY.phone}`}
              />

              <ContactRow
                icon={Mail}
                label="Email"
                value={COMPANY.email}
                href={`mailto:${COMPANY.email}`}
              />

              <ContactRow
                icon={Globe2}
                label="Website"
                value="www.ampec.com.au"
                href={COMPANY.website}
                external
              />

              <ContactRow
                icon={MapPin}
                label="Office Address"
                value={
                  <>
                    {COMPANY.street}
                    <br />
                    {COMPANY.city} {COMPANY.state} {COMPANY.postcode}
                    <br />
                    {COMPANY.country}
                  </>
                }
                href={MAP_URL}
                external
              />
            </div>

          </section>

          {/* Location */}
          <section className="relative w-full min-w-0 bg-slate-50 px-5 py-8 sm:px-10 sm:py-10">
            <div className="mb-5 flex min-w-0 items-center justify-between gap-3">
              <h2 className="text-xl font-bold text-amBlue">Find Us</h2>

              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-20 inline-flex shrink-0 cursor-pointer items-center gap-1 text-xs font-bold text-amBlue hover:underline sm:text-sm"
              >
                Open Maps
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="relative w-full min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <iframe
                src={MAP_EMBED_URL}
                title="AMPEC Technologies Office Location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="block h-[260px] w-full max-w-full border-0 sm:h-[330px]"
              />
            </div>
          </section>
        </div>

        <p className="mt-6 px-2 text-center text-xs text-white/70">
          © {new Date().getFullYear()} AMPEC Technologies Pty Ltd. All rights
          reserved.
        </p>
      </div>
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";
import { company, contact, locations } from "@/lib/site";

const siteMapSections = [
  {
    titleEn: "SERVICE",
    titleJa: "事業内容",
    links: [
      { label: "ツナゲル", href: "/service" },
      { label: "カツヤク", href: "/service" },
      { label: "月刊Sing", href: "/service" },
      { label: "バツグン", href: "/service" },
      { label: "各種制作", href: "/service" },
    ],
  },
  {
    titleEn: "MESSAGE",
    titleJa: "代表挨拶",
    links: [],
    href: "/message",
  },
  {
    titleEn: "COMPANY",
    titleJa: "会社案内",
    links: [],
    href: "/company",
  },
  {
    titleEn: "NEWS",
    titleJa: "新着情報",
    links: [],
    href: "/news",
  },
  {
    titleEn: "RECRUIT",
    titleJa: "採用情報",
    links: [],
    href: "/recruit",
  },
];

export default function Footer() {
  const hq = locations.headquarters;

  return (
    <footer className="bg-[#1e1e1e] text-white">
      <div className="mx-auto px-5 lg:px-10" style={{ maxWidth: "1200px" }}>
        {/* Top area: Company info + CTA cards */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 pt-16 lg:pt-20 pb-14">
          {/* Left: Logo + Company Info */}
          <div className="lg:w-[30%]">
            <Link
              href="/"
              className="inline-block font-bold text-[28px] text-white mb-4"
              style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
            >
              Sing
            </Link>
            <div className="text-[12px] text-white/50 leading-[1.8] mb-3">
              {hq.zipCode && hq.address && (
                <p>
                  〒{hq.zipCode}
                  <br />
                  {hq.address}
                </p>
              )}
            </div>
            {contact.phone && (
              <p className="text-[12px] text-white/50 mb-1">
                TEL: {contact.phoneFormatted || contact.phone}
              </p>
            )}
            {contact.email && (
              <p className="text-[12px] text-white/50">
                MAIL: {contact.email}
              </p>
            )}
          </div>

          {/* Right: CTA cards */}
          <div className="lg:w-[70%] grid grid-cols-2 gap-4">
            {/* Company card */}
            <Link
              href="/service"
              className="group relative rounded-lg overflow-hidden flex items-center justify-center"
              style={{ aspectRatio: "16/9" }}
            >
              <Image
                src="/images/footer-company.jpg"
                alt="事業内容"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
              <div className="relative z-10 text-center">
                <p
                  className="text-white font-bold mb-1"
                  style={{
                    fontSize: "clamp(18px, 2.5vw, 24px)",
                    fontFamily: "'Anton', sans-serif",
                    letterSpacing: "0.05em",
                  }}
                >
                  COMPANY
                </p>
                <p className="text-white/70 text-[12px]">事業内容</p>
                <span
                  className="inline-flex items-center justify-center rounded-full border border-white/50 mt-3 group-hover:border-white transition-colors"
                  style={{ width: "36px", height: "36px" }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="1.5">
                    <path d="M5 2L10 7L5 12" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Contact card */}
            <Link
              href="/contact"
              className="group relative rounded-lg overflow-hidden flex items-center justify-center"
              style={{ aspectRatio: "16/9" }}
            >
              <Image
                src="/images/footer-contact.jpg"
                alt="お問い合わせ"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
              <div className="relative z-10 text-center">
                <p
                  className="text-white font-bold mb-1"
                  style={{
                    fontSize: "clamp(18px, 2.5vw, 24px)",
                    fontFamily: "'Anton', sans-serif",
                    letterSpacing: "0.05em",
                  }}
                >
                  CONTACT
                </p>
                <p className="text-white/70 text-[12px]">お問い合わせ</p>
                <span
                  className="inline-flex items-center justify-center rounded-full border border-white/50 mt-3 group-hover:border-white transition-colors"
                  style={{ width: "36px", height: "36px" }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="1.5">
                    <path d="M5 2L10 7L5 12" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Sitemap navigation */}
        <div className="py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {siteMapSections.map((section) => (
              <div key={section.titleEn}>
                {section.href ? (
                  <Link href={section.href} className="group inline-flex items-baseline gap-2 mb-3">
                    <span
                      className="font-bold text-white group-hover:text-white/80 transition-colors"
                      style={{
                        fontSize: "16px",
                        fontFamily: "'Anton', sans-serif",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {section.titleEn}
                    </span>
                    <span className="text-white/50 text-[11px]">{section.titleJa}</span>
                  </Link>
                ) : (
                  <div className="inline-flex items-baseline gap-2 mb-3">
                    <span
                      className="font-bold text-white"
                      style={{
                        fontSize: "16px",
                        fontFamily: "'Anton', sans-serif",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {section.titleEn}
                    </span>
                    <span className="text-white/50 text-[11px]">{section.titleJa}</span>
                  </div>
                )}
                {section.links.length > 0 && (
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {section.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="text-[12px] text-white/40 hover:text-white/70 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-6 text-center">
          <p className="text-[11px] text-white/25" style={{ fontFamily: "Inter, sans-serif" }}>
            &copy; {company.established ? company.established.replace("年", "") : "2024"} {company.nameEn || "Sing Inc."}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

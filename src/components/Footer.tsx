import Link from "next/link";
import Image from "next/image";
import { company, contact, locations } from "@/lib/site";

const siteMapSections = [
  {
    titleEn: "SERVICE",
    titleJa: "事業内容",
    links: [
      { label: "ツナゲル", href: "/service#service-01" },
      { label: "カツヤク", href: "/service#service-02" },
      { label: "Singメディア", href: "/service#service-03" },
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
    <footer className="relative z-10 bg-[#1e1e1e] text-white">
      <div className="mx-auto px-5 lg:px-10" style={{ maxWidth: "1200px" }}>
        {/* Top area: Company info + CTA cards */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 pt-16 lg:pt-20 pb-14">
          {/* Left: Logo + Company Info */}
          <div className="lg:w-[30%]">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.jpg"
                alt="株式会社Sing"
                width={140}
                height={56}
                className="h-14 w-auto object-contain"
              />
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
              style={{ width: "486px", height: "320px", maxWidth: "100%" }}
            >
              <Image
                src="/images/footer-company.jpg"
                alt="事業内容"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
              {/* Hover overlay - red slide from left */}
              <div
                className="absolute inset-0 z-[1] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"
                style={{
                  background: "linear-gradient(135deg, #8B0000 0%, #C84B2F 40%, #D4553A 70%, #B22222 100%)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                  <span
                    style={{
                      fontFamily: "'Anton', sans-serif",
                      fontSize: "clamp(80px, 12vw, 140px)",
                      color: "rgba(255,255,255,0.06)",
                      letterSpacing: "0.05em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    COMPANY
                  </span>
                </div>
              </div>
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
                <p className="text-white/70 text-[12px] group-hover:text-white/90 transition-colors duration-500">事業内容</p>
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
              style={{ width: "486px", height: "320px", maxWidth: "100%" }}
            >
              <Image
                src="/images/footer-contact.jpg"
                alt="お問い合わせ"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
              {/* Hover overlay - red slide from left */}
              <div
                className="absolute inset-0 z-[1] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"
                style={{
                  background: "linear-gradient(135deg, #8B0000 0%, #C84B2F 40%, #D4553A 70%, #B22222 100%)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                  <span
                    style={{
                      fontFamily: "'Anton', sans-serif",
                      fontSize: "clamp(80px, 12vw, 140px)",
                      color: "rgba(255,255,255,0.06)",
                      letterSpacing: "0.05em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    CONTACT
                  </span>
                </div>
              </div>
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
                <p className="text-white/70 text-[12px] group-hover:text-white/90 transition-colors duration-500">お問い合わせ</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {siteMapSections.map((section) => (
              <div
                key={section.titleEn}
                className="border-b border-white/10 py-6"
              >
                {section.href ? (
                  <Link href={section.href} className="group inline-flex items-baseline gap-3 mb-2">
                    <span
                      className="font-bold text-white group-hover:text-white/80 transition-colors"
                      style={{
                        fontSize: "48px",
                        fontFamily: "'Anton', sans-serif",
                        letterSpacing: "0.03em",
                        lineHeight: 1,
                      }}
                    >
                      {section.titleEn}
                    </span>
                    <span className="text-white/50" style={{ fontSize: "14px" }}>{section.titleJa}</span>
                  </Link>
                ) : (
                  <div className="inline-flex items-baseline gap-3 mb-2">
                    <span
                      className="font-bold text-white"
                      style={{
                        fontSize: "48px",
                        fontFamily: "'Anton', sans-serif",
                        letterSpacing: "0.03em",
                        lineHeight: 1,
                      }}
                    >
                      {section.titleEn}
                    </span>
                    <span className="text-white/50" style={{ fontSize: "14px" }}>{section.titleJa}</span>
                  </div>
                )}
                {section.links.length > 0 && (
                  <div className="flex flex-wrap gap-x-6 gap-y-1 mt-2">
                    {section.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="text-white/40 hover:text-white/70 transition-colors"
                        style={{ fontSize: "13px" }}
                      >
                        - {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Large Sing text */}
        <div className="text-center" style={{ lineHeight: 0.85, padding: "60px 0 20px" }}>
          <span
            className="text-white block"
            style={{
              fontFamily: "'Dela Gothic One', sans-serif",
              fontSize: "clamp(100px, 20vw, 270px)",
              letterSpacing: "0.02em",
              lineHeight: 0.8,
              transform: "scaleY(0.82)",
              transformOrigin: "bottom center",
            }}
          >
            Sing
          </span>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-6 text-center">
          <p className="text-[11px] text-white/25" style={{ fontFamily: "Inter, sans-serif" }}>
            &copy; {company.established ? company.established.replace("年", "") : "2024"} {company.nameEn || "Sing Co., Ltd."}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

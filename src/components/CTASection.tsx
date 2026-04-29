import Link from "next/link";
import { contact } from "@/lib/site";

interface CTASectionProps {
  heading?: string;
  body?: string;
  buttonText?: string;
  buttonHref?: string;
  note?: string;
  showPhone?: boolean;
}

export default function CTASection({
  heading = "まずは、御社の課題を聞かせてください。",
  body = "採用のこと、組織のこと、ブランディングのこと。\n何から手をつければいいか分からなくても大丈夫です。\n一緒に課題を整理するところから始めましょう。",
  buttonText = "無料で相談してみる",
  buttonHref = "/contact",
  note = "営業電話はいたしません。お気軽にご相談ください。",
  showPhone = true,
}: CTASectionProps) {
  return (
    <section className="bg-navy" style={{ padding: "100px 20px" }}>
      <div className="mx-auto text-center" style={{ maxWidth: "700px" }}>
        <h2
          className="font-bold text-white mb-5"
          style={{
            fontSize: "clamp(22px, 3.5vw, 30px)",
            lineHeight: 1.5,
          }}
        >
          {heading}
        </h2>
        <p
          className="text-white/80 mb-9 whitespace-pre-line"
          style={{ fontSize: "15px", lineHeight: 1.9 }}
        >
          {body}
        </p>
        <Link
          href={buttonHref}
          className="inline-block bg-accent text-white font-semibold rounded-btn transition-colors hover:bg-accent-dark mb-4"
          style={{ padding: "18px 48px", fontSize: "16px" }}
          data-cta={buttonText}
          data-cta-location="cta_section"
        >
          {buttonText}
        </Link>
        {note && (
          <p className="text-white/50 text-[13px] mb-3">{note}</p>
        )}
        {showPhone && contact.phone && (
          <p className="text-white/60 text-sm">
            お電話でのご相談:{" "}
            <a
              href={`tel:${contact.phoneTel}`}
              className="hover:text-white transition-colors lg:pointer-events-none"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {contact.phoneFormatted}
            </a>
          </p>
        )}
      </div>
    </section>
  );
}

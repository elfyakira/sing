import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import StructuredData from "@/components/StructuredData";
import { contact } from "@/lib/site";
import { FadeInUp } from "@/components/animations";
import {
  generateBreadcrumbSchema,
  generateJobPostingSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "採用情報",
  description:
    "株式会社Singの採用情報。企業と若者をつなぎ、人が育つ社会をつくる仲間を募集しています。未経験歓迎。",
};

const anchorLinks = [
  { num: "01", name: "代表メッセージ", id: "ceo-message" },
  { num: "02", name: "求める人物像", id: "ideal-candidate" },
  { num: "03", name: "募集要項", id: "requirements" },
];

const requirementsData = [
  { label: "職種", value: "コンサルタント / クリエイティブディレクター" },
  {
    label: "仕事内容",
    value:
      "中小企業の採用支援（求人設計・媒体運用・面接同席）、組織コンサルティング、採用ブランディングに関わるクリエイティブ制作（映像・Web・パンフレット等）",
  },
  {
    label: "応募資格",
    value: "学歴不問・未経験歓迎。普通自動車免許（AT限定可）",
  },
  { label: "勤務地", value: "愛知県春日井市（本社）" },
  { label: "勤務時間", value: "9:00〜18:00（休憩1時間）" },
  {
    label: "休日・休暇",
    value: "完全週休2日制（土日）、祝日、GW、夏季休暇、年末年始、有給休暇",
  },
  {
    label: "給与",
    value: "月給22万円〜40万円 ※経験・能力を考慮の上決定",
  },
  { label: "昇給・賞与", value: "昇給年1回、賞与年2回（業績連動）" },
  {
    label: "福利厚生",
    value: "社会保険完備、交通費支給、研修制度あり、資格取得支援",
  },
  {
    label: "選考フロー",
    value: "エントリー → カジュアル面談 → 面接（1〜2回）→ 内定",
  },
];

export default function RecruitPage() {
  return (
    <>
      <StructuredData
        data={[
          generateBreadcrumbSchema([
            { name: "ホーム", url: "https://singgroup.biz" },
            { name: "採用情報", url: "https://singgroup.biz/recruit" },
          ]),
          generateJobPostingSchema({
            title: "コンサルタント / クリエイティブディレクター",
            description:
              "中小企業の採用支援（求人設計・媒体運用・面接同席）、組織コンサルティング、採用ブランディングに関わるクリエイティブ制作（映像・Web・パンフレット等）",
            datePosted: "2025-01-01",
            employmentType: "FULL_TIME",
            baseSalary: {
              currency: "JPY",
              minValue: 220000,
              maxValue: 400000,
              unitText: "MONTH",
            },
            qualifications: "学歴不問・未経験歓迎。普通自動車免許（AT限定可）",
          }),
        ]}
      />
      {/* Section 1: Page Header */}
      <PageHeader
        label="RECRUIT"
        title="採用情報"
        backgroundImage="/images/recruit-header.jpg"
      />

      {/* Section 2: Recruit Message */}
      <section className="bg-white" style={{ padding: "80px 20px 0" }}>
        <div className="mx-auto" style={{ maxWidth: "1100px" }}>
          {/* Label + Title */}
          <div style={{ marginBottom: "32px" }}>
            <p
              style={{
                fontSize: "13px",
                color: "#C84B2F",
                letterSpacing: "0.15em",
                fontFamily: "'Anton', sans-serif",
                marginBottom: "8px",
              }}
            >
              About Recruit
            </p>
            <h2
              className="font-bold"
              style={{
                fontSize: "clamp(22px, 3vw, 30px)",
                lineHeight: 1.5,
                color: "#222",
              }}
            >
              企業と若者をつなぎ、人が育つ社会をつくる。
              <br />
              それが、私たちの仕事です。
            </h2>
          </div>

          {/* Key visual image */}
          <div
            className="relative w-full rounded-lg overflow-hidden"
            style={{ aspectRatio: "21/9" }}
          >
            <Image
              src="/images/recruit-header.jpg"
              alt="Singの採用情報"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Anchor Links */}
      <section className="bg-white" style={{ padding: "48px 20px 80px" }}>
        <div className="mx-auto" style={{ maxWidth: "1100px" }}>
          <div className="grid grid-cols-3 gap-4">
            {anchorLinks.map((link) => (
              <a
                key={link.num}
                href={`#${link.id}`}
                className="group flex items-center gap-3 border-b-2 border-[#e0e0e0] hover:border-[#C84B2F] transition-colors"
                style={{ paddingBottom: "16px" }}
              >
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "20px",
                    color: "#C84B2F",
                    lineHeight: 1,
                  }}
                >
                  {link.num}
                </span>
                <span
                  className="font-bold group-hover:text-[#C84B2F] transition-colors"
                  style={{ fontSize: "14px", color: "#222" }}
                >
                  {link.name}
                </span>
                <span
                  className="ml-auto text-[#C84B2F]"
                  style={{ fontSize: "18px" }}
                >
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 01: CEO Message */}
      <section
        id="ceo-message"
        className="bg-white"
        style={{ padding: "100px 20px", scrollMarginTop: "80px" }}
      >
        <div className="mx-auto" style={{ maxWidth: "1000px" }}>
          <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16">
            {/* Left: Text */}
            <div className="lg:w-[60%]">
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "64px",
                  color: "#C84B2F",
                  opacity: 0.15,
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                01
              </p>
              <h2
                className="font-bold"
                style={{
                  fontSize: "clamp(22px, 3vw, 28px)",
                  color: "#222",
                  marginBottom: "8px",
                }}
              >
                代表メッセージ
              </h2>
              <p
                style={{
                  fontSize: "13px",
                  color: "#999",
                  marginBottom: "24px",
                }}
              >
                株式会社Sing 代表　清水 駿之介
              </p>
              <div
                style={{
                  fontSize: "15px",
                  lineHeight: 2.0,
                  color: "#333",
                }}
              >
                <p style={{ marginBottom: "20px" }}>
                  Singでは「仕事が苦しいもの」という常識を変えたいと本気で考えています。
                </p>
                <p style={{ marginBottom: "20px" }}>
                  私自身、人財業界で働く中で、離職率の高さや人が本来持つ可能性が活かされていない現実に強い違和感を覚えました。だからこそ、採用で終わらない支援を始めました。
                </p>
                <p style={{ marginBottom: "20px" }}>
                  Singが求めているのは、「誰かの役に立ちたい」という素直な気持ちを持った仲間です。特別なスキルや経験は必要ありません。一緒に企業と人の未来をつくりたいという想いがあれば、それだけで十分です。
                </p>
                <p>
                  あなたの情熱が、企業を変え、地域を変え、誰かの人生を変える力になる。そんな仕事を、私たちと一緒にしませんか。
                </p>
              </div>
            </div>

            {/* Right: Photo */}
            <div className="lg:w-[40%] shrink-0">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/images/ceo.webp"
                  alt="清水 駿之介"
                  width={460}
                  height={600}
                  className="w-full h-auto"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02: Ideal Candidate */}
      <section
        id="ideal-candidate"
        style={{ backgroundColor: "#F5F1EB", padding: "100px 20px", scrollMarginTop: "80px" }}
      >
        <div className="mx-auto" style={{ maxWidth: "1000px" }}>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "64px",
              color: "#C84B2F",
              opacity: 0.15,
              lineHeight: 1,
              marginBottom: "8px",
            }}
          >
            02
          </p>
          <h2
            className="font-bold"
            style={{
              fontSize: "clamp(22px, 3vw, 28px)",
              color: "#222",
              marginBottom: "48px",
            }}
          >
            求める人物像
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                title: "人と話すことが好きな方",
                desc: "クライアントの経営者や現場の社員と直接対話する仕事です。コミュニケーションを楽しめる方を歓迎します。",
              },
              {
                title: "成長意欲のある方",
                desc: "採用・組織・ブランディングなど幅広い領域に関わるため、常に学び続ける姿勢が大切です。",
              },
              {
                title: "地域や社会に貢献したい方",
                desc: "地域の中小企業を支えることが、地域全体の未来につながります。社会貢献への想いがある方を求めています。",
              },
              {
                title: "チームで協力して働きたい方",
                desc: "Singは少数精鋭のチーム。一人ひとりの役割が大きいからこそ、仲間と支え合いながら成果を出していきます。",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg"
                style={{ padding: "32px" }}
              >
                <div className="flex items-start gap-3" style={{ marginBottom: "12px" }}>
                  <span
                    style={{
                      color: "#C84B2F",
                      fontSize: "20px",
                      lineHeight: 1.3,
                      flexShrink: 0,
                    }}
                  >
                    —
                  </span>
                  <p
                    className="font-bold"
                    style={{ fontSize: "17px", color: "#222" }}
                  >
                    {item.title}
                  </p>
                </div>
                <p style={{ fontSize: "14px", color: "#5A5A5A", lineHeight: 1.8, paddingLeft: "32px" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p
            className="text-center"
            style={{
              fontSize: "15px",
              color: "#5A5A5A",
              marginTop: "40px",
              lineHeight: 1.8,
            }}
          >
            学歴不問・未経験歓迎。普通自動車免許（AT限定可）をお持ちの方。
          </p>
        </div>
      </section>

      {/* 05: Requirements */}
      <section
        id="requirements"
        className="bg-white"
        style={{ padding: "100px 20px", scrollMarginTop: "80px" }}
      >
        <div className="mx-auto" style={{ maxWidth: "1000px" }}>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "64px",
              color: "#C84B2F",
              opacity: 0.15,
              lineHeight: 1,
              marginBottom: "8px",
            }}
          >
            03
          </p>
          <h2
            className="font-bold"
            style={{
              fontSize: "clamp(22px, 3vw, 28px)",
              color: "#222",
              marginBottom: "48px",
            }}
          >
            募集要項
          </h2>

          <div className="border-t border-[#e0e0e0]">
            {requirementsData.map((row, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row border-b border-[#e0e0e0]"
                style={{ padding: "20px 0" }}
              >
                <div
                  className="font-bold shrink-0"
                  style={{
                    width: "160px",
                    fontSize: "15px",
                    color: "#222",
                    marginBottom: "8px",
                  }}
                >
                  {row.label}
                </div>
                <div style={{ fontSize: "15px", color: "#333", lineHeight: 1.8 }}>
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entry CTA */}
      <section style={{ backgroundColor: "#1A2E44", padding: "clamp(80px, 10vw, 100px) 20px" }}>
        <div className="mx-auto text-center" style={{ maxWidth: "700px" }}>
          <FadeInUp>
            <h2
              className="font-bold text-white"
              style={{
                fontSize: "clamp(22px, 3.5vw, 28px)",
                lineHeight: 1.6,
                marginBottom: "24px",
              }}
            >
              一緒に、地域の未来をつくりませんか。
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.9,
                marginBottom: "40px",
              }}
            >
              まずはカジュアルにお話ししましょう。堅い志望動機は必要ありません。
              「ちょっと気になる」くらいの気持ちで大丈夫です。
            </p>
            <div style={{ marginBottom: "24px" }}>
              <Link
                href="/contact"
                className="inline-block font-bold text-white transition-opacity hover:opacity-80"
                style={{
                  backgroundColor: "#C84B2F",
                  fontSize: "16px",
                  padding: "18px 48px",
                  borderRadius: "60px",
                }}
              >
                エントリーする
              </Link>
            </div>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>
              お電話でもお気軽にどうぞ：
              <a
                href={`tel:${contact.phoneTel}`}
                className="underline"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {contact.phoneFormatted}
              </a>
            </p>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { FadeInUp, StaggerContainer } from "@/components/animations";

export const metadata: Metadata = {
  title: "事業内容",
  description:
    "株式会社Singの3つのサービス。採用支援（ツナゲル）・組織づくり支援（カツヤク）・情報発信支援（Singメディア）をワンストップで支援します。",
};

const services = [
  {
    num: "01",
    nameEn: "Connect",
    name: "ツナゲル",
    subtitle: "「採れる採用」から「活躍する人財を採る採用」へ",
    body: "求人を出しても応募が来ない。採用しても定着しない。その原因の多くは、「誰に届けたいか」「自社の魅力は何か」が明確になっていないことにあります。Singの採用支援は、企業の内側に眠る魅力を掘り起こし、本当に必要な人財に届く採用設計を行います。",
    video: "/videos/service-01.mp4",
    problems: [
      { title: "応募が集まらない", desc: "求人を出しても反応がなく、母集団形成に苦戦している。" },
      { title: "求める人財と出会えない", desc: "応募はあるが、自社に合う人財からの応募が少ない。" },
      { title: "採用コストが膨らむ", desc: "媒体費ばかりかかり、費用対効果が見えない。" },
      { title: "自社の魅力が伝わらない", desc: "何をアピールすべきか分からず、他社との差別化ができない。" },
    ],
  },
  {
    num: "02",
    nameEn: "Activate",
    name: "カツヤク",
    subtitle: "人が辞めない組織は、\"仕組み\"でつくれる",
    body: "採用した人財が活躍し続けるためには、組織の土壌が整っている必要があります。評価制度、育成環境、マネジメント体制。Singは「人が辞めない組織づくり」を仕組みから支援します。",
    video: "/videos/service-02.mp4",
    problems: [
      { title: "早期離職が止まらない", desc: "せっかく採用しても、数ヶ月で辞めてしまう。" },
      { title: "管理職が育たない", desc: "現場のリーダーが育たず、組織が回らない。" },
      { title: "評価制度が曖昧", desc: "評価基準が不透明で、社員のモチベーションが低下している。" },
      { title: "社内の雰囲気が悪い", desc: "コミュニケーション不足で、チームの一体感がない。" },
    ],
  },
  {
    num: "03",
    nameEn: "Media",
    name: "Singメディア",
    subtitle: "届けたい想いを、届くカタチに",
    body: "企業の魅力を正しく届けるには、ブランディング・SNS・クリエイティブの力が欠かせません。Singメディアでは、月刊Singをはじめとした情報発信、SNS戦略、採用サイト・動画・パンフレット制作までをワンストップで支援します。",
    video: "/videos/service-03.mp4",
    problems: [
      { title: "発信の仕方がわからない", desc: "SNSやWebを活用したいが、何から始めればいいか分からない。" },
      { title: "採用ブランディングが弱い", desc: "企業の魅力が求職者に伝わっておらず、選ばれない。" },
      { title: "制作物がバラバラ", desc: "サイト・動画・パンフレットに統一感がなく、ブランドが伝わらない。" },
      { title: "社内に制作リソースがない", desc: "デザインや動画を外注したいが、どこに頼めばいいか分からない。" },
    ],
  },
];

const steps = [
  {
    num: "01",
    title: "無料相談",
    desc: "まずは御社の課題やお悩みをお聞かせください。オンライン・対面どちらでも対応します。費用は一切かかりません。",
  },
  {
    num: "02",
    title: "現状把握・ヒアリング",
    desc: "企業の現状を深く理解するために、経営者・現場社員へのヒアリングを実施します。課題の本質を一緒に見つけます。",
  },
  {
    num: "03",
    title: "課題整理・ご提案",
    desc: "ヒアリング結果を元に、御社に最適な支援プランをご提案します。無理な営業は一切しません。ご納得いただいた上で進めます。",
  },
  {
    num: "04",
    title: "支援開始",
    desc: "ご契約後、支援を開始します。月1回以上の定期ミーティングで進捗を共有しながら、伴走型で進めます。",
  },
  {
    num: "05",
    title: "自走支援・定着フォロー",
    desc: "成果が出始めたら、社内で自走できる仕組みづくりに移行。支援終了後も成果が続く状態を目指します。",
  },
];

const faqs = [
  {
    q: "費用はどのくらいかかりますか？",
    a: "支援内容や期間によって異なります。まずは無料相談にて御社の状況をお伺いした上で、最適なプランと費用をご提案いたします。無理な営業は一切いたしませんので、まずはお気軽にご相談ください。",
  },
  {
    q: "東海エリア以外でも対応できますか？",
    a: "はい、オンラインでの対応も行っていますので、全国どこでもご支援可能です。ただし、現場へのヒアリングや撮影が必要な場合は、訪問対応エリアについてご相談させてください。",
  },
  {
    q: "採用支援だけでも依頼できますか？",
    a: "もちろんです。採用支援のみ、SNS運用のみなど、必要な領域だけのご支援も承ります。まずは御社の優先課題を一緒に整理するところから始めましょう。",
  },
  {
    q: "コンサルティングの期間はどのくらいですか？",
    a: "一般的には6ヶ月〜12ヶ月の支援プランが多いですが、御社の状況に合わせて柔軟に設計します。短期の課題解決から、中長期の組織づくりまで対応可能です。",
  },
  {
    q: "本当に成果が出ますか？",
    a: "正直に申し上げると、「必ず」とお約束することはできません。しかし、私たちは御社の現場を深く理解した上で、実行可能な施策を設計し、伴走型で支援します。成果が出るまで一緒に走り続けることをお約束します。",
  },
  {
    q: "社員が少ない会社でも対応できますか？",
    a: "はい、社員数に関わらず対応可能です。むしろ少人数の企業こそ、一人ひとりの採用・定着が経営に大きく影響します。御社の規模に合った支援プランをご提案します。",
  },
];

export default function ServicePage() {
  return (
    <>
      {/* Section 1: Page Header */}
      <PageHeader label="SERVICE" title="事業内容" />

      {/* Section 2: About Service + Anchor Links */}
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
              About Service
            </p>
            <h2
              className="font-bold"
              style={{
                fontSize: "clamp(22px, 3vw, 30px)",
                lineHeight: 1.5,
                color: "#222",
              }}
            >
              人が輝く企業をつくるために。
              <br />
              3つの支援領域で、採用から活躍までを一気通貫で支援します。
            </h2>
          </div>

          {/* Key visual image */}
          <div
            className="relative w-full rounded-lg overflow-hidden"
            style={{ aspectRatio: "21/9" }}
          >
            <Image
              src="/images/service-hero.jpg"
              alt="Singの事業内容"
              fill
              className="object-cover object-bottom"
            />
          </div>
        </div>
      </section>

      {/* Anchor Links */}
      <section className="bg-white" style={{ padding: "48px 20px 80px" }}>
        <div className="mx-auto" style={{ maxWidth: "1100px" }}>
          <div className="grid grid-cols-3 gap-4">
            {services.map((service) => (
              <a
                key={service.num}
                href={`#service-${service.num}`}
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
                  {service.num}
                </span>
                <span
                  className="font-bold group-hover:text-[#C84B2F] transition-colors"
                  style={{ fontSize: "14px", color: "#222" }}
                >
                  {service.name}
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

      {/* Sections 3-5: Service Details */}
      {services.map((service) => (
        <section
          key={service.num}
          id={`service-${service.num}`}
          className="bg-white"
          style={{
            padding: "100px 20px",
            scrollMarginTop: "80px",
            borderTop: "1px solid #e0e0e0",
          }}
        >
          <div className="mx-auto" style={{ maxWidth: "1100px" }}>
            {/* Top: Left text + Right image */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Left: Text */}
              <div className="lg:w-[45%]">
                {/* Icon + English title */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="flex items-center justify-center rounded bg-accent"
                    style={{ width: "36px", height: "36px" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </span>
                  <span
                    className="font-bold"
                    style={{
                      fontSize: "32px",
                      fontFamily: "'Anton', sans-serif",
                      letterSpacing: "0.03em",
                      color: "#222",
                    }}
                  >
                    {service.name}
                  </span>
                </div>

                {/* Japanese subtitle */}
                <h2
                  className="font-bold"
                  style={{
                    fontSize: "22px",
                    color: "#222",
                    lineHeight: 1.6,
                    marginBottom: "20px",
                  }}
                >
                  {service.subtitle}
                </h2>

                {/* Body */}
                <p
                  style={{
                    fontSize: "15px",
                    color: "#555",
                    lineHeight: 1.9,
                  }}
                >
                  {service.body}
                </p>
              </div>

              {/* Right: Video */}
              <div className="lg:w-[55%]">
                <div className="relative rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={service.video} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>

            {/* Bottom: Problem section */}
            <div style={{ marginTop: "48px" }}>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="inline-block rounded-full bg-accent"
                  style={{ width: "12px", height: "12px" }}
                />
                <span className="font-bold" style={{ fontSize: "22px", fontFamily: "'Anton', sans-serif", color: "#222" }}>
                  Problem
                </span>
                <span style={{ fontSize: "15px", color: "#888", marginLeft: "8px" }}>
                  私たちが解決する課題
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
                {service.problems.map((problem, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-lg"
                    style={{ backgroundColor: "#F5F1EB", padding: "24px" }}
                  >
                    <span
                      className="shrink-0 block bg-accent"
                      style={{ width: "3px", height: "100%", minHeight: "40px", marginTop: "2px" }}
                    />
                    <div>
                      <p className="font-bold" style={{ fontSize: "15px", color: "#222", marginBottom: "6px" }}>
                        {problem.title}
                      </p>
                      <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.7 }}>
                        {problem.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {service.num === "03" && (
                <div className="flex items-center mt-10">
                  <Link
                    href="/works"
                    className="inline-flex items-center gap-6 text-[#222222] group"
                  >
                    <span className="text-[18px] font-bold tracking-wide">WORKS</span>
                    <span
                      className="flex items-center justify-center rounded-full bg-accent group-hover:scale-105 transition-transform"
                      style={{ width: "80px", height: "80px" }}
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Section: Why Sing */}
      <section id="why-sing" style={{ backgroundColor: "#F5F5F5", padding: "100px 20px", scrollMarginTop: "80px" }}>
        <div className="mx-auto" style={{ maxWidth: "1100px" }}>
          {/* Header */}
          <div style={{ marginBottom: "56px" }}>
            <p
              style={{
                fontSize: "clamp(48px, 8vw, 72px)",
                fontFamily: "'Anton', sans-serif",
                letterSpacing: "0.05em",
                lineHeight: 1,
                color: "#C84B2F",
                marginBottom: "12px",
              }}
            >
              Why Sing
            </p>
            <h2
              className="font-bold"
              style={{
                fontSize: "clamp(22px, 3vw, 30px)",
                lineHeight: 1.4,
                color: "#222",
              }}
            >
              私たちが選ばれる理由
            </h2>
          </div>

          {/* Intro text */}
          <p
            style={{
              fontSize: "15px",
              lineHeight: 2.0,
              color: "#333",
              marginBottom: "56px",
            }}
          >
            Singの支援は、単なる採用支援やコンサルティングではありません。
            <br />
            採用から定着、そして活躍までを見据え、企業の人づくりに深く入り込みながら伴走します。
          </p>

          {/* Reason cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg" style={{ padding: "36px 28px" }}>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "48px",
                  color: "#C84B2F",
                  opacity: 0.15,
                  lineHeight: 1,
                }}
              >
                01
              </span>
              <h3
                className="font-bold"
                style={{ fontSize: "18px", color: "#222", marginTop: "12px", marginBottom: "16px" }}
              >
                現場に入り込む実行力
              </h3>
              <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.8 }}>
                現場のリアルな課題に向き合い、机上の空論ではなく、実際に手を動かしながら解決へと導きます。経営者としての実体験から生まれた実践的ノウハウで、企業の内側から変革を支援します。
              </p>
            </div>

            <div className="bg-white rounded-lg" style={{ padding: "36px 28px" }}>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "48px",
                  color: "#C84B2F",
                  opacity: 0.15,
                  lineHeight: 1,
                }}
              >
                02
              </span>
              <h3
                className="font-bold"
                style={{ fontSize: "18px", color: "#222", marginTop: "12px", marginBottom: "16px" }}
              >
                若者のリアルな価値観を知る
              </h3>
              <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.8 }}>
                高校連携や地域活動を通じて、次世代の若者が何を求め、どんな企業に魅力を感じるのかを肌で理解しています。その知見を採用設計に活かし、企業と若者の「本当の出会い」をつくります。
              </p>
            </div>

            <div className="bg-white rounded-lg" style={{ padding: "36px 28px" }}>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "48px",
                  color: "#C84B2F",
                  opacity: 0.15,
                  lineHeight: 1,
                }}
              >
                03
              </span>
              <h3
                className="font-bold"
                style={{ fontSize: "18px", color: "#222", marginTop: "12px", marginBottom: "16px" }}
              >
                オンライン×オフラインのブランディング
              </h3>
              <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.8 }}>
                SNS・Web・動画などのオンライン施策と、月刊Sing・地域イベントなどのオフライン施策を組み合わせ、企業の魅力を多角的に発信。採用ブランディングから組織づくりまでをワンストップで支援します。
              </p>
            </div>
          </div>

          {/* Bottom message */}
          <p
            className="font-bold"
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: 1.8,
              color: "#222",
              marginTop: "48px",
              textAlign: "center",
            }}
          >
            これらを掛け合わせることで、
            <br />
            企業が人とともに成長し続ける仕組みづくりを支援しています。
          </p>
        </div>
      </section>

      {/* Section 9: FAQ */}
      <section style={{ backgroundColor: "#F5F1EB", padding: "100px 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "800px" }}>
          <div className="text-center" style={{ marginBottom: "56px" }}>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
                color: "#C84B2F",
                letterSpacing: "0.15em",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              FAQ
            </p>
            <h2
              className="font-bold"
              style={{
                fontSize: "clamp(22px, 3vw, 28px)",
                color: "#222222",
              }}
            >
              よくあるご質問
            </h2>
          </div>

          <div>
            {faqs.map((faq, index) => (
              <FadeInUp key={index}>
                <div
                  style={{
                    paddingBottom: "36px",
                    marginBottom: "36px",
                    borderBottom:
                      index < faqs.length - 1
                        ? "1px solid #D9D3CB"
                        : "none",
                  }}
                >
                  {/* Question */}
                  <div
                    className="flex items-start gap-3"
                    style={{ marginBottom: "16px" }}
                  >
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 700,
                        fontSize: "16px",
                        color: "#C84B2F",
                        flexShrink: 0,
                      }}
                    >
                      Q.
                    </span>
                    <p
                      className="font-bold"
                      style={{ fontSize: "16px", color: "#222222" }}
                    >
                      {faq.q}
                    </p>
                  </div>

                  {/* Answer */}
                  <div className="flex items-start gap-3">
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 700,
                        fontSize: "16px",
                        color: "#5A5A5A",
                        flexShrink: 0,
                      }}
                    >
                      A.
                    </span>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "#5A5A5A",
                        lineHeight: 1.9,
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { FadeInUp, StaggerContainer } from "@/components/animations";

export const metadata: Metadata = {
  title: "事業内容",
  description:
    "株式会社Singの5つのサービス。採用支援・人事組織コンサルティング・営業企業ブランディング・SNSデジタルブランディング・クリエイティブ制作をワンストップで支援します。",
};

const services = [
  {
    num: "01",
    name: "ツナゲル",
    subtitle: "「採れる採用」から「活躍する人材を採る採用」へ",
    body: "求人を出しても応募が来ない。採用しても定着しない。その原因の多くは、「誰に届けたいか」「自社の魅力は何か」が明確になっていないことにあります。Singの採用支援は、企業の内側に眠る魅力を掘り起こし、本当に必要な人材に届く採用設計を行います。",
    items: [
      "求める人物像の設計",
      "社内の魅力整理・言語化",
      "現場社員の声のヒアリング",
      "採用コンセプト設計",
      "採用ブランディング構築",
    ],
    voice:
      "「企業の想いを言葉にしてくれる。自社の魅力を客観的に知ることができました。」",
    image: "/images/service-detail-01.jpg",
    bg: "#F5F1EB",
    reverse: false,
  },
  {
    num: "02",
    name: "カツヤク",
    subtitle: `人が辞めない組織は、"仕組み"でつくれる`,
    body: "採用した人材が活躍し続けるためには、組織の土壌が整っている必要があります。評価制度、育成環境、マネジメント体制。Singは「人が辞めない組織づくり」を仕組みから支援します。",
    items: [
      "管理職・リーダー育成",
      "人事評価制度の設計",
      "社員定着の仕組みづくり",
      "社内研修プログラム構築",
      "人事担当者の育成支援",
    ],
    voice:
      "「採用だけでなく組織まで見てくれる。うちの会社を自分の会社のように考えてくれる姿勢が嬉しい。」",
    image: "/images/service-detail-02.jpg",
    bg: "#FFFFFF",
    reverse: true,
  },
  {
    num: "03",
    name: "月刊Sing",
    subtitle: `御社の本当の魅力を、"選ばれる力"に変える`,
    body: "良い商品やサービスを持っていても、それが正しく伝わらなければ選ばれません。Singは企業の本質的な強みを整理・言語化し、営業力とブランド力を高める支援を行います。",
    items: [
      "企業理念・強みの整理と言語化",
      "パンフレット・営業資料の制作",
      "企業ロゴ・VIの刷新支援",
      "ホームページ制作・改善",
      "ブランドコンセプトの策定",
    ],
    voice:
      "「初めて自社の強みを客観的に知ることができた。営業先での反応が明らかに変わりました。」",
    image: "/images/service-detail-03.jpg",
    bg: "#F5F1EB",
    reverse: false,
  },
  {
    num: "04",
    name: "バツグン",
    subtitle: `若い世代に届く"発信力"を、御社の中に育てる`,
    body: "採用においても営業においても、SNSの活用はもはや不可欠です。しかし「何を発信すればいいかわからない」という企業が大半です。Singは、企業の魅力をSNSで届けるための戦略設計からコンテンツ制作、社内担当者の育成まで一貫して支援します。",
    items: [
      "SNS運用戦略の設計",
      "YouTube企画・撮影・編集支援",
      "Instagram/TikTokコンテンツ制作",
      "社内SNS担当者の育成",
      "採用広報としてのSNS活用",
    ],
    voice:
      "「若者のリアルを知っている。だからこそ、若い子に届くコンテンツが作れるんだと実感しました。」",
    image: "/images/service-detail-04.jpg",
    bg: "#FFFFFF",
    reverse: true,
  },
  {
    num: "05",
    name: "各種制作",
    subtitle: "伝えたい想いを、届く形に",
    body: "採用サイト、企業動画、パンフレット、SNSコンテンツ。Singは「伝わるクリエイティブ」を企画から制作までワンストップで提供します。見た目の美しさだけでなく、届けたいメッセージが届く設計を大切にしています。",
    items: [
      "採用サイトの企画・制作",
      "採用動画の企画・撮影・編集",
      "企業パンフレットのデザイン・制作",
      "SNSコンテンツの制作",
      "写真撮影（企業・社員・現場）",
    ],
    voice:
      "「スピードが早い。相談した翌週にはもう動き出してくれていた。」",
    image: "/images/service-detail-05.jpg",
    bg: "#F5F1EB",
    reverse: false,
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
              5つの支援領域で、採用から活躍までを一気通貫で支援します。
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
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Anchor Links */}
      <section className="bg-white" style={{ padding: "48px 20px 80px" }}>
        <div className="mx-auto" style={{ maxWidth: "1100px" }}>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
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

      {/* Sections 3-7: Service Details */}
      {services.map((service) => (
        <section
          key={service.num}
          id={`service-${service.num}`}
          style={{
            backgroundColor: service.bg,
            padding: "100px 20px",
            scrollMarginTop: "80px",
          }}
        >
          <div
            className={`mx-auto flex flex-col ${
              service.reverse
                ? "lg:flex-row-reverse"
                : "lg:flex-row"
            } items-start`}
            style={{ maxWidth: "1100px", gap: "60px" }}
          >
            {/* Image */}
            <FadeInUp>
              <div
                className="w-full lg:w-auto"
                style={{
                  flex: "0 0 45%",
                  position: "relative",
                  aspectRatio: "4 / 5",
                  minHeight: "400px",
                }}
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            </FadeInUp>

            {/* Text */}
            <div style={{ flex: "0 0 55%" }} className="w-full">
              <FadeInUp>
                {/* Number */}
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
                  {service.num}
                </p>

                {/* Service Name */}
                <h2
                  className="font-bold"
                  style={{
                    fontSize: "clamp(22px, 3vw, 28px)",
                    color: "#222222",
                    marginBottom: "12px",
                  }}
                >
                  {service.name}
                </h2>

                {/* Subtitle */}
                <p
                  style={{
                    fontSize: "15px",
                    color: "#C84B2F",
                    marginBottom: "24px",
                  }}
                >
                  {service.subtitle}
                </p>

                {/* Body */}
                <p
                  style={{
                    fontSize: "15px",
                    color: "#222222",
                    lineHeight: 1.9,
                    marginBottom: "28px",
                  }}
                >
                  {service.body}
                </p>

                {/* Support Items */}
                <div style={{ marginBottom: "28px" }}>
                  {service.items.map((item, i) => (
                    <p
                      key={i}
                      style={{
                        fontSize: "14px",
                        color: "#5A5A5A",
                        marginBottom: "8px",
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        style={{
                          color: "#C84B2F",
                          marginRight: "8px",
                        }}
                      >
                        —
                      </span>
                      {item}
                    </p>
                  ))}
                </div>

                {/* Customer Voice */}
                <div
                  style={{
                    position: "relative",
                    paddingLeft: "20px",
                    borderLeft: "2px solid #D9D3CB",
                  }}
                >
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#5A5A5A",
                      lineHeight: 1.8,
                      fontStyle: "italic",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "28px",
                        color: "#C84B2F",
                        opacity: 0.3,
                        position: "absolute",
                        top: "-8px",
                        left: "20px",
                        lineHeight: 1,
                      }}
                    >
                      &ldquo;
                    </span>
                    {service.voice}
                  </p>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>
      ))}

      {/* Section 8: Flow */}
      <section className="bg-white" style={{ padding: "120px 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "700px" }}>
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
              FLOW
            </p>
            <h2
              className="font-bold"
              style={{
                fontSize: "clamp(22px, 3vw, 28px)",
                color: "#222222",
              }}
            >
              ご相談から支援開始までの流れ
            </h2>
          </div>

          <StaggerContainer staggerDelay={150}>
            {steps.map((step, index) => (
              <div key={step.num}>
                {/* Connecting line */}
                {index > 0 && (
                  <div
                    className="mx-auto"
                    style={{
                      width: "1px",
                      height: "32px",
                      backgroundColor: "#D9D3CB",
                    }}
                  />
                )}

                <div
                  className="text-center"
                  style={{ padding: "16px 0" }}
                >
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      color: "#5A5A5A",
                      letterSpacing: "0.1em",
                      marginBottom: "4px",
                    }}
                  >
                    STEP
                  </p>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 700,
                      fontSize: "28px",
                      color: "#C84B2F",
                      marginBottom: "12px",
                      lineHeight: 1,
                    }}
                  >
                    {step.num}
                  </p>
                  <p
                    className="font-bold"
                    style={{
                      fontSize: "18px",
                      color: "#222222",
                      marginBottom: "8px",
                    }}
                  >
                    {step.title}
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#5A5A5A",
                      lineHeight: 1.8,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </StaggerContainer>
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

      {/* Section 10: CTA */}
      <CTASection />
    </>
  );
}

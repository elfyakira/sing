import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import StructuredData from "@/components/StructuredData";
import { FadeInUp } from "@/components/animations";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "社会への取り組み",
  description:
    "株式会社Singの社会貢献活動。地域社会や次世代の人財育成、SDGs、キャリア教育支援、地域企業との連携など、人と企業、そして地域がつながる活動をご紹介します。",
};

const initiatives = [
  {
    id: "initiative-01",
    num: "01",
    category: "SDGs",
    title: "地域店舗・SDGs・地方創生への取り組み",
    image: "/images/initiative-01.jpg",
    description:
      "地域の持続可能な発展を目指し、企業と地域をつなぐ活動を推進しています。",
    detail:
      "Singは、地域の中小企業が持続的に成長し続けるために、SDGsの理念に基づいた事業支援を行っています。地方創生の視点から、地域の魅力を再発見し、企業の採用力や発信力を高めるサポートを実施。地元の店舗や事業者と連携し、地域全体が活性化する仕組みづくりに取り組んでいます。単なるCSR活動ではなく、事業と地域貢献が両立する持続可能なモデルの構築を目指しています。",
  },
  {
    id: "initiative-02",
    num: "02",
    category: "Education",
    title: "若者のキャリア教育支援",
    image: "/images/initiative-02.jpg",
    description:
      "大学での特別セミナー登壇など、次世代の人財育成に取り組んでいます。",
    detail:
      "次世代を担う若者たちが、自分らしいキャリアを描けるように。Singでは、大学や高校での特別セミナー登壇、キャリア相談会の実施など、教育機関と連携した活動を積極的に行っています。「働くとは何か」「自分の強みをどう活かすか」といったテーマを、代表・清水自身の経験を交えながら伝えることで、若者たちが主体的にキャリアを考えるきっかけを提供しています。",
  },
  {
    id: "initiative-03",
    num: "03",
    category: "Community",
    title: "地域店舗・団体との連携",
    image: "/images/initiative-04.jpg",
    description:
      "商工会議所を通じた情報発信など、地域企業のネットワークを強化しています。",
    detail:
      "Singは、商工会議所や地域の経済団体と連携し、中小企業の課題解決を支援するネットワークの構築に力を入れています。地域の企業同士がつながり、互いの強みを活かし合える環境をつくることで、単独では解決が難しい採用や組織の課題にも対応できる体制を整えています。また、月刊Singなどの情報発信媒体を通じて、地域企業の魅力を広く伝える活動も展開しています。",
  },
];

export default function InitiativesPage() {
  return (
    <>
      <StructuredData
        data={generateBreadcrumbSchema([
          { name: "ホーム", url: "https://singgroup.biz" },
          { name: "社会への取り組み", url: "https://singgroup.biz/initiatives" },
        ])}
      />
      <PageHeader label="INITIATIVES" title="社会への取り組み" />

      {/* Intro Section */}
      <section className="bg-white" style={{ padding: "80px 20px 0" }}>
        <div className="mx-auto" style={{ maxWidth: "1100px" }}>
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
              Our Initiatives
            </p>
            <h2
              className="font-bold"
              style={{
                fontSize: "clamp(22px, 3vw, 30px)",
                lineHeight: 1.5,
                color: "#222",
              }}
            >
              人と地域の未来のために。
            </h2>
          </div>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 2.0,
              color: "#555",
              marginBottom: "0",
            }}
          >
            Singは、企業の成長支援だけでなく、地域社会や次世代の人財育成にも積極的に取り組んでいます。
            <br />
            若者へのキャリア教育、障がい者就労支援、地域企業との連携など、人と企業、そして地域がつながる活動を通して、人が長く活躍できる社会づくりに貢献しています。
          </p>
        </div>
      </section>

      {/* Initiative Details */}
      {initiatives.map((item, index) => (
        <section
          key={item.num}
          id={item.id}
          className="bg-white"
          style={{
            padding: "100px 20px",
            borderTop: index === 0 ? "none" : "1px solid #e0e0e0",
            scrollMarginTop: "80px",
          }}
        >
          <div className="mx-auto" style={{ maxWidth: "1100px" }}>
            <FadeInUp>
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 lg:gap-16`}
              >
                {/* Image */}
                <div className="lg:w-[50%]">
                  <div
                    className="relative rounded-lg overflow-hidden"
                    style={{ aspectRatio: "4/3" }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="lg:w-[50%] flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
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
                      {item.num}
                    </span>
                    <span
                      className="text-[11px] font-medium text-accent border border-accent rounded-sm"
                      style={{ padding: "2px 10px" }}
                    >
                      {item.category}
                    </span>
                  </div>

                  <h3
                    className="font-bold"
                    style={{
                      fontSize: "clamp(20px, 2.5vw, 24px)",
                      color: "#222",
                      lineHeight: 1.5,
                      marginBottom: "20px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "15px",
                      color: "#555",
                      lineHeight: 2.0,
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section style={{ backgroundColor: "#F5F1EB", padding: "100px 20px" }}>
        <div className="mx-auto text-center" style={{ maxWidth: "800px" }}>
          <h2
            className="font-bold"
            style={{
              fontSize: "clamp(22px, 3vw, 28px)",
              color: "#222",
              marginBottom: "20px",
            }}
          >
            共に、地域の未来をつくりませんか。
          </h2>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 2.0,
              color: "#555",
              marginBottom: "40px",
            }}
          >
            Singは、企業支援を通じて地域社会に貢献するパートナーを求めています。
            <br />
            私たちの取り組みに共感いただける企業様、ぜひお気軽にご相談ください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-6 text-[#222222] group"
          >
            <span className="text-[18px] font-bold tracking-wide">CONTACT</span>
            <span
              className="flex items-center justify-center rounded-full bg-accent group-hover:scale-105 transition-transform"
              style={{ width: "80px", height: "80px" }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}

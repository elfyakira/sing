"use client";

import { useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { FadeInUp } from "@/components/animations";

const categories = [
  { id: "all", label: "ALL" },
  { id: "hp", label: "HP制作" },
  { id: "lp", label: "LP制作" },
  { id: "pv", label: "PV制作" },
  { id: "animation", label: "アニメ動画制作" },
  { id: "katsuyaku", label: "カツヤク" },
] as const;

type CategoryId = (typeof categories)[number]["id"];

interface WorkItem {
  id: string;
  category: CategoryId;
  title: string;
  description: string;
  image?: string;
  video?: string;
  url?: string;
  tags?: string[];
}

// --- 実績データ（随時追加・更新してください） ---
const works: WorkItem[] = [
  // HP制作
  {
    id: "hp-01",
    category: "hp",
    title: "株式会社竹内金型製作所 様",
    description: "",
    image: "/images/works/takeuchi.png",
    url: "https://www.tkss.co.jp/",
  },
  {
    id: "hp-02",
    category: "hp",
    title: "株式会社尾北 様",
    description: "",
    image: "/images/works/bihoku.png",
    url: "https://www.k-bihoku.co.jp/",
  },
  {
    id: "hp-03",
    category: "hp",
    title: "株式会社住理工メテックス 様",
    description: "",
    image: "/images/works/metex.png",
    url: "https://www.metexsumiriko.com/",
  },
  {
    id: "hp-04",
    category: "hp",
    title: "株式会社唯野工業 様",
    description: "",
    image: "/images/works/tadano.png",
    url: "https://www.tadanogroup.com/",
  },
  // LP制作
  {
    id: "lp-01",
    category: "lp",
    title: "出光リテール販売株式会社 中部カンパニー 様",
    description: "",
    image: "/images/works/idemitsu.png",
    url: "https://www.idemitsu-ritehanchubu.com/",
  },
  {
    id: "lp-02",
    category: "lp",
    title: "GTソリューション 様",
    description: "",
    image: "/images/works/gts.png",
    url: "https://www.gts-jp-recruit.com/",
  },
  {
    id: "lp-03",
    category: "lp",
    title: "株式会社佐藤螺子 様",
    description: "",
    image: "/images/works/sato-rashi.png",
    url: "https://www.satorashisaiyo.com/",
  },
  {
    id: "lp-04",
    category: "lp",
    title: "株式会社コベルク 様",
    description: "",
    image: "/images/works/coverk.png",
    url: "https://www.jp-cowerk.com/",
  },
  // PV制作
  {
    id: "pv-01",
    category: "pv",
    title: "株式会社竹内金型製作所 様",
    description: "企業紹介動画",
    video: "https://assets.singgroup.biz/pv/takeuchi_corporate.mp4",
  },
  {
    id: "pv-02",
    category: "pv",
    title: "企業紹介動画",
    description: "テロップなしver",
    video: "https://assets.singgroup.biz/pv/corporate_intro.mp4",
  },
  {
    id: "pv-03",
    category: "pv",
    title: "プロモーションビデオ",
    description: "",
    video: "https://assets.singgroup.biz/pv/pv_4.mp4",
  },
];

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  const filteredWorks =
    activeCategory === "all"
      ? works
      : works.filter((w) => w.category === activeCategory);

  return (
    <>
      <PageHeader label="WORKS" title="制作実績" />

      {/* Category Filter */}
      <section className="bg-white" style={{ padding: "48px 20px 0" }}>
        <div className="mx-auto" style={{ maxWidth: "1100px" }}>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="font-bold transition-all duration-200"
                style={{
                  padding: "10px 28px",
                  fontSize: "14px",
                  borderRadius: "50px",
                  border: "2px solid",
                  borderColor:
                    activeCategory === cat.id ? "#C84B2F" : "#d0d0d0",
                  backgroundColor:
                    activeCategory === cat.id ? "#C84B2F" : "transparent",
                  color: activeCategory === cat.id ? "#fff" : "#555",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Works Grid */}
      <section className="bg-white" style={{ padding: "48px 20px 100px" }}>
        <div className="mx-auto" style={{ maxWidth: "1100px" }}>
          {filteredWorks.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                color: "#999",
                fontSize: "15px",
                padding: "80px 0",
              }}
            >
              該当する実績はまだありません。
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWorks.map((work) => {
                const CardTag = work.url ? "a" : "div";
                const cardProps = work.url
                  ? {
                      href: work.url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {};
                return (
                <FadeInUp key={work.id}>
                  <CardTag
                    {...cardProps}
                    className="group rounded-lg overflow-hidden block"
                    style={{
                      border: "1px solid #e8e8e8",
                      transition: "box-shadow 0.3s",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.boxShadow =
                        "0 8px 30px rgba(0,0,0,0.08)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.boxShadow = "none")
                    }
                  >
                    {/* Thumbnail */}
                    <div
                      className="relative overflow-hidden"
                      style={{ aspectRatio: "16/10" }}
                    >
                      {work.video ? (
                        <video
                          src={work.video}
                          controls
                          preload="metadata"
                          playsInline
                          style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            backgroundColor: "#000",
                          }}
                        />
                      ) : work.image && work.image !== "/images/work-placeholder.jpg" ? (
                        <Image
                          src={work.image}
                          alt={work.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          style={{ objectFit: "cover", objectPosition: "top" }}
                        />
                      ) : (
                        <div
                          className="absolute inset-0 bg-gray-200 flex items-center justify-center"
                          style={{ backgroundColor: "#E8E4DE" }}
                        >
                          <span
                            style={{
                              fontSize: "13px",
                              color: "#999",
                              letterSpacing: "0.05em",
                            }}
                          >
                            COMING SOON
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div style={{ padding: "20px 24px 24px" }}>
                      {/* Category badge */}
                      <span
                        style={{
                          display: "inline-block",
                          fontSize: "11px",
                          fontWeight: 700,
                          color: "#C84B2F",
                          backgroundColor: "rgba(200,75,47,0.08)",
                          padding: "4px 12px",
                          borderRadius: "4px",
                          marginBottom: "12px",
                          letterSpacing: "0.03em",
                        }}
                      >
                        {categories.find((c) => c.id === work.category)?.label}
                      </span>

                      <h3
                        className="font-bold"
                        style={{
                          fontSize: "16px",
                          color: "#222",
                          lineHeight: 1.5,
                          marginBottom: "8px",
                        }}
                      >
                        {work.title}
                      </h3>

                      <p
                        style={{
                          fontSize: "13px",
                          color: "#777",
                          lineHeight: 1.7,
                          marginBottom: "12px",
                        }}
                      >
                        {work.description}
                      </p>

                      {/* Tags */}
                      {work.tags && (
                        <div className="flex flex-wrap gap-2">
                          {work.tags.map((tag) => (
                            <span
                              key={tag}
                              style={{
                                fontSize: "11px",
                                color: "#999",
                                border: "1px solid #e0e0e0",
                                borderRadius: "3px",
                                padding: "2px 8px",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardTag>
                </FadeInUp>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

const allNews: { date: string; category: string; title: string; thumbnail?: string; slug: string }[] = [
  {
    date: "2026-04-15",
    category: "取り組み",
    title: "株式会社テクノシンエイ様より中部大学ラグビー部へ温かいご支援",
    thumbnail: "/images/news/technoshinei-cover.jpg",
    slug: "technoshinei-chubu-rugby",
  },
  {
    date: "2026-04-03",
    category: "ブログ",
    title: "ホームページをリニューアルしました",
    thumbnail: "/images/news-renewal.png",
    slug: "renewal",
  },
];

const categories = ["すべて", "ブログ", "取り組み"];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("すべて");

  const filteredNews =
    activeCategory === "すべて"
      ? allNews
      : allNews.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageHeader label="NEWS" title="新着情報" />

      <section
        style={{
          backgroundColor: "#fff",
          paddingTop: 80,
          paddingBottom: 120,
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          {/* Category Filter Tabs */}
          <div
            style={{
              display: "flex",
              gap: 24,
              marginBottom: 40,
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: "none",
                  border: "none",
                  borderBottom:
                    activeCategory === cat
                      ? "2px solid #C84B2F"
                      : "2px solid transparent",
                  color: activeCategory === cat ? "#C84B2F" : "#5A5A5A",
                  fontSize: 14,
                  fontWeight: 500,
                  paddingBottom: 8,
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== cat) {
                    e.currentTarget.style.color = "#C84B2F";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== cat) {
                    e.currentTarget.style.color = "#5A5A5A";
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* News List */}
          <div>
            {filteredNews.map((item, index) => (
              <Link
                key={`${item.date}-${item.title}`}
                href={`/news/${item.slug}`}
                style={{
                  display: "block",
                  borderTop: index === 0 ? "1px solid #E8E4DE" : "none",
                  borderBottom: "1px solid #E8E4DE",
                  paddingTop: 20,
                  paddingBottom: 20,
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                {/* PC Layout */}
                <div className="news-row-pc">
                  {item.thumbnail && (
                    <div style={{ width: 160, height: 100, flexShrink: 0, marginRight: 20, position: "relative", borderRadius: 4, overflow: "hidden" }}>
                      <Image src={item.thumbnail} alt={item.title} fill style={{ objectFit: "cover" }} />
                    </div>
                  )}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 14,
                          color: "#5A5A5A",
                        }}
                      >
                        {item.date}
                      </span>
                      <span
                        style={{
                          fontSize: 12,
                          color: "#C84B2F",
                          border: "1px solid #C84B2F",
                          padding: "2px 12px",
                          borderRadius: 2,
                        }}
                      >
                        {item.category}
                      </span>
                    </div>
                    <span
                      className="news-title"
                      style={{
                        fontSize: 15,
                        color: "#222",
                        transition: "color 0.2s",
                      }}
                    >
                      {item.title}
                    </span>
                  </div>
                </div>

                {/* SP Layout */}
                <div className="news-row-sp">
                  {item.thumbnail && (
                    <div style={{ width: "100%", height: 180, position: "relative", borderRadius: 4, overflow: "hidden", marginBottom: 12 }}>
                      <Image src={item.thumbnail} alt={item.title} fill style={{ objectFit: "cover" }} />
                    </div>
                  )}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: 8,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 14,
                        color: "#5A5A5A",
                      }}
                    >
                      {item.date}
                    </span>
                    <span
                      style={{
                        fontSize: 12,
                        color: "#C84B2F",
                        border: "1px solid #C84B2F",
                        padding: "2px 12px",
                        borderRadius: 2,
                      }}
                    >
                      {item.category}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      color: "#222",
                    }}
                  >
                    {item.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (min-width: 768px) {
          .news-row-pc {
            display: flex;
            align-items: center;
          }
          .news-row-sp {
            display: none;
          }
        }
        @media (max-width: 767px) {
          .news-row-pc {
            display: none;
          }
          .news-row-sp {
            display: block;
          }
        }
        a:hover .news-title {
          color: #C84B2F !important;
        }
        @media (max-width: 767px) {
          div[style*="gap: 24px"] {
            gap: 16px !important;
          }
        }
      `}</style>
    </>
  );
}

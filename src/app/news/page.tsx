"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";

const allNews = [
  {
    date: "2026.03.01",
    category: "ブログ",
    title: "ホームページをリニューアルしました",
  },
  {
    date: "2026.02.23",
    category: "ブログ",
    title: "代表の清水が親孝行休暇を取得しました",
  },
  {
    date: "2026.02.15",
    category: "取り組み",
    title: "大学キャリア教育セミナーに登壇しました",
  },
  {
    date: "2026.02.01",
    category: "ブログ",
    title: "製造業A社様の採用ブランディング事例を公開しました",
  },
  {
    date: "2026.01.20",
    category: "取り組み",
    title: "地域を代表する企業100選に選出されました",
  },
  {
    date: "2025.12.15",
    category: "ブログ",
    title: "高校新卒採用の成功事例をご紹介します",
  },
  {
    date: "2025.12.01",
    category: "取り組み",
    title: "商工会議所と連携した地域企業支援プロジェクトを開始しました",
  },
  {
    date: "2025.11.15",
    category: "ブログ",
    title: "Instagram公式アカウントを開設しました",
  },
  {
    date: "2025.11.01",
    category: "取り組み",
    title: "SDGs推進パートナー企業として認定されました",
  },
  {
    date: "2025.10.01",
    category: "ブログ",
    title: "株式会社Singを設立しました",
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
              <div
                key={`${item.date}-${item.title}`}
                style={{
                  borderTop: index === 0 ? "1px solid #E8E4DE" : "none",
                  borderBottom: "1px solid #E8E4DE",
                  paddingTop: 20,
                  paddingBottom: 20,
                }}
              >
                {/* PC Layout */}
                <div className="news-row-pc">
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      color: "#5A5A5A",
                      width: 120,
                      flexShrink: 0,
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
                      flexShrink: 0,
                    }}
                  >
                    {item.category}
                  </span>
                  <span
                    className="news-title"
                    style={{
                      fontSize: 15,
                      color: "#222",
                      marginLeft: 16,
                      cursor: "pointer",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#C84B2F";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#222";
                    }}
                  >
                    {item.title}
                  </span>
                </div>

                {/* SP Layout */}
                <div className="news-row-sp">
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
              </div>
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
        @media (max-width: 767px) {
          div[style*="gap: 24px"] {
            gap: 16px !important;
          }
        }
      `}</style>
    </>
  );
}

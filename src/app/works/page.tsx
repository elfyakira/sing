"use client";

import { useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { FadeInUp } from "@/components/animations";

const categories = [
  { id: "all", label: "ALL" },
  { id: "web-video", label: "HP・動画制作" },
  { id: "animation", label: "アニメ動画制作" },
  { id: "katsuyaku", label: "カツヤク実施" },
] as const;

type CategoryId = (typeof categories)[number]["id"];

interface WorkItem {
  id: string;
  category: CategoryId;
  title: string;
  description: string;
  image: string;
  tags?: string[];
}

// --- 実績データ（随時追加・更新してください） ---
const works: WorkItem[] = [
  // HP・動画制作
  {
    id: "web-01",
    category: "web-video",
    title: "製造業A社様 採用サイト制作",
    description: "企業の魅力を最大限に引き出す採用特化型Webサイトを制作。応募数が前年比150%に向上。",
    image: "/images/work-placeholder.jpg",
    tags: ["Webサイト", "採用ブランディング"],
  },
  {
    id: "web-02",
    category: "web-video",
    title: "サービス業B社様 会社紹介動画",
    description: "社員インタビューを中心とした会社紹介動画を制作。採用説明会での活用で応募者の志望度が向上。",
    image: "/images/work-placeholder.jpg",
    tags: ["動画制作", "会社紹介"],
  },
  {
    id: "web-03",
    category: "web-video",
    title: "IT企業C社様 コーポレートサイトリニューアル",
    description: "ブランドイメージを刷新するコーポレートサイトのフルリニューアルを実施。",
    image: "/images/work-placeholder.jpg",
    tags: ["Webサイト", "コーポレート"],
  },
  // アニメ動画制作
  {
    id: "anim-01",
    category: "animation",
    title: "物流業D社様 サービス紹介アニメーション",
    description: "複雑なサービスフローをわかりやすく伝えるアニメーション動画を制作。",
    image: "/images/work-placeholder.jpg",
    tags: ["アニメーション", "サービス紹介"],
  },
  {
    id: "anim-02",
    category: "animation",
    title: "飲食業E社様 採用アニメ動画",
    description: "若年層に響くポップなアニメーションで、働く魅力を表現した採用動画。",
    image: "/images/work-placeholder.jpg",
    tags: ["アニメーション", "採用"],
  },
  // カツヤク実施
  {
    id: "katsu-01",
    category: "katsuyaku",
    title: "建設業F社様 組織改革プロジェクト",
    description: "評価制度の再設計と管理職研修を実施。離職率が30%改善。",
    image: "/images/work-placeholder.jpg",
    tags: ["組織改革", "評価制度"],
  },
  {
    id: "katsu-02",
    category: "katsuyaku",
    title: "小売業G社様 新人定着プログラム",
    description: "入社後6ヶ月の定着支援プログラムを導入。早期離職率を大幅に削減。",
    image: "/images/work-placeholder.jpg",
    tags: ["定着支援", "研修"],
  },
  {
    id: "katsu-03",
    category: "katsuyaku",
    title: "医療法人H様 マネジメント研修",
    description: "中間管理職向けマネジメント研修を全3回で実施。チーム生産性が向上。",
    image: "/images/work-placeholder.jpg",
    tags: ["マネジメント", "研修"],
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
              {filteredWorks.map((work) => (
                <FadeInUp key={work.id}>
                  <div
                    className="group rounded-lg overflow-hidden"
                    style={{
                      border: "1px solid #e8e8e8",
                      transition: "box-shadow 0.3s",
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
                  </div>
                </FadeInUp>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

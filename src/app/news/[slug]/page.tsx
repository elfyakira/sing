"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import PageHeader from "@/components/PageHeader";

const articles: Record<
  string,
  { date: string; category: string; title: string; thumbnail: string; body: React.ReactNode }
> = {
  renewal: {
    date: "2026-04-03",
    category: "ブログ",
    title: "ホームページをリニューアルしました",
    thumbnail: "/images/news-renewal.png",
    body: (
      <>
        <p>
          このたび、株式会社Singのホームページを全面リニューアルいたしました。
        </p>
        <p>
          今回のリニューアルでは、私たちの事業内容や想いをより分かりやすくお伝えできるよう、デザイン・構成ともに一新しました。
        </p>

        <h2>リニューアルのポイント</h2>

        <h3>1. デザインの刷新</h3>
        <p>
          企業の「人づくり」を支援するSingの姿勢が伝わるよう、温かみと信頼感のあるデザインに生まれ変わりました。動画やビジュアルを効果的に活用し、私たちの世界観をより直感的に感じていただけます。
        </p>

        <h3>2. サービス紹介の充実</h3>
        <p>
          「ツナゲル」「カツヤク」「Singメディア」の3つのサービスについて、それぞれの特長や導入メリットをより詳しくご紹介しています。採用から定着・活躍まで、一気通貫で支援するSingの強みをご覧ください。
        </p>

        <h3>3. 取り組み・実績の発信</h3>
        <p>
          SDGsや地域貢献活動、若者のキャリア教育支援など、Singが大切にしている社会的取り組みについても発信してまいります。
        </p>

        <p>
          今後も、ブログやお知らせを通じて最新の情報を発信してまいります。引き続き、株式会社Singをよろしくお願いいたします。
        </p>
      </>
    ),
  },
};

export default function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const article = articles[slug];
  if (!article) notFound();

  return (
    <>
      <PageHeader label="NEWS" title="新着情報" />

      <section style={{ backgroundColor: "#fff", paddingTop: 60, paddingBottom: 120 }}>
        <article style={{ maxWidth: 780, margin: "0 auto", paddingLeft: 20, paddingRight: 20 }}>
          {/* Meta */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#5A5A5A" }}>
              {article.date}
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
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "clamp(22px, 4vw, 30px)",
              fontWeight: 700,
              color: "#222",
              lineHeight: 1.5,
              marginBottom: 32,
            }}
          >
            {article.title}
          </h1>

          {/* Thumbnail */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/9",
              borderRadius: 8,
              overflow: "hidden",
              marginBottom: 48,
            }}
          >
            <Image src={article.thumbnail} alt={article.title} fill style={{ objectFit: "cover" }} />
          </div>

          {/* Body */}
          <div className="article-body">{article.body}</div>

          {/* Back link */}
          <div style={{ marginTop: 64, textAlign: "center" }}>
            <Link
              href="/news"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 15,
                fontWeight: 600,
                color: "#C84B2F",
                textDecoration: "none",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 18l-6-6 6-6" />
              </svg>
              一覧に戻る
            </Link>
          </div>
        </article>
      </section>

      <style jsx global>{`
        .article-body p {
          font-size: 15px;
          line-height: 2.0;
          color: #333;
          margin-bottom: 24px;
        }
        .article-body h2 {
          font-size: 22px;
          font-weight: 700;
          color: #222;
          margin-top: 48px;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 2px solid #C84B2F;
        }
        .article-body h3 {
          font-size: 18px;
          font-weight: 700;
          color: #222;
          margin-top: 32px;
          margin-bottom: 12px;
          padding-left: 14px;
          border-left: 3px solid #C84B2F;
        }
      `}</style>
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import PageHeader from "@/components/PageHeader";

const articles: Record<
  string,
  { date: string; category: string; title: string; thumbnail: string; thumbnailPosition?: string; body: React.ReactNode }
> = {
  "kasugai-gujo-odori-vol3": {
    date: "2026-04-16",
    category: "取り組み",
    title: "地域と人をつなぐ挑戦。第3回かすがい郡上踊りにステージ参加します！",
    thumbnail: "/images/news/kasugai-gujo-odori-01.jpg",
    thumbnailPosition: "center 20%",
    body: (
      <>
        <p>
          株式会社Singは、2026年5月23日（土）に開催される
          <br />
          「第3回 かすがい郡上踊り」において、スポンサーとして参画し、ステージ企画にも参加いたします。
        </p>
        <p>
          本イベントは、岐阜県郡上市の伝統文化である「郡上おどり」を、春日井の地で再現し、地域の方々が世代を超えてつながる場として開催されているものです。
        </p>

        <p>
          Singはこれまで、企業の採用・定着・活躍支援を通じて、「人が輝き続ける組織づくり」に向き合ってきました。
          <br />
          私たちは考えています。
        </p>

        <p style={{ fontWeight: 700, fontSize: 18 }}>人が輝けば、企業は続く。</p>

        <p>
          そしてその企業は、地域の中で生き、支え合いながら存在している。
          <br />
          つまり、“企業の成長”と“地域の活性”は切り離せないものです。
        </p>

        <p>現在、多くの企業で</p>
        <p style={{ marginBottom: 8 }}>・採用しても定着しない</p>
        <p>・育てても活躍の場がない</p>
        <p>といった課題が生まれています。</p>

        <p>
          その根本にあるのは、“人と人とのつながりの希薄さ”ではないかと私たちは考えています。
          <br />
          だからこそSingは、採用・定着・活躍を一気通貫で支援するだけでなく、地域や教育、文化といった領域にも関わりながら、人が長く活躍できる社会づくりに取り組んでいます。
        </p>

        <p>
          当日は、踊り・ステージ・マルシェなど、誰でも楽しめるコンテンツが多数用意されています。
          <br />
          Singもステージを通じて、この場をさらに盛り上げていきます。
        </p>

        <p>ぜひ現地で、“人と人がつながる空気”を体感してください。</p>

        <h3>■イベント概要</h3>
        <p style={{ marginBottom: 8 }}>・日時：2026年5月23日（土）13:00〜20:30</p>
        <p style={{ marginBottom: 8 }}>・会場：JR勝川駅前通商店街 / 勝川駅前公園 ほか</p>
        <p>・雨天決行</p>

        <div className="article-gallery">
          <div className="article-image">
            <Image
              src="/images/news/kasugai-gujo-odori-01.jpg"
              alt="第3回 かすがい郡上踊り 雑誌掲載 1"
              width={1600}
              height={2263}
              sizes="(max-width: 780px) 100vw, 780px"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="article-image">
            <Image
              src="/images/news/kasugai-gujo-odori-02.jpg"
              alt="第3回 かすがい郡上踊り 雑誌掲載 2"
              width={1600}
              height={2263}
              sizes="(max-width: 780px) 100vw, 780px"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </>
    ),
  },
  "one-dining-table-fes-vol4": {
    date: "2026-04-16",
    category: "ブログ",
    title: "【今年も出店決定】One Dining Table Fes vol.4 にSingが参加します！",
    thumbnail: "/images/news/one-dining-table-fes-cover.jpg",
    thumbnailPosition: "center 20%",
    body: (
      <>
        <p>
          昨年、多くの方にご来場いただき大盛況となった
          <br />
          「One Dining Table Fes」に、今年も出店させていただくことが決定しました！
        </p>
        <p>
          2026年6月13日（土）11:00～17:00、会場は名古屋・オアシス21。
          <br />
          入場無料で、なんと約5万人規模の来場を見込む大型フェスです。
        </p>

        <h3>■「いただきます」から始まる、つながりの場</h3>
        <p>
          このイベントは、「いただきますは楽しい。」をテーマに、
          <br />
          食を通じて人と人がつながるきっかけを生み出すフェスです。
        </p>
        <p>
          子どもたちの成長支援や食育、地域とのつながりを大切にしながら、
          <br />
          “ただのイベントでは終わらない価値”がここにはあります。
        </p>

        <h3>■昨年のSingブースは…まさかの大行列</h3>
        <p>昨年のSingブースでは、「うまい棒取り放題」企画を実施。</p>

        <p>結果はというと…</p>
        <p style={{ marginBottom: 8 }}>👉 会場でもトップクラスの大行列</p>
        <p style={{ marginBottom: 8 }}>👉 子どもも大人も大盛り上がり</p>
        <p>👉 気づけば“人だかり”ができるブースに</p>

        <p>正直、想像以上の反響でした。</p>

        <p>今年のテーマは「ツナガル」の先にある“ツム（紡ぐ）”。</p>

        <p>Singとしても、ただ楽しむだけでなく、</p>

        <p style={{ marginBottom: 8 }}>・人と人がつながるきっかけ</p>
        <p style={{ marginBottom: 8 }}>・未来につながる出会い</p>
        <p>・子どもたちにとっての新しい体験</p>

        <p>そんな場をつくれるようなブースを準備しています。</p>

        <p>
          昨年来ていただいた方も、今年初めての方も。
          <br />
          ふらっと立ち寄るだけでも大歓迎です。
        </p>

        <p>
          “いただきます”から始まるこのフェスで、
          <br />
          また新しい出会いが生まれることを楽しみにしています。
        </p>

        <p style={{ marginBottom: 8 }}>📍開催日：2026年6月13日（土）</p>
        <p style={{ marginBottom: 8 }}>📍時間：11:00〜17:00</p>
        <p style={{ marginBottom: 8 }}>📍会場：オアシス21（名古屋市）</p>
        <p>📍入場：無料</p>
      </>
    ),
  },
  "technoshinei-chubu-rugby": {
    date: "2026-04-15",
    category: "取り組み",
    title: "株式会社テクノシンエイ様より中部大学ラグビー部へ温かいご支援",
    thumbnail: "/images/news/technoshinei-cover.jpg",
    body: (
      <>
        <p>
          この度、株式会社テクノシンエイ様より、中部大学ラグビー部の合宿に向けて、応援とともに素敵な差し入れが届けられました。
        </p>
        <p>
          日々厳しいトレーニングに励む選手の皆様にとって、このようなご支援は大きな励みとなります。株式会社テクノシンエイ様の温かいお気持ちと継続的なご支援に、心より感謝申し上げます。
        </p>

        <div className="article-gallery">
          <div className="article-image">
            <Image
              src="/images/news/technoshinei-01.jpg"
              alt="株式会社テクノシンエイ様からの差し入れの様子 1"
              width={1600}
              height={1200}
              sizes="(max-width: 780px) 100vw, 780px"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="article-image">
            <Image
              src="/images/news/technoshinei-02.jpg"
              alt="株式会社テクノシンエイ様からの差し入れの様子 2"
              width={1600}
              height={1200}
              sizes="(max-width: 780px) 100vw, 780px"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="article-image">
            <Image
              src="/images/news/technoshinei-03.jpg"
              alt="株式会社テクノシンエイ様からの差し入れの様子 3"
              width={1600}
              height={1200}
              sizes="(max-width: 780px) 100vw, 780px"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>

        <p>
          スポーツに真摯に向き合う中部大学ラグビー部の皆様、そしてそれを支える企業の想い。このような素晴らしい取り組みが広がっていくことで、より多くの方々にスポーツの魅力や支援の大切さが伝わっていくことを願っております。
        </p>
        <p>
          株式会社Singといたしましても、できるだけ多くの方々にこうした取り組みを知っていただき、応援の輪が広がっていくことを心より願っております。
        </p>
        <p>
          今後も中部大学ラグビー部のさらなるご活躍を応援するとともに、株式会社テクノシンエイ様のご発展をお祈り申し上げます。
        </p>

        <p>
          【株式会社テクノシンエイ】
          <br />
          <a href="http://www.t-shinei.co.jp/" target="_blank" rel="noopener noreferrer">
            http://www.t-shinei.co.jp/
          </a>
        </p>
        <p>
          【中部大学ラグビー部】
          <br />
          <a href="https://chubu-tigers.com/" target="_blank" rel="noopener noreferrer">
            https://chubu-tigers.com/
          </a>
        </p>
      </>
    ),
  },
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
            <Image src={article.thumbnail} alt={article.title} fill style={{ objectFit: "cover", objectPosition: article.thumbnailPosition ?? "center" }} />
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
        .article-body ul {
          font-size: 15px;
          line-height: 2.0;
          color: #333;
          margin-bottom: 24px;
          padding-left: 1.4em;
          list-style: disc;
        }
        .article-body ul li {
          margin-bottom: 8px;
        }
        .article-body a {
          color: #C84B2F;
          text-decoration: underline;
          word-break: break-all;
        }
        .article-body .article-gallery {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin: 32px 0 40px;
        }
        .article-body .article-image {
          border-radius: 8px;
          overflow: hidden;
          background-color: #f5f5f5;
        }
      `}</style>
    </>
  );
}

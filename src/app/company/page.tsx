import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import StructuredData from "@/components/StructuredData";
import { company, contact, locations } from "@/lib/site";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "会社案内",
  description:
    "株式会社Singの会社概要とSingの歴史。採用支援・組織コンサルティング・ブランディングを通じて、人が輝く社会の実現を目指します。",
};

const companyInfo = [
  { label: "会社名", value: "株式会社Sing" },
  {
    label: "事業内容",
    value:
      "採用支援 / 営業・企業ブランディング支援 / 人事・組織コンサルティング / SNS・デジタルブランディング / クリエイティブ制作",
  },
  { label: "代表取締役", value: "清水 駿之介" },
  { label: "所在地", value: "address" },
  { label: "電話番号", value: "phone" },
  { label: "FAX", value: "fax" },
  { label: "メールアドレス", value: "email" },
];

const storyChapters = [
  {
    label: "序章",
    title: "起業前夜 〜成功の裏にあった、強烈な違和感〜",
    body: [
      "物語の始まりは、清水駿之介が人財業界に身を置いていた時代に遡ります。",
      "前職の美容関係でトップセールスを記録し、鳴り物入りで飛び込んだ人財の世界。しかし、そこで彼が目の当たりにしたのは、「入社してもすぐに辞めてしまう」圧倒的な離職率の高さと、効率重視のあまり「人をモノのように扱う」業界の悪しき風潮でした。",
      "「なぜ、こんなに多くの人が仕事で苦しんでいるのか？」\n「なぜ、企業も人も幸せになれない採用が繰り返されるのか？」",
      "幼い頃から母に教え込まれた『挑戦を恐れない』という精神が、彼の心を突き動かします。「無いのであれば、自分が理想の仕組みを創るしかない」。働くことの価値観を根本から変革するため、清水は自ら起業の道へ踏み出す決意を固めました。",
    ],
  },
  {
    label: "第1章",
    title: "Singの誕生 〜「採用して終わり」への挑戦〜",
    body: [
      "愛知県春日井市の地で「合同会社Sing」は産声を上げました。\n掲げた理念はただ一つ、『仕事が苦しいという常識を180度変える』こと。",
      "しかし、立ち上げ当初から順風満帆だったわけではありません。世の中に星の数ほどある採用サービスの中で、Singが選んだのは「最も泥臭い道」でした。単に人を集めるだけでなく、入社後の人間関係の悩みやマネジメント不足にまで踏み込み、上司と部下が共に成長できる仕組みを組織にインストールしていく。",
      "現場のリーダーたちと膝を突き合わせ、幾度もディスカッションを重ねながら、Sing独自のメソッドである採用・定着支援の「ツナゲル」、育成・仕組み化の「カツヤク」といったサービスが確固たる形となっていきました。",
    ],
  },
  {
    label: "第2章",
    title: "広がる共感の輪、そして多角化へ",
    body: [
      "「あの会社に伴走してもらえば、組織が変わる」。そんな評判は少しずつ、しかし確実に地域の中小企業へと広がっていきました。",
      "Singはさらに企業の魅力を引き出すため、WEBや映像の「各種制作事業」や、SNS運用支援の「バツグン」を展開。企業の隠れた想いを可視化し、求職者の心を動かすブランディングへと昇華させていきました。",
      "さらに、デジタル全盛の時代にあえて体温の伝わるオフラインメディア「月刊Sing」を創刊。経営者の熱い想いを一冊の雑誌に込め、直接手渡しで届けるこの独自メディアは、地域企業同士の新たなビジネスマッチングを生み出すプラットフォームへと成長します。",
      "同じ頃、清水自身も複数社の経営に乗り出し、そこで得た「生きた経営ノウハウ」をSingのクライアントへダイレクトに還元する強力なサイクルが生まれました。",
    ],
  },
  {
    label: "第3章",
    title: "株式会社への進化と、次世代へのバトン",
    body: [
      "事業の急成長と、より多くの企業を牽引していく覚悟を胸に、Singは「株式会社Sing」へと組織をアップデートし、新たなステージへと突入しました。",
      "現在、Singが「人財採用×育成×ブランディング」という三位一体のサポートで救い出しているのは、目の前の企業課題だけではありません。",
      "清水の最終的な夢である「児童養護施設の設立」。様々な事情を抱える子どもたちに、温かい居場所と万全の教育を提供し、「大人になるって楽しいんだ」と胸を張って言える希望のバトンを渡すこと。",
      "Singが素晴らしい職場を社会に増やし続けるのは、次に社会へ羽ばたいていく子どもたちが夢を持てる世界を創るためです。",
      "一人の青年の違和感から始まった小さな挑戦は、今、多くの企業と人を巻き込みながら、「次世代へのバトンをつなぐ」という大きなうねりとなって未来へ進み続けています。Singの物語は、まだ始まったばかりです。",
    ],
  },
];

export default function CompanyPage() {
  const hq = locations.headquarters;

  return (
    <>
      <StructuredData
        data={generateBreadcrumbSchema([
          { name: "ホーム", url: "https://singgroup.biz" },
          { name: "会社案内", url: "https://singgroup.biz/company" },
        ])}
      />
      <PageHeader label="COMPANY" title="会社案内" />

      {/* Section: 健康経営優良法人認定 */}
      <section className="bg-white" style={{ padding: "80px 20px 100px" }}>
        <div
          className="mx-auto text-center"
          style={{ maxWidth: "800px" }}
        >
          <Image
            src="/images/kenkou-keiei-2026.jpg"
            alt="健康経営優良法人2026 認定ロゴ"
            width={320}
            height={320}
            className="mx-auto object-contain"
            style={{ maxWidth: "320px", height: "auto" }}
          />
          <h2
            className="font-bold"
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              color: "#222",
              marginTop: "32px",
              marginBottom: "24px",
            }}
          >
            健康経営優良法人2026 認定
          </h2>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 2.0,
              color: "#555",
              textAlign: "left",
            }}
          >
            この度、株式会社Singは「健康経営優良法人2026（中小規模法人部門）」に認定されました。
            <br />
            社員一人ひとりが心身ともに健康で、安心して働き続けられる環境づくりを大切にしてきた取り組みが評価されたことを大変嬉しく思います。
            <br />
            これからも、「人が輝く会社」を目指し、社員の健康を大切にした組織づくりを推進してまいります。
            <br />
            今後とも株式会社Singをよろしくお願いいたします。
          </p>
        </div>
      </section>

      {/* Section 1: Company Overview */}
      <section className="bg-white" style={{ padding: "80px 20px 100px" }}>
        <div className="mx-auto" style={{ maxWidth: "1000px" }}>
          {/* Section title */}
          <div style={{ marginBottom: "48px" }}>
            <p
              style={{
                fontSize: "clamp(36px, 5vw, 48px)",
                fontFamily: "'Anton', sans-serif",
                letterSpacing: "0.05em",
                color: "#C84B2F",
                lineHeight: 1,
                marginBottom: "8px",
              }}
            >
              Overview
            </p>
            <h2
              className="font-bold"
              style={{ fontSize: "clamp(20px, 3vw, 26px)", color: "#222" }}
            >
              会社概要
            </h2>
          </div>

          {/* Info table */}
          <div className="border-t border-[#e0e0e0]">
            {companyInfo.map((item) => {
              let content: React.ReactNode = item.value;

              if (item.value === "address") {
                content = (
                  <div>
                    <p style={{ marginBottom: "16px" }}>
                      〒{hq.zipCode}
                      <br />
                      {hq.address}
                    </p>
                    {/* Google Maps embed */}
                    <div
                      className="rounded-lg overflow-hidden"
                      style={{ width: "100%", height: "300px" }}
                    >
                      <iframe
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(hq.address)}&output=embed&z=16`}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="所在地"
                      />
                    </div>
                  </div>
                );
              } else if (item.value === "phone") {
                content = contact.phoneFormatted || contact.phone || "—";
              } else if (item.value === "fax") {
                content = contact.fax || "—";
              } else if (item.value === "email") {
                content = contact.email ? (
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-[#C84B2F] hover:underline"
                  >
                    {contact.email}
                  </a>
                ) : (
                  "—"
                );
              }

              return (
                <div
                  key={item.label}
                  className="flex flex-col lg:flex-row border-b border-[#e0e0e0]"
                  style={{ padding: "20px 0" }}
                >
                  <div
                    className="font-bold shrink-0"
                    style={{
                      width: "180px",
                      fontSize: "15px",
                      color: "#222",
                      marginBottom: "8px",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="flex-1"
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.8,
                      color: "#333",
                    }}
                  >
                    {content}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Sing's Story */}
      <section style={{ backgroundColor: "#F5F1EB", padding: "100px 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "1000px" }}>
          {/* Section title */}
          <div className="text-center" style={{ marginBottom: "24px" }}>
            <p
              style={{
                fontSize: "clamp(36px, 5vw, 48px)",
                fontFamily: "'Anton', sans-serif",
                letterSpacing: "0.05em",
                color: "#C84B2F",
                lineHeight: 1,
                marginBottom: "8px",
              }}
            >
              Story
            </p>
            <h2
              className="font-bold"
              style={{ fontSize: "clamp(20px, 3vw, 26px)", color: "#222" }}
            >
              Singの歴史
            </h2>
          </div>

          {/* Lead text */}
          <p
            className="text-center font-bold"
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: 1.8,
              color: "#222",
              marginBottom: "64px",
            }}
          >
            「仕事が苦しい」という常識を覆す。
            <br />
            一人の青年の違和感から始まった、希望をつなぐ物語。
          </p>

          {/* Story chapters */}
          <div className="space-y-16">
            {storyChapters.map((chapter, i) => (
              <div key={i}>
                {/* Chapter heading */}
                <h3
                  className="font-bold"
                  style={{
                    fontSize: "clamp(17px, 2.2vw, 21px)",
                    lineHeight: 1.5,
                    color: "#222",
                    paddingBottom: "12px",
                    marginBottom: "24px",
                    borderBottom: "2px solid #C84B2F",
                    display: "inline-block",
                  }}
                >
                  {chapter.title}
                </h3>

                {/* Chapter body */}
                <div
                  style={{
                    fontSize: "clamp(14px, 1.4vw, 15px)",
                    lineHeight: 2.0,
                    color: "#333",
                  }}
                >
                  {chapter.body.map((paragraph, j) => (
                    <p
                      key={j}
                      className="whitespace-pre-line"
                      style={{
                        marginBottom: j < chapter.body.length - 1 ? "20px" : 0,
                      }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Philosophy - Mission / Vision / Value */}
      <section className="bg-white" style={{ padding: "100px 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "900px" }}>
          {/* Section title */}
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <p
              style={{
                fontSize: "clamp(36px, 5vw, 48px)",
                fontFamily: "'Anton', sans-serif",
                letterSpacing: "0.05em",
                color: "#C84B2F",
                lineHeight: 1,
                marginBottom: "8px",
              }}
            >
              Philosophy
            </p>
            <h2
              className="font-bold"
              style={{ fontSize: "clamp(20px, 3vw, 26px)", color: "#222" }}
            >
              企業理念
            </h2>
          </div>

          {/* MISSION */}
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <p
              style={{
                fontSize: "13px",
                color: "#C84B2F",
                letterSpacing: "0.15em",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              MISSION
            </p>
            <p
              className="font-bold"
              style={{
                fontSize: "clamp(22px, 3.5vw, 30px)",
                lineHeight: 1.6,
                color: "#222222",
              }}
            >
              未来を変える、未来へ繋ぐ、未来が輝く
            </p>
          </div>

          {/* VISION */}
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <p
              style={{
                fontSize: "13px",
                color: "#C84B2F",
                letterSpacing: "0.15em",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              VISION
            </p>
            <p
              className="font-bold"
              style={{
                fontSize: "clamp(18px, 2.5vw, 22px)",
                lineHeight: 1.6,
                color: "#222222",
              }}
            >
              次世代へのバトンを繋いで、誰もが笑顔で活躍できる社会の実現
            </p>
          </div>

          {/* VALUE */}
          <div className="text-center">
            <p
              style={{
                fontSize: "13px",
                color: "#C84B2F",
                letterSpacing: "0.15em",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                marginBottom: "32px",
              }}
            >
              VALUE
            </p>

            <div
              className="text-left mx-auto"
              style={{ maxWidth: "640px" }}
            >
              {[
                { word: "Professional", desc: "「全てにおいて高い視座を持ち、素直で謙虚に考え行動しよう」" },
                { word: "Aggressive", desc: "「主体性を持ち、仲間とパートナーの為に積極的な行動をしよう」" },
                { word: "Sing", desc: "「頑張るを楽しむに変えて、人生を笑って楽しもう」" },
                { word: "Success", desc: "「勝つべくして勝つ。必ず成功させる為に準備をしよう」" },
                { word: "Innovation", desc: "「昨日よりも今日。現状に満足せず、常に改革し続けよう」" },
                { word: "Obligation", desc: "「自身の責務を理解し、自律して行動しよう」" },
                { word: "Nexus", desc: "「パートナーと仲間との繋がりを大切にし、感謝を伝えよう。そして次世代にバトンを繋ごう」" },
              ].map((item, index, arr) => (
                <div
                  key={index}
                  style={{ marginBottom: index < arr.length - 1 ? "20px" : 0 }}
                >
                  <p style={{ marginBottom: "4px" }}>
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 700,
                        fontSize: "20px",
                        color: "#C84B2F",
                      }}
                    >
                      {item.word.charAt(0)}
                    </span>
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                        fontSize: "16px",
                        color: "#222222",
                      }}
                    >
                      {item.word.slice(1)}
                    </span>
                  </p>
                  <p style={{ fontSize: "14px", color: "#5A5A5A" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* PASSION reveal */}
            <div style={{ marginTop: "48px" }}>
              <p style={{ fontSize: "14px", color: "#5A5A5A", marginBottom: "12px" }}>
                すべての頭文字をつなげると ——
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "28px",
                  color: "#C84B2F",
                  marginBottom: "12px",
                }}
              >
                PASSION
              </p>
              <p style={{ fontSize: "15px", color: "#222222" }}>
                誰よりも高い情熱を持って、笑顔を絶やさず明るく生きよう。
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

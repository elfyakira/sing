import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "代表挨拶",
  description:
    "株式会社Sing代表・清水駿之介からのメッセージ。採用支援・組織コンサルティングへの想いと企業理念をお伝えします。",
};

export default function MessagePage() {
  return (
    <>
      <PageHeader label="MESSAGE" title="代表挨拶" />

      {/* CEO Profile Section - Left photo, Right text */}
      <section
        className="bg-white"
        style={{ padding: "80px 20px 100px" }}
      >
        <div className="mx-auto" style={{ maxWidth: "1200px" }}>
          {/* Section label */}
          <div style={{ marginBottom: "40px" }}>
            <p
              style={{
                fontSize: "13px",
                color: "#C84B2F",
                letterSpacing: "0.15em",
                fontFamily: "'Anton', sans-serif",
                marginBottom: "8px",
              }}
            >
              Message
            </p>
            <h2
              className="font-bold"
              style={{
                fontSize: "clamp(20px, 3vw, 26px)",
                lineHeight: 1.6,
                color: "#222222",
              }}
            >
              「仕事は苦しいもの」という常識を変え、<br />
              次世代へ希望のバトンをつなぐ社会へ。
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Left: CEO Photo */}
            <div className="lg:w-[35%] shrink-0">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/images/ceo.jpg"
                  alt="清水 駿之介"
                  width={460}
                  height={600}
                  className="w-full h-auto"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Right: Name + Message */}
            <div className="lg:w-[65%]">
              {/* CEO Name & Title */}
              <div style={{ marginBottom: "32px" }}>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#999",
                    marginBottom: "4px",
                  }}
                >
                  株式会社Sing 代表
                </p>
                <p
                  className="font-bold"
                  style={{ fontSize: "24px", color: "#222222" }}
                >
                  清水 駿之介
                </p>
              </div>

              {/* Message Body */}
              <div
                style={{
                  fontSize: "clamp(14px, 1.4vw, 15px)",
                  lineHeight: 2.0,
                  color: "#333333",
                }}
              >
                <p className="whitespace-pre-line" style={{ marginBottom: "24px" }}>
                  {`「人が活躍し、心から輝ける職場をつくりたい」。\nその想いが、株式会社Singの原点です。`}
                </p>
                <p className="whitespace-pre-line" style={{ marginBottom: "24px" }}>
                  {`企業は、人によってつくられます。\nそして働く人たちの想いによって、次の世代へと続いていきます。`}
                </p>
                <p className="whitespace-pre-line" style={{ marginBottom: "24px" }}>
                  {`しかし現在、日本では深刻な人手不足や離職率の増加など、\n人財に関する課題が企業成長の大きな壁となっています。\n一方で採用サービスは乱立し、多くの企業が\n「自社に本当に必要な解決策」を見出せずにいます。`}
                </p>
                <p className="whitespace-pre-line" style={{ marginBottom: "24px" }}>
                  {`私自身、人材業界に身を置く中で、\n離職率の高さや、人が本来持つ可能性が活かされていない現実に\n強い違和感と危機感を覚えました。`}
                </p>
                <p className="whitespace-pre-line" style={{ marginBottom: "24px" }}>
                  {`人は、本来それぞれの個性や可能性を持っています。\nそしてその力は、環境次第で必ず輝くと私は信じています。`}
                </p>
                <p className="whitespace-pre-line" style={{ marginBottom: "24px" }}>
                  だからこそSingでは、単なる「人手の確保」にとどまらず、
                </p>
                <p
                  className="font-bold text-center"
                  style={{
                    fontSize: "clamp(16px, 1.8vw, 18px)",
                    color: "#C84B2F",
                    marginBottom: "24px",
                    letterSpacing: "0.1em",
                  }}
                >
                  採用 → 定着 → 活躍
                </p>
                <p className="whitespace-pre-line" style={{ marginBottom: "24px" }}>
                  までを見据えた人づくりを支援しています。
                </p>
                <p className="whitespace-pre-line" style={{ marginBottom: "24px" }}>
                  {`企業の理念や魅力を言語化するブランディング、\n現場に入り込み共に課題を解決する伴走型の組織支援を通して、\n企業が自ら成長し続けられる仕組みをつくる。`}
                </p>
                <p className="whitespace-pre-line" style={{ marginBottom: "24px" }}>
                  {`現在の人手不足だけでなく、\n次世代の人材が希望を持って働ける社会をつくること。`}
                </p>
                <p
                  className="font-bold whitespace-pre-line"
                  style={{ fontSize: "clamp(15px, 1.5vw, 16px)", color: "#222" }}
                >
                  それが、私たちSingの使命です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Detailed Message */}
      <section
        className="bg-white"
        style={{ padding: "0 20px 100px" }}
      >
        <div className="mx-auto" style={{ maxWidth: "1200px" }}>
          {/* Item 1 */}
          <div style={{ borderTop: "1px solid #e0e0e0", paddingTop: "48px", marginBottom: "64px" }}>
            <h3
              className="font-bold flex items-start gap-3"
              style={{
                fontSize: "clamp(18px, 2.2vw, 22px)",
                lineHeight: 1.6,
                color: "#222",
                marginBottom: "24px",
              }}
            >
              <span style={{ color: "#C84B2F", fontSize: "24px", lineHeight: 1.4 }}>—</span>
              <span>人間関係の悩みを絶ち、「仕事をゲーム化する」育成哲学</span>
            </h3>
            <div
              style={{
                fontSize: "clamp(14px, 1.4vw, 15px)",
                lineHeight: 2.0,
                color: "#333",
                paddingLeft: "36px",
              }}
            >
              <p style={{ marginBottom: "20px" }}>
                企業が抱える人材定着の最大の壁は「人間関係」にあります。そしてその原因の多くは、上司が「上司としての正しいマネジメント」を教わる機会がないまま現場に立っていることに起因しています。
              </p>
              <p>
                私が組織づくりにおいて提唱しているのは、「リーダーの仕事は、仕事をゲームにすること」だという考え方です。ゲームのように、目標をクリアする楽しさや、昨日より今日自分が成長しているという実感を得られる仕組みがあれば、人は自ら考え、喜んで動き出します。ただ業務スキルを教え込むのではなく、上司と部下が共にワクワクしながら成長の喜びを分かち合える「自走する組織」の仕組みを社会にインストールすること。それが、私たちの提供する人材育成の本質です。
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div style={{ borderTop: "1px solid #e0e0e0", paddingTop: "48px", marginBottom: "64px" }}>
            <h3
              className="font-bold flex items-start gap-3"
              style={{
                fontSize: "clamp(18px, 2.2vw, 22px)",
                lineHeight: 1.6,
                color: "#222",
                marginBottom: "24px",
              }}
            >
              <span style={{ color: "#C84B2F", fontSize: "24px", lineHeight: 1.4 }}>—</span>
              <span>すべての原動力は、「挑戦を恐れない」母からの教え</span>
            </h3>
            <div
              style={{
                fontSize: "clamp(14px, 1.4vw, 15px)",
                lineHeight: 2.0,
                color: "#333",
                paddingLeft: "36px",
              }}
            >
              <p style={{ marginBottom: "20px" }}>
                私が起業という道を選び、次々と新しい事業領域を開拓し続けている背景には、幼い頃からの母の教育が大きく影響しています。「失敗を恐れず、まずはやってみる」「どんな壁にぶつかっても諦めない」。このチャレンジ精神こそが、私のすべての原動力です。
              </p>
              <p>
                この精神は、そのままSingの企業姿勢にも通じています。採用や組織づくりという企業の根本的な、そして困難な課題に対して、私たちは決して諦めず、泥臭くクライアント様に伴走し続けます。私自身が常に挑戦し続ける背中を見せることで、自社の社員たち、そして関わってくださるすべての企業様に「挑戦することの素晴らしさ」を伝えていきたいと強く思っています。
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div style={{ borderTop: "1px solid #e0e0e0", paddingTop: "48px", marginBottom: "64px" }}>
            <h3
              className="font-bold flex items-start gap-3"
              style={{
                fontSize: "clamp(18px, 2.2vw, 22px)",
                lineHeight: 1.6,
                color: "#222",
                marginBottom: "24px",
              }}
            >
              <span style={{ color: "#C84B2F", fontSize: "24px", lineHeight: 1.4 }}>—</span>
              <span>4社の経営を通じて追求する「仕事を楽しむ」という本質</span>
            </h3>
            <div
              style={{
                fontSize: "clamp(14px, 1.4vw, 15px)",
                lineHeight: 2.0,
                color: "#333",
                paddingLeft: "36px",
              }}
            >
              <p style={{ marginBottom: "20px" }}>
                私は現在、株式会社Singを含めて4つの会社を経営しています。分野の異なる事業を多角的に展開しているのは、あらゆる業界やフィールドにおいて「人が輝けるプラットフォーム」を自らの手で創出したいという強い信念があるからです。
              </p>
              <p style={{ marginBottom: "20px" }}>
                また、私自身が複数の会社でリアルな経営課題の矢面に立ち、現場と向き合うことで得た知見は、Singが提供する「採用・育成・ブランディング」の生きたノウハウとして、クライアントの皆様へダイレクトに還元されています。
              </p>
              <p>
                「仕事＝苦しいもの」という世の中の常識を180度変えたい。働くすべての人が目標に向かって熱中し、心から「仕事が楽しい」と思える世の中をつくっていく。それが私の目指すビジネスの在り方です。
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div style={{ borderTop: "1px solid #e0e0e0", paddingTop: "48px", marginBottom: "64px" }}>
            <h3
              className="font-bold flex items-start gap-3"
              style={{
                fontSize: "clamp(18px, 2.2vw, 22px)",
                lineHeight: 1.6,
                color: "#222",
                marginBottom: "24px",
              }}
            >
              <span style={{ color: "#C84B2F", fontSize: "24px", lineHeight: 1.4 }}>—</span>
              <span>将来の夢。児童養護施設をつくり、次世代へバトンをつなぐ</span>
            </h3>
            <div
              style={{
                fontSize: "clamp(14px, 1.4vw, 15px)",
                lineHeight: 2.0,
                color: "#333",
                paddingLeft: "36px",
              }}
            >
              <p style={{ marginBottom: "20px" }}>
                私には、生涯をかけて叶えたい「夢」があります。それは、児童養護施設をつくることです。
              </p>
              <p style={{ marginBottom: "20px" }}>
                私たちがどれだけ企業の組織課題を解決し、素晴らしい職場を社会に増やしたとしても、次に社会へ羽ばたいていく子どもたちが夢を持てない環境であれば、未来は決して明るくなりません。様々な事情で親元を離れて暮らす子どもたちに、温かい居場所と万全な教育の機会を提供し、「大人になるって楽しいんだ」「働くことってこんなにワクワクするんだ」と胸を張って言える希望のバトンを渡したいのです。
              </p>
            </div>
          </div>

          {/* Closing message */}
          <div style={{ borderTop: "1px solid #e0e0e0", paddingTop: "48px" }}>
            <div
              style={{
                fontSize: "clamp(14px, 1.4vw, 15px)",
                lineHeight: 2.0,
                color: "#333",
              }}
            >
              <p style={{ marginBottom: "20px" }}>
                現在、4社の経営を通じてビジネスの基盤を拡大しているのも、すべてはこの夢を実現するためのプロセスに他なりません。
              </p>
              <p style={{ marginBottom: "20px" }}>
                「次世代へのバトンをつなぐ社会」を創り上げるため。これからも株式会社Singは、関わるすべての人と企業の可能性を最大化し、社会全体にポジティブな連鎖を生み出し続けてまいります。
              </p>
              <div className="text-right" style={{ marginTop: "40px" }}>
                <p style={{ fontSize: "14px", color: "#666", marginBottom: "4px" }}>
                  株式会社Sing
                </p>
                <p
                  className="font-bold"
                  style={{ fontSize: "18px", color: "#222" }}
                >
                  代表取締役　清水 駿之介
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}

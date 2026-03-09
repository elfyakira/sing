'use client';

import Link from "next/link";
import Image from "next/image";
import { company, contact, site } from "@/lib/site";
import { FadeInUp, StaggerContainer, HeroBackground } from "@/components/animations";
import FixedCTA from "@/components/FixedCTA";

const services = [
  {
    num: "01",
    title: "ツナゲル",
  },
  {
    num: "02",
    title: "カツヤク",
  },
  {
    num: "03",
    title: "月刊Sing",
  },
  {
    num: "04",
    title: "バツグン",
  },
  {
    num: "05",
    title: "各種制作",
  },
];

const initiatives = [
  {
    title: "地域店舗・SDGs・地方創生への取り組み",
    image: "/images/initiative-01.jpg",
  },
  {
    title: "若者のキャリア教育支援（大学での特別セミナー登壇など）",
    image: "/images/initiative-02.jpg",
  },
  {
    title: "障がい者就労支援施設（NPO法人）への業務マッチング支援",
    image: "/images/initiative-03.jpg",
  },
  {
    title: "地域店舗・団体との連携、商工会議所を通じた情報発信",
    image: "/images/initiative-04.jpg",
  },
];

const blogPosts = [
  {
    date: "2026.03.01",
    category: "お知らせ",
    title: "ホームページをリニューアルしました",
    image: "/images/blog-01.jpg",
  },
  {
    date: "2026.02.23",
    category: "社内イベント",
    title: "代表の清水が親孝行休暇を取得しました",
    image: "/images/blog-02.jpg",
  },
  {
    date: "2026.02.15",
    category: "セミナー",
    title: "中小企業向け採用力強化セミナーを開催します",
    image: "/images/blog-03.jpg",
  },
  {
    date: "2026.02.01",
    category: "実績紹介",
    title: "製造業A社様の採用ブランディング事例を公開しました",
    image: "/images/blog-04.jpg",
  },
  {
    date: "2026.01.20",
    category: "地域活動",
    title: "地域を代表する企業100選に選出されました",
    image: "/images/blog-05.jpg",
  },
];

export default function Home() {
  return (
    <main>
      {/* Section 1: Hero */}
      <HeroBackground className="relative h-screen flex items-end bg-navy">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-top.jpg"
            alt="コンサルティング風景"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(26,46,68,0.6) 0%, rgba(26,46,68,0.15) 50%, transparent 100%)",
            }}
          />
        </div>

        {/* Sing text - bottom center */}
        <div className="relative z-10 w-full text-center" style={{ lineHeight: 0.85 }}>
          <span
            className="text-white block"
            style={{
              fontFamily: "'Dela Gothic One', sans-serif",
              fontSize: "clamp(100px, 20vw, 270px)",
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              lineHeight: 0.8,
              marginBottom: "clamp(20px, 3vw, 40px)",
              transform: "scaleY(0.82)",
              transformOrigin: "bottom center",
            }}
          >
            Sing
          </span>
        </div>
      </HeroBackground>

      {/* Section 2: Mission */}
      <section className="bg-white" style={{ padding: "120px 0 100px" }}>
        <div className="mx-auto px-5" style={{ maxWidth: "780px" }}>
          <h2
            className="text-center font-bold text-[#222222] mb-9"
            style={{
              fontSize: "clamp(26px, 4.5vw, 40px)",
              lineHeight: 1.4,
              fontStyle: "italic",
            }}
          >
            人が輝けば、企業は続く。
          </h2>
          <p
            className="text-center text-[#222222]"
            style={{
              fontSize: "clamp(15px, 2vw, 16px)",
              lineHeight: 2.0,
              marginBottom: "40px",
            }}
          >
            企業は、人によってつくられ、
            <br />
            働く人たちの想いによって次の世代へと続いていきます。
            <br />
            <br />
            しかし今、日本では深刻な人手不足が続き、
            <br />
            採用サービスは乱立する一方で、
            <br className="hidden lg:inline" />
            多くの企業が本当に必要な解決策を見出せずにいます。
            <br />
            <br />
            私たちは多くの企業と向き合う中で、
            <br className="hidden lg:inline" />
            人が持つ個性や可能性は、環境によって必ず輝くということを実感してきました。
            <br />
            <br />
            その可能性が活かされる環境があれば、
            <br />
            人は活躍し、組織は成長し、企業は未来へと続いていく。
            <br />
            <br />
            だからこそ私たちは、
            <br />
            「採用」だけでなく「定着」と「活躍」まで。
            <br />
            <br />
            企業の人づくりを、一気通貫で支援します。
          </p>
          <p className="text-center">
            <Link
              href="/message"
              className="inline-flex items-center gap-1 text-accent text-[15px] transition-all hover:underline"
            >
              代表メッセージを読む
              <span>→</span>
            </Link>
          </p>
        </div>
      </section>

      {/* Section 3: Services */}
      <section style={{ backgroundColor: "#F5F1EB", padding: "120px 0" }}>
        <div className="mx-auto px-5" style={{ maxWidth: "1000px" }}>
          <p
            className="text-accent mb-4"
            style={{
              fontSize: "clamp(48px, 8vw, 80px)",
              fontFamily: "'Anton', sans-serif",
              letterSpacing: "0.05em",
              lineHeight: 1,
            }}
          >
            Service
          </p>
          <p
            className="font-bold text-[#222222] mb-10"
            style={{ fontSize: "clamp(18px, 2.5vw, 24px)" }}
          >
            人が輝く企業をつくるために。
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((svc) => (
              <Link
                key={svc.num}
                href="/service"
                className="group bg-white rounded-lg flex flex-col items-center justify-center text-center transition-shadow hover:shadow-lg"
                style={{ padding: "40px 16px", aspectRatio: "1/1" }}
              >
                <span
                  className="text-accent/20 font-bold block mb-3"
                  style={{
                    fontSize: "32px",
                    fontFamily: "Inter, sans-serif",
                    lineHeight: 1,
                  }}
                >
                  {svc.num}
                </span>
                <h3
                  className="font-bold text-[#222222] group-hover:text-accent transition-colors"
                  style={{ fontSize: "clamp(15px, 2vw, 18px)" }}
                >
                  {svc.title}
                </h3>
              </Link>
            ))}
          </div>

          <p className="mt-14">
            <Link
              href="/service"
              className="inline-flex items-center gap-1 text-accent text-[15px] transition-all hover:underline"
            >
              サービスの詳細を見る
              <span>→</span>
            </Link>
          </p>
        </div>
      </section>

      {/* Section 4: Initiatives */}
      <section className="relative" style={{ padding: "120px 0" }}>
        {/* Background image + overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/initiative-bg.jpg"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1A2E44]/85" />
        </div>

        <div className="relative z-10 mx-auto px-5 lg:px-10 text-center" style={{ maxWidth: "1000px" }}>
          {/* Title + Description */}
          <h2
            className="font-bold text-white mb-8"
            style={{
              fontSize: "clamp(26px, 4vw, 36px)",
              lineHeight: 1.4,
            }}
          >
            人と地域の未来のために。
          </h2>
          <p
            className="text-white/75 mb-14"
            style={{ fontSize: "15px", lineHeight: 2.0 }}
          >
            Singは、企業の成長支援だけでなく、
            <br className="hidden lg:inline" />
            地域社会や次世代の人材育成にも積極的に取り組んでいます。
            <br className="hidden lg:inline" />
            若者へのキャリア教育、障がい者就労支援、地域企業との連携など、
            <br className="hidden lg:inline" />
            人と企業、そして地域がつながる活動を通して、
            <br className="hidden lg:inline" />
            人が長く活躍できる社会づくりに貢献しています。
          </p>

          {/* List items */}
          <div className="text-left mx-auto" style={{ maxWidth: "700px" }}>
            {initiatives.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 group"
                style={{
                  padding: "16px 0",
                  borderBottom: i < initiatives.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none",
                }}
              >
                {/* Thumbnail */}
                <div
                  className="relative shrink-0 rounded overflow-hidden bg-white/10"
                  style={{ width: "72px", height: "48px" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Title */}
                <p
                  className="flex-1 text-white/90 group-hover:text-white transition-colors"
                  style={{ fontSize: "14px", lineHeight: 1.6 }}
                >
                  {item.title}
                </p>

                {/* Arrow */}
                <span
                  className="shrink-0 flex items-center justify-center rounded-full border border-white/30 group-hover:border-white/60 transition-colors"
                  style={{ width: "36px", height: "36px" }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5">
                    <path d="M5 2L10 7L5 12" />
                  </svg>
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/service"
              className="inline-block text-white border border-white/40 rounded-btn px-8 py-3 text-[15px] font-medium transition-all hover:bg-white/10 hover:border-white/70"
            >
              詳しく見る
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Why Sing */}
      <section className="bg-white" style={{ padding: "120px 0" }}>
        <div className="mx-auto px-5 lg:px-10" style={{ maxWidth: "1200px" }}>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left: Text */}
            <div className="lg:w-[50%]">
              <p
                className="text-accent mb-3"
                style={{
                  fontSize: "clamp(48px, 8vw, 80px)",
                  fontFamily: "'Anton', sans-serif",
                  letterSpacing: "0.05em",
                  lineHeight: 1,
                }}
              >
                Why Sing
              </p>
              <h2
                className="font-bold text-[#222222] mb-8"
                style={{
                  fontSize: "clamp(22px, 3vw, 30px)",
                  lineHeight: 1.4,
                }}
              >
                私たちが選ばれる理由
              </h2>
              <p
                className="text-[#222222]"
                style={{ fontSize: "15px", lineHeight: 2.0 }}
              >
                Singの支援は、単なる採用支援やコンサルティングではありません。
                <br />
                採用から定着、そして活躍までを見据え、企業の人づくりに深く入り込みながら伴走します。
                <br />
                <br />
                現場のリアルな課題に向き合う実行力、経営者としての実体験から生まれた実践的ノウハウ、
                <br className="hidden lg:inline" />
                さらに高校連携や地域活動で得た若者のリアルな価値観。
                <br />
                <br />
                そしてオンラインとオフラインを組み合わせたブランディング支援。
                <br />
                <br />
                これらを掛け合わせることで、
                <br />
                企業が人とともに成長し続ける仕組みづくりを支援しています。
              </p>
              <div className="mt-10">
                <Link
                  href="/service"
                  className="inline-block bg-accent text-white font-semibold rounded-btn px-8 py-3.5 text-[15px] transition-colors hover:bg-accent-dark"
                >
                  詳しく見る
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div className="lg:w-[50%] w-full">
              <div className="relative rounded-lg overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/images/why-sing.jpg"
                  alt="Singが選ばれる理由"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Blog */}
      <section style={{ backgroundColor: "#F5F1EB", padding: "120px 0" }}>
        <div className="mx-auto px-5 lg:px-10" style={{ maxWidth: "1200px" }}>
          <p
            className="text-accent mb-3"
            style={{
              fontSize: "clamp(48px, 8vw, 80px)",
              fontFamily: "'Anton', sans-serif",
              letterSpacing: "0.05em",
              lineHeight: 1,
            }}
          >
            Blog
          </p>
          <div className="flex items-end justify-between mb-10">
            <h2
              className="font-bold text-[#222222]"
              style={{ fontSize: "clamp(18px, 2.5vw, 24px)" }}
            >
              新着情報
            </h2>
            <Link
              href="/news"
              className="hidden lg:inline-flex items-center gap-1 text-accent text-[15px] transition-all hover:underline"
            >
              一覧を見る
              <span>→</span>
            </Link>
          </div>

          {/* Blog cards - horizontal scroll on SP, grid on PC */}
          <div className="flex lg:grid lg:grid-cols-5 gap-5 overflow-x-auto pb-4 -mx-5 px-5 lg:mx-0 lg:px-0 lg:overflow-visible snap-x snap-mandatory">
            {blogPosts.map((post, i) => (
              <Link
                key={i}
                href="/news"
                className="group shrink-0 w-[200px] lg:w-auto snap-start"
              >
                {/* Thumbnail */}
                <div
                  className="relative rounded-lg overflow-hidden mb-3 bg-[#E8E4DE]"
                  style={{ aspectRatio: "3/2" }}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Date + Category */}
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-[#5A5A5A]"
                    style={{ fontSize: "12px", fontFamily: "Inter, sans-serif" }}
                  >
                    {post.date}
                  </span>
                  <span
                    className="text-accent text-[11px] font-medium border border-accent rounded-sm"
                    style={{ padding: "1px 8px" }}
                  >
                    {post.category}
                  </span>
                </div>
                {/* Title */}
                <p
                  className="text-[#222222] group-hover:text-accent transition-colors"
                  style={{ fontSize: "14px", lineHeight: 1.6 }}
                >
                  {post.title}
                </p>
              </Link>
            ))}
          </div>

          {/* SP: show link below */}
          <p className="lg:hidden mt-8 text-center">
            <Link
              href="/news"
              className="inline-flex items-center gap-1 text-accent text-[15px] transition-all hover:underline"
            >
              一覧を見る
              <span>→</span>
            </Link>
          </p>
        </div>
      </section>

      {/* Section 7: Join Us */}
      <section className="bg-[#1A2E44]" style={{ padding: "100px 0" }}>
        <div className="mx-auto px-5 lg:px-10" style={{ maxWidth: "1200px" }}>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left: Photo grid */}
            <div className="lg:w-[45%] w-full">
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div key={n} className="relative rounded-lg overflow-hidden bg-white/10" style={{ aspectRatio: "1/1" }}>
                    <Image
                      src={`/images/member-0${n}.jpg`}
                      alt={`メンバー${n}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Text */}
            <div className="lg:w-[55%]">
              <p
                className="text-white mb-3"
                style={{
                  fontSize: "clamp(48px, 8vw, 72px)",
                  fontFamily: "'Anton', sans-serif",
                  letterSpacing: "0.05em",
                  lineHeight: 1,
                }}
              >
                Join Us
              </p>
              <h2
                className="font-bold text-white mb-6"
                style={{
                  fontSize: "clamp(20px, 3vw, 26px)",
                  lineHeight: 1.5,
                }}
              >
                一緒に、地域の未来をつくる仲間へ。
              </h2>
              <p
                className="text-white/75 mb-10"
                style={{ fontSize: "15px", lineHeight: 2.0 }}
              >
                企業と若者をつなぎ、人が育つ社会をつくる。
                <br />
                あなたの企画力と情熱が、誰かの人生を変える仕事です。
                <br />
                <br />
                特別なスキルや経験は問いません。
                <br />
                必要なのは、「誰かの役に立ちたい」という素直な気持ちと、
                <br className="hidden lg:inline" />
                成長し続ける意欲だけです。
              </p>
              <Link
                href="/recruit"
                className="inline-flex items-center gap-2 text-white border border-white/40 rounded-btn px-8 py-3.5 text-[15px] font-medium transition-all hover:bg-white/10 hover:border-white/70"
              >
                採用情報を見る
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: CTA */}
      <section className="bg-navy" style={{ padding: "100px 20px" }}>
        <div className="mx-auto text-center" style={{ maxWidth: "700px" }}>
          <h2
            className="font-bold text-white mb-5"
            style={{
              fontSize: "clamp(22px, 3.5vw, 30px)",
              lineHeight: 1.5,
            }}
          >
            まずは、御社の課題を聞かせてください。
          </h2>
          <p
            className="text-white/80 mb-9 whitespace-pre-line"
            style={{ fontSize: "15px", lineHeight: 1.9 }}
          >
            {`採用のこと、組織のこと、ブランディングのこと。\n何から手をつければいいか分からなくても大丈夫です。\n一緒に課題を整理するところから始めましょう。`}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-white font-semibold rounded-btn transition-colors hover:bg-accent-dark mb-4"
            style={{ padding: "18px 48px", fontSize: "16px" }}
          >
            無料で相談してみる
          </Link>
          <p className="text-white/50 text-[13px] mb-3">
            営業電話はいたしません。お気軽にご相談ください。
          </p>
          {contact.phone && (
            <p className="text-white/60 text-sm">
              お電話でのご相談:{" "}
              <a
                href={`tel:${contact.phone.replace(/-/g, "")}`}
                className="hover:text-white transition-colors lg:pointer-events-none"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {contact.phoneFormatted || contact.phone}
              </a>
            </p>
          )}
        </div>
      </section>

      {/* Fixed CTA (SP only) */}
      <FixedCTA />
    </main>
  );
}

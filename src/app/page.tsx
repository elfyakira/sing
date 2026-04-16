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
    video: "/videos/service-01.mp4",
    teaser: "採るだけでは、終わらせない。企業と人財の「本当の出会い」をつくる採用支援。",
  },
  {
    num: "02",
    title: "カツヤク",
    video: "/videos/service-02.mp4",
    teaser: "入社がゴールではない。人が定着し、成長し続ける組織づくりの伴走支援。",
  },
  {
    num: "03",
    title: "Singメディア",
    video: "/videos/service-03.mp4",
    teaser: "届けたい想いを、届くカタチに。企業の魅力を最大化する情報発信支援。",
  },
];

const initiatives = [
  {
    id: "initiative-01",
    category: "SDGs",
    title: "地域店舗・SDGs・地方創生への取り組み",
    description: "地域の持続可能な発展を目指し、企業と地域をつなぐ活動を推進しています。",
    image: "/images/initiative-01.jpg",
  },
  {
    id: "initiative-02",
    category: "Education",
    title: "若者のキャリア教育支援",
    description: "大学での特別セミナー登壇など、次世代の人財育成に取り組んでいます。",
    image: "/images/initiative-02.jpg",
  },
  {
    id: "initiative-03",
    category: "Community",
    title: "地域店舗・団体との連携",
    description: "商工会議所を通じた情報発信など、地域企業のネットワークを強化しています。",
    image: "/images/initiative-04.jpg",
  },
];

export default function Home() {
  return (
    <main>
      {/* Section 1: Hero - fixed so next section scrolls over it */}
      <HeroBackground className="fixed inset-0 h-screen flex items-end bg-navy overflow-hidden z-0">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/hero-top.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Sing text - bottom center */}
        <div className="relative z-10 w-full text-center" style={{ lineHeight: 0.85 }}>
          <span
            className="text-white block"
            style={{
              fontFamily: "'Dela Gothic One', sans-serif",
              fontSize: "clamp(100px, 20vw, 270px)",
              letterSpacing: "0.02em",
              textTransform: "none",
              lineHeight: 0.8,
              marginBottom: "clamp(40px, 6vw, 80px)",
              transform: "scaleY(0.82)",
              transformOrigin: "bottom center",
            }}
          >
            Sing
          </span>
        </div>
      </HeroBackground>

      {/* Spacer for fixed hero */}
      <div style={{ height: "100vh" }} />

      {/* Section 2: Mission */}
      <section className="relative z-10 bg-accent" style={{ padding: "120px 0 100px" }}>
        <div className="mx-auto px-5" style={{ maxWidth: "780px" }}>
          <h2
            className="text-center font-bold text-white mb-9"
            style={{
              fontSize: "clamp(28px, 5vw, 80px)",
              whiteSpace: "nowrap",
              lineHeight: 1.4,
              fontStyle: "italic",
              maxWidth: "none",
              marginLeft: "calc(-50vw + 50%)",
              marginRight: "calc(-50vw + 50%)",
            }}
          >
            人が輝けば、企業は続く。
          </h2>
          <p
            className="text-center text-white/90 font-bold"
            style={{
              fontSize: "clamp(18px, 2.5vw, 22px)",
              lineHeight: 2.0,
              marginBottom: "40px",
            }}
          >
            企業は、人によってつくられ、
            <br />
            働く人たちの想いによって次の世代へと続いていきます。
            <br />
            <br />
            しかし今、深刻な人手不足が続き、
            <br />
            採用しても、人が定着しない。育てても、活躍の場がない。
            <br />
            その課題の本質は、採用の「その先」にあると私たちは考えます。
            <br />
            <br />
            だから私たちは、
            <br />
            採用・定着・活躍を、一気通貫で。
          </p>
          <div className="flex items-center justify-center gap-6">
            <Link
              href="/message"
              className="inline-flex items-center gap-6 text-white group"
            >
              <span className="text-[18px] font-bold tracking-wide">MESSAGE</span>
              <span
                className="flex items-center justify-center rounded-full bg-white group-hover:scale-105 transition-transform"
                style={{ width: "80px", height: "80px" }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C41E2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Services */}
      <section className="relative z-10" style={{ backgroundColor: "#F5F5F5", padding: "120px 0" }}>
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

          <div className="grid grid-cols-3 gap-6">
            {services.map((svc) => (
              <Link
                key={svc.num}
                href="/service"
                className="group"
              >
                <div
                  className="relative rounded-lg overflow-hidden transition-shadow hover:shadow-lg"
                  style={{ aspectRatio: "1/1" }}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={svc.video} type="video/mp4" />
                  </video>
                </div>
                <div className="flex items-start gap-3 mt-4">
                  <span className="block bg-accent shrink-0" style={{ width: "3px", height: "24px", marginTop: "4px" }} />
                  <div>
                    <h3
                      className="font-bold text-[#222222] group-hover:text-accent transition-colors"
                      style={{ fontSize: "24px" }}
                    >
                      {svc.title}
                    </h3>
                    <p className="text-[#666] mt-2" style={{ fontSize: "13px", lineHeight: 1.7 }}>
                      {svc.teaser}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex items-center mt-14">
            <Link
              href="/service"
              className="inline-flex items-center gap-6 text-[#222222] group"
            >
              <span className="text-[18px] font-bold tracking-wide">SERVICE</span>
              <span
                className="flex items-center justify-center rounded-full bg-accent group-hover:scale-105 transition-transform"
                style={{ width: "80px", height: "80px" }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Initiatives */}
      <section className="relative z-10 overflow-hidden" style={{ padding: "120px 0" }}>
        {/* Background video + dark overlay + grid */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/initiative-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/80" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto px-5 lg:px-10 text-left" style={{ maxWidth: "1000px" }}>
          {/* Title + Description */}
          <h2
            className="font-bold text-white mb-8"
            style={{
              fontSize: "clamp(32px, 6vw, 72px)",
              lineHeight: 1.4,
            }}
          >
            人と地域の未来のために。
          </h2>
          <p
            className="text-white/75 mb-14"
            style={{ fontSize: "15px", lineHeight: 2.0 }}
          >
            Singは、企業の成長支援だけでなく、地域社会や次世代の人財育成にも積極的に取り組んでいます。若者へのキャリア教育、障がい者就労支援、地域企業との連携など、人と企業、そして地域がつながる活動を通して、人が長く活躍できる社会づくりに貢献しています。
          </p>

          {/* List items */}
          <div className="text-left">
            {initiatives.map((item, i) => (
              <Link
                key={i}
                href={`/initiatives#${item.id}`}
                className="flex items-center gap-6 group"
                style={{
                  padding: "20px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                {/* Thumbnail - square */}
                <div
                  className="relative shrink-0 rounded overflow-hidden bg-white/10"
                  style={{ width: "72px", height: "72px" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text content */}
                <div className="flex-1">
                  <span className="text-white/50" style={{ fontSize: "11px", letterSpacing: "0.05em" }}>
                    {item.category}
                  </span>
                  <p
                    className="text-white font-bold group-hover:text-white/80 transition-colors"
                    style={{ fontSize: "18px", lineHeight: 1.6, borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "8px", marginTop: "2px" }}
                  >
                    {item.title}
                  </p>
                  <p className="text-white/50" style={{ fontSize: "12px", lineHeight: 1.6, marginTop: "6px" }}>
                    {item.description}
                  </p>
                </div>

                {/* Arrow - matching button design */}
                <span
                  className="shrink-0 flex items-center justify-center rounded-full bg-white group-hover:scale-105 transition-transform"
                  style={{ width: "56px", height: "56px" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C41E2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Section 5: Why Sing */}
      <section className="relative z-10" style={{ backgroundColor: "#F5F5F5", padding: "120px 0" }}>
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
              <div className="flex items-center mt-10">
                <Link
                  href="/service#why-sing"
                  className="inline-flex items-center gap-6 text-[#222222] group"
                >
                  <span className="text-[18px] font-bold tracking-wide">MORE</span>
                  <span
                    className="flex items-center justify-center rounded-full bg-accent group-hover:scale-105 transition-transform"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
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

      {/* Section 6: Join Us */}
      <section className="relative z-10" style={{ backgroundColor: "#F5F1EB", padding: "120px 0" }}>
        <div className="mx-auto px-5 lg:px-10" style={{ maxWidth: "1200px" }}>
          <div className="bg-[#1A2E44] rounded-2xl flex flex-col lg:flex-row items-center gap-12 lg:gap-16" style={{ padding: "clamp(24px, 3vw, 40px) clamp(32px, 5vw, 64px)" }}>
            {/* Left: Photo */}
            <div className="lg:w-[45%] w-full self-stretch">
              <div className="relative rounded-lg overflow-hidden bg-white/10 h-full">
                <Image
                  src="/images/join-us.jpg"
                  alt="ミーティング風景"
                  fill
                  className="object-cover object-left"
                />
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
                className="inline-flex items-center gap-6 text-white group"
              >
                <span className="text-[18px] font-bold tracking-wide">RECRUIT</span>
                <span
                  className="flex items-center justify-center rounded-full bg-white group-hover:scale-105 transition-transform"
                  style={{ width: "80px", height: "80px" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C41E2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Section 7: Blog / News */}
      <section className="relative z-10" style={{ backgroundColor: "#fff", padding: "120px 0" }}>
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
            Blog
          </p>
          <p
            className="font-bold text-[#222222] mb-10"
            style={{ fontSize: "clamp(18px, 2.5vw, 24px)" }}
          >
            最新の情報をお届けします。
          </p>

          {/* Blog Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/news/kasugai-gujo-odori-vol3" className="group block" style={{ textDecoration: "none", color: "inherit" }}>
              <div
                className="relative rounded-lg overflow-hidden"
                style={{ aspectRatio: "16/9" }}
              >
                <Image
                  src="/images/news/kasugai-gujo-odori-01.jpg"
                  alt="地域と人をつなぐ挑戦。第3回かすがい郡上踊りにステージ参加します！"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ objectPosition: "center 20%" }}
                />
              </div>
              <div style={{ marginTop: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#5A5A5A" }}>
                    2026-04-16
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      color: "#C84B2F",
                      border: "1px solid #C84B2F",
                      padding: "2px 10px",
                      borderRadius: 2,
                    }}
                  >
                    取り組み
                  </span>
                </div>
                <p
                  className="font-bold group-hover:text-accent transition-colors"
                  style={{ fontSize: 15, color: "#222", lineHeight: 1.6 }}
                >
                  地域と人をつなぐ挑戦。第3回かすがい郡上踊りにステージ参加します！
                </p>
              </div>
            </Link>
            <Link href="/news/one-dining-table-fes-vol4" className="group block" style={{ textDecoration: "none", color: "inherit" }}>
              <div
                className="relative rounded-lg overflow-hidden"
                style={{ aspectRatio: "16/9" }}
              >
                <Image
                  src="/images/news/one-dining-table-fes-cover.jpg"
                  alt="【今年も出店決定】One Dining Table Fes vol.4 にSingが参加します！"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ objectPosition: "center 20%" }}
                />
              </div>
              <div style={{ marginTop: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#5A5A5A" }}>
                    2026-04-16
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      color: "#C84B2F",
                      border: "1px solid #C84B2F",
                      padding: "2px 10px",
                      borderRadius: 2,
                    }}
                  >
                    ブログ
                  </span>
                </div>
                <p
                  className="font-bold group-hover:text-accent transition-colors"
                  style={{ fontSize: 15, color: "#222", lineHeight: 1.6 }}
                >
                  【今年も出店決定】One Dining Table Fes vol.4 にSingが参加します！
                </p>
              </div>
            </Link>
            <Link href="/news/technoshinei-chubu-rugby" className="group block" style={{ textDecoration: "none", color: "inherit" }}>
              <div
                className="relative rounded-lg overflow-hidden"
                style={{ aspectRatio: "16/9" }}
              >
                <Image
                  src="/images/news/technoshinei-cover.jpg"
                  alt="株式会社テクノシンエイ様より中部大学ラグビー部へ温かいご支援"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div style={{ marginTop: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#5A5A5A" }}>
                    2026-04-15
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      color: "#C84B2F",
                      border: "1px solid #C84B2F",
                      padding: "2px 10px",
                      borderRadius: 2,
                    }}
                  >
                    取り組み
                  </span>
                </div>
                <p
                  className="font-bold group-hover:text-accent transition-colors"
                  style={{ fontSize: 15, color: "#222", lineHeight: 1.6 }}
                >
                  株式会社テクノシンエイ様より中部大学ラグビー部へ温かいご支援
                </p>
              </div>
            </Link>
            <Link href="/news/renewal" className="group block" style={{ textDecoration: "none", color: "inherit" }}>
              <div
                className="relative rounded-lg overflow-hidden"
                style={{ aspectRatio: "16/9" }}
              >
                <Image
                  src="/images/news-renewal.png"
                  alt="ホームページをリニューアルしました"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div style={{ marginTop: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#5A5A5A" }}>
                    2026-04-03
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      color: "#C84B2F",
                      border: "1px solid #C84B2F",
                      padding: "2px 10px",
                      borderRadius: 2,
                    }}
                  >
                    ブログ
                  </span>
                </div>
                <p
                  className="font-bold group-hover:text-accent transition-colors"
                  style={{ fontSize: 15, color: "#222", lineHeight: 1.6 }}
                >
                  ホームページをリニューアルしました
                </p>
              </div>
            </Link>
          </div>

          <div className="flex items-center mt-14">
            <Link
              href="/news"
              className="inline-flex items-center gap-6 text-[#222222] group"
            >
              <span className="text-[18px] font-bold tracking-wide">NEWS</span>
              <span
                className="flex items-center justify-center rounded-full bg-accent group-hover:scale-105 transition-transform"
                style={{ width: "80px", height: "80px" }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Fixed CTA (SP only) */}
      <FixedCTA />
    </main>
  );
}

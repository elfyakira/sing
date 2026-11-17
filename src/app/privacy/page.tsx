import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/PageHeader";
import StructuredData from "@/components/StructuredData";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import { company, contact, locations } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "プライバシーポリシー",
  description:
    "株式会社Singのプライバシーポリシー（個人情報保護方針）。お客様からお預かりした個人情報の取り扱いについてご説明します。",
  path: "/privacy",
});

const EFFECTIVE_DATE = "2024年3月11日";

const h2Style = {
  fontSize: "clamp(18px, 2.4vw, 22px)",
  color: "#222222",
  lineHeight: 1.6,
  marginTop: "48px",
  marginBottom: "16px",
  paddingLeft: "14px",
  borderLeft: "4px solid #C84B2F",
} as const;

const pStyle = { fontSize: "15px", color: "#222222", lineHeight: 1.9 } as const;

export default function PrivacyPage() {
  const hq = locations.headquarters;

  return (
    <>
      <StructuredData
        data={[
          generateBreadcrumbSchema([
            { name: "ホーム", url: "https://singgroup.biz" },
            { name: "プライバシーポリシー", url: "https://singgroup.biz/privacy" },
          ]),
        ]}
      />
      <PageHeader label="PRIVACY POLICY" title="プライバシーポリシー" />

      <section className="bg-white" style={{ padding: "80px 20px 100px" }}>
        <div className="mx-auto" style={{ maxWidth: "800px" }}>
          <p style={pStyle}>
            {company.name}（以下、「当社」）は、お客様の個人情報を適切に保護することを重要な社会的責務と認識し、以下のとおり個人情報保護方針を定め、これを遵守いたします。
          </p>

          <h2 className="font-bold" style={h2Style}>1. 個人情報の定義</h2>
          <p style={pStyle}>
            個人情報とは、氏名、住所、電話番号、メールアドレスなど、特定の個人を識別できる情報をいいます。
          </p>

          <h2 className="font-bold" style={h2Style}>2. 個人情報の収集</h2>
          <p style={pStyle}>
            当社は、お問い合わせフォーム、採用エントリー等を通じて、お客様の個人情報を収集することがあります。収集に際しては、利用目的を明示し、適法かつ公正な手段により行います。
          </p>
          <p style={{ ...pStyle, marginTop: "12px" }}>
            なお、当社ウェブサイトのお問い合わせフォームは、Google LLCが提供する「Googleフォーム」を利用しており、送信いただいた情報はGoogle LLCのサーバーに保存されます。Google LLCにおける情報の取り扱いについては、
            <a
              href="https://policies.google.com/privacy?hl=ja"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#C84B2F", textDecoration: "underline" }}
            >
              Googleのプライバシーポリシー
            </a>
            をご確認ください。
          </p>

          <h2 className="font-bold" style={h2Style}>3. 個人情報の利用目的</h2>
          <p style={{ ...pStyle, marginBottom: "12px" }}>
            当社は、収集した個人情報を以下の目的で利用いたします。
          </p>
          <ul className="list-disc" style={{ ...pStyle, paddingLeft: "1.5em" }}>
            <li>お問い合わせへの回答</li>
            <li>お見積りの作成・送付</li>
            <li>採用選考に関するご連絡</li>
            <li>サービスに関する情報のご提供</li>
            <li>その他、お客様との契約・取引に関する業務</li>
          </ul>

          <h2 className="font-bold" style={h2Style}>4. 個人情報の第三者提供</h2>
          <p style={pStyle}>
            当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
          </p>

          <h2 className="font-bold" style={h2Style}>5. 個人情報の安全管理</h2>
          <p style={pStyle}>
            当社は、個人情報の漏洩、滅失、毀損を防止するため、必要かつ適切な安全管理措置を講じます。
          </p>

          <h2 className="font-bold" style={h2Style}>6. 個人情報の開示・訂正・削除</h2>
          <p style={pStyle}>
            お客様ご本人から個人情報の開示、訂正、削除のご請求があった場合は、ご本人確認のうえ、適切に対応いたします。
          </p>

          <h2 className="font-bold" style={h2Style}>7. お問い合わせ</h2>
          <p style={{ ...pStyle, marginBottom: "20px" }}>
            個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。
          </p>
          <div style={{ ...pStyle, background: "#F7F5F2", padding: "24px", borderRadius: "8px" }}>
            <p>{company.name}</p>
            <p>
              〒{hq.zipCode} {hq.address}
            </p>
            <p>TEL: {contact.phone}</p>
            <p>メール: {contact.email}</p>
          </div>

          <p style={{ fontSize: "13px", color: "#5A5A5A", marginTop: "48px" }}>
            制定日: {EFFECTIVE_DATE}
          </p>
        </div>
      </section>
    </>
  );
}

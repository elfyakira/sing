'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { company, contact, locations } from "@/lib/site";
import { events } from "@/lib/analytics";

const inquiryTypes = [
  "サービスについてのお問い合わせ",
  "採用エントリー・応募",
  "その他",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    inquiryType: "",
    companyName: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isDesktop, setIsDesktop] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const handleFirstInput = () => {
    if (!hasStarted) {
      events.formStart("sing_hp_contact");
      setHasStarted(true);
    }
  };

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const isValid =
    form.inquiryType !== "" &&
    form.name.trim() !== "" &&
    form.email.trim() !== "" &&
    form.message.trim() !== "" &&
    agreed;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, agreed }),
      });

      if (!res.ok) throw new Error("送信に失敗しました。");
      events.formSubmit("sing_hp_contact");
      setSubmitted(true);
    } catch {
      setError("送信に失敗しました。時間をおいて再度お試しください。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style jsx global>{`
        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
          color: #B0AAA0;
          font-size: 14px;
        }
      `}</style>

      {/* Section 1: Page Header */}
      <PageHeader label="CONTACT" title="お問い合わせ" />

      {/* Section 2: Lead text + Form */}
      <section className="bg-white" style={{ padding: "80px 0 100px" }}>
        <div className="mx-auto px-5" style={{ maxWidth: 640 }}>
          {submitted ? (
            /* Thank you message */
            <div className="text-center">
              <h2
                className="font-bold"
                style={{
                  fontSize: "clamp(22px, 3vw, 26px)",
                  color: "#222",
                  marginBottom: 32,
                }}
              >
                お問い合わせありがとうございます。
              </h2>
              <p
                style={{
                  fontSize: 15,
                  color: "#5A5A5A",
                  lineHeight: 1.9,
                  marginBottom: 40,
                }}
              >
                お問い合わせ内容を受け付けました。
                <br />
                1営業日以内に、担当者よりご連絡いたします。
                <br />
                <br />
                しばらく経っても連絡がない場合は、
                <br />
                お手数ですがお電話にてお問い合わせください。
                <br />
                <br />
                電話: {contact.phone}
                <br />
                メール: {contact.email}
              </p>
              <Link
                href="/"
                style={{
                  color: "#C84B2F",
                  fontSize: 15,
                  fontWeight: 600,
                }}
              >
                トップページに戻る →
              </Link>
            </div>
          ) : (
            <>
              {/* Lead text */}
              <p
                className="text-center"
                style={{
                  fontSize: 15,
                  color: "#5A5A5A",
                  lineHeight: 1.9,
                  marginBottom: 48,
                }}
              >
                採用のこと、組織のこと、ブランディングのこと。
                <br />
                何から相談していいか分からなくても大丈夫です。
                <br />
                まずはお気軽にお問い合わせください。
                <br />
                <br />
                1営業日以内にご返信いたします。
                <br />
                営業電話はいたしませんので、ご安心ください。
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} onFocusCapture={handleFirstInput} className="contact-form">
                {/* お問い合わせ種別 */}
                <div style={{ marginBottom: 32 }}>
                  <label
                    className="font-bold flex items-center"
                    style={{ fontSize: 14, color: "#222", marginBottom: 8 }}
                  >
                    お問い合わせ種別
                    <span
                      className="rounded-sm"
                      style={{
                        fontSize: 11,
                        color: "#fff",
                        backgroundColor: "#C84B2F",
                        padding: "2px 8px",
                        marginLeft: 8,
                      }}
                    >
                      必須
                    </span>
                  </label>
                  <div className="flex flex-col gap-3" style={{ marginTop: 12 }}>
                    {inquiryTypes.map((type) => (
                      <label
                        key={type}
                        className="flex items-center cursor-pointer"
                        style={{ fontSize: 15, color: "#222" }}
                      >
                        <span
                          className="flex-shrink-0 flex items-center justify-center"
                          style={{
                            width: 18,
                            height: 18,
                            borderRadius: "50%",
                            border: "2px solid #D9D3CB",
                            marginRight: 10,
                            backgroundColor:
                              form.inquiryType === type ? "#C84B2F" : "transparent",
                            borderColor:
                              form.inquiryType === type ? "#C84B2F" : "#D9D3CB",
                            transition: "all 0.2s",
                          }}
                        >
                          {form.inquiryType === type && (
                            <span
                              style={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                backgroundColor: "#fff",
                                display: "block",
                              }}
                            />
                          )}
                        </span>
                        <input
                          type="radio"
                          name="inquiryType"
                          value={type}
                          checked={form.inquiryType === type}
                          onChange={handleChange}
                          className="sr-only"
                          required
                        />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>

                {/* 会社名 */}
                <div style={{ marginBottom: 30 }}>
                  <label
                    className="font-bold block"
                    style={{ fontSize: 14, color: "#222", marginBottom: 8 }}
                  >
                    会社名
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={form.companyName}
                    onChange={handleChange}
                    placeholder="例）株式会社〇〇"
                    className="w-full outline-none bg-transparent"
                    style={{
                      height: 48,
                      fontSize: 15,
                      color: "#222",
                      padding: "12px 0",
                      borderWidth: 0,
                      borderBottomWidth: 2,
                      borderBottomStyle: "solid",
                      borderBottomColor: "#D9D3CB",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderBottomColor = "#C84B2F")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderBottomColor = "#D9D3CB")
                    }
                  />
                </div>

                {/* お名前 */}
                <div style={{ marginBottom: 30 }}>
                  <label
                    className="font-bold flex items-center"
                    style={{ fontSize: 14, color: "#222", marginBottom: 8 }}
                  >
                    お名前
                    <span
                      className="rounded-sm"
                      style={{
                        fontSize: 11,
                        color: "#fff",
                        backgroundColor: "#C84B2F",
                        padding: "2px 8px",
                        marginLeft: 8,
                      }}
                    >
                      必須
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="例）山田 太郎"
                    required
                    className="w-full outline-none bg-transparent"
                    style={{
                      height: 48,
                      fontSize: 15,
                      color: "#222",
                      padding: "12px 0",
                      borderWidth: 0,
                      borderBottomWidth: 2,
                      borderBottomStyle: "solid",
                      borderBottomColor: "#D9D3CB",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderBottomColor = "#C84B2F")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderBottomColor = "#D9D3CB")
                    }
                  />
                </div>

                {/* メールアドレス */}
                <div style={{ marginBottom: 30 }}>
                  <label
                    className="font-bold flex items-center"
                    style={{ fontSize: 14, color: "#222", marginBottom: 8 }}
                  >
                    メールアドレス
                    <span
                      className="rounded-sm"
                      style={{
                        fontSize: 11,
                        color: "#fff",
                        backgroundColor: "#C84B2F",
                        padding: "2px 8px",
                        marginLeft: 8,
                      }}
                    >
                      必須
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="例）info@example.com"
                    required
                    className="w-full outline-none bg-transparent"
                    style={{
                      height: 48,
                      fontSize: 15,
                      color: "#222",
                      padding: "12px 0",
                      borderWidth: 0,
                      borderBottomWidth: 2,
                      borderBottomStyle: "solid",
                      borderBottomColor: "#D9D3CB",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderBottomColor = "#C84B2F")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderBottomColor = "#D9D3CB")
                    }
                  />
                </div>

                {/* 電話番号 */}
                <div style={{ marginBottom: 30 }}>
                  <label
                    className="font-bold block"
                    style={{ fontSize: 14, color: "#222", marginBottom: 8 }}
                  >
                    電話番号
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="例）090-1234-5678"
                    className="w-full outline-none bg-transparent"
                    style={{
                      height: 48,
                      fontSize: 15,
                      color: "#222",
                      padding: "12px 0",
                      borderWidth: 0,
                      borderBottomWidth: 2,
                      borderBottomStyle: "solid",
                      borderBottomColor: "#D9D3CB",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderBottomColor = "#C84B2F")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderBottomColor = "#D9D3CB")
                    }
                  />
                </div>

                {/* ご相談内容 */}
                <div style={{ marginBottom: 32 }}>
                  <label
                    className="font-bold flex items-center"
                    style={{ fontSize: 14, color: "#222", marginBottom: 8 }}
                  >
                    ご相談内容
                    <span
                      className="rounded-sm"
                      style={{
                        fontSize: 11,
                        color: "#fff",
                        backgroundColor: "#C84B2F",
                        padding: "2px 8px",
                        marginLeft: 8,
                      }}
                    >
                      必須
                    </span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="ご相談内容、ご質問、気になっていることなど、お気軽にご記入ください。"
                    required
                    className="w-full outline-none bg-transparent resize-none"
                    rows={isDesktop ? 6 : 5}
                    style={{
                      fontSize: 15,
                      color: "#222",
                      padding: "12px 0",
                      borderWidth: 0,
                      borderBottomWidth: 2,
                      borderBottomStyle: "solid",
                      borderBottomColor: "#D9D3CB",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderBottomColor = "#C84B2F")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderBottomColor = "#D9D3CB")
                    }
                  />
                </div>

                {/* Privacy policy checkbox */}
                <div
                  className="flex items-start justify-center"
                  style={{ marginBottom: 32 }}
                >
                  <label className="flex items-start cursor-pointer">
                    <span
                      className="flex-shrink-0 flex items-center justify-center"
                      style={{
                        width: 18,
                        height: 18,
                        border: "2px solid",
                        borderColor: agreed ? "#C84B2F" : "#D9D3CB",
                        borderRadius: 2,
                        backgroundColor: agreed ? "#C84B2F" : "transparent",
                        marginRight: 10,
                        marginTop: 2,
                        transition: "all 0.2s",
                      }}
                    >
                      {agreed && (
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                        >
                          <path
                            d="M1 3.5L4 6.5L9 1"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={() => setAgreed(!agreed)}
                      className="sr-only"
                    />
                    <span style={{ fontSize: 13, color: "#5A5A5A", lineHeight: 1.6 }}>
                      <Link
                        href="/privacy"
                        target="_blank"
                        style={{ color: "#C84B2F" }}
                      >
                        プライバシーポリシー
                      </Link>
                      に同意の上、送信してください。
                    </span>
                  </label>
                </div>

                {/* Error message */}
                {error && (
                  <p
                    className="text-center"
                    style={{
                      color: "#C84B2F",
                      fontSize: 14,
                      marginBottom: 16,
                    }}
                  >
                    {error}
                  </p>
                )}

                {/* Submit button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={!isValid || loading}
                    className="rounded-btn font-semibold w-full lg:w-[280px]"
                    style={{
                      height: 56,
                      fontSize: 16,
                      color: "#fff",
                      backgroundColor:
                        !isValid || loading ? "#D9D3CB" : "#C84B2F",
                      cursor:
                        !isValid || loading ? "not-allowed" : "pointer",
                      border: "none",
                      transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      if (isValid && !loading)
                        (e.target as HTMLButtonElement).style.backgroundColor =
                          "#A63D26";
                    }}
                    onMouseLeave={(e) => {
                      if (isValid && !loading)
                        (e.target as HTMLButtonElement).style.backgroundColor =
                          "#C84B2F";
                    }}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="#fff"
                            strokeWidth="3"
                            strokeDasharray="31.4 31.4"
                            strokeLinecap="round"
                          />
                        </svg>
                        送信中...
                      </span>
                    ) : (
                      "送信する"
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </section>

      {/* Section 3: Company Info + Map */}
      <section style={{ backgroundColor: "#F5F1EB", padding: "80px 0" }}>
        <div
          className="mx-auto px-5 grid grid-cols-1 lg:grid-cols-[45%_55%]"
          style={{ maxWidth: 1100, gap: 48 }}
        >
          {/* Left: Company Info */}
          <div>
            <h2
              className="font-bold"
              style={{ fontSize: 22, color: "#222", marginBottom: 28 }}
            >
              会社情報
            </h2>
            <dl className="flex flex-col" style={{ gap: 16 }}>
              <div>
                <dt
                  className="font-bold"
                  style={{ fontSize: 13, color: "#5A5A5A", marginBottom: 4 }}
                >
                  会社名
                </dt>
                <dd style={{ fontSize: 15, color: "#222" }}>{company.name}</dd>
              </div>
              <div>
                <dt
                  className="font-bold"
                  style={{ fontSize: 13, color: "#5A5A5A", marginBottom: 4 }}
                >
                  代表者
                </dt>
                <dd style={{ fontSize: 15, color: "#222" }}>{company.ceo}</dd>
              </div>
              <div>
                <dt
                  className="font-bold"
                  style={{ fontSize: 13, color: "#5A5A5A", marginBottom: 4 }}
                >
                  所在地
                </dt>
                <dd style={{ fontSize: 15, color: "#222" }}>
                  〒{locations.headquarters.zipCode}{" "}
                  {locations.headquarters.address}
                </dd>
              </div>
              <div>
                <dt
                  className="font-bold"
                  style={{ fontSize: 13, color: "#5A5A5A", marginBottom: 4 }}
                >
                  電話番号
                </dt>
                <dd style={{ fontSize: 15, color: "#222" }}>
                  <a
                    href={`tel:${contact.phoneTel}`}
                    className="lg:pointer-events-none"
                    style={{ color: "#222" }}
                  >
                    {contact.phoneFormatted}
                  </a>
                </dd>
              </div>
              <div>
                <dt
                  className="font-bold"
                  style={{ fontSize: 13, color: "#5A5A5A", marginBottom: 4 }}
                >
                  メール
                </dt>
                <dd style={{ fontSize: 15, color: "#222" }}>
                  <a
                    href={`mailto:${contact.email}`}
                    style={{ color: "#222" }}
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt
                  className="font-bold"
                  style={{ fontSize: 13, color: "#5A5A5A", marginBottom: 4 }}
                >
                  設立
                </dt>
                <dd style={{ fontSize: 15, color: "#222" }}>
                  {company.established}
                </dd>
              </div>
            </dl>
          </div>

          {/* Right: Google Maps */}
          <div className="flex items-start">
            <iframe
              src="https://maps.google.com/maps?q=%E6%84%9B%E7%9F%A5%E7%9C%8C%E6%98%A5%E6%97%A5%E4%BA%95%E5%B8%82%E5%A6%82%E6%84%8F%E7%94%B3%E7%94%BA7%E4%B8%81%E7%9B%AE15-5&output=embed"
              width="100%"
              className="h-[250px] lg:h-[320px]"
              style={{ border: 0, borderRadius: 4 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="株式会社Sing 所在地"
            />
          </div>
        </div>
      </section>
    </>
  );
}

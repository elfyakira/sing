import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "株式会社Singへのお問い合わせ・ご相談・採用エントリーはこちら。1営業日以内にご返信いたします。",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

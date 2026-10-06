import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "お問い合わせ",
  description:
    "株式会社Singへのお問い合わせ・ご相談・採用エントリーはこちら。1営業日以内にご返信いたします。",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

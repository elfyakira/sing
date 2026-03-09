import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "新着情報",
  description:
    "株式会社Singの新着情報・お知らせ・セミナー情報・実績紹介をお届けします。",
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

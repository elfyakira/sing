import type { Metadata } from "next";
import { seo, company } from "@/lib/site";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
}

// 各ページ固有の canonical / OGP / Twitter Card を生成する
export function buildPageMetadata({
  title,
  description,
  path,
  image = "/opengraph-image",
  type = "website",
  publishedTime,
}: PageMetadataInput): Metadata {
  const fullTitle = `${title}${seo.titleSuffix || ""}`;
  return {
    // 親レイアウトのテンプレートに依存せず、常に「タイトル | 株式会社Sing」で出力する
    title: { absolute: fullTitle },
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: company.name,
      locale: "ja_JP",
      type,
      ...(publishedTime && { publishedTime }),
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

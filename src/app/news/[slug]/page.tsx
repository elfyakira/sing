import type { Metadata } from "next";
import { notFound } from "next/navigation";
import siteData from "@data/site.json";
import { buildPageMetadata } from "@/lib/metadata";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/structured-data";
import ArticleClient from "./ArticleClient";

const SITE_URL = "https://singgroup.biz";

interface NewsItem {
  slug: string;
  date: string;
  title: string;
  description: string;
  thumbnail: string;
}

const news = siteData.news as NewsItem[];

function findArticle(slug: string) {
  return news.find((n) => n.slug === slug);
}

export const dynamicParams = false;

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = findArticle(slug);
  if (!article) return {};
  return buildPageMetadata({
    title: article.title,
    description: article.description,
    path: `/news/${slug}`,
    image: article.thumbnail,
    type: "article",
    publishedTime: article.date,
  });
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = findArticle(slug);
  if (!article) notFound();

  const url = `${SITE_URL}/news/${slug}`;

  return (
    <>
      <StructuredData
        data={[
          generateArticleSchema({
            title: article.title,
            description: article.description,
            url,
            datePublished: article.date,
            author: "株式会社Sing",
            image: article.thumbnail,
          }),
          generateBreadcrumbSchema([
            { name: "ホーム", url: SITE_URL },
            { name: "新着情報", url: `${SITE_URL}/news` },
            { name: article.title, url },
          ]),
        ]}
      />
      <ArticleClient slug={slug} />
    </>
  );
}

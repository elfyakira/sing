import type { MetadataRoute } from "next";
import siteData from "@data/site.json";

const BASE_URL = "https://singgroup.biz";

interface NewsItem {
  slug: string;
  date?: string;
  category?: string;
  title?: string;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/service`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/works`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/initiatives`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/message`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/recruit`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/news`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/company`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const news = ((siteData as { news?: NewsItem[] }).news ?? []) as NewsItem[];
  const newsPages: MetadataRoute.Sitemap = news.map((n) => ({
    url: `${BASE_URL}/news/${n.slug}`,
    lastModified: n.date ? new Date(n.date) : now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...newsPages];
}

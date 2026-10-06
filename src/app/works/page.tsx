import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import StructuredData from "@/components/StructuredData";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import WorksClient from "./WorksClient";

export const metadata: Metadata = buildPageMetadata({
  title: "制作実績",
  description:
    "株式会社Singの制作実績。愛知県・春日井市を中心とした企業様のホームページ制作・LP制作・PV（プロモーション動画）制作・アニメ動画制作の事例をご紹介します。",
  path: "/works",
});

export default function WorksPage() {
  return (
    <>
      <StructuredData
        data={generateBreadcrumbSchema([
          { name: "ホーム", url: "https://singgroup.biz" },
          { name: "制作実績", url: "https://singgroup.biz/works" },
        ])}
      />
      <WorksClient />
    </>
  );
}

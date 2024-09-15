import NewsList from "@/components/News/NewsList";
import { getLatestNews } from "@/lib/news";
import React from "react";

export default async function LatestPage() {
  const latestNews = await getLatestNews();
  return (
    <>
      <h2 className="pb-6 text-2xl">Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}

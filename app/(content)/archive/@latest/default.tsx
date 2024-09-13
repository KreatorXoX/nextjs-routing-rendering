import NewsList from "@/components/News/NewsList";
import { getLatestNews } from "@/lib/news";
import React from "react";

export default function LatestPage() {
  const latestNews = getLatestNews();
  return (
    <>
      <h2 className="pb-6">Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}

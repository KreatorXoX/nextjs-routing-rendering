import NewsList from "@/components/News/NewsList";
import NewsNavBar from "@/components/News/NewsNavBar";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";
import React from "react";

type Props = {
  params: {
    filter?: string[];
  };
};
export default function FilteredNewsPage({ params }: Props) {
  const { filter } = params;
  if (!filter) {
    return null;
  }
  const availableYears = getAvailableNewsYears();
  const news = getNewsForYear(+filter[0]);

  return (
    <>
      <header>
        <NewsNavBar availableYears={availableYears} />
      </header>
      <h2 className="pb-6">News for year {filter}</h2>
      <NewsList news={news} />
    </>
  );
}

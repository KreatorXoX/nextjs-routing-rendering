import NewsList from "@/components/News/NewsList";
import NewsNavBar from "@/components/News/NewsNavBar";
import { DummyNew } from "@/types";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import React, { Suspense } from "react";

type Props = {
  params: {
    filter?: string[];
  };
};
export default async function FilteredNewsPage({ params }: Props) {
  const { filter } = params;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news: DummyNew[] | undefined;
  let availableMonths: number[] | undefined;
  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);
    availableMonths = getAvailableNewsMonths(+selectedYear);
    console.log(news);
  }

  if (selectedYear && selectedMonth) {
    news = await getNewsForYearAndMonth(+selectedYear, +selectedMonth);
    availableMonths = getAvailableNewsMonths(+selectedYear);
  }

  const availableYears = await getAvailableNewsYears();

  return (
    <>
      <header className="pb-5">
        <NewsNavBar
          availableYears={availableYears}
          availableMonths={availableMonths}
        />
      </header>

      <NewsList news={news} />
    </>
  );
}

import NewsList from "@/components/News/NewsList";
import NewsNavBar from "@/components/News/NewsNavBar";
import { DummyNew } from "@/dummy-data";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import React from "react";

type Props = {
  params: {
    filter?: string[];
  };
};
export default function FilteredNewsPage({ params }: Props) {
  const { filter } = params;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news: DummyNew[] | undefined;
  let availableMonths: number[] | undefined;
  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(+selectedYear);
    availableMonths = getAvailableNewsMonths(+selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(+selectedYear, +selectedMonth);
    availableMonths = getAvailableNewsMonths(+selectedYear);
  }

  const availableYears = getAvailableNewsYears();

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

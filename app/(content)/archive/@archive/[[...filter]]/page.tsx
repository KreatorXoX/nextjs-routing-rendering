import NewsList from "@/components/News/NewsList";
import NewsNavBar from "@/components/News/NewsNavBar";
import { DummyNew } from "@/types";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import { Suspense } from "react";

type Props = {
  params: {
    filter?: string[];
  };
};
type FilterPageProps = {
  year: string | undefined;
  month: string | undefined;
};
type FilterHeaderProps = {
  year: string | undefined;
};

async function FilteredNews({ year, month }: FilterPageProps) {
  let news: DummyNew[] | undefined;

  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  return <NewsList news={news} />;
}

async function FilterHeader({ year }: FilterHeaderProps) {
  let availableMonths: string[] | undefined = undefined;
  if (year) {
    availableMonths = await getAvailableNewsMonths(year);
  }
  const availableYears = await getAvailableNewsYears();

  return (
    <header className="pb-5 space-y-5">
      <NewsNavBar
        availableYears={availableYears}
        availableMonths={availableMonths}
      />
    </header>
  );
}

export default async function FilteredNewsPage({ params }: Props) {
  const { filter } = params;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense
        fallback={<p className="text-xl italic pb-5">Loading Header ...</p>}
      >
        <FilterHeader year={selectedYear} />
      </Suspense>
      <Suspense fallback={<p className="text-xl italic pb-5">Loading</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}

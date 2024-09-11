import { DUMMY_NEWS, DummyNew } from "@/dummy-data";

export function getAllNews() {
  return DUMMY_NEWS;
}

export function getLatestNews() {
  return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears(): number[] {
  return DUMMY_NEWS.reduce<number[]>((years, news) => {
    const year = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year: number): number[] {
  return DUMMY_NEWS.reduce<number[]>((months, news) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === year) {
      const month = new Date(news.date).getMonth(); // 0-indexed, so January is 0
      if (!months.includes(month + 1)) {
        months.push(month + 1); // Convert to 1-indexed
      }
    }
    return months;
  }, []).sort((a, b) => b - a); // Sort in descending order
}

export function getNewsForYear(year: number): DummyNew[] {
  return DUMMY_NEWS.filter(
    (news) => new Date(news.date).getFullYear() === year
  );
}

export function getNewsForYearAndMonth(
  year: number,
  month: number
): DummyNew[] {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1; // Convert to 1-indexed
    return newsYear === year && newsMonth === month;
  });
}

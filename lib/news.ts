import { DummyNew } from "@/types";
import sql from "better-sqlite3";

const db = sql("data.db");

export async function getAllNews() {
  const news = db.prepare("SELECT * FROM news").all();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news as DummyNew[];
}

export async function getNewsItem(slug: string) {
  const newsItem = db.prepare("SELECT * FROM news WHERE slug = ?").get(slug);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return newsItem as DummyNew;
}

export async function getLatestNews() {
  const latestNews = db
    .prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3")
    .all();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return latestNews as DummyNew[];
}

export async function getAvailableNewsYears() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const years = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all()
    .map((year) => (year as any).year);

  return years as string[];
}

export async function getAvailableNewsMonths(year: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
    )
    .all(year)
    .map((month) => (month as any).month);
}

export async function getNewsForYear(year: string) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
    )
    .all(year);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news as DummyNew[];
}

export async function getNewsForYearAndMonth(year: string, month: string) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(year, month);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news as DummyNew[];
}

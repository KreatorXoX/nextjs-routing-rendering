import { DummyNew } from "@/dummy-data";
import React from "react";
import NewItem from "./NewItem";

type Props = {
  news: DummyNew[] | undefined;
};
export default function NewsList({ news }: Props) {
  if (!news || news.length === 0) {
    return (
      <p className="text-red-300 font-semibold font-serif">
        No news found with the given criterias
      </p>
    );
  }
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
      {news.map((singleNew) => (
        <NewItem key={singleNew.id} dummyNew={singleNew} />
      ))}
    </ul>
  );
}

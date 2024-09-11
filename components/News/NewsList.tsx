import { DummyNew } from "@/dummy-data";
import React from "react";
import NewItem from "./NewItem";

type Props = {
  news: DummyNew[];
};
export default function NewsList({ news }: Props) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
      {news.map((singleNew) => (
        <NewItem key={singleNew.id} dummyNew={singleNew} />
      ))}
    </ul>
  );
}

import React from "react";

import NewsNavLink from "./NewsNavLink";

type Props = { availableYears: number[] };

export default function NewsNavBar({ availableYears }: Props) {
  return (
    <nav>
      <ul className="flex items-center gap-10 text-gray-300 font-serif font-semibold tracking-wider text-xl">
        {availableYears.map((year) => (
          <li key={year}>
            <NewsNavLink href={`/archive/${year}`}>{year}</NewsNavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

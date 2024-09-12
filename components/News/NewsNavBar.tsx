import React from "react";

import NewsNavLink from "./NewsNavLink";
import MonthsNavLink from "./MonthsNavLink";

type Props = {
  availableYears: number[];
  availableMonths: number[] | undefined;
};

export default function NewsNavBar({ availableYears, availableMonths }: Props) {
  return (
    <nav>
      <ul className="flex items-center gap-10 text-gray-300 font-serif font-semibold tracking-wider text-xl">
        {availableYears.map((year) => (
          <li key={year}>
            <NewsNavLink href={`/archive/${year}`}>{year}</NewsNavLink>
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-10 text-gray-300 font-serif font-semibold tracking-wider text-xl">
        {availableMonths?.map((month) => (
          <li key={month}>
            <MonthsNavLink href={`${month}`}>{month}</MonthsNavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

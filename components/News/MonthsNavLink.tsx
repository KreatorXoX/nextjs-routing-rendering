"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = { href: string; children: React.ReactNode };

const MonthsNavLink = ({ href, children }: Props) => {
  let pathname = usePathname();
  const isActive = pathname.endsWith(`/${href}`);

  pathname =
    pathname.split("/").length > 3
      ? `/${pathname.split("/")[1]}/${pathname.split("/")[2]}`
      : pathname;
  return (
    <Link
      href={`${pathname}/${href}`}
      className={`
      italic text-base
    hover:text-blue-600 transition
     ${isActive ? "underline underline-offset-4 text-blue-600" : ""}`}
    >
      {children}
    </Link>
  );
};

export default MonthsNavLink;

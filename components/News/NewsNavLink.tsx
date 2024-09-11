"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = { href: string; children: React.ReactNode };

const NewsNavLink = ({ href, children }: Props) => {
  const pathname = usePathname();
  const isActive = pathname.includes(href);

  return (
    <Link
      href={href}
      className={`
    hover:text-blue-600 transition
     ${isActive ? "underline underline-offset-4 text-blue-600" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NewsNavLink;

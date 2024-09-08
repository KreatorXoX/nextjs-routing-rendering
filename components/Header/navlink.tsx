"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = { href: string; children: string };

const NavLink = ({ href, children }: Props) => {
  const pathname = usePathname();

  const isActive = pathname === href;

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

export default NavLink;

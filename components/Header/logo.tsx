"use client";

import { useState } from "react";
import Link from "next/link";
const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href="/">
      <svg
        width={40}
        height={40}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="transition-all duration-300 ease-in-out cursor-pointer"
      >
        {/* Background */}
        <rect width="100" height="100" rx="10" fill="#f0f0f0" />

        {/* Newspaper fold */}
        <path
          d="M70 10 L90 30 L90 90 L10 90 L10 10 Z"
          fill="#ffffff"
          stroke="#000000"
          strokeWidth="2"
        />

        {/* Text lines */}
        <g
          className={`transition-transform duration-300 ${
            isHovered ? "translate-x-1" : ""
          }`}
        >
          <rect x="20" y="20" width="50" height="3" fill="#333333" />
          <rect x="20" y="28" width="40" height="3" fill="#333333" />
          <rect x="20" y="36" width="45" height="3" fill="#333333" />
          <rect x="20" y="44" width="35" height="3" fill="#333333" />
        </g>

        {/* "NEWS" text */}
        <text
          x="50"
          y="70"
          fontFamily="Arial, sans-serif"
          fontSize="18"
          fontWeight="bold"
          fill="#2563eb"
          textAnchor="middle"
          className={`transition-all duration-300  ${
            isHovered ? "scale-110" : ""
          }`}
        >
          NEWS
        </text>

        {/* Decorative lines */}
        <line
          x1="20"
          y1="80"
          x2="80"
          y2="80"
          stroke="#333333"
          strokeWidth="2"
        />
        <line
          x1="20"
          y1="85"
          x2="60"
          y2="85"
          stroke="#333333"
          strokeWidth="2"
        />
      </svg>
    </Link>
  );
};

export default Logo;

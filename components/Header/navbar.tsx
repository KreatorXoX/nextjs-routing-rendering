import React from "react";
import Navlink from "./navlink";

export default function Navbar() {
  return (
    <nav className="flex gap-10 items-center">
      <Navlink href={"/archive"}>Archive</Navlink>
      <Navlink href={"/news"}>News</Navlink>
    </nav>
  );
}

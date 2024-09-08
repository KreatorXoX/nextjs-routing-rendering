import React from "react";
import Navlink from "./navlink";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex gap-10 items-center">
      <Navlink href={"/"}>Home</Navlink>
      <Navlink href={"/news"}>News</Navlink>
    </nav>
  );
};

export default Navbar;

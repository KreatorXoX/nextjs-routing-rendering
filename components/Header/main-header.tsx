import React from "react";

import Navbar from "./navbar";
import Logo from "./logo";

const MainHeader = () => {
  return (
    <div className="w-full fixed top-0 z-30 bg-inherit px-10 py-2 lg:text-xl">
      <div className="w-full max-w-7xl mx-auto flex justify-center md:justify-between truncate">
        <div className="md:block hidden">
          <Logo />
        </div>

        <Navbar />
      </div>
    </div>
  );
};

export default MainHeader;

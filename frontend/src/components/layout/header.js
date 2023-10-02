import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/solid";
import React from "react";

const Header = () => {
  return (
    <div className="w-full flex gap-4 bg-white p-6 items-center h-16 z-0">
      <HomeIcon className="w-6 h-6" />
      <ChevronRightIcon className="w-4 h-4" />
      <h1>Hello</h1>
      <ChevronRightIcon className="w-4 h-4" />
      <h1>Hello</h1>
      <ChevronRightIcon className="w-4 h-4" />
      <h1>Hello</h1>
    </div>
  );
};

export default Header;

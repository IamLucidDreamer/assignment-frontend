import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const MainCards = () => {
  return (
    <div className="py-2 my-2">
      <div className="flex items-center justify-between w-full rounded p-4 font-semibold">
        <h1 style={{ width: "35px" }}>#</h1>
        <h1 className="w-3/12">Phase</h1>
        <h1 className="w-2/12">Status</h1>
        <h1 className="w-2/12">Document</h1>
        <h1 className="w-3/12">Responsible Party</h1>
        <h1 className="w-2/12">Update Date</h1>
      </div>
      <div className="flex items-center justify-between w-full bg-white rounded p-4">
        <h1 style={{ width: "35px" }}>
          <ChevronRightIcon className="w-5 h-5" />
        </h1>
        <h1 className="w-3/12">Phase</h1>
        <h1 className="w-2/12">Status</h1>
        <h1 className="w-2/12">Document</h1>
        <h1 className="w-3/12">Responsible Party</h1>
        <h1 className="w-2/12">Update Date</h1>
      </div>
    </div>
  );
};

export default MainCards;

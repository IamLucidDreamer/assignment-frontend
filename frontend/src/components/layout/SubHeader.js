import React from "react";
import {
  AdjustmentsHorizontalIcon,
  ArrowDownRightIcon,
  FolderIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/outline";

const SubHeader = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="bg-white rounded w-full p-2 flex gap-4 items-center justify-between">
        <div className="flex items-center gap-2 w-1/4">
          <FolderIcon className="w-5 h-5 " />
          <select className="outline-none">
            <option value="All Categories">All Categories</option>
            <option value="Stage 1">Stage 1</option>
          </select>
        </div>
        <div className="w-3/4 flex gap-2 items-center">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
          <input placeholder="Search here" className="outline-none w-full" />
          <MicrophoneIcon className="w-5 h-5 text-gray-400" />
        </div>
      </div>
      <select className="bg-white p-2 rounded outline-none">
        <option value="All Categories">All Categories</option>
        <option value="Stage 1">Stage 1</option>
      </select>
      <div className="bg-white p-2 rounded">
        <AdjustmentsHorizontalIcon className="w-5 h-5 text-gray-400" />
      </div>
      <div className="bg-white p-2 rounded">
        <ArrowDownRightIcon className="w-5 h-5 text-gray-400" />
      </div>
      <div className="bg-white p-2 rounded">
        <FunnelIcon className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  );
};

export default SubHeader;

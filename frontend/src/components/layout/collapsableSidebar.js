import { FunnelIcon } from "@heroicons/react/24/outline";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const CollapsableSidebar = ({ open, setOpen }) => {
  const toggleSidebar = () => {
    setOpen(!open);
  };

  if (!open) {
    return (
      <div className="bg-white shadow-gray-600 shadow-sm z-30 w-10 py-4">
        <button onClick={toggleSidebar} className="w-full">
          <ArrowRightIcon className="w-6 h-6 text-black mx-auto" />
        </button>
      </div>
    );
  }
  return (
    <div className="bg-white shadow-gray-600 shadow-sm flex z-30 w-96">
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center px-4">
          <h2 className="text-lg font-bold">Transaction Contents</h2>
          <button onClick={toggleSidebar}>
            <ArrowLeftIcon className="w-6 h-6 text-black" />
          </button>
        </div>
        <div className="flex items-center justify-between p-4 my-4">
          <TitleStats statData={12} title={"Stages"} />
          <div className="w-0.5 bg-gray-200 self-stretch" />
          <TitleStats statData={23} title={"Folders"} />
          <div className="w-0.5 bg-gray-200 self-stretch" />
          <TitleStats statData={1235} title={"Documents"} />
          <div className="w-0.5 bg-gray-200 self-stretch" />
          <FunnelIcon className="w-6 h-6 text-gray-400" />
        </div>
        <div className="w-full border-t-2 border-b-2 border-gray-200 p-2 flex justify-between items-center">
          <input
            placeholder="Filter by Client/Matter name"
            className="w-full outline-none"
          />
          <FunnelIcon className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default CollapsableSidebar;

const TitleStats = ({ title, statData }) => {
  return (
    <div className="">
      <h1 className="text-lg font-semibold">{statData}</h1>
      <h2 className="text-sm">{title}</h2>
    </div>
  );
};

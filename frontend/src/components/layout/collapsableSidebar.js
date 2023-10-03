import {
  ChevronRightIcon,
  FunnelIcon,
  FolderIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const CollapsableSidebar = ({ open, setOpen }) => {
  const folderData = useSelector((state) => state?.data?.data);

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
    <div className="bg-white shadow-gray-600 shadow-sm flex z-30 w-96 py-4">
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
        <div className="mx-2 border-r-2 border-gray-100">
          {folderData?.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
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

const SidebarItem = ({ item }) => {
  const [showChildrem, setShowChildrem] = useState(false);

  if (item.type === "file") {
    return <li className="ml-4 py-1.5">{item.name}</li>;
  } else if (item.type === "folder") {
    return (
      <>
        <StageCard
          title={item?.name}
          showChildrem={showChildrem}
          setShowChildrem={setShowChildrem}
        />
        {showChildrem && (
          <ul className="ml-4">
            {item.children.map((child, index) => (
              <SidebarItem key={index} item={child} />
            ))}
          </ul>
        )}
      </>
    );
  } else {
    return null;
  }
};

const StageCard = ({ title, showChildrem, setShowChildrem }) => {
  const toggleSubFolder = () => {
    setShowChildrem(!showChildrem);
  };
  return (
    <div className="border-b-2 border-gray-100 py-2 w-full px-2 flex gap-2 items-center justify-between">
      <div className="flex items-center gap-2">
        <button onClick={toggleSubFolder}>
          <ChevronRightIcon className="w-4 h-4" />
        </button>
        <FolderIcon className="w-6 h-6" />
        <h3>{title}</h3>
      </div>
      <div className="flex items-center gap-2">
        <InformationCircleIcon className="w-5 h-5 text-gray-300" />
        <div className="h-4 w-4 p-0.5 bg-gray-300 rounded-full">
          <ClipboardDocumentIcon className=" text-white" />
        </div>
      </div>
    </div>
  );
};

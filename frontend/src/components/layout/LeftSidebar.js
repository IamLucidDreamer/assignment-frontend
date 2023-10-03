import React from "react";
import {
  Bars3BottomRightIcon,
  BookmarkIcon,
  CalendarIcon,
  ClipboardIcon,
  ClockIcon,
  DocumentChartBarIcon,
  DocumentTextIcon,
  EllipsisHorizontalIcon,
  HomeIcon,
  ViewfinderCircleIcon,
} from "@heroicons/react/24/outline";

const LeftSidebar = () => {
  const btnOptions = [
    {
      icon: <HomeIcon className="h-8 w-8 rounded" />,
      title: "Transaction",
      route: "",
    },
    {
      icon: <Bars3BottomRightIcon className="h-8 w-8 rounded" />,
      title: "Stages",
      route: "",
    },
    {
      icon: <ClipboardIcon className="h-8 w-8 rounded" />,
      title: "Tasks",
      route: "",
    },
    {
      icon: <ClockIcon className="h-8 w-8 rounded" />,
      title: "Phases",
      route: "",
    },
    {
      icon: <DocumentTextIcon className="h-8 w-8 rounded" />,
      title: "Sign Tacking",
      route: "",
    },
    {
      icon: <BookmarkIcon className="h-8 w-8 rounded" />,
      title: "Critical Info Setting",
      route: "",
    },
    {
      icon: <ViewfinderCircleIcon className="h-8 w-8 rounded" />,
      title: "Analysis Phase",
      route: "",
    },
    {
      icon: <CalendarIcon className="h-8 w-8 rounded" />,
      title: "Calendar",
      route: "",
    },
  ];

  return (
    <div
      className="bg-white shadow-gray-200 shadow flex z-50 rounded-lg"
      style={{ width: "80px" }}
    >
      <div className="flex flex-col relative">
        {btnOptions.map((val, index) => {
          return (
            <button
              key={index + val?.title}
              className="flex flex-col items-center w-full mt-1 py-2 text-gray-800"
            >
              {val?.icon}
              <h2 className="font-semibold text-xs">{val?.title}</h2>
            </button>
          );
        })}
        <div className="w-full h-0.5 bg-slate-200" />
        <button className="flex flex-col items-center w-full mt-1 py-2 text-gray-800">
          <DocumentChartBarIcon className="h-8 w-8 rounded" />
          <h2 className="font-semibold text-xs">Activity</h2>
        </button>
        <button className="flex flex-col items-center w-full py-1 text-gray-800">
          <EllipsisHorizontalIcon className="h-8 w-8 rounded" />
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;

import React from "react";
import {
  AdjustmentsHorizontalIcon,
  CalendarIcon,
  ChartBarIcon,
  DocumentChartBarIcon,
  DocumentIcon,
  EnvelopeIcon,
  FolderIcon,
} from "@heroicons/react/24/outline";
import transactionImage from "../../assets/image/transactionImage.png";

const SidebarRight = () => {
  const userProfileImageUrl =
    "data:image/jpeg;base64,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";

  const btnOptions = [
    {
      icon: <img src={transactionImage} className="h-12 w-12 rounded mb-1" />,
      title: "Transaction",
      route: "",
    },
    {
      icon: <ChartBarIcon className="h-10 w-6 rounded" />,
      title: "Panorama",
      route: "",
    },
    {
      icon: <DocumentChartBarIcon className="h-10 w-6 rounded" />,
      title: "Transaction",
      route: "",
    },
    {
      icon: <FolderIcon className="h-10 w-6 rounded" />,
      title: "Documents",
      route: "",
    },
    {
      icon: <EnvelopeIcon className="h-10 w-6 rounded" />,
      title: "E-mails",
      route: "",
    },
    {
      icon: <DocumentIcon className="h-10 w-6 rounded" />,
      title: "Reports",
      route: "",
    },
    {
      icon: <AdjustmentsHorizontalIcon className="h-10 w-6 rounded" />,
      title: "Management Panel",
      route: "",
    },
    {
      icon: <CalendarIcon className="h-10 w-6 rounded" />,
      title: "Transaction Calendar",
      route: "",
    },
  ];

  return (
    <div
      className="bg-primary shadow-gray-600 shadow-lg flex z-50"
      style={{ width: "100px" }}
    >
      <div className="flex flex-col relative">
        {btnOptions.map((val, index) => {
          return (
            <button
              key={index + val?.title}
              className="flex flex-col items-center w-full mt-1 py-2 text-white border-l-4 border-transparent hover:border-blue-600 bg-transparent hover:bg-gradient-to-r from-blue-900 to-transparent"
            >
              {val?.icon}
              <h2 className="font-semibold text-xs">{val?.title}</h2>
            </button>
          );
        })}
        <div className="w-full flex justify-center">
          <button className="absolute bottom-4 flex flex-col items-center mt-auto w-12 h-12">
            <img
              loading="lazy"
              src={userProfileImageUrl}
              className="rounded-full border-2 border-blue-500"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarRight;

const CommonIconBtn = () => {
  return <button></button>;
};

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useSelector } from "react-redux";

const MainCards = () => {
  const folderData = useSelector((state) => state?.data?.data);
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
      <>
        {folderData?.map((item, index) => (
          <RecursiceList key={index} item={item} />
        ))}
      </>
    </div>
  );
};

export default MainCards;

const RecursiceList = ({ item }) => {
  if (item.type === "file") {
    return <li className="ml-4 py-1.5">{item.name}</li>;
  } else if (item.type === "folder") {
    return (
      <>
        <MainCard id={item?.id} title={item?.name} />
        {item.open && (
          <ul className="ml-4">
            {item.children.map((child, index) => (
              <RecursiceList key={index} item={child} />
            ))}
          </ul>
        )}
      </>
    );
  } else {
    return null;
  }
};

const MainCard = () => {
  return (
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
  );
};

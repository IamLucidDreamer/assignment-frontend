import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import serverV1 from "../../api/server";
import {
  toggleFolder,
  updateDataChildren,
} from "../../store/actions/dataActions";

const MainCards = () => {
  const folderData = useSelector((state) => state?.data?.data);
  const searchData = useSelector((state) => state?.data?.searchData);
  const renderData = searchData?.length > 0 ? searchData : folderData;
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
        {renderData?.map((item, index) => (
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
        <MainCard id={item?.id} item={item} />
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

const MainCard = ({ id, item }) => {
  const dispatch = useDispatch();

  const toggleSubFolder = () => {
    serverV1
      .get(`/data?id=${id}`)
      .then((res) => {
        dispatch(toggleFolder({ id: id }));
        dispatch(updateDataChildren({ id: id, newChild: res?.data?.data }));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex items-center justify-between w-full bg-white rounded p-4">
      <button style={{ width: "35px" }} onClick={toggleSubFolder}>
        <ChevronRightIcon className="w-5 h-5" />
      </button>
      <h1 className="w-3/12">{item?.name}</h1>
      <h1 className="w-2/12">
        <Status status={item?.status} />
      </h1>
      <h1 className="w-2/12">Document</h1>
      <h1 className="w-3/12">Responsible Party</h1>
      <h1 className="w-2/12">Update Date</h1>
    </div>
  );
};

const Status = ({ status }) => {
  const getStatus = () => {
    switch (status) {
      case 1:
        return {
          text: "Completed",
          color: "#01BD8C",
        };
      case 2:
        return {
          text: "Continuing",
          color: "#FFC80E",
        };
      case 3:
        return {
          text: "Not Started",
          color: "#F72042",
        };
      default:
        return {
          text: "Undefined",
          color: "grey",
        };
    }
  };
  const activeStatus = getStatus();
  return (
    <div
      className="p-1.5 w-9/12 text-white rounded-md text-center text-sm"
      style={{ backgroundColor: activeStatus?.color }}
    >
      {activeStatus?.text}
    </div>
  );
};

import React from "react";

const CommonIconBtn = ({
  icon = <></>,
  text = "",
  className = "flex text-black",
}) => {
  return (
    <button className={className}>
      {icon}
      {text}
    </button>
  );
};

export default CommonIconBtn;

import React from "react";
import "../style/index.css";

const PixelCell = ({ on, toggle }) => {
  const background = on ? "bg-black" : "bg-gray-100";

  return (
    <div
      className={`table-cell h-11 w-11 lg:h-16 lg:w-16 border-2 ${background}`}
      onClick={() => {
        toggle(!on);
      }}
    ></div>
  );
};

export default PixelCell;

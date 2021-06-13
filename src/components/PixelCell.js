import React from "react";
import "../style/index.css";

const PixelCell = ({ on, toggle }) => {
  const background = on ? "bg-black" : "bg-gray-100";

  return (
    <div
      className={`table-cell h-16 w-16 border-2 ${background}`}
      onClick={() => {
        toggle(!on);
      }}
    ></div>
  );
};

export default PixelCell;

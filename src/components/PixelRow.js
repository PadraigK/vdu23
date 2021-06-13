import React, { useState } from "react";
import "../style/index.css";
import PixelCell from "./PixelCell";

const PixelRow = () => {
  const [rowValue, setRowValue] = useState(0);

  const cells = [7, 6, 5, 4, 3, 2, 1, 0]
    .map((pos) => {
      return 1 << pos;
    })
    .map((pos) => {
      return (
        <PixelCell
          key={pos}
          on={rowValue & pos}
          toggle={() => {
            setRowValue(rowValue ^ pos);
          }}
        />
      );
    });

  return (
    <div className="table-row">
      {cells}
      <div className="table-cell align-middle p-3">
        <input
          className="w-16 text-center"
          type="text"
          value={rowValue}
          onChange={(e) => {
            setRowValue(parseInt(e.target.value) || rowValue);
          }}
        />
      </div>
    </div>
  );
};

export default PixelRow;

import React from "react";
import "../style/index.css";
import PixelCell from "./PixelCell";

const PixelRow = ({ rowValue, onRowChange }) => {
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
            onRowChange(rowValue ^ pos);
          }}
        />
      );
    });

  return (
    <div className="table-row">
      {cells}
      <div className="table-cell align-middle p-2">
        <input
          className="w-12 text-center p-1"
          type="text"
          value={rowValue}
          onChange={(e) => {
            onRowChange(Number(e.target.value) || rowValue);
          }}
        />
      </div>
    </div>
  );
};

export default PixelRow;

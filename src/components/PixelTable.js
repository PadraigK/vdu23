import React from "react";
import "../style/index.css";
import PixelRow from "./PixelRow";

const PixelTable = ({ character, onCharacterChange }) => {
  const pixelRows = character.map((row, index) => {
    return (
      <PixelRow
        key={index}
        rowValue={row}
        onRowChange={(rowValue) => {
          let allRows = [...character];
          allRows[index] = rowValue;
          onCharacterChange(allRows);
        }}
      />
    );
  });

  return (
    <div className="table sm">
      <div className="table-row-group">{pixelRows}</div>
    </div>
  );
};

export default PixelTable;

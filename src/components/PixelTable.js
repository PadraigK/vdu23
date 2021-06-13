import React, { useEffect, useState } from "react";
import "../style/index.css";
import PixelRow from "./PixelRow";

const PixelTable = ({ initial }) => {
  const [character, setCharacter] = useState(initial);

  useEffect(() => {
    var urlSplit = window.location.href.split("?");
    window.history.pushState({}, "VDU 23", urlSplit[0] + "?v=" + character);
  }, [character]);

  const pixelRows = character.map((row, index) => {
    return (
      <PixelRow
        key={index}
        rowValue={row}
        onRowChange={(rowValue) => {
          let allRows = [...character];
          allRows[index] = rowValue;
          setCharacter(allRows);
        }}
      />
    );
  });

  return (
    <div className="table mx-auto sm">
      <div className="table-row-group">{pixelRows}</div>
    </div>
  );
};

export default PixelTable;

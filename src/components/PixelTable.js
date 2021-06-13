import React from "react";
import "../style/index.css";
import PixelRow from "./PixelRow";

const PixelTable = () => {
  return (
    <div className="table mx-auto sm">
      <div className="table-row-group">
        <PixelRow key="0" />
        <PixelRow key="1" />
        <PixelRow key="2" />
        <PixelRow key="3" />
        <PixelRow key="4" />
        <PixelRow key="5" />
        <PixelRow key="6" />
        <PixelRow key="7" />
      </div>
    </div>
  );
};

export default PixelTable;

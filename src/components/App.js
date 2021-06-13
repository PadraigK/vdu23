import React from "react";
import "../style/index.css";
import PixelTable from "./PixelTable";
import qs from "query-string";

const App = (props) => {
  const parsedQuery = qs.parse(window.location.search);

  let initial = Array(8).fill(0);
  const value = parsedQuery["v"];
  if (value) {
    const arrayFromQuery = value.split(",").map(Number);

    if (arrayFromQuery.length === 8) {
      initial = arrayFromQuery;
    }
  }

  return (
    <div className="container p-8">
      <PixelTable initial={initial} />
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import "../style/index.css";
import PixelTable from "./PixelTable";
import qs from "query-string";

const App = () => {
  const parsedQuery = qs.parse(window.location.search);

  let initial = Array(8).fill(0);
  const value = parsedQuery["v"];
  if (value) {
    const arrayFromQuery = value.split(",").map(Number);

    if (arrayFromQuery.length === 8) {
      initial = arrayFromQuery;
    }
  }

  const [character, setCharacter] = useState(initial);

  useEffect(() => {
    var urlSplit = window.location.href.split("?");
    window.history.pushState({}, "VDU 23", urlSplit[0] + "?v=" + character);
  }, [character]);

  return (
    <div className="container lg:p-8 mx-auto">
      <PixelTable character={character} onCharacterChange={setCharacter} />
      <br />
      <h2 className="font-mono text-l">VDU 23, 254, {character.join(", ")}</h2>
    </div>
  );
};

export default App;

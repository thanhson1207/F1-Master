import React from "react";
import jsonData from "./data/data.json";
import Driver from "./Driver";

const App = () => {
  return (
    <div>
      <Driver drivers={jsonData.drivers} />
    </div>
  );
};

export default App;

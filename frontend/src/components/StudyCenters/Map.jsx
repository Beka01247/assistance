import React from "react";
import TabSwitcher from "./TabSwitcher";

function Map({ setTab, tab }) {
  return (
    <div className="w-full flex justify-center items-center mt-2">
      <TabSwitcher tab={tab} setTab={setTab} />
    </div>
  );
}

export default Map;

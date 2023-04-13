import { useEffect } from "react";

import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import KeyboardShortcutLegend from "./components/KeyboardShortcutLegend";

function App({ listener }) {
  useEffect(() => {
    listener.simple_combo("shift s", function () {
      console.log("You pressed shift and s");
    });
  }, [listener]);

  return (
    <div className="container">
      <ComponentA />
      <ComponentB />
      <ComponentC />
      <KeyboardShortcutLegend />
    </div>
  );
}

export default App;

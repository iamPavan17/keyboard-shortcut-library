import { useEffect } from "react";

function App({ listener }) {
  useEffect(() => {
    listener.simple_combo("shift s", function () {
      console.log("You pressed shift and s");
    });
  }, [listener]);
  return <div className="App">Hello React</div>;
}

export default App;

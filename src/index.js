import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const listener = new window.keypress.Listener();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App listener={listener} />);

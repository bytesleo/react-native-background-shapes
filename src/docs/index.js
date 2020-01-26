import React from "react";
import ReactDOM from "react-dom";
import { Shapes } from "../lib/Shapes";

const App = () => (
  <div>
    <Shapes />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

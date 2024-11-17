// Index.jsx er en enkel fil som kun importerer App-komponenten og rendrer den til DOM-en.

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import { render } from "react-dom";
import Router from "./components/Router/Router";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./css/planahead.css";
import "./index.css";

render(<Router />, document.querySelector("#main"));

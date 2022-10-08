import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "remixicon/fonts/remixicon.css";

import "./style/css/react-graphql-portfolio.css";
import "./style/css/react-graphql-portfolio.min.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

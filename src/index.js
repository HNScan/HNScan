import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import { CacheProvider } from "rest-hooks";

ReactDOM.render(
  <CacheProvider>
    <App />
  </CacheProvider>,
  document.getElementById("root")
);

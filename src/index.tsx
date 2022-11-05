import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ParseMdProvider } from "./services/parse-md/parse-md.provider";
import { ExpandBoxProvider } from "./services/expand-box/expand- box.provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ParseMdProvider>
      <ExpandBoxProvider>
        <App />
      </ExpandBoxProvider>
    </ParseMdProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

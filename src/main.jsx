import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const el = document.getElementById("root");
// const root = ReactDOM.createRoot(el);

ReactDOM.createRoot(el).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

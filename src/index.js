import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Router from "./Route/Router/Router";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
    <App />
  </React.StrictMode>
);

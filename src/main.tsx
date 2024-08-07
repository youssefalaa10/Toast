import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "primereact/resources/themes/lara-light-teal/theme.css";

import "primeflex/primeflex.css";

import "primeicons/primeicons.css";

import "./assets/styles/style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

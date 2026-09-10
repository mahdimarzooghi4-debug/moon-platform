import React from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/600.css";
import "@fontsource/vazirmatn/700.css";
import App from "./App";

document.documentElement.lang = "fa";
document.documentElement.dir = "rtl";

const container = document.getElementById("app");

if (!container) {
  throw new Error("Root element #app was not found.");
}

createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

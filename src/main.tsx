import React from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/vazirmatn";
import MahForStartups from "./startups/MahForStartups";

const container = document.getElementById("app");
if (!container) throw new Error("App root not found");
createRoot(container).render(
  <React.StrictMode>
    <MahForStartups />
  </React.StrictMode>,
);

import React from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/600.css";
import "@fontsource/vazirmatn/700.css";
import "./app/rtl.css";
import App from "./App";
import "./features/startup-panel/panel-frame.css";
import "./app/creative-house-kpi.css";
import "./app/creative-house-startup-evaluations-figma.css";
import "./app/creative-house-startup-evaluation-detail.css";
import "./app/creative-house-project-evaluation-detail.css";
import "./app/creative-house-milestone-evaluations.css";
import "./app/creative-house-reports.css";
import "./app/creative-house-sidebar-polish.css";
import "./panels/creative-house/dashboard-actions";
import "./panels/creative-house/audit-interactions";
import "./panels/creative-house/dashboard-startup-overview";
import "./panels/creative-house/startup-evaluation-detail/interactions";
import "./panels/creative-house/project-evaluation-detail/interactions";
import "./panels/creative-house/report-detail/interactions";
import "./panels/creative-house/reports/pagination-interactions";
import "./panels/creative-house/milestone-evaluation-detail/interactions";
import "./app/creative-house-release-flow";
import "./panels/fund-manager/interactions";
import "./panels/fund-manager/list-interactions";
import "./panels/fund-manager/financials/settings-sync";
import "./panels/fund-manager/dashboard-shell-fix.css";
import "./panels/fund-manager/sidebar-simplify.css";
import "./panels/fund-manager/financials/shell-fix.css";
import "./app/fund-release-request-flow";
import "./app/fund-project-payment-flow";
import "./landing/contact-details.css";
import "./landing/interactions";
import "./startups/interactions";
import "./companies/interactions";
import "./companies/proposals-interaction";
import "./about/interactions";
import "./contact-support/interactions";
import "./participation-track/interactions";
import "./project-impact-report/interactions";
import "./features/startup-registration/states/step2/interactions";
import "./features/company-registration/interactions";
import "./features/startup-panel/project-create/interactions";
import "./features/startup-panel/audit-interactions";

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

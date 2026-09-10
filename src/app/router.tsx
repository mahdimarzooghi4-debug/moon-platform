import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthEntryPage from "../page";

/**
 * Routes are introduced around the existing Figma-derived screen so its visual
 * markup stays unchanged. Future feature branches should be integrated here
 * instead of replacing App.tsx.
 */
export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthEntryPage />} />
        <Route path="/auth" element={<AuthEntryPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

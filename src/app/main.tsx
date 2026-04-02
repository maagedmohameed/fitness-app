import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { AppProvider } from "@/components/providers/app-providers/index.provider";
import { Route } from "react-router-dom";
import HomePage from "./website/home/page";
import NotFound from "./not-found";
import ProfilePage from "./website/profile/page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <Route path="/" element={<HomePage />} />

      {/* Profile page */}
      <Route path="/profile" element={<ProfilePage />} />

      {/* NotFound */}
      <Route path="*" element={<NotFound />} />
    </AppProvider>
  </StrictMode>
);

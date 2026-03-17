import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { AppProvider } from "@/components/ui/providers/app-providers/index.provider";
import { Route } from "react-router-dom";
import HomePage from "./home/page";
import NotFound from "./not-found";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <Route path="/" element={<HomePage />} />

      {/* NotFound */}
      <Route path="*" element={<NotFound />} />
    </AppProvider>
  </StrictMode>,
);

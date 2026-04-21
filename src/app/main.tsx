import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { AppProvider } from "@/components/providers/app-providers/index.provider";
import { Route } from "react-router-dom";
import HomePage from "./website/home/page";
import NotFound from "./not-found";
import ClassesPage from "./website/classes/page";
import AboutUsSection from "@/components/shared/about-us-section";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <Route path="/" element={<HomePage />} />

      {/* Classes page */}
      <Route path="/classes" element={<ClassesPage />} />
      <Route path="/about-us" element={<AboutUsSection />} />

      {/* NotFound */}
      <Route path="*" element={<NotFound />} />
    </AppProvider>
  </StrictMode>
);

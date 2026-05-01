import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { AppProvider } from "@/components/providers/app-providers/index.provider";
import { Route } from "react-router-dom";
import HomePage from "./website/home/page";
import NotFound from "./not-found";
import ClassesPage from "./website/classes/page";
import ForgetPasswordPage from "./website/auth/forget-password/page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <Route path="/" element={<HomePage />} />

      {/* Classes page */}
      <Route path="/classes" element={<ClassesPage />} />

      {/* Forget password page */}
      <Route path="/forget-password" element={<ForgetPasswordPage />} />

      {/* NotFound */}
      <Route path="*" element={<NotFound />} />
    </AppProvider>
  </StrictMode>
);

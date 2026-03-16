import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { AppProvider } from "@/components/ui/providers/app-providers/index.provider";
import HomePage from "./home/page";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <HomePage />
    </AppProvider>
  </StrictMode>,
);

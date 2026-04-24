import { AppProvider } from "@/components/providers/app-providers/index.provider";
import { Navigate, Route } from "react-router-dom";
import NotFound from "./not-found";
import ClassesPage from "./website/classes/page";
import HomePage from "./website/home/page";
import Register from "./website/auth/register/page";
import Login from "./website/auth/login/page";
import AuthenticationLayout from "./website/auth/layout";
import WebLayout from "./website/layout";

export default function App() {
  return (
    <AppProvider>
      <Route path="/" element={<WebLayout />}>
        <Route index element={<HomePage />} />

        {/* authentication Routes */}
        <Route path="/auth" element={<AuthenticationLayout />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Classes page */}
        <Route path="/classes" element={<ClassesPage />} />

        {/* NotFound */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </AppProvider>
  );
}

import { AppProvider } from "@/components/providers/app-providers/index.provider";
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from "./not-found";
import ClassesPage from "./website/classes/page";
import HomePage from "./website/home/page";
import Register from "./website/auth/register/page";
import Login from "./website/auth/login/page";
import AuthenticationLayout from "./website/auth/layout";
import WebLayout from "./website/layout";
import AboutPage from "./website/about/page";
import HealthyPage from "./website/healthy/page";
import ForgetPasswordPage from "./website/auth/forget-password/page";
import ProfilePage from "./website/profile/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WebLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "auth",
        element: <AuthenticationLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="login" replace />,
          },
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "forget-password",
            element: <ForgetPasswordPage />,
          },
        ],
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "classes",
        element: <ClassesPage />,
      },
      {
        path: "healthy",
        element: <HealthyPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

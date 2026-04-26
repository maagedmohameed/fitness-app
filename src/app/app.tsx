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
        ],
      },
      {
        path: "classes",
        element: <ClassesPage />,
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

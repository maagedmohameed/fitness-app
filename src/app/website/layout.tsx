import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import { Outlet, useLocation } from "react-router-dom";

export default function WebLayout() {
  const location = useLocation();
  const isAuthPage = location.pathname.startsWith("/auth");

  return (
    <>
      {!isAuthPage && <Header />}
      <Outlet />
      {!isAuthPage && <Footer />}
    </>
  );
}

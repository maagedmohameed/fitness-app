import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import React from "react";
import { Outlet } from "react-router-dom";

export default function WebLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

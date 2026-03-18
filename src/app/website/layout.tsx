import Footer from "@/components/layout/footer/footer";
import React from "react";
import { Outlet } from "react-router-dom";

export default function WebLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

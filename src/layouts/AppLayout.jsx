import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "@/Header/MainHeader";
import MainFooter from "@/Footer/MainFooter";
import ScrollToTop from "../helpers/ScrollToTop";
import UsersContext from "../container/UsersContext";
export default function AppLayout() {
  return (
    <>
      <UsersContext>
        <ScrollToTop />
        <MainHeader />
        <Outlet />
        <MainFooter />
      </UsersContext>
    </>
  );
}

import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Main from "../components/Main";
import FooterSec from "../components/FooterSec";

const RootPage = () => {
  return (
    <div>
      <NavBar />
      <Main />
      <Outlet />
      <FooterSec />
    </div>
  );
};

export default RootPage;

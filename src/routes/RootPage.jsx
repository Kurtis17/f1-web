import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Main from "../components/Main";

const RootPage = () => {
  return (
    <div>
      <NavBar />
      <Main />
      <Outlet />
    </div>
  );
};

export default RootPage;

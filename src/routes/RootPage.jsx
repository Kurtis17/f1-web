import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Main from "../components/Main";
import FooterSec from "../components/FooterSec";
import UpcomingRace from "../components/UpcomingRace";

const RootPage = () => {
  return (
    <div>
      <NavBar />
      <UpcomingRace />
      <Main />
      <Outlet />
      <FooterSec />
    </div>
  );
};

export default RootPage;

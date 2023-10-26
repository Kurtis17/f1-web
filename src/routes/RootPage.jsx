import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Main from "../components/Main";
import FooterSec from "../components/FooterSec";
import UpcomingRace from "../components/UpcomingRace";

const RootPage = ({ top }) => {
  return (
    <div>
      <NavBar />
      <UpcomingRace />
      <Main upcoming={top} />
      <Outlet />
      <FooterSec />
    </div>
  );
};

export default RootPage;

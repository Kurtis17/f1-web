import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import StandingsMenu from "../components/StandingsMenu";
import FooterSec from "../components/FooterSec";
import UpcomingRace from "../components/UpcomingRace";

const teams = [{ id: 1, name: "Red Bull Racing RBPT" }];

const StandingsPage = ({ option }) => {
  return (
    <div>
      <NavBar />
      <UpcomingRace />
      <StandingsMenu others={option} />
      <Outlet />
      <FooterSec />
    </div>
  );
};

export default StandingsPage;

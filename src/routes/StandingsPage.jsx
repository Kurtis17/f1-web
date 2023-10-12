import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import StandingsMenu from "../components/StandingsMenu";

const teams = [{ id: 1, name: "Red Bull Racing RBPT" }];

const StandingsPage = ({ option }) => {
  return (
    <div>
      <NavBar />
      <StandingsMenu others={option} />
      <Outlet />
    </div>
  );
};

export default StandingsPage;

import React, { useState } from "react";
import { AiFillSchedule, AiFillQuestionCircle } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";
import { GiPodium } from "react-icons/gi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { Link } from "react-router-dom";
import Formula1White from "../assets/f1White.svg";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <RiMenu3Fill
        size={25}
        onClick={handleNav}
        className="relative top-4 z-[99] md:hidden left-4 text-white cursor-pointer"
      />
      <Link
        to="/"
        className="w-full h-14 relative font-bold text-2xl text-white flex flex-col justify-center text-center bg-[#e10600] z-40"
      >
        <img src={Formula1White} alt="/" className="h-[22px] ml-2" />
      </Link>

      {nav ? (
        <div className="fixed w-full h-screen  bg-black/80 flex flex-col justify-center items-center z-20 ease-in-out duration-200 md:hidden">
          <Link
            to="/standings/2023/drivers"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-red-100 shadow-red-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <TiGroup size={20} />
            <span className="pl-4">Teams</span>
          </Link>
          <Link
            to="/fastest-lap"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-red-100 shadow-red-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GiPodium size={20} />
            <span className="pl-4">Standings</span>
          </Link>
          <Link
            to="#schedule"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-red-100 shadow-red-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiFillSchedule size={20} />
            <span className="pl-4">Schedule</span>
          </Link>
          <Link
            to="#map"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-red-100 shadow-red-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <FaMapMarkedAlt size={20} />
            <span className="pl-4">Map</span>
          </Link>
          <Link
            to="#prediction"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-red-100 shadow-red-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiFillQuestionCircle size={20} />
            <span className="pl-4">Prediction</span>
          </Link>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <Link
            to="/standings/2023/drivers"
            className="rounded-full shadow-lg bg-red-100 shadow-red-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200"
          >
            <TiGroup size={20} />
          </Link>
          <Link
            to="/fastest-lap"
            className="rounded-full shadow-lg  bg-red-100 shadow-red-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200"
          >
            <GiPodium size={20} />
          </Link>
          <Link
            to="/results"
            className="rounded-full shadow-lg  bg-red-100 shadow-red-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200"
          >
            <AiFillSchedule size={20} />
          </Link>
          <Link
            to="#map"
            className="rounded-full shadow-lg  bg-red-100 shadow-red-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200"
          >
            <FaMapMarkedAlt size={20} />
          </Link>
          <Link
            to="#prediction"
            className="rounded-full shadow-lg bg-red-100 shadow-red-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200"
          >
            <AiFillQuestionCircle size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

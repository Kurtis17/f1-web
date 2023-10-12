import React from "react";
import { Link } from "react-router-dom";

const RecentItem = ({ img, title, driver, team, number }) => {
  return (
    <div className="pb-12">
      <h1 className="text-center text-xl font-bold">{title}</h1>
      <div className="relative flex shadow-xl shadow-gray-400 h-auto w-40 rounded-xl group hover:bg-gradient-to-b from-[#e10600] to-[#030303]">
        <img
          src={img}
          alt="/"
          className="rounded-xl group-hover:opacity-10 h-50 w-auto"
        />
        <div className="hidden group-hover:block absolute top-[20%] left-[50%] w-[90%] translate-x-[-50%] translate-z-[-50%]">
          <h3 className="text-2xl font-bold text-white tracking-wider text-center">
            {driver}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">
            #{number} {team}
          </p>
          <Link to="/">
            <p className="text-center p-3 rounded-lg bg-[#e10600] text-white font-bold cursor-pointer text-lg">
              Driver Info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentItem;

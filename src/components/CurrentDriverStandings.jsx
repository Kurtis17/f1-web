import React from "react";
import { DriverStandings23 } from "../data/standings/DriverStandings";

const CurrentDriverStandings = () => {
  return (
    <div className="bg-[#f7f5f1] w-full">
      <div className="w-[80%] m-auto bg-white">
        <h2 className="text-5xl pt-10 pl-10 pb-16 font-medium">
          2023 Driver Standings
        </h2>
        <div className="w-[95%] m-auto pb-16">
          <div className="flex uppercase w-full text-[#9492a1] text-xs">
            <h3 className="w-[10%] pl-6 py-4 decoration-dotted underline">
              Pos
            </h3>
            <h3 className="w-[20%] pl-6 py-4">Driver</h3>
            <h3 className="w-[20%] pl-6 py-4">Nationality</h3>
            <h3 className="w-[30%] pl-6 py-4">Car</h3>
            <h3 className="w-[20%] pl-6 py-4 decoration-dotted underline">
              Pts
            </h3>
          </div>
          {DriverStandings23.map((driver, index) => (
            <div
              className={`w-full flex text-sm font-medium ${
                index % 2 === 0 ? "bg-[#f4f4f4]" : ""
              }`}
              key={driver.position}
            >
              <p className="w-[10%] pl-6 py-4">{driver.position}</p>
              <p className="w-[20%] pl-6 py-4">{driver.driver}</p>
              <p className="w-[20%] pl-6 py-4 uppercase">
                {driver.nationality}
              </p>
              <p className="w-[30%] pl-6 py-4 text-[#91918e] uppercase">
                {driver.team}
              </p>
              <p className="w-[20%] pl-6 py-4">{driver.points}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#f7f5f1] w-full p-8"></div>
    </div>
  );
};

export default CurrentDriverStandings;

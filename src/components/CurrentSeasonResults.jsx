import React from "react";
import { RaceResults } from "../data/season23/RaceResults";

const winnerResults = RaceResults.filter((race) => race.position === 1);

const CurrentSeasonResults = () => {
  return (
    <div className="bg-[#f7f5f1] w-full">
      <div className="w-[80%] m-auto bg-white">
        <h2 className="text-5xl pt-10 pl-10 pb-16 font-medium uppercase">
          2023 Race Results
        </h2>
        <div className="w-[95%] m-auto pb-16">
          <div className="flex uppercase w-full text-[#9492a1] text-xs">
            <h3 className="w-[15%] pl-6 py-4">Grand Prix</h3>
            <h3 className="w-[15%] pl-6 py-4">Date</h3>
            <h3 className="w-[20%] pl-6 py-4">Winner</h3>
            <h3 className="w-[25%] pl-6 py-4">Car</h3>
            <h3 className="w-[10%] pl-6 py-4">Laps</h3>
            <h3 className="w-[15%] pl-6 py-4">Time</h3>
          </div>
          {winnerResults.map((race, index) => (
            <div
              className={`w-full flex text-sm font-medium ${
                index % 2 === 0 ? "bg-[#f4f4f4]" : ""
              }`}
              key={race.position}
            >
              <p className="w-[15%] pl-6 py-4">{race.race}</p>
              <p className="w-[15%] pl-6 py-4 font-normal">{race.date}</p>
              <p className="w-[20%] pl-6 py-4">{race.driver}</p>
              <p className="w-[25%] pl-6 py-4">{race.team}</p>
              <p className="w-[10%] pl-6 py-4">{race.laps}</p>
              <p className="w-[15%] pl-6 py-4">{race.time}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#f7f5f1] w-full p-8"></div>
    </div>
  );
};

export default CurrentSeasonResults;

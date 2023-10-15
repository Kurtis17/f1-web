import React from "react";
import { TeamStandings23 } from "../data/standings/TeamStandings";

const CurrentTeamStandings = () => {
  return (
    <div className="bg-[#f7f5f1] w-full">
      <div className="w-[80%] m-auto bg-white">
        <h2 className="text-5xl pt-10 pl-10 pb-16 font-medium">
          2023 Constructor Standings
        </h2>
        <div className="w-[95%] m-auto pb-16">
          <div className="flex uppercase w-full text-[#9492a1] text-xs">
            <h3 className="w-[20%] pl-6 py-4 decoration-dotted underline">
              Pos
            </h3>
            <h3 className="w-[60%] pl-6 py-4">Team</h3>

            <h3 className="w-[20%] pl-6 py-4 decoration-dotted underline">
              Pts
            </h3>
          </div>
          {TeamStandings23.map((team, index) => (
            <div
              className={`w-full flex text-sm font-medium ${
                index % 2 === 0 ? "bg-[#f4f4f4]" : ""
              }`}
              key={team.position}
            >
              <p className="w-[20%] pl-6 py-4">{team.position}</p>
              <p className="w-[60%] pl-6 py-4 uppercase">{team.constructor}</p>
              <p className="w-[20%] pl-6 py-4">{team.points}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#f7f5f1] w-full p-8"></div>
    </div>
  );
};

export default CurrentTeamStandings;

import React from "react";

const RaceDetails = ({
  position,
  number,
  driver,
  team,
  laps,
  time,
  points,
  row,
}) => {
  return (
    <div
      className={`flex text-xs py-4 hover:bg-[#e10600]/50 ${
        row % 2 === 1 ? "bg-[#f4f4f4]" : ""
      }`}
    >
      <h4 className="w-[8%] pl-4">{position}</h4>
      <h4 className="w-[8%]">{number}</h4>
      <h4 className="w-[20%]">{driver}</h4>
      <h4 className="w-[35%] uppercase">{team}</h4>
      <h4 className="w-[7%]">{laps}</h4>
      <h4 className="w-[15%]">{time}</h4>
      <h4 className="w-[7%]">{points}</h4>
    </div>
  );
};

export default RaceDetails;

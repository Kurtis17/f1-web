import React from "react";

const PracticeDetails = ({
  position,
  number,
  driver,
  team,
  time,
  gap,
  laps,
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
      <h4 className="w-[10%]">{time}</h4>
      <h4 className="w-[12%]">{gap}</h4>
      <h4 className="w-[7%]">{laps}</h4>
    </div>
  );
};

export default PracticeDetails;

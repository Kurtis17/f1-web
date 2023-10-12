import React from "react";

const FastestDetails = ({
  position,
  number,
  driver,
  team,
  lap,
  timeOfDay,
  time,
  speed,
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
      <h4 className="w-[18%]">{driver}</h4>
      <h4 className="w-[35%] uppercase">{team}</h4>
      <h4 className="w-[7%]">{lap}</h4>
      <h4 className="w-[15%]">{timeOfDay}</h4>
      <h4 className="w-[10%]">{time}</h4>
      <h4 className="w-[14%]">{speed}</h4>
    </div>
  );
};

export default FastestDetails;

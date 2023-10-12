import React from "react";

const StratingGridDetails = ({ position, number, driver, team, time, row }) => {
  return (
    <div
      className={`flex text-xs py-4 hover:bg-[#e10600]/50 ${
        row % 2 === 1 ? "bg-[#f4f4f4]" : ""
      }`}
    >
      <h4 className="w-[12%] pl-4">{position}</h4>
      <h4 className="w-[12%]">{number}</h4>
      <h4 className="w-[22%]">{driver}</h4>
      <h4 className="w-[39%] uppercase">{team}</h4>
      <h4 className="w-[15%]">{time}</h4>
    </div>
  );
};

export default StratingGridDetails;

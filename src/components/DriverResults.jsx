import React from "react";

const DriverResults = ({ driverStats }) => {
  const driverName = driverStats[0].driver;

  return (
    <div className="bg-[#f7f5f1] w-full">
      <div className="w-[80%] m-auto bg-white">
        <h2 className="text-5xl pt-10 pl-10 pb-16 font-medium">
          2023 Driver Standings: {driverName}
        </h2>
        <div className="w-[95%] m-auto pb-16">
          <div className="flex uppercase w-full text-[#9492a1] text-xs">
            <h3 className="w-[20%] pl-6 py-4">Grand Prix</h3>

            <h3 className="w-[20%] pl-6 py-4">Date</h3>
            <h3 className="w-[30%] pl-6 py-4">Car</h3>
            <h3 className="w-[20%] pl-6 py-4">Race Position</h3>
            <h3 className="w-[10%] pl-6 py-4 decoration-dotted underline">
              Pts
            </h3>
          </div>
          {driverStats.map((race, index) => (
            <div
              className={`w-full flex text-sm font-medium ${
                index % 2 === 0 ? "bg-[#f4f4f4]" : ""
              }`}
              key={index}
            >
              <p className="w-[20%] pl-6 py-4">{race.gp}</p>
              <p className="w-[20%] pl-6 py-4">{race.date}</p>
              <p className="w-[30%] pl-6 py-4 uppercase text-[#91918e]">
                {race.team}
              </p>
              <p className="w-[20%] pl-6 py-4">{race.position}</p>
              <p className="w-[10%] pl-6 py-4">{race.points}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DriverResults;

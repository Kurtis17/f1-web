import React from "react";
import PracticeDetails from "./PracticeDetails";
import { Link } from "react-router-dom";
import Recent from "./Recent";

const handleClick = (e) => {
  e.preventDefault();
};

const Practice1 = () => {
  return (
    <div className="bg-[#f7f5f1] w-full">
      <Recent />
      <div className="w-[80%] m-auto pt-6 pl-[17%] pr-[17%] pb-16 bg-white">
        <div className="ml-2">
          <div className="flex uppercase w-full text-[#9492a1]">
            <h3 className="w-[8%] pl-4">Pos</h3>
            <h3 className="w-[8%]">No.</h3>
            <h3 className="w-[20%]">Driver</h3>
            <h3 className="w-[35%]">Car</h3>
            <h3 className="w-[10%]">Time</h3>
            <h3 className="w-[12%]">Gap</h3>
            <h3 className="w-[7%]">Laps</h3>
          </div>

          <div
            onClick={handleClick}
            className="absolute left-52 w-[15%] uppercase flex flex-col text-[#a0a0a0]"
          >
            <h2 className="font-bold py-4 pl-[10%] border-l-2 border-[#ee0000] text-black">
              Race
            </h2>
            <Link
              to="/race-results"
              className="group flex w-full hover:hover:border-l-2 hover:border-l-[#c2c2c2] hover:bg-[#f2f2f2]"
            >
              <div className="py-2 right-20 ml-auto border-b-2 w-[90%] border-[#e2e2e2] group-hover:border-b-transparent group-hover:text-black">
                Race Result
              </div>
            </Link>
            <Link
              to="/fastest-lap"
              className="group flex w-full hover:hover:border-l-2 hover:border-l-[#c2c2c2] hover:bg-[#f2f2f2]"
            >
              <div className="py-2 right-20 ml-auto border-b-2 w-[90%] border-[#e2e2e2] group-hover:border-b-transparent group-hover:text-black">
                Fastest Lap
              </div>
            </Link>
            <Link
              to="/starting-grid"
              className="group flex w-full hover:hover:border-l-2 hover:border-l-[#c2c2c2] hover:bg-[#f2f2f2]"
            >
              <div className="py-2 right-20 ml-auto border-b-2 w-[90%] border-[#e2e2e2] group-hover:border-b-transparent group-hover:text-black">
                Starting Grid
              </div>
            </Link>
            <Link
              to="/qualifying"
              className="group flex w-full hover:hover:border-l-2 hover:border-l-[#c2c2c2] hover:bg-[#f2f2f2]"
            >
              <div className="py-2 right-20 ml-auto border-b-2 w-[90%] border-[#e2e2e2] group-hover:border-b-transparent group-hover:text-black">
                Qualifying
              </div>
            </Link>
            <Link
              to="/practice-3"
              className="group flex w-full hover:hover:border-l-2 hover:border-l-[#c2c2c2] hover:bg-[#f2f2f2]"
            >
              <div className="py-2 right-20 ml-auto border-b-2 w-[90%] border-[#e2e2e2] group-hover:border-b-transparent group-hover:text-black">
                Practice 3
              </div>
            </Link>
            <Link
              to="/practice-2"
              className="group flex w-full hover:hover:border-l-2 hover:border-l-[#c2c2c2] hover:bg-[#f2f2f2]"
            >
              <div className="py-2 right-20 ml-auto border-b-2 w-[90%] border-[#e2e2e2] group-hover:border-b-transparent group-hover:text-black">
                Practice 2
              </div>
            </Link>
            <Link
              to="/practice-1"
              className="group flex w-full border-l-2 bg-[#e6e6e6] border-l-[#545454] hover:hover:border-l-2 hover:border-l-[#c2c2c2] hover:bg-[#f2f2f2]"
            >
              <div className="py-2 right-20 ml-auto bg-[#e6e6e6] border-b-2 w-[90%] border-[#e2e2e2] group-hover:border-b-transparent group-hover:bg-transparent text-black font-bold">
                Practice 1
              </div>
            </Link>
          </div>
          <PracticeDetails
            position={"1"}
            number={"16"}
            driver={"Charles Leclerc"}
            team={"FERRARI"}
            time={"1:33.350"}
            gap={""}
            laps={"25"}
            row={"1"}
          />
          <PracticeDetails
            position={"2"}
            number={"55"}
            driver={"Carlos Sainz"}
            team={"FERRARI"}
            time={"1:33.428"}
            gap={"+0.078s"}
            laps={"24"}
            row={"2"}
          />
          <PracticeDetails
            position={"3"}
            number={"1"}
            driver={"Max Verstappen"}
            team={"RED BULL RACING HONDA RBPT"}
            time={"1:33.476"}
            gap={"+0.126s"}
            laps={"22"}
            row={"3"}
          />
          <PracticeDetails
            position={"4"}
            number={"4"}
            driver={"Lando Norris"}
            team={"MCLAREN MERCEDES"}
            time={"1:33.522"}
            gap={"+0.172s"}
            laps={"24"}
            row={"4"}
          />
          <PracticeDetails
            position={"5"}
            number={"44"}
            driver={"Lewis Hamilton"}
            team={"MERCEDES"}
            time={"1:33.540"}
            gap={"+0.190s"}
            laps={"21"}
            row={"5"}
          />
          <PracticeDetails
            position={"6"}
            number={"63"}
            driver={"George Russell"}
            team={"MERCEDES"}
            time={"1:33.695"}
            gap={"+0.345s"}
            laps={"25"}
            row={"6"}
          />
          <PracticeDetails
            position={"7"}
            number={"11"}
            driver={"Sergio Perez"}
            team={"RED BULL RACING HONDA RBPT"}
            time={"1:33.725"}
            gap={"+0.375s"}
            laps={"22"}
            row={"7"}
          />
          <PracticeDetails
            position={"8"}
            number={"14"}
            driver={"Fernando Alonso"}
            team={"ASTON MARTIN ARAMCO MERCEDES"}
            time={"1:33.974"}
            gap={"+0.624s"}
            laps={"28"}
            row={"8"}
          />
          <PracticeDetails
            position={"9"}
            number={"22"}
            driver={"Yuki Tsunoda"}
            team={"ALPHATAURI HONDA RBPT"}
            time={"1:34.042"}
            gap={"+0.692s"}
            laps={"25"}
            row={"9"}
          />
          <PracticeDetails
            position={"10"}
            number={"31"}
            driver={"Esteban Ocon"}
            team={"ALPINE RENAULT"}
            time={"1:34.066"}
            gap={"+0.716s"}
            laps={"24"}
            row={"10"}
          />
          <PracticeDetails
            position={"11"}
            number={"18"}
            driver={"Lance Stroll"}
            team={"ASTON MARTIN ARAMCO MERCEDES"}
            time={"1:34.568"}
            gap={"+1.218s"}
            laps={"25"}
            row={"11"}
          />
          <PracticeDetails
            position={"12"}
            number={"10"}
            driver={"Pierre Gasly"}
            team={"ALPINE RENAULT"}
            time={"1:34.639"}
            gap={"+1.289s"}
            laps={"23"}
            row={"12"}
          />
          <PracticeDetails
            position={"13"}
            number={"23"}
            driver={"Alexander Albon"}
            team={"WILLIAMS MERCEDES"}
            time={"1:34.657"}
            gap={"+1.307s"}
            laps={"19"}
            row={"13"}
          />
          <PracticeDetails
            position={"14"}
            number={"77"}
            driver={"Valtteri Bottas"}
            team={"ALFA ROMEO FERRARI"}
            time={"1:34.802"}
            gap={"+1.452s"}
            laps={"25"}
            row={"14"}
          />
          <PracticeDetails
            position={"15"}
            number={"20"}
            driver={"Kevin Magnussen"}
            team={"HAAS FERRARI"}
            time={"1:34.887"}
            gap={"+1.537s"}
            laps={"23"}
            row={"15"}
          />
          <PracticeDetails
            position={"16"}
            number={"40"}
            driver={"Liam Lawson"}
            team={"ALPHATAURI HONDA RBPT"}
            time={"1:34.894"}
            gap={"+1.544s"}
            laps={"27"}
            row={"16"}
          />
          <PracticeDetails
            position={"17"}
            number={"27"}
            driver={"Nico Hulkenberg"}
            team={"HAAS FERRARI"}
            time={"1:34.985"}
            gap={"+1.635s"}
            laps={"22"}
            row={"17"}
          />
          <PracticeDetails
            position={"18"}
            number={"24"}
            driver={"Zhou Guanyu"}
            team={"ALFA ROMEO FERRARI"}
            time={"1:35.456"}
            gap={"+2.106s"}
            laps={"25"}
            row={"18"}
          />
          <PracticeDetails
            position={"19"}
            number={"81"}
            driver={"Oscar Piastri"}
            team={"MCLAREN MERCEDES"}
            time={"1:35.474"}
            gap={"+2.124s"}
            laps={"22"}
            row={"19"}
          />
          <PracticeDetails
            position={"20"}
            number={"2"}
            driver={"Logan Sargeant"}
            team={"WILLIAMS MERCEDES"}
            time={"1:35.778"}
            gap={"+2.428s"}
            laps={"24"}
            row={"20"}
          />
        </div>
      </div>
      <div className="bg-[#f7f5f1] w-full p-8"></div>
    </div>
  );
};

export default Practice1;

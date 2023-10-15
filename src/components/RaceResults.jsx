import React from "react";
import RaceDetails from "./RaceDetails";
import { Link } from "react-router-dom";
import Recent from "./Recent";

const handleClick = (e) => {
  e.preventDefault();
};

const RaceResults = () => {
  return (
    <div className="bg-[#f7f5f1] w-full">
      <Recent />
      <div className="w-[80%] m-auto pt-6 px-[17%] pb-16 bg-white">
        <div className="ml-2">
          <div className="flex uppercase w-full text-[#9492a1]">
            <h3 className="w-[8%] pl-4">Pos</h3>
            <h3 className="w-[8%]">No.</h3>
            <h3 className="w-[20%]">Driver</h3>
            <h3 className="w-[35%]">Car</h3>
            <h3 className="w-[7%]">Laps</h3>
            <h3 className="w-[15%]">Time/Retired</h3>
            <h3 className="w-[7%]">Pts</h3>
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
              className="group flex w-full border-l-2 bg-[#e6e6e6] border-l-[#545454] hover:hover:border-l-2 hover:border-l-[#c2c2c2] hover:bg-[#f2f2f2]"
            >
              <div className="py-2 right-20 ml-auto bg-[#e6e6e6] border-b-2 w-[90%] border-[#e2e2e2] group-hover:border-b-transparent group-hover:bg-transparent text-black font-bold">
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
              className="group flex w-full hover:hover:border-l-2 hover:border-l-[#c2c2c2] hover:bg-[#f2f2f2]"
            >
              <div className="py-2 right-20 ml-auto border-b-2 w-[90%] border-[#e2e2e2] group-hover:border-b-transparent group-hover:text-black">
                Practice 1
              </div>
            </Link>
          </div>
          <RaceDetails
            position={"1"}
            number={"55"}
            driver={"Carlos Sainz"}
            team={"Ferrari"}
            laps={"62"}
            time={"1:46:37.418"}
            points={"25"}
            row={"1"}
          />
          <RaceDetails
            position={"2"}
            number={"4"}
            driver={"Lando Norris"}
            team={"McLaren Mercedes"}
            laps={"62"}
            time={"+0.812s"}
            points={"18"}
            row={"2"}
          />
          <RaceDetails
            position={"3"}
            number={"44"}
            driver={"Lewis Hamilton"}
            team={"Mercedes"}
            laps={"62"}
            time={"+1.269s"}
            points={"16"}
            row={"3"}
          />
          <RaceDetails
            position={"4"}
            number={"16"}
            driver={"Charles Leclerc"}
            team={"Ferrari"}
            laps={"62"}
            time={"+21.177s"}
            points={"12"}
            row={"4"}
          />
          <RaceDetails
            position={"5"}
            number={"1"}
            driver={"Max Verstrappen"}
            team={"Red Bull Racing Honda RBPT"}
            laps={"62"}
            time={"+21.441s"}
            points={"10"}
            row={"5"}
          />
          <RaceDetails
            position={"6"}
            number={"10"}
            driver={"Pierre Gasly"}
            team={"Alpine Renault"}
            laps={"62"}
            time={"+38.441s"}
            points={"8"}
            row={"6"}
          />
          <RaceDetails
            position={"7"}
            number={"81"}
            driver={"Oscar Piastri"}
            team={"McLaren Mercedes"}
            laps={"62"}
            time={"+41.479s"}
            points={"6"}
            row={"7"}
          />
          <RaceDetails
            position={"8"}
            number={"11"}
            driver={"Sergio Perez"}
            team={"Red Bull Racing Honda RBPT"}
            laps={"62"}
            time={"+54.534s"}
            points={"4"}
            row={"8"}
          />
          <RaceDetails
            position={"9"}
            number={"40"}
            driver={"Liam Lawson"}
            team={"AlphaTauri Honda RBPT"}
            laps={"62"}
            time={"+65.918s"}
            points={"2"}
            row={"9"}
          />
          <RaceDetails
            position={"10"}
            number={"20"}
            driver={"Kevin Magnussen"}
            team={"Haas Ferrari"}
            laps={"62"}
            time={"+72.116s"}
            points={"1"}
            row={"10"}
          />
          <RaceDetails
            position={"11"}
            number={"23"}
            driver={"Alexander Albon"}
            team={"Williams Mercedes"}
            laps={"62"}
            time={"+73.417s"}
            points={"0"}
            row={"11"}
          />
          <RaceDetails
            position={"12"}
            number={"24"}
            driver={"Zhou Guanyu"}
            team={"Alfa Romeo Ferrari"}
            laps={"62"}
            time={"+83.649s"}
            points={"0"}
            row={"12"}
          />
          <RaceDetails
            position={"13"}
            number={"27"}
            driver={"Nico Hulkenberg"}
            team={"Haas Ferrari"}
            laps={"62"}
            time={"+86.201s"}
            points={"0"}
            row={"13"}
          />
          <RaceDetails
            position={"14"}
            number={"2"}
            driver={"Logan Sargeant"}
            team={"Williams Mercedes"}
            laps={"62"}
            time={"+86.889s"}
            points={"0"}
            row={"14"}
          />
          <RaceDetails
            position={"15"}
            number={"14"}
            driver={"Fernando Alonso"}
            team={"Aston Martin Aramco Mercedes"}
            laps={"62"}
            time={"+87.603s"}
            points={"0"}
            row={"15"}
          />
          <RaceDetails
            position={"16"}
            number={"63"}
            driver={"George Russell"}
            team={"Mercedes"}
            laps={"61"}
            time={"DNF"}
            points={"0"}
            row={"16"}
          />
          <RaceDetails
            position={"NC"}
            number={"77"}
            driver={"Valtteri Bottas"}
            team={"Alfa Romeo Ferrari"}
            laps={"51"}
            time={"DNF"}
            points={"0"}
            row={"17"}
          />
          <RaceDetails
            position={"NC"}
            number={"31"}
            driver={"Esteban Ocon"}
            team={"Alpine Renault"}
            laps={"42"}
            time={"DNF"}
            points={"0"}
            row={"18"}
          />
          <RaceDetails
            position={"NC"}
            number={"22"}
            driver={"Yuki Tsunoda"}
            team={"AlphaTauri Honda RBPT"}
            laps={"0"}
            time={"DNF"}
            points={"0"}
            row={"19"}
          />
          <RaceDetails
            position={"NC"}
            number={"18"}
            driver={"Lance Stroll"}
            team={"Aston Martin Aramco Mercedes"}
            laps={"0"}
            time={"DNS"}
            points={"0"}
            row={"20"}
          />
          <div className="py-6">
            <h4 className="text-[##545456] text-xs italic">
              Note - Hamilton scored an additional point for setting the fastest
              lap of the race. Perez received a five-second time penalty for
              causing a collision.
            </h4>
          </div>
        </div>
      </div>
      <div className="bg-[#f7f5f1] w-full p-8"></div>
    </div>
  );
};

export default RaceResults;

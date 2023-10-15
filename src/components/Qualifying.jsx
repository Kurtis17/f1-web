import React from "react";
import { Link } from "react-router-dom";
import Recent from "./Recent";
import QualifyingDetails from "./QualifyingDetails";

const handleClick = (e) => {
  e.preventDefault();
};

const Qualifying = () => {
  return (
    <div className="bg-[#f7f5f1] w-full">
      <Recent />
      <div className="w-[80%] m-auto pt-6 pl-[17%] pr-[17%] pb-16 bg-white">
        <div className="ml-2">
          <div className="flex uppercase w-full text-[#9492a1]">
            <h3 className="w-[8%] pl-4">Pos</h3>
            <h3 className="w-[8%]">No.</h3>
            <h3 className="w-[20%]">Driver</h3>
            <h3 className="w-[27%]">Car</h3>
            <h3 className="w-[10%]">Q1</h3>
            <h3 className="w-[10%]">Q2</h3>
            <h3 className="w-[10%]">Q3</h3>
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
              className="group flex w-full border-l-2 bg-[#e6e6e6] border-l-[#545454] hover:hover:border-l-2 hover:border-l-[#c2c2c2] hover:bg-[#f2f2f2]"
            >
              <div className="py-2 right-20 ml-auto border-b-2 w-[90%] border-[#e2e2e2] group-hover:border-b-transparent group-hover:bg-transparent text-black font-bold">
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
          <QualifyingDetails
            position={"1"}
            number={"55"}
            driver={"Carlos Sainz"}
            team={"Ferrari"}
            q1={"1:32.339"}
            q2={"1:31.439"}
            q3={"1:30.984"}
            laps={"20"}
            row={"1"}
          />
          <QualifyingDetails
            position={"2"}
            number={"63"}
            driver={"George Russell"}
            team={"Mercedes"}
            q1={"1:32.331"}
            q2={"1:31.743"}
            q3={"1:31.056"}
            laps={"17"}
            row={"2"}
          />
          <QualifyingDetails
            position={"3"}
            number={"16"}
            driver={"Charles Leclerc"}
            team={"Ferrari"}
            q1={"1:32.406"}
            q2={"1:32.012"}
            q3={"1:31.063"}
            laps={"21"}
            row={"3"}
          />
          <QualifyingDetails
            position={"4"}
            number={"4"}
            driver={"Lando Norris"}
            team={"McLaren Mercedes"}
            q1={"1:32.483"}
            q2={"1:31.951"}
            q3={"1:31.270"}
            laps={"20"}
            row={"4"}
          />
          <QualifyingDetails
            position={"5"}
            number={"44"}
            driver={"Lewis Hamilton"}
            team={"Mercedes"}
            q1={"1:32.651"}
            q2={"1:32.019"}
            q3={"1:31.485"}
            laps={"16"}
            row={"5"}
          />
          <QualifyingDetails
            position={"6"}
            number={"20"}
            driver={"Kevin Magnussen"}
            team={"Haas Ferrari"}
            q1={"1:32.242"}
            q2={"1:31.892"}
            q3={"1:31.575"}
            laps={"21"}
            row={"6"}
          />
          <QualifyingDetails
            position={"7"}
            number={"14"}
            driver={"Fernando Alonso"}
            team={"Aston Martin Aramco Mercedes"}
            q1={"1:32.584"}
            q2={"1:31.835"}
            q3={"1:31.615"}
            laps={"17"}
            row={"7"}
          />
          <QualifyingDetails
            position={"8"}
            number={"31"}
            driver={"Esteban Ocon"}
            team={"Alpine Renault"}
            q1={"1:32.369"}
            q2={"1:32.089"}
            q3={"1:31.673"}
            laps={"18"}
            row={"8"}
          />
          <QualifyingDetails
            position={"9"}
            number={"27"}
            driver={"Nico Hulkenberg"}
            team={"Haas Ferrari"}
            q1={"1:32.100"}
            q2={"1:31.994"}
            q3={"1:31.808"}
            laps={"21"}
            row={"9"}
          />
          <QualifyingDetails
            position={"10"}
            number={"40"}
            driver={"Liam Lawson"}
            team={"AlphaTauri Honda RBPT"}
            q1={"1:32.215"}
            q2={"1:32.166"}
            q3={"1:32.268"}
            laps={"21"}
            row={"10"}
          />
          <QualifyingDetails
            position={"11"}
            number={"1"}
            driver={"Max Verstrappen"}
            team={"Red Bull Racing Honda RBPT"}
            q1={"1:32.398"}
            q2={"1:32.173"}
            q3={""}
            laps={"14"}
            row={"11"}
          />
          <QualifyingDetails
            position={"12"}
            number={"10"}
            driver={"Pierre Gasly"}
            team={"Alpine Renault"}
            q1={"1:32.452"}
            q2={"1:32.274"}
            q3={""}
            laps={"12"}
            row={"12"}
          />
          <QualifyingDetails
            position={"13"}
            number={"11"}
            driver={"Sergio Perez"}
            team={"Red Bull Racing Honda RBPT"}
            q1={"1:32.099"}
            q2={"1:32.310"}
            q3={""}
            laps={"13"}
            row={"13"}
          />
          <QualifyingDetails
            position={"14"}
            number={"23"}
            driver={"Alexander Albon"}
            team={"Williams Mercedes"}
            q1={"1:32.668"}
            q2={"1:33.719"}
            q3={""}
            laps={"12"}
            row={"14"}
          />
          <QualifyingDetails
            position={"15"}
            number={"22"}
            driver={"Yuki Tsunoda"}
            team={"AlphaTauri Honda RBPT"}
            q1={"1:31.991"}
            q2={"DNF"}
            q3={""}
            laps={"10"}
            row={"15"}
          />
          <QualifyingDetails
            position={"16"}
            number={"77"}
            driver={"Valtteri Bottas"}
            team={"Alfa Romeo Ferrari"}
            q1={"1:32.809"}
            q2={""}
            q3={""}
            laps={"9"}
            row={"16"}
          />
          <QualifyingDetails
            position={"17"}
            number={"81"}
            driver={"Oscar Piastri"}
            team={"McLaren Mercedes"}
            q1={"1:32.902"}
            q2={""}
            q3={""}
            laps={"9"}
            row={"17"}
          />
          <QualifyingDetails
            position={"18"}
            number={"2"}
            driver={"Logan Sargeant"}
            team={"Williams Mercedes"}
            q1={"1:33.252"}
            q2={""}
            q3={""}
            laps={"9"}
            row={"18"}
          />
          <QualifyingDetails
            position={"19"}
            number={"24"}
            driver={"Zhou Guanyu"}
            team={"Alfa Romeo Ferrari"}
            q1={"1:33.258"}
            q2={""}
            q3={""}
            laps={"9"}
            row={"19"}
          />
          <QualifyingDetails
            position={"20"}
            number={"18"}
            driver={"Lance Stroll"}
            team={"Aston Martin Aramco Mercedes"}
            q1={"1:33.397"}
            q2={""}
            q3={""}
            laps={"8"}
            row={"20"}
          />
          <div className="py-6">
            <h4 className="text-[#545456] text-xs italic">
              Q1 107% time - 1:38:430
            </h4>
          </div>
        </div>
      </div>
      <div className="bg-[#f7f5f1] w-full p-8"></div>
    </div>
  );
};

export default Qualifying;

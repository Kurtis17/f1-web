import React from "react";
import { Link } from "react-router-dom";
import StratingGridDetails from "./StartingGridDetails";
import Recent from "./Recent";

const handleClick = (e) => {
  e.preventDefault();
};

const StratingGrid = () => {
  return (
    <div className="bg-[#f7f5f1] w-full">
      <Recent />
      <div className="w-[80%] m-auto pt-6 pl-[17%] pr-[17%] pb-16 bg-white">
        <div className="ml-2">
          <div className="flex uppercase w-full text-[#9492a1]">
            <h3 className="w-[12%] pl-4">Pos</h3>
            <h3 className="w-[12%]">No.</h3>
            <h3 className="w-[22%]">Driver</h3>
            <h3 className="w-[39%]">Car</h3>
            <h3 className="w-[15%]">Time</h3>
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
              className="group flex w-full border-l-2 bg-[#e6e6e6] border-l-[#545454] hover:hover:border-l-2 hover:border-l-[#c2c2c2] hover:bg-[#f2f2f2]"
            >
              <div className="py-2 right-20 ml-auto bg-[#e6e6e6] border-b-2 w-[90%] border-[#e2e2e2] group-hover:border-b-transparent group-hover:bg-transparent text-black font-bold">
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
          <div className="">
            <StratingGridDetails
              position={"1"}
              number={"55"}
              driver={"Carlos Sainz"}
              team={"Ferrari"}
              time={"1:30.984"}
              row={"1"}
            />
            <StratingGridDetails
              position={"2"}
              number={"63"}
              driver={"George Russel"}
              team={"Mercedes"}
              time={"1:31.056"}
              row={"2"}
            />
            <StratingGridDetails
              position={"3"}
              number={"16"}
              driver={"Charles Leclerc"}
              team={"Ferrari"}
              time={"1:31.063"}
              row={"3"}
            />
            <StratingGridDetails
              position={"4"}
              number={"4"}
              driver={"Lando Norris"}
              team={"McLaren Mercedes"}
              time={"1:31.270"}
              row={"4"}
            />
            <StratingGridDetails
              position={"5"}
              number={"44"}
              driver={"Lewis Hamilton"}
              team={"Mercedes"}
              time={"1:31.485"}
              row={"5"}
            />
            <StratingGridDetails
              position={"6"}
              number={"20"}
              driver={"Kevin Magnussen"}
              team={"Haas Ferrari"}
              time={"1:31.575"}
              row={"6"}
            />
            <StratingGridDetails
              position={"7"}
              number={"14"}
              driver={"Fernando Alonso"}
              team={"Aston Martin Aramco Mercedes"}
              time={"1:31.673"}
              row={"7"}
            />
            <StratingGridDetails
              position={"8"}
              number={"31"}
              driver={"Esteban Ocon"}
              team={"Alpine Renault"}
              time={"1:31.615"}
              row={"8"}
            />
            <StratingGridDetails
              position={"9"}
              number={"27"}
              driver={"Nico Hulkenberg"}
              team={"Haas Ferrari"}
              time={"1:31.808"}
              row={"9"}
            />
            <StratingGridDetails
              position={"10"}
              number={"40"}
              driver={"Liam Lawson"}
              team={"AlphaTauri Honda RBPT"}
              time={"1:32.268"}
              row={"10"}
            />
            <StratingGridDetails
              position={"11"}
              number={"1"}
              driver={"Max Verstrappen"}
              team={"Red Bull Racing Honda RBPT"}
              time={"1:32.173"}
              row={"11"}
            />
            <StratingGridDetails
              position={"12"}
              number={"10"}
              driver={"Pierre Gasly"}
              team={"Alpine Renault"}
              time={"1:32.274"}
              row={"12"}
            />
            <StratingGridDetails
              position={"13"}
              number={"11"}
              driver={"Sergio Perez"}
              team={"Red Bull Racing Honda RBPT"}
              time={"1:32.310"}
              row={"13"}
            />
            <StratingGridDetails
              position={"14"}
              number={"23"}
              driver={"Alexander Albon"}
              team={"Williams Mercedes"}
              time={"1:33.719"}
              row={"14"}
            />
            <StratingGridDetails
              position={"15"}
              number={"22"}
              driver={"Yuki Tsunoda"}
              team={"AlphaTauri Honda RBPT"}
              time={""}
              row={"15"}
            />
            <StratingGridDetails
              position={"16"}
              number={"77"}
              driver={"Valtteri Bottas"}
              team={"Alfa Romeo Ferrari"}
              time={"1:32.809"}
              row={"16"}
            />
            <StratingGridDetails
              position={"17"}
              number={"81"}
              driver={"Oscar Piastri"}
              team={"McLaren Mercedes"}
              time={"1:32.902"}
              row={"17"}
            />
            <StratingGridDetails
              position={"18"}
              number={"2"}
              driver={"Logan Sargeant"}
              team={"Alfa Romeo Ferrari"}
              time={"1:33.252"}
              row={"18"}
            />
            <StratingGridDetails
              position={"19"}
              number={"24"}
              driver={"Zhou Guanyu"}
              team={"Williams Mercedes"}
              time={"1:33.258"}
              row={"19"}
            />
            <StratingGridDetails
              position={"20 "}
              number={"18"}
              driver={"Lance Stroll"}
              team={"Aston Martin Aramco Mercedes"}
              time={""}
              row={"20"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StratingGrid;

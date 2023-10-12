import React from "react";
import { Link } from "react-router-dom";
import FastestDetails from "./FastestDetails";
import Recent from "./Recent";

const handleClick = (e) => {
  e.preventDefault();
};

const FastestLap = () => {
  return (
    <div className="bg-[#f7f5f1] w-full">
      <Recent />
      <div className="w-[80%] m-auto pt-6 pl-[17%] pr-[17%] pb-16 bg-white">
        <div className="ml-2">
          <div className="flex uppercase w-full text-[#9492a1]">
            <h3 className="w-[8%] pl-4">Pos</h3>
            <h3 className="w-[8%]">No.</h3>
            <h3 className="w-[18%]">Driver</h3>
            <h3 className="w-[35%]">Car</h3>
            <h3 className="w-[7%]">Lap</h3>
            <h3 className="w-[15%]">Time of Day</h3>
            <h3 className="w-[10%]">Time</h3>
            <h3 className="w-[14%]">Avg Speed</h3>
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
              className="group flex w-full border-l-2 bg-[#e6e6e6] border-l-[#545454] hover:hover:border-l-2 hover:border-l-[#c2c2c2] hover:bg-[#f2f2f2]"
            >
              <div className="py-2 right-20 ml-auto bg-[#e6e6e6] border-b-2 w-[90%] border-[#e2e2e2] group-hover:border-b-transparent group-hover:bg-transparent text-black font-bold ">
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
          <div className="">
            <FastestDetails
              position={"1"}
              number={"44"}
              driver={"Lewis Hamilton"}
              team={"Mercedes"}
              lap={"47"}
              timeOfDay={"21:25:58"}
              time={"1:35:867"}
              speed={"185:507"}
              row={"1"}
            />
            <FastestDetails
              position={"2"}
              number={"63"}
              driver={"George Russell"}
              team={"Mercedes"}
              lap={"46"}
              timeOfDay={"21:24:17"}
              time={"1:36.273"}
              speed={"184.724"}
              row={"2"}
            />
            <FastestDetails
              position={"3"}
              number={"14"}
              driver={"Fernando Alonso"}
              team={"Aston Martin Aramco Mercedes"}
              lap={"47"}
              timeOfDay={"21:27:03"}
              time={"1:36.456"}
              speed={"184.374"}
              row={"3"}
            />
            <FastestDetails
              position={"4"}
              number={"1"}
              driver={"Max Verstrappen"}
              team={"Red Bull Racing Honda RBPT"}
              lap={"61"}
              timeOfDay={"21:49:05"}
              time={"1:36.575"}
              speed={"184.147"}
              row={"4"}
            />
            <FastestDetails
              position={"5"}
              number={"11"}
              driver={"Sergio Perez"}
              team={"Red Bull Racing Honda RBPT"}
              lap={"61"}
              timeOfDay={"21:49:38"}
              time={"1:37.108"}
              speed={"183.136"}
              row={"5"}
            />
            <FastestDetails
              position={"6"}
              number={"23"}
              driver={"Alexander Albon"}
              team={"Williams Mercedes"}
              lap={"46"}
              timeOfDay={"21:24:52"}
              time={"1:37.342"}
              speed={"182.696"}
              row={"6"}
            />
            <FastestDetails
              position={"7"}
              number={"55"}
              driver={"Carlos Sainz"}
              team={"Ferrari"}
              lap={"47"}
              timeOfDay={"21:25:39"}
              time={"1:37.666"}
              speed={"182.089"}
              row={"7"}
            />
            <FastestDetails
              position={"8"}
              number={"4"}
              driver={"Lando Norris"}
              team={"McLaren Mercedes"}
              lap={"46"}
              timeOfDay={"21:24:03"}
              time={"1:38.046"}
              speed={"181.384"}
              row={"8"}
            />
            <FastestDetails
              position={"9"}
              number={"77"}
              driver={"Valtteri Bottas"}
              team={"Alfa Romeo Ferrari"}
              lap={"51"}
              timeOfDay={"21:33:25"}
              time={"1:38.075"}
              speed={"181.330"}
              row={"9"}
            />
            <FastestDetails
              position={"10"}
              number={"20"}
              driver={"Keven Magnussen"}
              team={"Haas Ferrari"}
              lap={"48"}
              timeOfDay={"21:28:27"}
              time={"1:38.107"}
              speed={"181.271"}
              row={"10"}
            />
            <FastestDetails
              position={"11"}
              number={"16"}
              driver={"Charles Leclerc"}
              team={"Ferrari"}
              lap={"46"}
              timeOfDay={"21:24:06"}
              time={"1:38.275"}
              speed={"180.961"}
              row={"11"}
            />
            <FastestDetails
              position={"12"}
              number={"10"}
              driver={"Pierre Gasly"}
              team={"Alpine Renault"}
              lap={"46"}
              timeOfDay={"21:24:30"}
              time={"1:38.277"}
              speed={"180.957"}
              row={"12"}
            />
            <FastestDetails
              position={"13"}
              number={"81"}
              driver={"Oscar Piastri"}
              team={"McLaren Mercedes"}
              lap={"46"}
              timeOfDay={"21:24:33"}
              time={"1:38.492"}
              speed={"180.562"}
              row={"13"}
            />
            <FastestDetails
              position={"14"}
              number={"2"}
              driver={"Logan Sargeant"}
              team={"Williams Mercedes"}
              lap={"45"}
              timeOfDay={"21:23:37"}
              time={"1:38.531"}
              speed={"180.491"}
              row={"14"}
            />
            <FastestDetails
              position={"15"}
              number={"40"}
              driver={"Liam Lawson"}
              team={"AlphaTauri Honda RBPT"}
              lap={"47"}
              timeOfDay={"21:26:15"}
              time={"1:39.028"}
              speed={"179.585"}
              row={"15"}
            />
            <FastestDetails
              position={"16"}
              number={"24"}
              driver={"Zhou Guanyu"}
              team={"Alfa Romeo Ferrari"}
              lap={"46"}
              timeOfDay={"21:24:41"}
              time={"1:39.316"}
              speed={"179.064"}
              row={"16"}
            />
            <FastestDetails
              position={"17"}
              number={"27"}
              driver={"Nico Hulkenberg"}
              team={"Haas Ferarri"}
              lap={"50"}
              timeOfDay={"21:31:21"}
              time={"1:39.923"}
              speed={"177.977"}
              row={"17"}
            />
            <FastestDetails
              position={"18"}
              number={"31"}
              driver={"Esteban Ocon"}
              team={"Alpine Renault"}
              lap={"33"}
              timeOfDay={"21:01:42"}
              time={"1:39.930"}
              speed={"177.964"}
              row={"18"}
            />
            <FastestDetails
              position={"NC"}
              number={"22"}
              driver={"Yuki Tsunoda"}
              team={"AlphaTauri Honda RBPT"}
              lap={""}
              timeOfDay={""}
              time={""}
              speed={""}
              row={"19"}
            />
            <FastestDetails
              position={"NC"}
              number={"18"}
              driver={"Lance Stroll"}
              team={"Aston Martin Aramco Mercedes"}
              lap={""}
              timeOfDay={""}
              time={""}
              speed={""}
              row={"20"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastestLap;

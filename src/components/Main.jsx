import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import main from "../assets/main.png";
import Recent from "./Recent";
import RaceResults from "./RaceResults";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import RaceDetails from "./RaceDetails";
import { motion, useAnimate, usePresence } from "framer-motion";

const TeamColours = [
  "text-[#6cd3bf]",
  "text-[#3671c6]",
  "text-[#f91536]",
  "text-[#358c75]",
  "text-[#f58020]",
  "text-[#2293d1]",
  "text-[#37bedd]",
  "text-[#c92d4b]",
  "text-[#b6babd]",
  "text-[#5e8faa]",
];

const TeamTimers = [2740, 2540, 2400, 3500, 2410, 2040, 2610, 2980, 1720, 3030];

const Main = () => {
  const [currentIndex, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevIndex) => (prevIndex + 1) % TeamColours.length);
    }, TeamTimers[currentIndex]);

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);

  return (
    <div id="main">
      <img className="w-full h-screen object-cover" src={main} alt="" />
      <div className="w-full h-screen absolute top-0 left-0 bg-black/50 z-1">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-white">
            Interacting with F1 Data
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-white">
            View and interact data for
          </h2>
          <h3 className={`font-bold ${TeamColours[currentIndex]}`}>
            <TypeAnimation
              sequence={[
                "Mercedes",
                2000,
                "Red Bull",
                2000,
                "Ferrari",
                2000,
                "Aston Martin",
                2000,
                "McLaren",
                2000,
                "Alpine",
                2000,
                "Williams",
                2000,
                "Alfa Romeo",
                2000,
                "Haas",
                2000,
                "AlphaTauri",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "2em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h3>
          <div className="flex justify-between pt-6 max-w-[200px] w-full text-white">
            <a href="mailto:KurtVKho@gmail.com">
              <AiFillMail className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://github.com/Kurtis17"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/kurt-kho-013a3722a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

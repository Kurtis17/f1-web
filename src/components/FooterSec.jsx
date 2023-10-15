import React from "react";
import GooglePlay from "../assets/google.svg";
import ApplePlay from "../assets/apple.svg";
import { Link } from "react-router-dom";

const FooterSec = () => {
  return (
    <div className="w-full m-auto ">
      <div className="bg-[#38383f] py-2 ">
        <div className="text-white uppercase w-[76%] mx-[12%] flex">
          <h3 className="justify-start inline-block w-30 text-sm">
            Dowload the <br />
            Official F1 App
          </h3>
          <a
            href="https://play.google.com/store/apps/details?id=com.softpauer.f1timingapp2014.basic&hl=en_GB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GooglePlay} alt="/" className="h-10 ml-2" />
          </a>
          <a
            href="https://itunes.apple.com/gb/app/official-f1-app/id835022598?mt=8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ApplePlay} alt="/" className="h-10 ml-2" />
          </a>
        </div>
      </div>
      <div className="bg-[#15151e]">
        <div className="text-white w-[76%] mx-[12%]">
          <h3 className="text-center text-2xl font-bold py-10">Our partners</h3>
          <div className="py-2 border-r-8 border-b-8 rounded-br-lg border-[#38383f] flex font-bold">
            <div className="w-[16%]">
              <h4>Latest news</h4>
              <h5>What is F1?</h5>
              <h5>Video</h5>
              <h5>Drivers</h5>
              <h5>Teams</h5>
              <h5>Schedule</h5>
            </div>
            <div className="w-[16%]">
              <h4>Standings</h4>
              <h5>What is F1?</h5>
            </div>
            <div className="w-[16%]">
              <h4>Gaming</h4>
              <h5>What is F1?</h5>
            </div>
            <div className="w-[16%]">
              <h4>Live Timing</h4>
            </div>
            <div className="w-[16%]">
              <h4>Tickets</h4>
              <h5>What is F1?</h5>
            </div>
            <div className="w-[16%]">
              <h4>Rules & Regulations</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSec;

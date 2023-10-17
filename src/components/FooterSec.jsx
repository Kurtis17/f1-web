import React from "react";
import GooglePlay from "../assets/google.svg";
import ApplePlay from "../assets/apple.svg";
import Formula1White from "../assets/f1White.svg";
import Formula1Red from "../assets/f1Red.svg";
import { RiArrowRightSLine } from "react-icons/ri";
import {
  AiFillYoutube,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterSec = () => {
  return (
    <div className="w-full m-auto ">
      <div className="bg-[#38383f] h-[60px]">
        <div className="relative text-white uppercase w-[76%] mx-[12%] h-[40px] flex top-[16.67%] bottom-[16.67%]">
          <div className="w-[50%] flex items-center">
            <div className="w-[15%] ml-2 mr-1">
              <p className="text-[14px]/[16px] m-0 ">Download the</p>
              <p className="text-[14px]/[16px] m-0 scale-x-[1.05] ml-[3px]">
                Official F1 App
              </p>
            </div>

            <a
              href="https://play.google.com/store/apps/details?id=com.softpauer.f1timingapp2014.basic&hl=en_GB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GooglePlay} alt="/" className="h-10" />
            </a>
            <a
              href="https://itunes.apple.com/gb/app/official-f1-app/id835022598?mt=8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ApplePlay} alt="/" className="h-10 ml-2" />
            </a>
          </div>

          <div className="text-white w-[50%]">
            <ul className="flex float-right w-48 gap-[10px]">
              <li className="group h-10 w-10 rounded border-[1px] border-[#15151e] items-center justify-center flex cursor-pointer hover:bg-[#15151e]">
                <a
                  href="https://www.facebook.com/Formula1"
                  target="_blank"
                  rel="noopender noreferrer"
                >
                  <FaFacebookF size={24.2} />
                </a>
              </li>
              <li className="group h-10 w-10 rounded border-[1px] border-[#15151e] items-center justify-center flex cursor-pointer hover:bg-[#15151e]">
                <a
                  href="https://twitter.com/f1"
                  target="_blank"
                  rel="noopender noreferrer"
                >
                  <AiOutlineTwitter size={24.2} />
                </a>
              </li>
              <li className="group h-10 w-10 rounded border-[1px] border-[#15151e] items-center justify-center flex cursor-pointer hover:bg-[#15151e]">
                <a
                  href="https://www.instagram.com/f1/"
                  target="_blank"
                  rel="noopender noreferrer"
                >
                  <AiOutlineInstagram size={24.2} />
                </a>
              </li>
              <li className="group h-10 w-10 rounded border-[1px] border-[#15151e] items-center justify-center flex cursor-pointer hover:bg-[#15151e]">
                <a
                  href="https://www.youtube.com/F1"
                  target="_blank"
                  rel="noopender noreferrer"
                >
                  <AiFillYoutube size={24.2} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#15151e]">
        <div className="text-white w-[76%] mx-[12%]">
          <div className="py-10 flex items-center justify-center">
            <img src={Formula1Red} alt="/" className="h-[18px] pr-2" />
            <div className="group flex cursor-pointer">
              <h3 className="text-2xl font-bold">Our partners</h3>
              <RiArrowRightSLine
                size={25}
                className="mt-[7px] group-hover:text-[#c20d10]"
              />
            </div>
          </div>
          <div className="py-2 border-r-[10px] border-b-[10px] rounded-br-[30px] border-[#38383f] flex font-semibold text-lg">
            <div className="w-[16%] pb-20">
              <h4 className="h-8 ">Latest news</h4>
              <h5 className="h-8">What is F1?</h5>
              <h5 className="h-8">Video</h5>
              <h5 className="h-8">Drivers</h5>
              <h5 className="h-8">Teams</h5>
              <h5 className="h-8">Schedule</h5>
            </div>
            <div className="w-[16%] pb-20">
              <h4 className="h-8">Standings</h4>
              <h5 className="text-sm h-8 flex items-center">2023 Season</h5>
              <h5 className="text-sm h-8 flex items-center">
                Driver Standings
              </h5>
              <h5 className="text-sm h-8 flex items-center">
                Consturctor Standings
              </h5>
              <h5 className="text-sm h-8 flex items-center">
                Archive 1950-2022
              </h5>
              <h5 className="text-sm h-8 flex items-center">F1 Awards</h5>
            </div>
            <div className="w-[16%] pb-20">
              <h4 className="h-8">Gaming</h4>
              <h5 className="text-sm h-8 flex items-center">Esports</h5>
              <h5 className="text-sm h-8 flex items-center">Fantasy</h5>
              <h5 className="text-sm h-8 flex items-center">F1 23</h5>
              <h5 className="text-sm h-8 flex items-center">F1 Manager 23</h5>
              <h5 className="text-sm h-8 flex items-center">F1 Play</h5>
              <h5 className="text-sm h-8 flex items-center">
                F1 Mobile Racing
              </h5>
              <h5 className="text-sm h-8 flex items-center">F1 Clash</h5>
            </div>
            <div className="w-[16%] pb-20">
              <h4 className="h-8">Live Timing</h4>
            </div>
            <div className="w-[16%] pb-20">
              <h4 className="h-8">Tickets</h4>
              <h5 className="h-8">F1® Experiences</h5>
              <h5 className="h-8">Store</h5>
              <h5 className="h-8">Paddock Club</h5>
              <h5 className="h-8">F1® TV</h5>
              <h5 className="h-8">F1® Authentics</h5>
            </div>
            <div className="w-[16%] pb-20">
              <h4>Rules & Regulations</h4>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-[12px] text-sm py-4 font-semibold w-[88%]">
            <h5>Contacts</h5>
            <h5>F1 TV Support</h5>
            <h5>Privacy Policy</h5>
            <h5>Cookies Policy</h5>
            <h5>Cookie Preferences</h5>
            <h5>Guidelines</h5>
            <h5>Legal Notices</h5>
            <h5>Code of Conduct</h5>
            <h5>Anti-Bribery</h5>
            <h5>Human Rights</h5>
            <h5>Gender Pay Report</h5>
            <h5>Terms of Use</h5>
            <h5>Partners</h5>
            <h5>F1® Fan Voice</h5>
            <h5>Beyond the Grid - The F1® Podcast</h5>
            <h5>F1® Corporate Site</h5>
            <h5>Become an Affiliate</h5>
            <h5>Official F1® Race Programme</h5>
            <h5>Modern Slavery Statement</h5>
          </div>
          <div className="border-t-[0.5px] border-[#38383f] pt-4 pb-6">
            <img src={Formula1White} alt="/" className="h-[22px] ml-2" />
            <h6 className="text-xs text-[#a9a9ac] text-right">
              © 2003-2023 Formula One World Championship Limited
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSec;

import { useState, useEffect } from "react";
import Clock from "./Clock";
import mexico from "../assets/mexico.avif";
import year from "../assets/year.avif";
import { RiArrowRightSLine } from "react-icons/ri";

const UpcomingRace = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [inputDate] = useState("28 Oct 2023 10:00 PM");

  useEffect(() => {
    const interval = setInterval(() => {
      const changingDate = new Date(inputDate);
      const currentDate = new Date();
      const totalSeconds = (changingDate - currentDate) / 1000;

      setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
      setHours(Math.floor(totalSeconds / 3600) % 24);
      setMinutes(Math.floor(totalSeconds / 60) % 60);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  return (
    <div
      id="upcomingRace"
      className="w-full h-[149px] relative bg-black flex items-center"
    >
      <div className="w-[1320px] h-[108px] text-white mx-auto flex">
        <div className="w-[990px] h-full">
          <div className="w-[970px] h-[23px] mb-[10px] mx-auto text-sm font-extrabold flex justify-startitems-center">
            27 - 29 October
          </div>
          <div className="w-[970px] h-[67.25px] mx-auto flex">
            <div className="w-[90.33px] h-[67.25px] pr-[10px] pt-[10px] border-r-[1px] border-t-[1px] border-[#38383f] rounded-tr-[10%] mr-[15px]">
              <img src={mexico} alt="/" className="w-[75px] h-[56.25px]" />
            </div>
            <div className="group border-t-[1px] border-[#38383f] hover:border-[#d80604] w-[864.67px] h-[67.25px] pt-5 justify-start">
              <div className="w-[288.3px] h-[36.96px] flex items-center">
                <div className="w-[150.2px] h-[39px] uppercase text-4xl font-bold tracking-wider">
                  Mexico
                </div>
                <div className="w-[105px] h-[39px] pl-2 flex items-center pt-[2px]">
                  <img src={year} alt="/" />
                </div>
                <RiArrowRightSLine
                  size={40}
                  className="group-hover:text-[#d80604]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[330px] h-full">
          <div className="w-[308.66px] h-full bg-[#046343] rounded-[18px] flex">
            <div className="w-[206.66px] h-full uppercase flex flex-col justify-center items-end">
              <div className="w-[191.66px] h-[21px] text-center text-sm font-bold mb-[14px] pb-[4px] border-b-[1px] border-[#3e836c]">
                Qualifying 1
              </div>
              <div className="w-[170.86px] h-[45px] text-center text-sm font-bold flex">
                <div className="w-[52.95px] h-[45px]">
                  <div className="w-[42.95px] h-[28px] text-cs font-bold">
                    {days}
                  </div>
                  <div className="w-[42.95px] h-[17px] uppercase text-sm text-[#a1c7ac]">
                    Days
                  </div>
                </div>
                <div className="w-[63.95px] h-[45px] border-x-[1px] border-[#3e836c] flex flex-col justify-center items-center">
                  <div className="w-[42.95px] h-[28px] text-cs font-bold">
                    {hours}
                  </div>
                  <div className="w-[42.95px] h-[17px] uppercase text-sm text-[#a1c7ac]">
                    Hrs
                  </div>
                </div>
                <div className="w-[53.95px] h-[45px] flex flex-col items-end">
                  <div className="w-[42.95px] h-[28px] text-cs font-bold">
                    {minutes}
                  </div>
                  <div className="w-[42.95px] h-[17px] uppercase text-sm text-[#a1c7ac]">
                    Mins
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[102px] h-full flex justify-center items-center">
              <div className="relative w-[72px] h-[72px]">
                <Clock />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingRace;

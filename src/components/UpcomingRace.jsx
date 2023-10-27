import { useState, useEffect } from "react";
import Clock from "./Clock";

const UpcomingRace = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [inputDate] = useState("29 Oct 2023 08:00 PM");
  const [currentDate] = useState(inputDate);

  useEffect(() => {
    const changingDate = new Date(inputDate);
    const currentDate = new Date();
    const totalSeconds = (changingDate - currentDate) / 1000;

    setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
    setHours(Math.floor(totalSeconds / 3600) % 24);
    setMinutes(Math.floor(totalSeconds / 60) % 60);
  }, [currentDate]);

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
          <div></div>
          <div></div>
        </div>
        <div className="w-[330px] h-full">
          <div className="w-[308.66px] h-full bg-[#046343] rounded-[18px] flex">
            <div className="w-[206.66px] h-full uppercase flex flex-col justify-center items-end">
              <div className="w-[191.66px] h-[21px] text-center text-sm font-bold mb-[14px] pb-[4px] border-b-[1px] border-[#3e836c]">
                Grand Prix Weekend
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
              <div className="w-[72px] h-[72px]">
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

import React from "react";

const UpcomingRace = () => {
  return (
    <div className="w-full h-[149px] relative bg-black flex items-center">
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
                <div className="w-[52.95px] h-[45px]">00</div>
                <div className="w-[63.95px] h-[45px] border-x-[1px] border-[#3e836c]">
                  23
                </div>
                <div className="w-[53.95px] h-[45px]">45</div>
              </div>
            </div>
            <div className="w-[102px] h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingRace;

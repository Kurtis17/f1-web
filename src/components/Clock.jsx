import { useState, useEffect } from "react";
import rolex from "../assets/80.png";
import center from "../assets/center.png";
import hours from "../assets/hours.svg";
import minutes from "../assets/minutes.svg";
import seconds from "../assets/seconds.svg";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <img src={rolex} alt="" className="relative w-[72px] h-[72px]" />
      <img
        src={seconds}
        alt="/"
        style={{ transform: `rotate(${time.getSeconds() * 6}deg)` }}
        className="absolute right-[47%] top-[12%] translate-x-0 origin-[50%_80%] w-[6px] h-[35px]"
      />
      <img
        src={minutes}
        alt="/"
        style={{
          transform: `rotate(${
            time.getMinutes() * 6 + time.getSeconds() * 0.1
          }deg)`,
        }}
        className="absolute right-[46.5%] top-[16%] translate-x-0 origin-[50%_84%] w-[6px] h-[30px]"
      />
      <img
        src={hours}
        alt="/"
        style={{ transform: `rotate(${time.getHours() * 30}deg)` }}
        className="absolute right-[46.5%] top-[23%] translate-x-0 origin-[50%_78%] w-[6px] h-[25px]"
      />
    </div>
  );
};

export default Clock;

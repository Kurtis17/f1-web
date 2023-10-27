import { useState, useEffect } from "react";
import rolex from "../assets/80.png";
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
        src={hours}
        alt="/"
        style={{
          transform: `rotate(${
            (time.getHours() % 12) * 30 + (time.getMinutes() / 60) * 30
          }deg)`,
        }}
        className="absolute right-[19.1%] top-[33%] translate-x-0 origin-[50%_100%]"
      />

      <img
        src={minutes}
        alt="/"
        style={{
          transform: `rotate(${
            time.getMinutes() * 6 + time.getSeconds() * 0.1
          }deg)`,
        }}
        className="absolute right-[19.1%] top-[33%] translate-x-0 origin-[50%_100%]"
      />

      <img
        src={seconds}
        alt="/"
        style={{ transform: `rotate(${time.getSeconds() * 6}deg)` }}
        className="absolute right-[19.1%] top-[33%] translate-x-0 origin-[50%_100%]"
      />
    </div>
  );
};

export default Clock;

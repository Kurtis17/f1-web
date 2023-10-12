import React from "react";
import RecentItem from "./RecentItem";
import CarlosImg from "../assets/carlos.avif";
import LewisImg from "../assets/lewis.avif";

const Recent = () => {
  return (
    <div id="recent" className="w-[80%] m-auto pt-8">
      <div className="bg-white pt-4">
        <h1 className="text-4xl font-bold text-center uppercase px-2">
          Formula 1 Singapore airlines
          <a
            className="absolute right-[28%]"
            href="https://www.singaporeair.com/en_UK/gb/home#/book/bookflight"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-20"
              src="https://i.pinimg.com/originals/4b/6f/26/4b6f2634fde2e9394228e16a2f65dd99.png"
            />
          </a>
        </h1>
        <h1 className="text-4xl font-bold text-center uppercase px-2">
          Singapore Grand Prix 2023
        </h1>
        <p className="text-center pt-8 px-2">
          Sainz managed the race expertly from the front while Verstappen fought
          back to fifth place after starting in 11th on a difficult weekend for
          Red Bull.
        </p>
        <p className="text-center pb-8 px-2">
          Sainz led McLaren's Lando Norris and Mercedes' Lewis Hamilton nose to
          tail across the line after George Russell crashed out of third place
          on the last lap.
        </p>

        <div className="xs:grid sm:flex justify-center sm:gap-12">
          <div className="lg:flex gap-12">
            <RecentItem
              img={CarlosImg}
              title="Race Winner"
              driver="Carlos Sainz"
              team="Ferarri"
              number="55"
            />
            <RecentItem
              img={LewisImg}
              title="Fastest Lap"
              driver="Lewis Hamilton"
              team="Mercedes"
              number="44"
            />
          </div>
          <div className="lg:flex gap-12">
            <RecentItem
              img={CarlosImg}
              title="Driver of the Day"
              driver="Carlos Sainz"
              team="Ferarri"
              number="55"
            />
            <RecentItem
              img={CarlosImg}
              title="Pole Position"
              driver="Carlos Sainz"
              team="Ferarri"
              number="55"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Recent;

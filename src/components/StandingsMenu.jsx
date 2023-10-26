import React, { useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { Years } from "../data/Years";
import { options } from "../data/Options";

const StandingsMenu = ({ others }) => {
  const currentUrl = useLocation();
  const arrayUrl = currentUrl.pathname.split("/");
  const yearUrl = arrayUrl.find((part) => /^\d{4}$/.test(part));
  const optionUrl = arrayUrl.find(
    (part) => part === "teams" || part === "drivers" || part === "races"
  );
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);

  const handleScrollDown = (scrollContainerRef) => () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop += 50;
    }
  };

  const handleScrollUp = (scrollRef) => () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop -= 50;
    }
  };

  return (
    <div className="bg-[#f7f5f1] w-full m-auto pt-8">
      <div
        id="standings"
        className="w-[80%] m-auto mt-20 py-6 bg-white flex flex-justify border-b-4 border-[#f7f5f1]"
      >
        <div
          className="h-32 w-[27%] overflow-y-scroll no-scrollbar"
          ref={scrollRef1}
        >
          <ul>
            {Years.map((year) => (
              <li className="text-lg pb-2 pl-10 font-medium" key={year.id}>
                <NavLink
                  to={`/standings/${year.name}/${optionUrl}`}
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold underline decoration-[#d91d0c] underline-offset-2"
                      : ""
                  }
                >
                  {year.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[6.33%] grid grid-cols-1 place-items-center border-r-2 border-[#e9e9e9] gap-16">
          <BsChevronCompactUp
            className="cursor-pointer text-[#7e7d8b] hover:text-black"
            onClick={handleScrollUp(scrollRef1)}
          />
          <BsChevronCompactDown
            className="cursor-pointer text-[#7e7d8b] hover:text-black"
            onClick={handleScrollDown(scrollRef1)}
          />
        </div>
        <div
          className="h-32 w-[27%] overflow-y-scroll no-scrollbar "
          ref={scrollRef2}
        >
          <ul>
            {options.map((option) => (
              <li
                className="text-lg font-medium pb-2 pl-10 uppercase"
                key={option.id}
              >
                <NavLink
                  to={`/standings/${yearUrl}/${option.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")} `}
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold underline decoration-[#d91d0c] underline-offset-2"
                      : ""
                  }
                >
                  {option.name === "Fastest Laps"
                    ? yearUrl >= 2007
                      ? "DHL Fastest Lap Award"
                      : option.name
                    : option.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[6.33%] grid grid-cols-1 place-items-center border-r-2 border-[#e9e9e9] gap-16">
          <BsChevronCompactUp
            className="cursor-pointer text-[#7e7d8b] hover:text-black"
            onClick={handleScrollUp(scrollRef2)}
          />
          <BsChevronCompactDown
            className="cursor-pointer text-[#7e7d8b] hover:text-black"
            onClick={handleScrollDown(scrollRef2)}
          />
        </div>
        <div
          className="h-32 w-[27%] overflow-y-scroll no-scrollbar border-[#e9e9e9]"
          ref={scrollRef3}
        >
          <ul>
            <li className="text-lg font-medium pb-2 pl-10 uppercase">
              <NavLink
                to={`/standings/${yearUrl}/${optionUrl}`}
                end
                className={({ isActive }) =>
                  isActive
                    ? "font-bold underline decoration-[#d91d0c] underline-offset-2"
                    : ""
                }
              >
                All
              </NavLink>
            </li>
            {others.map((other) => (
              <li
                className="text-lg font-medium pb-2 pl-10 uppercase"
                key={other.id}
              >
                <NavLink
                  to={`/standings/${yearUrl}/${optionUrl}/${other.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/,/g, "")}`}
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold underline decoration-[#d91d0c] underline-offset-2"
                      : ""
                  }
                >
                  {other.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[6.33%] grid grid-cols-1 place-items-center gap-12">
          <BsChevronCompactUp
            className="cursor-pointer text-[#7e7d8b] hover:text-black"
            onClick={handleScrollUp(scrollRef3)}
          />
          <BsChevronCompactDown
            className="cursor-pointer text-[#7e7d8b] hover:text-black"
            onClick={handleScrollDown(scrollRef3)}
          />
        </div>
      </div>
    </div>
  );
};

export default StandingsMenu;

//grab the url to highlight which link has been selected/they are currenlty at in the menu
//fix the url linkings in 2nd section menu

//how the links for drivers were done before using find part function
// ${
//   currentURL.length === 6
//     ? currentURL[currentURL.length - 2]
//     : currentURL[currentURL.length - 3]
// }/${
//   currentURL.length === 6
//     ? currentURL[currentURL.length - 1]
//     : currentURL[currentURL.length - 2]
// }/${other.name.toLowerCase().replace(/\s+/g, "-")}

// const currentURL = window.location.href.split("/");

//cant get years to stay activated on teams option, zero docs in V6 to allow isActive for multiple class so make individual standings menu for each options...
//ended up using /optionUrl instead of a static /drivers

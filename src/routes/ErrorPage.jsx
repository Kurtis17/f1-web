import React from "react";
import NavBar from "../components/NavBar";
import FooterSec from "../components/FooterSec";

const ErrorPage = () => {
  return (
    <div>
      <NavBar />
      <img
        className="w-full h-screen object-cover"
        src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2021/06/06/3147443-64504588-2560-1440.jpg"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-black/50 z-1">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-white">Opps!</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-white">
            Sorry, something went wrong
          </h2>
          <iframe
            id="ytplayer"
            type="text/html"
            width="640"
            height="360"
            src="https://www.youtube.com/embed/ms0papXj7FE?autoplay=1&origin=http://example.com"
            frameborder="0"
          ></iframe>
          <h2 className="flex sm:text-xl text-2xl py-4 text-white">
            Please enjoy our new F1 trailer while we try to fix the issue
          </h2>
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-white transition duration-150 ease-in-out border-2 border-[#e10600] bg-[#e10600] rounded-md shadow cursor-not-allowed mx-[40%]"
            disabled=""
          >
            <svg
              class="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Fixing...
          </button>
        </div>
      </div>
      <FooterSec />
    </div>
  );
};

export default ErrorPage;
//https://media.formula1.com/content/dam/fom-website/manual/drivers/Fernando%20Alonso/24%20Alonso%20in%20the%20sun.jpg.img.1920.medium.jpg/1447525595023.jpg
//https://tailwindcss.com/docs/animation <--------- use for displaying rick roll and works when it is shown from hidden tag

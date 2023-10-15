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
        </div>
      </div>
      <FooterSec />
    </div>
  );
};

export default ErrorPage;
//https://media.formula1.com/content/dam/fom-website/manual/drivers/Fernando%20Alonso/24%20Alonso%20in%20the%20sun.jpg.img.1920.medium.jpg/1447525595023.jpg
//https://tailwindcss.com/docs/animation <--------- use for displaying rick roll and works when it is shown from hidden tag

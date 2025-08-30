import React from "react";
import Video from "../components/home/Video";
import HomeHero from "../components/home/HomeHero";
import HomeBottom from "../components/home/HomeBottom";

const Home = () => {
  return (
    <div>
      <div className="h-screen w-screen fixed">
        <Video />
      </div> 
      <div className="h-screen w-screen realtive flex flex-col">
        <HomeHero />
        <HomeBottom />
      </div>
    </div>
  );
};

export default Home;

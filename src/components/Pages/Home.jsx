import React from "react";
import Hero from "../Hero";
import HeroHeader from "../HeroHeader";

const Home = () => {
  return (
    <>
      <div className="bg_clr_blue z-3 position-relative px-0">
        <div className="hero_bg1">
          <div className="z-3 position-relative">
            <HeroHeader />
            {/* hero section */}
            <Hero />
          </div>
       </div>
      </div>
    </>
  );
};

export default Home;

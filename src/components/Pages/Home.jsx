import React from "react";
import Hero from "../Hero";
import HeroHeader from "../HeroHeader";

const Home = () => {
  return (
    <>
      <HeroHeader />
      {/* hero section */}
      <div className="bg_clr_blue z-3 position-relative">
        <Hero />
      </div>
    </>
  );
};

export default Home;

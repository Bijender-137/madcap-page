import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CoffeeImg from "../assets/images/webp/Coffee_img.webp";
import Hero from "./Hero";
import Header from "./Header";
import HeroHeader from "./HeroHeader";
import Footer from "./Footer";
// import { Route, Routes } from "react-router-dom";

const Pages = () => {

  // timme and date function
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const currentDate = currentDateTime.toLocaleDateString();
  const currentTime = currentDateTime.toLocaleTimeString();


  return (
    <>
      <section className="bg_img_hero min_h_100 position-relative">
        <div className="mobile_img position-absolute mobile_img_w w-100 top-50 translate-middle-y rotate d-none d-xl-block mobile_img_position">
          <p className="fs_sm text-white text-center mt-5 pt-2">
            {currentTime}
          </p>
          <p className="fs_sm text-white text-center fw-medium">
            {" "}
            {currentDate}
          </p>
          <p className="fs_md text-white fw-normal ps-4 ff_Liberty mt-4 pt-2 line-h-24">
            no venture, <span className="d-block"> no victory</span>
          </p>
        </div>
        <img
          className="position-absolute coffee_img coffee_img_set top-50 translate-middle-y d-none d-xl-block"
          src={CoffeeImg}
          alt="coffee_img"
        />
        <Container className="custom_container px-0 min_h_100 ">
          {/* navbaar */}
          <Header />
          {/* content */}
          <HeroHeader />
          {/* hero section */}
          <div className="bg_clr_blue z-3 position-relative">
            <Hero />
            {/* footer */}
          </div>
          {/* footer */}
          <Footer />
        </Container>
      </section>
    </>
  );
};

export default Pages;

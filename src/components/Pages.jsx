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
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateCurrentTime = () => {
      const currentDate = new Date();
      const hours = currentDate.getHours().toString().padStart(2, '0');
      const minutes = currentDate.getMinutes().toString().padStart(2, '0');

      const formattedTime = `${hours}:${minutes}`;

      setCurrentTime(formattedTime);
    };

    // Update the time every minute
    updateCurrentTime();
    const intervalId = setInterval(updateCurrentTime, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);


  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateCurrentDate = () => {
      const currentDate = new Date();
      const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const day = dayOfWeek[currentDate.getDay()];
      const month = currentDate.toLocaleString('default', { month: 'short' }); // Use only the first 3 characters of the month
      const date = currentDate.getDate();

      const formattedDate = ` ${day} ${date} ${month} `;

      setCurrentDate(formattedDate);
    };

    // Update the date every day
    updateCurrentDate();
    const intervalId = setInterval(updateCurrentDate, 24 * 60 * 60 * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <section className="bg_img_hero min_h_100 position-relative">
        <div className="mobile_img position-absolute mobile_img_w w-100 top-50 translate-middle-y rotate d-none d-xl-block mobile_img_position">
          <p className="fs_lg ff_Poppins line-h-24 text-white text-center mt-5 pt-4 mb-0">
            {currentTime}
          </p>
          <p className="fs_sm ff_Poppins text-white text-center fw-normal pt-1 line-h-24">
            {" "}
            {currentDate}
          </p>
          <p className="fs_md text-white fw-normal ps-4 ff_Liberty mt-4 pt-3 line-h-24">
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

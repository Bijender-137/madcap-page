import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { CrossIcon, DiscrodIcon, MenuIcon, TwitterIcon } from "./common/Icon";
import yellowColor from "../assets/img/png/yellow_curve_img.png";
import darkColor from "../assets/img/png/dark_curve_img.png";
import HeroImg from "../assets/img/png/groping_hero.png";
import CoffeeImg from "../assets/img/webp/Coffee_img.webp"
const Mynav = () => {
  const [menu, setMenu] = useState(false);
  if (menu === true) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
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
  // year code
  const today = new Date();
  const year = today.getFullYear();

  return (
    <>
      <section className="bg_img_hero min_h_100 position-relative">
        <div className="mobile_img position-absolute mobile_img_w w-100 top-50 translate-middle-y rotate">
          <p className="fs_sm text-white text-center mt-5 pt-2">
            Time: {currentTime}
          </p>
          <p className="fs_sm text-white text-center ">Date: {currentDate}</p>
          <p className="fs_md text-white fw-normal text-center ff_Liberty mt-5">
            no venture, <br /> no victory
          </p>
        </div>
        <img
            className="position-absolute coffee_img coffee_img_set top-50 translate-middle-y"
            src={CoffeeImg}
            alt="coffee_img"
          />
        <nav className="w-100">
          <Container className="custom_container px-0 min_h_100 ">
            <div className="d-flex justify-content-between align-items-center  bg_secondary px-4 pt-2 pb_13 ">
              <div className={`${menu ? "show-nav" : "nav-fix"}`}>
                <ul className="d-flex ps-0 mb-0 gap-4 flex-column flex-md-row align-items-center navActive">
                  <li>
                    <a
                      href=""
                      className="text-white fw-bold fs_sm ff_MangaMaster text-uppercase mb-0"
                    >
                      HOME
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-white fw-bold fs_sm ff_MangaMaster text-uppercase mb-0"
                    >
                      MADCAP
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-white fw-bold fs_sm ff_MangaMaster text-uppercase mb-0"
                    >
                      Tokenomics
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-white fw-bold fs_sm ff_MangaMaster text-uppercase mb-0"
                    >
                      Road Map
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-white fw-bold fs_sm ff_MangaMaster text-uppercase mb-0"
                    >
                      Staking
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-white fw-bold fs_sm ff_MangaMaster text-uppercase mb-0"
                    >
                      NFT
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-white fw-bold fs_sm ff_MangaMaster text-uppercase mb-0"
                    >
                      Whitepaper
                    </a>
                  </li>
                </ul>
                <div
                  className="d-md-none crossIconset"
                  onClick={() => setMenu(false)}
                >
                  <div className="cursor_pointer">
                    <CrossIcon />
                  </div>
                </div>
              </div>
              <div className="d-md-none">
                <div onClick={() => setMenu(true)} className="cursor_pointer">
                  <MenuIcon />
                </div>
              </div>
              <div className="d-flex gap-4">
                <a href="#">
                  <TwitterIcon />
                </a>
                <a href="#">
                  <DiscrodIcon />
                </a>
              </div>
            </div>
            <div className="bg_red py-1 d-flex justify-content-between ps-3 pe-1">
              <h1 className="ff_brothers fs_lg fw-bold text-white text-uppercase white_space">
                first ever comic crypto
              </h1>
              <div className="d-flex align-items-center">
                <div className=" position-relative mr_12">
                  <img
                    src={yellowColor}
                    alt="yellow_img"
                    className="yellow_img"
                  />
                  <div className="d-flex position-absolute text_center top-50 translate-middle-y ">
                    <h2 className=" text-uppercase fs_md fw-normal ff_Badabb mb-0 ">
                      comic adventures
                    </h2>
                  </div>
                </div>
                <div className=" bg_dark_img">
                  <h2 className="text-white text-uppercase fw-normal fs_sm ff_CrimeFighter mb-0 btn_dark_padding">
                    crypto riches
                  </h2>
                </div>
              </div>
            </div>
            <div className="bg_clr_blue ">
              <img className="w-100" src={HeroImg} alt="HeroImg" />
              <div className="yellow_border w-100 mt-3"></div>
              <div className=" bg_red my-1 text-center">
                <h2 className="fw-normal fs_xxl letter_spa ff_brothers py-2">
                  Madcap's Mission: Turning Everyday Investors into crypto
                  heros!
                </h2>
              </div>
              <div className="yellow_border w-100"></div>
            </div>
            <div className="bg-black">
              <p className="text-white text-center py-2 fs_xs ff_MangaMaster fw-normal ltr_sp_6">
                all rights reserved for the Comicoin {year}
                <span className="ps-5">contact us</span>
              </p>
            </div>
          </Container>
        </nav>
      </section>
    </>
  );
};

export default Mynav;

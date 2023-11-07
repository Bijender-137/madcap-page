import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { CrossIcon, DiscrodIcon, MenuIcon, TwitterIcon } from "./common/Icon";

import HeroImg from "../assets/img/webp/groping_hero.webp";
import CoffeeImg from "../assets/img/webp/Coffee_img.webp";
import line from "../assets/img/svg/line.svg";
import MobileView from "../assets/img/webp/mobile_Version.webp";

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
        <div className="mobile_img position-absolute mobile_img_w w-100 top-50 translate-middle-y rotate d-none d-xl-block mobile_img_position">
          <p className="fs_sm text-white text-center mt-5 pt-2">
            {currentTime}
          </p>
          <p className="fs_sm text-white text-center fw-medium"> {currentDate}</p>
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
          <nav className="w-100">
            <div className="bg_secondary py-2 pb-md-3 px-16  px-md-30">
              <div className="d-flex justify-content-between align-items-center">
                <div className={`${menu ? "show-nav" : "nav-fix"}`}>
                  <ul className="d-flex ps-0 mb-0 gap-2 gap-sm-3 gap-md-4 flex-column flex-md-row align-items-center navActive">
                    <li>
                      <a
                        className="text-white text-decoration-none navbtn fw-bold fs_sm ff_MangaMaster text-uppercase mb-0"
                        href="#"
                      >
                        HOME
                      </a>
                    </li>
                    <li className="d-md-none">
                      <img src={line} alt="" />
                    </li>
                    <li>
                      <a
                        className="text-white text-decoration-none navbtn fw-bold fs_sm ff_MangaMaster text-uppercase mb-0"
                        href="#"
                      >
                        MADCAP
                      </a>
                    </li>
                    <li className="d-md-none">
                      <img src={line} alt="" />
                    </li>
                    <li>
                      <a
                        className="text-white text-decoration-none navbtn fw-bold fs_sm ff_MangaMaster text-uppercase mb-0"
                        href="#"
                      >
                        Tokenomics
                      </a>
                    </li>
                    <li className="d-md-none">
                      <img src={line} alt="" />
                    </li>
                    <li>
                      <a
                        className="text-white text-decoration-none navbtn fw-bold fs_sm ff_MangaMaster text-uppercase mb-0"
                        href="#"
                      >
                        Road Map
                      </a>
                    </li>
                    <li className="d-md-none">
                      <img src={line} alt="" />
                    </li>
                    <li>
                      <a
                        className="text-white text-decoration-none navbtn fw-bold fs_sm ff_MangaMaster text-uppercase mb-0"
                        href="#"
                      >
                        Staking
                      </a>
                    </li>
                    <li className="d-md-none">
                      <img src={line} alt="" />
                    </li>
                    <li>
                      <a
                        className="text-white text-decoration-none navbtn fw-bold fs_sm ff_MangaMaster text-uppercase mb-0"
                        href="#"
                      >
                        NFT
                      </a>
                    </li>
                    <li className="d-md-none">
                      <img src={line} alt="" />
                    </li>
                    <li>
                      <a
                        className="text-white text-decoration-none navbtn fw-bold fs_sm ff_MangaMaster text-uppercase mb-0"
                        href="#"
                      >
                        Whitepaper
                      </a>
                    </li>
                    <li className="d-md-none" onClick={() => setMenu(false)}>
                      <CrossIcon />
                    </li>
                  </ul>
                </div>
                <div className="d-md-none">
                  <div onClick={() => setMenu(true)}>
                    <MenuIcon />
                  </div>
                </div>
                <div className="d-flex align-items-center gap-4">
                  <a href="#" className="pb-1">
                    <TwitterIcon />
                  </a>
                  <a href="#" className="pb-1">
                    <DiscrodIcon />
                  </a>
                </div>
              </div>
            </div>
          </nav>
          {/* content */}
          <div className="bg_primary bg-height"></div>
          <div className="bg_secondary py_3">
            <div className="bg_red py-1 d-flex align-items-center justify-content-between px-16 pe-10 px-md-30">
              <h1 className="ff_brothers fs_lg fw-bold text-white text-uppercase white_space mb-0 pb-1">
                first ever comic crypto
              </h1>
              <div className="d-flex align-items-center">
                <h2 className=" text-uppercase fs_md fw-normal ff_Badabb mb-0 text-after position-relative z-2 ps-2 ps-md-3 pt-1">
                  comic adventures
                </h2>
                <h2 className="text-white text-uppercase fw-normal fs_2sm ff_CrimeFighter mb-0 text-after1 position-relative z-2 ps-1 ps-sm-2">
                  crypto riches
                </h2>
              </div>
            </div>
          </div>
          <div className="bg_primary bg-height"></div>
          <div className="bg_secondary pt-1"></div>
          {/* hero section */}
          <div className="bg_clr_blue z-3 position-relative">
            <img
              className="w-100 d-none d-md-block"
              src={HeroImg}
              alt="HeroImg"
            />
            <img className="w-100 d-md-none" src={MobileView} alt="HeroImg" />
            {/* footer */}
          </div>
          {/* footer */}
          <div className="yellow_border w-100"></div>
          <div className="bg_blue w-100 pt-1"></div>
          <div className=" bg_red text-center">
            <h2 className="fw-normal fs_xxl letter_spa ff_Bright letter_spacing mb-0 py-2">
              Madcap's Mission: Turning Everyday Investors into crypto heros!
            </h2>
          </div>
          <div className="bg_secondary bg-height w-100"></div>
          <div className="yellow_border w-100"></div>
          <div className="bg-black">
            <p className="text-white text-center py-2 fs_xs ff_MangaMaster fw-normal ltr_sp_6 mb-0">
              all rights reserved for the Comicoin {year}
              <span className="ps-5 cursor_pointer">contact us</span>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Mynav;

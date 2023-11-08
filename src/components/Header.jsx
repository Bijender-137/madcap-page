import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Navline from "../assets/images/svg/line.svg";
import { CrossIcon, DiscrodIcon, MenuIcon, TwitterIcon } from "./common/Icons";
import { Link } from "react-router-dom";
// import { NavLinks } from "./Helper";


const Header = () => {
  const [menu, setMenu] = useState(false);
  if (menu === true) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <Container className="custom_container px-0">
        <nav className="w-100">
          <div className="bg_secondary py-3 px-16  px-md-30">
            <div className="d-flex justify-content-between align-items-center">
              <div className={`${menu ? "show-nav" : "nav-fix"}`}>
                <div className="d-flex ps-0 mb-0 gap-2 gap-md-4 flex-column flex-md-row align-items-center navActive">
                  {/* {NavLinks.map((headerLinks) => {
                    return(
                      
                    )
                  })} */}
                  
                  x
                  <img src={Navline} alt="navline" className="d-md-none" />
                  <Link
                    onClick={() => setMenu(false)}
                    className="text-white text-decoration-none navbtn fw-bold fs_sm ff_MangaMaster text-uppercase mb-0"
                    to="/Madcap"
                  >
                    MADCAP
                  </Link>
                  <img src={Navline} alt="navline" className="d-md-none" />
                  <Link
                    onClick={() => setMenu(false)}
                    className="text-white text-decoration-none navbtn fw-bold fs_sm ff_MangaMaster text-uppercase mb-0"
                    to="/"
                  >
                    Tokenomics
                  </Link>
                  <img src={Navline} alt="navline" className="d-md-none" />
                  <Link
                    onClick={() => setMenu(false)}
                    className="text-white text-decoration-none navbtn fw-bold fs_sm ff_MangaMaster text-uppercase mb-0"
                    to="/" lassName="text-white text-decoration-none navbtn fw-bold fs_sm ff_MangaMaster text-uppercase mb-0"
                  >
                    Road Map
                  </Link>
                  <img src={Navline} alt="navline" className="d-md-none" />

                  <Link
                    onClick={() => setMenu(false)}
                    className="text-white text-decoration-none navbtn fw-bold fs_sm ff_MangaMaster text-uppercase mb-0"
                    to="/"
                  >
                    Staking
                  </Link>
                  <img src={Navline} alt="navline" className="d-md-none" />

                  <Link
                    onClick={() => setMenu(false)}
                    className="text-white text-decoration-none navbtn fw-bold fs_sm ff_MangaMaster text-uppercase mb-0"
                    to="/"
                  >
                    NFT
                  </Link>
                  <img src={Navline} alt="navline" className="d-md-none" />

                  <Link
                    onClick={() => setMenu(false)}
                    className="text-white text-decoration-none navbtn fw-bold fs_sm ff_MangaMaster text-uppercase mb-0"
                    to="/"
                  >
                    Whitepaper
                  </Link>
                  <div className="d-md-none" onClick={() => setMenu(false)}>
                    <CrossIcon />
                  </div>
                </div>
              </div>
              <div className="d-md-none">
                <div onClick={() => setMenu(true)}>
                  <MenuIcon />
                </div>
              </div>
              <div className="d-flex align-items-center gap-4">
                <a href="https://twitter.com/" target="_" className="pb-1">
                  <TwitterIcon />
                </a>
                <a href="https://discord.com/" target="__" className="pb-1">
                  <DiscrodIcon />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </>
  );
};

export default Header;

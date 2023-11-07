import React, { useState } from "react";
import { Container } from "react-bootstrap";
import line from "../assets/img/svg/line.svg";
import { CrossIcon, DiscrodIcon, MenuIcon, TwitterIcon } from "./common/Icon";

const NewNav = () => {
  const [menu, setMenu] = useState(false);
  if (menu === true) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <section>
        <Container className="custom_container">
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
        </Container>
      </section>
    </>
  );
};

export default NewNav;

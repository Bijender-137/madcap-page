import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {
  CrossIcon,
  DiscrodIcon,
  DownArrow,
  FlagIcon,
  MenuIcon,
  TwitterIcon,
} from "./common/Icons";
import { Link } from "react-router-dom";
import { navLinks } from "./common/Helper";

const Header = () => {
  const [menu, setMenu] = useState(false);
  if (menu === true) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  const [isOpen, setIsOpen] = useState(false);

  const options = ["Option 1", "Option 2", "Option 3"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    console.log(`Selected: ${option}`);

    setIsOpen(false);
  };
  return (
    <>
      <Container className="custom_container px-0">
        <nav className="w-100">
          <div className="bg_secondary py-3 px-16  px-md-30">
            <div className="d-flex justify-content-between align-items-center">
              <div className={`${menu ? "show-nav" : "nav-fix"}`}>
                <div className="d-flex ps-0 mb-0 gap-2 gap-md-3 flex-column flex-md-row align-items-center">
                  {navLinks.map((navlink) => {
                    return (
                      <div
                        key={navlink.id}
                        className="d-flex ps-0 mb-0 gap-2 gap-md-3 flex-column flex-md-row align-items-center"
                      >
                        <Link
                          onClick={() => setMenu(false)}
                          className="text-white text-decoration-none navbtn fw-bold fs_sm ff_MangaMaster text-uppercase mb-0"
                          to={navlink.pathName}
                        >
                          {navlink.NavName}
                        </Link>
                        <img
                          width="11"
                          height="18"
                          src={navlink.img}
                          alt={navlink.alt}
                          className="d-md-none"
                        />
                      </div>
                    );
                  })}
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
                <div className="d-flex align-items-center justify-content-center gap-1">
                  <Link className="fw-light text-white fs_10 ltr_sp_6">
                    <FlagIcon />
                    <span className="ps-1">En</span>
                    <span className="ps-2">
                      {/* <DownArrow /> */}
                      <div className="custom-dropdown d-flex">
                        <div
                          className="dropdown-header"
                          onClick={toggleDropdown}
                        >
                          <DownArrow />
                        </div>
                        {isOpen && (
                          <ul className="dropdown-options">
                            {options.map((option) => (
                              <li
                                key={option}
                                onClick={() => handleOptionClick(option)}
                              >
                                {option}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </>
  );
};

export default Header;

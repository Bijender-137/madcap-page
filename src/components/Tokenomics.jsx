import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "./Header";
import TokenomicsFirstImg from "../assets/images/png/Tokenomics_1st_img.png";
import TokenomicsSecondImg from "../assets/images/png/Tokenomics_2nd_img.png";
import TokenomicsThirdImg from "../assets/images/png/Tokenomics_3rd_img.png";
import TokenomicsFOrthImg from "../assets/images/png/Tokenomics_4th_img.png";
const Tokenomics = () => {
  return (
    <>
      <div>
        <Container className="custom_container px-0 position-relative ">
        <div className="madcap_blu r_bg"></div>

          <Header />
          <div className="yellow_border w-100"></div>

          <div className="bg_clr_blue px-3">
            <h1 className="text-white fs_2sm ff_MangaMaster fw-bold text-center mb-0 py-2">
              Tokenomics
            </h1>
            <div className=" madcap_1st_img m-auto">
              <img
                className="w-100 "
                src={TokenomicsFirstImg}
                alt="TokenomicsFirstImg"
              />
            </div>
            <div className=" m-auto madcap_1st_img mt-2">
              <img
                className="w-100"
                src={TokenomicsSecondImg}
                alt="TokenomicsSecondImg"
              />
            </div>
            <div className="madcap_1st_img m-auto mt-3 pt-1">
              <img
                className="w-100"
                src={TokenomicsThirdImg}
                alt="TokenomicsThirdImg"
              />
            </div>
            <div className="madcap_1st_img m-auto mt-3 pt-1">
              <img
                className="w-100"
                src={TokenomicsFOrthImg}
                alt="TokenomicsFOrthImg"
              />
            </div>
            <p className="px-4 fw-bold ff_CrimeFighter fs_xsm text-white text-center pt-4 mt-2 mb-2 lh_12">
              This is a fictional comic representation. For full details,
              consult our whitepaper. Investments come with market risks.
            </p>
          </div>
          <Footer />
        </Container>
      </div>
    </>
  );
};

export default Tokenomics;
import React from "react";
import { Container } from "react-bootstrap";
import MadcapFirstImg from "../assets/images/png/madcap_1st_img.png";
import MadcapSecondImg from "../assets/images/webp/madcap_2nd_img.webp";
import MadcapThirdImg from "../assets/images/webp/madcap_3rd_img.webp";

const Madcap = () => {
  return (
    <>

      <Container className="custom_container px-0">
        <div className="yellow_border w-100"></div>

        <div className="bg_clr_blue position-relative madcap_ blur_bg px-3">
          <h1 className="text-white fs_2sm ff_MangaMaster fw-bold text-center mb-0 py-2">
            MADCAP
          </h1>
          <div className="position-relative madcap_1st_img m-auto">
            <img
              className="w-100 "
              src={MadcapFirstImg}
              alt="MadcapFirstImg"
            />
            <p className="fw-normal para position-absolute ff_CrimeFighter madcap_1st_img_text mb-0">
              Hey, thrill-seekers! In this world, risk is the gateway to
              reward. I 've bet big, and I've won and lost.
            </p>
          </div>
          <div className="madcap_1st_img m-auto position-relative mt-3">
            <img
              className="w-100"
              src={MadcapSecondImg}
              alt="MadcapSecondImg"
            />
            <p className="fw-normal para position-absolute ff_CrimeFighter madcap_2nd_img_text mb-0">
              Sure, I've tasted the dust, but I've never been afraid to get
              back up. T hat's how you reach the stars!
            </p>
          </div>
          <div className="madcap_1st_img m-auto position-relative mt-2">
            <img
              className="w-100"
              src={MadcapThirdImg}
              alt="MadcapThirdImg"
            />
            <p className="fw-normal para position-absolute ff_CrimeFighter madcap_3rd_img_text mb-0">
              Sure, I've tasted the dust, but I've never been afraid to get
              back up. T hat's how you reach the stars!
            </p>
            <p className="fw-normal para position-absolute ff_CrimeFighter madcap_3rd_img_2nd_text mb-0">
              Madcap Coin! Is not just a project, i t's a treasure map for
              bold nvestors.
            </p>
          </div>
          <p className="px-4 fw-bold ff_CrimeFighter fs_xsm text-white text-center pt-4 mt-2 pb-2 mb-0">
            This is a fictional comic representation. For full details,
            consult our whitepaper. Investments come with market risks.
          </p>

        </div>
      </Container>

    </>
  );
};

export default Madcap;

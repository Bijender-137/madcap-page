import React from "react";
import { Container } from "react-bootstrap";
import MadcapFirstImg from "../assets/images/webp/madcap_1st_img.webp";
import MadcapSecondImg from "../assets/images/webp/madcap_2nd_img.webp";
import MadcapThirdImg from "../assets/images/webp/madcap_3rd_img.webp";
const Madcap = () => {
  return (
    <>
      <Container className="custom_container px-0">
        <div className="yellow_border w-100"></div>
        <div className="hero_bg1 position-relative bg_clr_blue">
          <div className=" position-relative madcap_ blur_bg px-3 z-2">
            <h1 className="text-white fs_2sm ff_MangaMaster fw-bold text-center mb-0 py-2">
              MADCAP
            </h1>
            <div className="position-relative madcap_1st_img m-auto">
              <img
                width={440}
                height={233}
                loading="lazy"
                className="w-100 h-100"
                src={MadcapFirstImg}
                alt="MadcapFirstImg"
              />
              <p className="fw-normal para position-absolute ff_CrimeFighter madcap_1st_img_text mb-0">
                Hey, thrill-seekers! In this world, risk is the gateway to
                reward. I 've bet big, and I've won and lost.
              </p>
            </div>
            <div className="madcap_1st_img m-auto position-relative mt-3 mid_320 ">
              <img
                width={440}
                height={168}
                loading="lazy"
                className="w-100 small_screen_text_2nd h_146 h-100"
                src={MadcapSecondImg}
                alt="MadcapSecondImg"
              />
              <p className="fw-normal para position-absolute ff_CrimeFighter madcap_2nd_img_text mb-0">
                Sure, I've tasted the dust, but I've never been afraid to get
                back up. That's how you reach the stars!
              </p>
            </div>
            <div className="madcap_1st_img m-auto position-relative mt-2 mid_320">
              <img
                width={440}
                height={327}
                loading="lazy"
                className="w-100 h_255 h-100"
                src={MadcapThirdImg}
                alt="MadcapThirdImg"
              />
              <p className="fw-normal para position-absolute ff_CrimeFighter madcap_3rd_img_text mb-0">
                Sure, I've tasted the dust, but I've never been afraid to get
                back up. That's how you reach the stars!
              </p>
              <p className="fw-normal para position-absolute ff_CrimeFighter madcap_3rd_img_2nd_text mb-0">
                Madcap Coin! Is not just a project, i t's a treasure map for
                bold nvestors.
              </p>
            </div>
            <p className="fw-bold ff_CrimeFighter fs_xs text-white text-center pt-4 mt-2 pb-2 mb-0">
              This is a fictional comic representation. For full details,
              consult our whitepaper. Investments come with market risks.
            </p>
            c
          </div>
        </div>
      </Container>
    </>
  );
};

export default Madcap;

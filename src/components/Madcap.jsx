import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";

const Madcap = () => {
  return (
    <>
      <section className="">
        <Container className="custom_container px-0">
          <Header />
          <div className="yellow_border w-100"></div>

          <div className="bg_clr_blue position-relative madcap_ blur_bg">
            <h1 className="text-white fs_2sm ff_MangaMaster fw-bold text-center mb-0 py-2">
              MADCAP
            </h1>
            <div className="madcap_1st_img w-100 m-auto position-relative">
              <p className="fw-normal para position-absolute ff_CrimeFighter madcap_1st_img_text">
                Hey, thrill-seekers! In this world, risk is the gateway to
                reward. I 've bet big, and I've won and lost.
              </p>
            </div>
            <div className="madcap_2nd_img w-100 m-auto position-relative mt-3">
              <p className="fw-normal para position-absolute ff_CrimeFighter madcap_2nd_img_text">
                Sure, I've tasted the dust, but I've never been afraid to get
                back up. T hat's how you reach the stars!
              </p>
            </div>
            <div className="madcap_3rd_img w-100 m-auto position-relative mt-2">
              <p className="fw-normal para position-absolute ff_CrimeFighter madcap_3rd_img_text">
                Sure, I've tasted the dust, but I've never been afraid to get
                back up. T hat's how you reach the stars!
              </p>
              <p className="fw-normal para position-absolute ff_CrimeFighter madcap_3rd_img_2nd_text">
                Madcap Coin! Is not just a project, i t's a treasure map for
                bold nvestors.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Madcap;

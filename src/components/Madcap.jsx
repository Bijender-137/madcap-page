import React from "react";
import { Container } from "react-bootstrap";
import NewNav from "./NewNav";

const Madcap = () => {
  return (
    <>
      <section className="">
        <Container className="custom_container px-0">
          <NewNav />
          <div className="yellow_border w-100"></div>

          <div className="bg_clr_blue position-relative madcap_ blur_bg">
            <h1 className="text-white fs_2sm ff_MangaMaster fw-bold text-center mb-0 py-2">
              MADCAP
            </h1>
            <div className="madcap_1st_img position-relative">
              <p className="fw-normal para position-absolute ff_CrimeFighter">
                Hey, thrill-seekers! In this world, risk is the gateway to
                reward. I 've bet big, and I've won and lost.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Madcap;

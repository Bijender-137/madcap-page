import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";

const Skating = () => {
  return (
    <>
      <div>
        <Container className="custom_container">
          <Header />
          <div className="skating_bg_img min-vh-100">
            <div className="pt-2">
                <div className="bg_primary bg-height"></div>
                <div className="text-center bg_clr_brown py-1">
                  <h1 className="text-white mb-0 fw-bold fs_md ff_MangaMaster">
                    Unleash the Power of Madcap Coin
                  </h1>
                  <p className="fs_sm ff_MangaMaster fw-bold clr_lite_gray mb-0">
                    read the whitepaper for more{" "}
                  </p>
                </div>
                <div className="bg_primary bg-height"></div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Skating;

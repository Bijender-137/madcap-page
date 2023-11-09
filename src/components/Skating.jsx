import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import SkatingMan from "../assets/images/webp/skating_bg_img.webp";
import SkatingBottomImg from "../assets/images/webp/skating_bootom_img.webp";
const Skating = () => {
  return (
    <>
      <div>
        <Container className="custom_container">
          <Header />
          <div className="position-relative">
            <div className="pt-2 bg_clr_blue">
              <div className="bg_primary bg-height"></div>
              <div className="text-center bg_clr_brown py-1">
                <h1 className="text-white mb-0 fw-bold fs_md ff_MangaMaster">
                  Unleash the Power of Madcap Coin
                </h1>
                <p className="fs_10 ff_MangaMaster fw-bold clr_lite_gray mb-0 m-auto">
                  read the whitepaper for more
                </p>
              </div>
              <div className="bg_primary bg-height"></div>
              <div className=" hero_bg position-relative ">
                <div className="px-4 position-relative z-2 pt-5 pt-sm-0">
                  <img className="w-100" src={SkatingMan} alt="SkatingMan" />
                  <div className="position-absolute skating_btn">
                    <h2 className="mb-0 fw-bold fs_md ff_MangaMaster color_primary">
                      staking
                    </h2>
                  </div>
                  <div className="position-absolute first_box_text">
                    <p className="fs_10 fw-normal ff_CrimeFighter text-black mb-0 mx_204 mx_W_150">
                      Unlock insane rewards when you stake your Madcap Coins!
                      With a jaw-dropping 100% APY for our staking program your
                      fortune maybe just A click away. You can stake and watch
                      your assets multiply. Ready to be a staking maverick?
                    </p>
                  </div>
                  <div className="position-absolute skating_second_box_text">
                    <p className="fs_10 fw-normal ff_CrimeFighter text-black mb-0 max_w_260 mx_W_150">
                      As if staking wasn't rewarding enough, we're taking it to
                      the next level! Get your hands on unique, hand-drawn NFTs,
                      created by a lineup of incredible artists from around the
                      globe. But wait, there's more: high holders and stakers
                      will receive new NFTs on a weekly basis, expanding the
                      Madcap Universe one NFT at a time.
                    </p>
                  </div>
                </div>
                <div className="position-absolute bottom-0 z-3">
                  <img className="w-100" src={SkatingBottomImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Skating;

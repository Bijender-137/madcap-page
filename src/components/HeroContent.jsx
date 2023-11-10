import React from "react";
import circleCruve from "../assets/images/svg/cicle_curve.svg";

const HeroContent = () => {
  return (
    <>
      <div className="px-3 pt-1 p-md-0 d-md-flex justify-content-md-between">
        <div className="p-1 bg_secondary p-md-0 bg_box_hero">
          <div className="p-1 p-md-0 bg-white">
            <div className="d-flex justify-content-between">
              <div className="bg_secondary bg_box_hero d-flex align-items-center justify-content-between ps-2 px-2">
                <div className="d-flex align-items-center flex-md-column gap-1">
                  <h3 className="ff_Badabb fs_2md color_primary mb-0">
                    $0.0025
                  </h3>
                  <p className="text-white ff_Badabb mb-0 fs_xs">
                    presale phase #1
                  </p>
                </div>
                <div className="white_line bg-white d-md-none"></div>
                <p className="text-center ff_Badabb text-uppercase mb-0 fs_3sm color_yellow_400 line-h-24 pe-1">
                  Madcap's <span className="d-md-block fs_2md">heroes</span>
                  <span className="d-md-block fs_2md">unite </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="position-relative pe-md-4 pt-md-3">
          <img
            src={circleCruve}
            alt="circleCruve"
            className="curveImg position-absolute"
          />
          <p className="z-1 mb-0 position-absolute text-uppercase text-black fw-normal ff_CrimeFighter fs_md text_rotate">
            Audit
          </p>
          <h1 className="text-uppercase heading_shadow position-relative text-center mb-0 latter_spacing193 z-1 position-relative fs_xxxl  color_primary ff_Liberty fw-normal text-shadow">
            Madcap
          </h1>
        </div>
      </div>
    </>
  );
};

export default HeroContent;

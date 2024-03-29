import React from "react";
import { Container } from "react-bootstrap";
import RoadMapFirstImg from "../assets/images/webp/Roadmap_1st_img.webp";
import RoadMapSecondImg from "../assets/images/webp/Roadmap_2nd_img.webp";
import RoadMapThirdImg from "../assets/images/webp/Roadmap_3rd_img.webp";
import RoadMapFourthImg from "../assets/images/webp/Roadmap_4th_img.webp";

const RoadMap = () => {
  return (
    <>
      <Container className="custom_container px-0 position-relative ">
        <div className="yellow_border w-100"></div>
        <div className="hero_bg1 bg_clr_blue position-relative">
          <div className="position-relative z-2 px-3">
            <h1 className="text-white fs_2sm ff_MangaMaster fw-bold text-center mb-0 py-2">
              road map
            </h1>
            <div className="madcap_1st_img m-auto">
              <img
                height={254}
                width={440}
                loading="lazy"
                className="w-100 h-100"
                src={RoadMapFirstImg}
                alt="RoadMapFirstImg"
              />
            </div>
            <div className="m-auto madcap_1st_img mt-2">
              <img
                height={156}
                width={440}
                loading="lazy"
                className="w-100 h-100"
                src={RoadMapSecondImg}
                alt="RoadMapSecondImg"
              />
            </div>
            <div className="madcap_1st_img m-auto mt-3 pt-1">
              <img
                height={175}
                width={440}
                loading="lazy"
                className="w-100 h-100"
                src={RoadMapThirdImg}
                alt="RoadMapThirdImg"
              />
            </div>
            <div className="madcap_1st_img m-auto mt-3 pt-1">
              <img
                width={440}
                height={169}
                loading="lazy"
                className="w-100 h-100"
                src={RoadMapFourthImg}
                alt="RoadMapFourthImg"
              />
            </div>
            <p className="px-4 fw-bold ff_CrimeFighter fs_xsm text-white text-center pt-4 mt-2 mb-0 pb-2 lh_12">
              This is a fictional comic representation. For full details, consult
              our whitepaper. Investments come with market risks.
            </p>
          </div>
       </div>
      </Container>
    </>
  );
};

export default RoadMap;

import React from "react";
import heroMan from "../assets/images/webp/Man.webp";
import Countdown from "./Countdown";
import Buybox from "./Buybox";
import HeroContent from "./HeroContent";

const Hero = () => {
    return (
        <>
            <div className="pb-2">
                <div className="position-relative z-3">
                    <HeroContent />
                    <div className="d-flex justify-content-center position-relative">
                        <img src={heroMan} alt="heroman" className=' heroMan d-md-none pt-20 manImg position-absolute' />
                    </div>
                    <div className="d-flex justify-content-center justify-content-md-end pe-md-5 w-100 pb-4 pb-md-5 mb-md-4 z-2 mt-250 mt-md-0 position-relative">
                        <div className="d-flex flex-column align-items-center">
                            <Countdown />
                            <Buybox />
                            <p className='ff_MangaMaster fs_xxs text-white fw-normal pt-2 letter_spac_359 px-4 px-sm-5 mx-sm-5 px-md-0 mx-md-0'>2 Billion Tokens at 0.0025 each! Grab them in the first 48 hours
                                <span className="d-md-block">
                                    or they're toast — yes, we're burning the leftovers
                                </span>
                                THE LOWEST PRESALE PRICE FOR THE TOKEN
                            </p>
                            <div className="px-3 w-100 d-flex justify-content-center">
                                <div className="yellowBox_content bg_primary position-relative">
                                    <div className="border_sm_8 z-2 position-relative">
                                        <p className="fs_2xs fw-bold ff_CrimeFighter line-h-14 ">
                                            Join Madcap's crypto
                                            <span className="d-md-block"> universe, where</span>
                                            comics meet finance!
                                            <span className="d-md-block"> Stake tokens,</span>
                                            unlock hand-drawn
                                            <span className="d-md-block">NFTs, and become</span>
                                            a financial hero
                                        </p>
                                        <p className='fs_xxs fw-bold ff_CrimeFighter mb-0 text-end color_slate_gray_400 pt-md-4 '>
                                            explore the whitepaper
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={heroMan} alt="heroman" className='position-absolute heroMan d-none d-md-block' />
                        <div className="d-none d-md-block">
                            <div className="d-flex ps-3 flex-column justify-content-center align-items-center riskbox_position position-absolute w-205">
                                <div className='whiteBox bg-white'>
                                </div>
                                <div className="riskBox bg_primary d-flex flex-column justify-content-center align-items-center">
                                    <p className='ff_Bright fw-normal text-black fs_xl text-center lh-32 mb-0'>Risk the dive,</p>
                                    <p className="fs_2md ff_Bright fw-normal text-black text-center lh-32 mb-0 pe-2">to FInd the preals</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-md-none">
                            <div className="d-flex ps-3 flex-column justify-content-center align-items-center riskbox_mobile_view_position position-absolute w-146">
                                <div className='whiteBox bg-white'>
                                </div>
                                <div className="riskBox bg_primary d-flex flex-column justify-content-center align-items-center">
                                    <p className='ff_Bright fw-normal text-black fs_xl text-center line-h-24 mb-0'>Risk the dive,</p>
                                    <p className="fs_2md ff_Bright fw-normal text-black text-center line-h-24 mb-0 pe-2">to FInd the preals</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={heroMan}
                alt="heroman"
                className="position-absolute heroMan d-none d-md-block"
            />
            <div className="d-none d-md-block">
                <div className="d-flex ps-3 flex-column justify-content-center align-items-center riskbox_position position-absolute w-205">
                    <div className="whiteBox bg-white"></div>
                    <div className="riskBox bg_primary d-flex flex-column justify-content-center align-items-center">
                        <p className="ff_Bright fw-normal text-black fs_xl text-center lh-32 mb-0">
                            Risk the dive,
                        </p>
                        <p className="fs_2md ff_Bright fw-normal text-black text-center lh-32 mb-0 pe-2">
                            to FInd the preals
                        </p>
                    </div>
                </div>
            </div>
            <div className="d-md-none">
                <div className="d-flex ps-3 flex-column justify-content-center align-items-center riskbox_mobile_view_position position-absolute w-146">
                    <div className="whiteBox bg-white"></div>
                    <div className="riskBox bg_primary d-flex flex-column justify-content-center align-items-center">
                        <p className="ff_Bright fw-normal text-black fs_xl text-center line-h-24 mb-0">
                            Risk the dive,
                        </p>
                        <p className="fs_2md ff_Bright fw-normal text-black text-center line-h-24 mb-0 pe-2">
                            to FInd the preals
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;

import React from 'react'
import circleCruve from '../assets/img/svg/cicle_curve.svg'

const Hero = () => {
    return (
        <>
            <div className="bg_blue hero_bg overflow-hidden position-relative">
                <div className="z-100 position-relative">
                    <div className="px-3 pt-1 p-md-0 d-md-flex justify-content-md-between">
                        <div className="p-1 bg_secondary p-md-0 bg_box_hero">
                            <div className="p-1 p-md-0 bg-white">
                                <div className="d-flex justify-content-between">
                                    <div className="bg_secondary bg_box_hero d-flex align-items-center justify-content-between ps-2 pe-2">
                                        <div className='d-flex align-items-center flex-md-column gap-1'>
                                            <h2 className='ff_Badabb fs_lg color_primary mb-0'>$0.0025</h2>
                                            <p className='text-white ff_Badabb mb-0'>presale phase #1</p>
                                        </div>
                                        <div className='white_line bg-white d-md-none'></div>
                                        <p className='text-center ff_Badabb text-uppercase mb-0 fs_3sm color_yellow_400 line-h-24'>Madcap's <span className="d-md-block fs_2md">heroes</span>
                                            <span className='d-md-block fs_2md'>unite </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="position-relative pe-md-4 pt-md-3">
                            <img src={circleCruve} alt="circleCruve" className='curveImg position-absolute' />
                            <p className="z-1 mb-0 position-absolute text-uppercase text-black fw-normal ff_CrimeFighter fs_md text_rotate">Audit</p>
                            <h2 className='text-uppercase text-center mb-0 latter_spacing193 z-1 position-relative fs_xxxl  color_primary ff_Liberty fw-normal text-shadow'>Madcap</h2>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center justify-content-md-end pe-md-5 w-100 pb-3 z-2 position-relative">
                        <div className="d-flex flex-column align-items-center">
                            <div className="timeBox bg_lite_dark d-flex flex-column justify-content-end align-items-center px-1">
                                <div className="d-flex justify-content-center gap-2 px-md-4 mx-md-3">
                                    <div className="timeContentBox bg-white d-flex justify-content-center align-items-center">
                                        <p className='color_dark_red ff_Badabb fw-normal mb-0 line-h-16 text-center'>24 <span className="d-block mb-0 color_white_400 ff_Samaritan">days</span></p>
                                    </div>
                                    <div className="timeContentBox bg-white d-flex justify-content-center align-items-center">
                                        <p className='color_dark_red ff_Badabb fw-normal mb-0 line-h-16 text-center'>24 <span className="d-block mb-0 color_white_400 ff_Samaritan">hours</span></p>
                                    </div>
                                    <div className="timeContentBox bg-white d-flex justify-content-center align-items-center">
                                        <p className='color_dark_red ff_Badabb fw-normal mb-0 line-h-16 text-center'>24 <span className="d-block mb-0 color_white_400 ff_Samaritan">minutes</span></p>
                                    </div>
                                    <div className="timeContentBox bg-white d-flex justify-content-center align-items-center">
                                        <p className='color_dark_red ff_Badabb fw-normal mb-0 line-h-16 text-center'>24 <span className="d-block mb-0 color_white_400 ff_Samaritan">second</span></p>
                                    </div>
                                </div>
                                <p className='color_lite_white skew-0 ff_MangaMaster mb-0 pb-1 fw-bold letter_spacing_565 pt-2 fs_2sm text-center line-h-14'>48 hour flash pre-sale price: 0.0025
                                    <span className="d-block">usd rised : $500,000 / $1,000,000</span>
                                </p>
                            </div>
                            <div className="buyNowBox-black bg-black">
                                <div className="buyNowBox bg-white">
                                    <p className="text-center pt-4 mb-0 ff_MangaMaster fs_sm fw-bold">1 Madcap coin = $0.0025</p>
                                    <div className="d-flex">
                                        <div className="logoBox position-relative d-flex justify-content-center align-items-center gap-2 w-100">
                                            <div className="d-flex z-2 position-relative justify-content-center align-items-center">
                                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8.44129" cy="8.55644" r="8.34501" fill="#FFE774" />
                                                    <g clip-path="url(#clip0_0_1)">
                                                        <path d="M10.9577 9.78882C10.9577 9.78882 8.13322 11.2011 8.0947 11.2139C8.0947 11.2139 5.24456 9.78882 5.23172 9.78882L8.0947 13.2167L10.9577 9.78882Z" fill="#0D2F46" />
                                                        <path d="M8.0947 4.06299L5.23172 9.13419L8.0947 10.9316L10.9577 9.13419L8.0947 4.06299Z" fill="#0D2F46" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_0_1">
                                                            <rect width="5.72596" height="9.15384" fill="white" transform="translate(5.23172 4.06299)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span className='ps-1 mb-0' >ETH</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Hero
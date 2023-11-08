import React from 'react'
import circleCruve from '../assets/images/svg/cicle_curve.svg'
import buyNow from '../assets/images/png/Buy_now.png'
import heroMan from '../assets/images/webp/Man.webp'
import { BnbIcon, EthIcon, UsdtIcon } from './common/Icons'
import Countdown from './Countdown'

const Hero = () => {
    return (
        <>
            <div className="bg_blue hero_bg overflow-hidden position-relative pb-2">
                <div className="z-100 position-relative z-3">
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
                            <h1 className='text-uppercase text-center mb-0 latter_spacing193 z-1 position-relative fs_xxxl  color_primary ff_Liberty fw-normal text-shadow'>Madcap</h1>
                        </div>
                    </div>
                    <img src={heroMan} width={375} height={560} alt="heroman" className=' heroMan d-md-none' />
                    <div className="d-flex justify-content-center justify-content-md-end pe-md-5 w-100 pb-5 mb-4 z-2 position-relative">
                        <div className="d-flex flex-column align-items-center">
                            <div className="timeBox position-relative z-3 bg_lite_dark d-flex flex-column justify-content-center align-items-center px-1">
                                <Countdown />
                            </div>
                            <div className="buyNowBox-black bg-black position-relative">
                                <div className="buyNowBox bg-white">
                                    <div className="content-rotate-0">
                                        <p className="text-center pt-4 mb-0 ff_MangaMaster fs_sm fw-bold">1 Madcap coin = $0.0025</p>
                                        <div className="d-flex justify-content-center gap-4 pt-2">
                                            <button type='button' className="logoBox me-1 position-relative d-flex justify-content-center align-items-center border-0">
                                                <p className="d-flex mb-0 z-2 position-relative justify-content-center align-items-center">
                                                    <EthIcon />
                                                    <span className='ps-1 mb-0 ff_Poppins text-white fw-bolder fs_xxs' >ETH</span>
                                                </p>
                                            </button>
                                            <button type='button' className="logoBox mx-2 position-relative d-flex justify-content-center align-items-center border-0">
                                                <p className="d-flex mb-0 z-2 position-relative justify-content-center align-items-center">
                                                    <UsdtIcon />
                                                    <span className='ps-1 mb-0 ff_Poppins text-white fw-bolder fs_xxs' >Usdt</span>
                                                </p>
                                            </button>
                                            <button type='button' className="ms-1 logoBox position-relative d-flex justify-content-center align-items-center border-0">
                                                <p className="d-flex mb-0 z-2 position-relative justify-content-center align-items-center">
                                                    <BnbIcon />
                                                    <span className='ps-1 mb-0 ff_Poppins text-white fw-bolder fs_xxs' >Bnb</span>
                                                </p>
                                            </button>
                                        </div>
                                        <p className='text-center fs_xxs fw-blod ff_Samaritan pt-4 mt-3 mb-0 letter_spacing_9 color_slate_gray_500'>ETH balance 0</p>
                                        <div className="d-flex pt-1 justify-content-center gap-2 w-100">
                                            <div className='d-flex flex-column mb-0'>
                                                <label htmlFor="name" className='fs_xxs fw-blod ff_Samaritan mb-0 letter_spacing_9 color_slate_gray_500 mb-1'>Amount in ETH you pay</label>
                                                <input className='inputBox fs_xxs fw-blod ff_Samaritan mb-0 letter_spacing_9 color_slate_gray_500 px-1' type="number" placeholder='0' />
                                            </div>
                                            <div className='d-flex flex-column'>
                                                <label htmlFor="name" className='fs_xxs fw-blod ff_Samaritan mb-0 letter_spacing_9 color_slate_gray_500 mb-1'>Amount in ETH you pay</label>
                                                <input className='inputBox fs_xxs fw-blod ff_Samaritan mb-0 letter_spacing_9 color_slate_gray_500 px-1' type="number" placeholder='0' />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center mt-4 pb-5">
                                            <button type='button' className="ms-1 logoBox1 position-relative d-flex justify-content-center align-items-center border-0">
                                                <img src={buyNow} alt="buyNow" className='z-2 position-relative justify-content-center align-items-center' />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className='ff_MangaMaster fs_xxs text-white fw-normal pt-2 letter_spac_359'>2 Billion Tokens at 0.0025 each! Grab them in the first 48 hours
                                <span className="d-md-block">
                                    or they're toast — yes, we're burning the leftovers
                                </span>
                                THE LOWEST PRESALE PRICE FOR THE TOKEN
                            </p>
                            <div className="yellowBox_content bg_primary">
                                <p className="fs_2xs fw-bold ff_CrimeFighter line-h-14">
                                    Join Madcap's crypto
                                    <span className="d-block"> universe, where</span>
                                    comics meet finance!
                                    <span className="d-block"> Stake tokens,</span>
                                    unlock hand-drawn
                                    <span className="d-block">NFTs, and become</span>
                                    a financial hero
                                </p>
                                <p className='fs_xxs fw-bold ff_CrimeFighter mb-0 text-end color_slate_gray_400 pt-4'>
                                    explore the whitepaper
                                </p>
                            </div>
                        </div>
                        <img src={heroMan} alt="heroman" className='position-absolute heroMan d-none' />
                        <div className="d-flex ps-3 d-none flex-column justify-content-center align-items-center riskbox_position position-absolute w-205">
                            <div className='whiteBox bg-white'>
                            </div>
                            <div className="riskBox bg_primary d-flex flex-column justify-content-center align-items-center">
                                <p className='ff_Bright fw-normal text-black fs_xl text-center lh-32 mb-0'>Risk the dive,</p>
                                <p className="fs_2md ff_Bright fw-normal text-black text-center lh-32 mb-0 pe-2">to FInd the preals</p>
                            </div>
                        </div>
                    </div>


                </div>

            </div >
        </>
    )
}

export default Hero
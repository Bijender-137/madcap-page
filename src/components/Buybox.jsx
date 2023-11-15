import React, { useState } from 'react'
import { BnbIcon, EthIcon, UsdtIcon } from './common/Icons'
import buyNow from '../assets/images/webp/Buy_now.webp'


const Buybox = () => {
    const [change, setChange] = useState("ETH");
    const [displayIcon, setDisplayIcon] = useState(EthIcon);
    const handleButtonClick = (newText, newIcon) => {
        setChange(newText);
        setDisplayIcon(newIcon);
    };

    return (
        <>
            <div className="buyNowBox-black position-relative">
                <div className="buyNowBox bg-white">
                    <div className="content-rotate-0">
                        <p className="text-center pt-2 pt-sm-4 mb-0 ff_MangaMaster fs_3xs fw-bold">1 Madcap coin = $0.0025</p>
                        <div className="d-flex justify-content-center gap-3 gap-sm-4 pt-3">
                            <button onClick={() => handleButtonClick('ETH', EthIcon)} type='button' className="logoBox me-1 position-relative d-flex justify-content-center align-items-center border-0">
                                <p className="d-flex mb-0 z-2 position-relative justify-content-center align-items-center">
                                    <EthIcon />
                                    <span className='ps-1 mb-0 ff_Poppins text-white fw-bolder fs_xxs'>ETH</span>
                                </p>
                            </button>
                            <button onClick={() => handleButtonClick('USDT', UsdtIcon)} type='button' className="logoBox mx-2 position-relative d-flex justify-content-center align-items-center border-0">
                                <p className="d-flex mb-0 z-2 position-relative justify-content-center align-items-center">
                                    <UsdtIcon />
                                    <span className='ps-1 mb-0 ff_Poppins text-white fw-bolder fs_xxs'>Usdt</span>
                                </p>
                            </button>
                            <button onClick={() => handleButtonClick('BNB', BnbIcon)} type='button' className="ms-1 logoBox position-relative d-flex justify-content-center align-items-center border-0">
                                <p className="d-flex mb-0 z-2 position-relative justify-content-center align-items-center">
                                    <BnbIcon />
                                    <span className='ps-1 mb-0 ff_Poppins text-white fw-bolder fs_xxs'>Bnb</span>
                                </p>
                            </button>
                        </div>
                        <p className='text-center fs_xxs fw-blod ff_Samaritan pt-3 pt-sm-4 mt-3 mb-0 letter_spacing_9 color_slate_gray_500'>{change} balance 0</p>
                        <div className="d-flex pt-1 justify-content-center gap-2 w-100">
                            <div className='d-flex flex-column mb-0'>
                                <label htmlFor="number" className='fs_xxs fw-blod ff_Samaritan mb-0 letter_spacing_9 color_slate_gray_500 mb-1'>Amount in {change} you pay</label>
                                <div className='inputBox1 d-flex align-items-center px-1'>
                                    <input
                                        id='number'
                                        name='sellcount'
                                        className='fs_xxs inputBox w-100 fw-blod ff_Samaritan letter_spacing_9 color_slate_gray_500'
                                        type="number"
                                        placeholder='0'

                                    />
                                    {displayIcon}
                                </div>
                            </div>
                            <div className='d-flex flex-column'>
                                <label htmlFor="number1" className='fs_xxs fw-blod ff_Samaritan mb-0 letter_spacing_9 color_slate_gray_500 mb-1'>Amount in MADCAP you pay</label>
                                <div className='inputBox1 d-flex align-items-center px-1'>
                                    <input
                                        id='number1'
                                        name='sellcount'
                                        className='fs_xxs inputBox w-100 fw-blod ff_Samaritan letter_spacing_9 color_slate_gray_500'
                                        type="number"
                                        placeholder='0'

                                    />
                                    {displayIcon}
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-4 pb-5">
                            <button type='button' className="ms-1 logoBox1 position-relative d-flex justify-content-center align-items-center border-0">
                                <img width="111" height="20" src={buyNow} alt="buyNow" className='z-2 position-relative justify-content-center align-items-center' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Buybox
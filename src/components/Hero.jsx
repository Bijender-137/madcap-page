import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="bg_blue hero_bg  position-relative">
                <div className="z-2 position-relative">
                    <div className="d-flex justify-content-between">
                        <div className="bg_secondary bg_box_hero d-flex align-items-center justify-content-between ps-2 pe-2">
                            <div>
                                <h2 className='ff_Badabb fs_lg color_primary mb-0'>$0.0025</h2>
                                <p className='text-white ff_Badabb mb-0'>presale phase #1</p>
                            </div>
                            <p className='text-center ff_Badabb text-uppercase mb-0 fs_2sm color_yellow_400 line-h-24'>Madcap's <span className="d-md-block fs_2md">heroes</span>
                                <span className='d-md-block fs_2md'>unite </span>
                            </p>
                        </div>
                        <h2 className='text-uppercase fs_xxxl pe-2 color_primary ff_Liberty'>Madcap</h2>
                   </div>
                </div>

            </div>
        </>
    )
}

export default Hero
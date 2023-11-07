import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="bg_blue hero_bg  position-relative">
                <div className="z-2 position-relative">
                    <div className="bg_secondary bg_box_hero d-flex align-items-center justify-content-between px-1">
                        <div>
                            <h2 className='ff_Badabb fs_lg color_primary mb-0'>$0.0025</h2>
                            <p className='text-white ff_Badabb mb-0'>presale phase #1</p>
                        </div>
                        <div>
                            <p className=' text-uppercase'>Madcap's <span className="d-md-block">heroes</span> <span className='d-md-block'>unite </span></p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero
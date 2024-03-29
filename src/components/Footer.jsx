import React from 'react'

const Footer = () => {
    // year code
    const today = new Date();
    const year = today.getFullYear();
    return (
        <>
            <div className="yellow_border w-100"></div>
            <div className="bg_blue w-100 pt-1 d-none d-sm-block"></div>
            <div className=" bg_red text-center w-100">
                <h2 className="fw-normal fs_xxl letter_spa ff_Bright letter_spacing mb-0 py-2">
                    Madcap's Mission: Turning Everyday Investors into crypto heros!
                </h2>
            </div>
            <div className="bg_secondary bg-height w-100"></div>
            <div className="yellow_border w-100"></div>
            <div className="bg-black w-100">
                <p className="text-white text-center py-2 fs_xs ff_MangaMaster fw-normal ltr_sp_6 mb-0">
                    all rights reserved for the Comicoin {year}
                    <span className="ms-sm-5 ms-4 d_block cursor_pointer">contact us</span>
                </p>
            </div>
        </>
    )
}

export default Footer
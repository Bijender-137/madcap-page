import React from 'react'

const HeroHeader = () => {
    return (
        <>
            <div className="bg_primary bg-height"></div>
            <div className="bg_secondary py_3">
                <div className="bg_red py-1 d-flex align-items-center justify-content-between px-16 pe-10 px-md-30">
                    <h2 className="ff_brothers fs_lg fw-bold text-white text-uppercase white_space mb-0 pb-1">
                        first ever comic crypto
                    </h2>
                    <div className="d-flex align-items-center">
                        <h2 className=" text-uppercase fs_md fw-normal ff_Badabb mb-0 text-after position-relative z-2 ps-2 ps-md-3">
                            comic adventures
                        </h2>
                        <h2 className="text-white text-uppercase fw-normal fs_2sm ff_CrimeFighter mb-0 text-after1 position-relative z-2 ps-1 ps-sm-2">
                            crypto riches
                        </h2>
                    </div>
                </div>
            </div>
            <div className="bg_primary bg-height"></div>
            <div className="bg_secondary pt-1"></div>
        </>
    )
}

export default HeroHeader
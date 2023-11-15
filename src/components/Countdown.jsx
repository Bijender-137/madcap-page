import React, { useState, useEffect } from 'react';

const Countdown = () => {
    // Set the target date and time
    const targetDate = new Date('2023-11-28T23:59:59'); // December 31, 2023, 23:59:59

    const [time, setTime] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = targetDate - new Date();

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
            const seconds = Math.floor((difference % (1000 * 60)) / 1000).toString().padStart(2, '0');

            return { days, hours, minutes, seconds };
        } else {
            // Countdown has reached or passed the target date and time
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // Clear the interval when the component is unmounted

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty dependency array to run the effect only once when the component mounts

    return (
        <>
            <div className="timeBox position-relative z-3 bg_lite_dark d-flex flex-column justify-content-center align-items-center px-1">
                <div className="d-flex justify-content-center gap-2 px-md-4 mx-md-3 pt-3 mt-2">
                    <div className="timeContentBox bg-white d-flex justify-content-center align-items-center">
                        <p className='color_dark_red ff_Badabb fw-normal mb-0 line-h-16 text-center fs_3sm'>{`${time.days}`}<span className="d-block mb-0 fs_xxs line-h-14 color_white_400 ff_Samaritan">days</span></p>
                    </div>
                    <div className="timeContentBox bg-white d-flex justify-content-center align-items-center">
                        <p className='color_dark_red ff_Badabb fw-normal mb-0 line-h-16 text-center fs_3sm'>{`${time.hours}`}<span className="d-block mb-0 fs_xxs line-h-14 color_white_400 ff_Samaritan">hours</span></p>
                    </div>
                    <div className="timeContentBox bg-white d-flex justify-content-center align-items-center">
                        <p className='color_dark_red ff_Badabb fw-normal mb-0 line-h-16 text-center fs_3sm'>{`${time.minutes}`}<span className="d-block mb-0 fs_xxs line-h-14 color_white_400 ff_Samaritan">minutes</span></p>
                    </div>
                    <div className="timeContentBox bg-white d-flex justify-content-center align-items-center">
                        <p className='color_dark_red ff_Badabb fw-normal mb-0 line-h-16 text-center fs_3sm'>{`${time.seconds}`}<span className="d-block mb-0 fs_xxs line-h-14 color_white_400 ff_Samaritan">seconds</span></p>
                    </div>
                </div>
                <p className='color_lite_white skew-0 ff_MangaMaster mb-0 pb-1 fw-bold letter_spacing_565 pt-2 mt-1 fs_2xs text-center lh-1'>48 hour flash pre-sale price: 0.0025
                    <span className="d-block">usd rised : $500,000 / $1,000,000</span>
                </p>
            </div>
        </>
    )
}

export default Countdown
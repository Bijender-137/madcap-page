import React, { useState, useEffect } from 'react';

const Countdown = () => {
    const initialTimeInDays = 24;
    const initialTimeInMilliseconds = initialTimeInDays * 24 * 60 * 60 * 1000; // 24 days in milliseconds

    const [timeRemaining, setTimeRemaining] = useState(
        () => {
            const storedTime = localStorage.getItem('countdownTime');
            if (storedTime) {
                return Math.max(0, parseInt(storedTime, 10));
            } else {
                return initialTimeInMilliseconds;
            }
        }
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (timeRemaining > 0) {
                setTimeRemaining(timeRemaining - 1000); // Subtract 1 second (1000 milliseconds)
                localStorage.setItem('countdownTime', timeRemaining - 1000);
            }
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [timeRemaining]);

    const days = Math.floor(timeRemaining / (24 * 60 * 60 * 1000)).toString().padStart(2, '0');
    const hours = Math.floor((timeRemaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)).toString().padStart(2, '0');
    const minutes = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000)).toString().padStart(2, '0');
    const seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000).toString().padStart(2, '0');

    return (
        <>
            <div className="d-flex justify-content-center gap-2 px-md-4 mx-md-3 pt-3 mt-2">
                <div className="timeContentBox bg-white d-flex justify-content-center align-items-center">
                    <p className='color_dark_red ff_Badabb fw-normal mb-0 line-h-16 text-center'>{days}<span className="d-block mb-0 color_white_400 ff_Samaritan">days</span></p>
                </div>
                <div className="timeContentBox bg-white d-flex justify-content-center align-items-center">
                    <p className='color_dark_red ff_Badabb fw-normal mb-0 line-h-16 text-center'>{hours} <span className="d-block mb-0 color_white_400 ff_Samaritan">hours</span></p>
                </div>
                <div className="timeContentBox bg-white d-flex justify-content-center align-items-center">
                    <p className='color_dark_red ff_Badabb fw-normal mb-0 line-h-16 text-center'>{minutes} <span className="d-block mb-0 color_white_400 ff_Samaritan">minutes</span></p>
                </div>
                <div className="timeContentBox bg-white d-flex justify-content-center align-items-center">
                    <p className='color_dark_red ff_Badabb fw-normal mb-0 line-h-16 text-center'>{seconds} <span className="d-block mb-0 color_white_400 ff_Samaritan">second</span></p>
                </div>
            </div>
            <p className='color_lite_white skew-0 ff_MangaMaster mb-0 pb-1 fw-bold letter_spacing_565 pt-3 fs_2sm text-center line-h-14'>48 hour flash pre-sale price: 0.0025
                <span className="d-block">usd rised : $500,000 / $1,000,000</span>
            </p>
        </>
    )
}

export default Countdown
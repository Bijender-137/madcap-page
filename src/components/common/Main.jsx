import React, { useEffect, useState } from "react";
import CoffeeImg from "../../assets/images/webp/Coffee_img.webp";

const Main = () => {
    // timme and date function
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateCurrentTime = () => {
            const currentDate = new Date();
            const hours = currentDate.getHours().toString().padStart(2, '0');
            const minutes = currentDate.getMinutes().toString().padStart(2, '0');

            const formattedTime = `${hours}:${minutes}`;

            setCurrentTime(formattedTime);
        };

        // Update the time every minute
        updateCurrentTime();
        const intervalId = setInterval(updateCurrentTime, 60000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);


    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const updateCurrentDate = () => {
            const currentDate = new Date();
            const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const day = dayOfWeek[currentDate.getDay()];
            const month = currentDate.toLocaleString('default', { month: 'short' }); // Use only the first 3 characters of the month
            const date = currentDate.getDate();

            const formattedDate = ` ${day} ${date} ${month} `;

            setCurrentDate(formattedDate);
        };

        // Update the date every day
        updateCurrentDate();
        const intervalId = setInterval(updateCurrentDate, 24 * 60 * 60 * 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <div className="mobile_img position-absolute mobile_img_w w-100 top-50 translate-middle-y rotate d-none d-xl-block mobile_img_position">
                <p className="fs_lg ff_Poppins line-h-24 text-white text-center mt-5 pt-4 mb-0">
                    {currentTime}
                </p>
                <p className="fs_sm ff_Poppins text-white text-center fw-normal pt-1 line-h-24">

                    {currentDate}
                </p>
                <p className="fs_md text-white fw-normal ps-4 ff_Liberty mt-4 pt-3 line-h-24">
                    no venture, <span className="d-block"> no victory</span>
                </p>
            </div>
            <img
                className="position-absolute coffee_img coffee_img_set top-50 translate-middle-y d-none d-xl-block"
                src={CoffeeImg}
                alt="coffee_img"
            />
        </>
    )
}

export default Main
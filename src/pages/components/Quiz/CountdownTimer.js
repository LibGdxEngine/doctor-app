import {useState, useEffect} from 'react';

const CountdownTimer = ({initialSeconds}) => {
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        // Function to update the timer
        const tick = () => {
            setSeconds(prevSeconds => {
                if (prevSeconds <= 1) {
                    clearInterval(timerId);
                    return 0;
                }
                return prevSeconds - 1;
            });
        };

        // Set interval to update the timer every second
        const timerId = setInterval(tick, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(timerId);
    }, []);

    // Convert seconds to minutes and seconds
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return (
        <div>
            {minutes}:{remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
        </div>
    );
};

export default CountdownTimer;
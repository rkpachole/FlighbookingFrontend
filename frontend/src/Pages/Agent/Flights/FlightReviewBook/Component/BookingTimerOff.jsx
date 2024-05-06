import React, {useState,useEffect } from 'react';
import {Link,useNavigate,useParams } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { FlightSearchService } from '../../../../../Services/Agent/FlightSearch.Service'; 
import toast from 'react-hot-toast';
export default function BookingTimerOff({}) {
    // for timers
    const [countdown, setCountdown] = useState(60 * 12);
    const navigate = useNavigate();
  
    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown(countdown => {
                if (countdown === 0) {
                    clearInterval(timerId);
                    navigate(-1);
                    return 0;
                } else {
                    return countdown - 1;
                }
            });
        }, 1000);

        return () => clearInterval(timerId); // Cleanup the interval on component unmount
    }, []);

    const fancyTimeFormat = duration => {
        // Hours, minutes and seconds
        const hrs = Math.floor(duration / 3600);
        const mins = Math.floor((duration % 3600) / 60);
        const secs = duration % 60;
        // Output like "1:01" or "4:03:59" or "123:03:59"
        let ret = "";
        
        if (hrs > 0) {
            ret += `${hrs}:${mins < 10 ? "0" : ""}`;
        }
        ret += `${mins}:${secs < 10 ? "0" : ""}`;
        ret += secs;
        return ret;
    };
      
    return (
        <div className="flightsession open-button text-center">
            Your session will expire in <p>{fancyTimeFormat(countdown)} min/sec</p>
        </div> 
    );
}

import  { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Countdown.css"

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const eventDate = new Date("2025-01-20T00:00:00").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  return (
    <div className="container text-center mt-5">
      <div className="card11 shadow-lg">
        <div className="card-body">
          <h1 className="card-title text-primary mb-4">Countdown to Event</h1>
          <div className="timer">
            <h2 className="text-danger fw-bold">
              {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
            </h2>
          </div>
          <hr />
          <div className="event-dates mt-3">
            <p className="text-secondary fs-5"><h3>Event Dates:</h3> 20 & 21 January 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;

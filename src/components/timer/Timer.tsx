import React, { useEffect, useState } from "react";
import "./timer.css";
import EndTime from "./EndTime";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Timer = () => {
  const [endTime, setEndTime] = useState(0);

  const getTimeAsync = async () => {
    setEndTime(1638921600 * 1000);
  };
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  let interval: any;
  const startTimer = () => {
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();

    getTimeAsync();
    return () => {
      clearInterval(interval.current);
    };
  });

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  return (
    <div className="timer mt-5">
      <div className="container">
        <div className="row text-center d-flex justify-content-center text-white">
          <h1 className=" mb-3 " data-aos="fade-right">Sale Start</h1>
          <div className="col-lg-1 me-lg-3   col-3 ">
            <h1>{timerDays} </h1>
            <p>days</p>
          </div>
          <div className="col-lg-1 me-lg-3  col-3 ">
            {" "}
            <h1>{timerHours} </h1>
            <p>hours</p>
          </div>
          <div className="col-lg-1 me-lg-3   col-3 ">
            {" "}
            <h1>{timerMinutes} </h1>
            <p>minute</p>
          </div>
          <div className="col-lg-1 me-lg-3   col-3 ">
            {" "}
            <h1>{timerSeconds} </h1>
            <p>seconds</p>
          </div>
        </div>
        <EndTime />
      </div>
    </div>
  );
};

export default Timer;

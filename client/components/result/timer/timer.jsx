import React from 'react';
import CountdownTimer from './countdownTimer.jsx';

const formatTime = time => {
  const units = time.split('-');
  return Date.UTC(...units);
};

const getRemainingTime = time => formatTime(time) - Date.now();

const Timer = ({ enddate, isCountdown }) => {
  if (isCountdown) {
    return (
      <CountdownTimer
        className="result-top"
        initialTimeRemaining={getRemainingTime(enddate)}
      />
    );
  }
  return <h3 className="result-top">{enddate}</h3>;
};

export default Timer;

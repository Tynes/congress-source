import React from 'react';
import CountdownTimer from './countdownTimer.jsx';

const formatTime = time => {
  const units = time.split('-');
  return Date.UTC(...units);
};

const getRemainingTime = time => formatTime(time) - Date.now();

const formatFunc = ms => {
  const totalSeconds = Math.round(ms / 1000);
  const seconds = parseInt(totalSeconds % 60, 10);
  const minutes = parseInt(totalSeconds / 60, 10) % 60;
  const hours = parseInt(totalSeconds / 3600, 10) % 24;
  const days = parseInt(totalSeconds / 86400, 10);
  return `${days} days, ${hours} hrs, ${minutes} mins, ${seconds} secs`;
};

const Timer = ({ enddate, isCountdown }) => {
  if (isCountdown) {
    return (
      <CountdownTimer
        className="timer"
        initialTimeRemaining={getRemainingTime(enddate)}
        formatFunc={formatFunc}
      />
    );
  }
  return <h3 className="timer">In office until {enddate}</h3>;
};

Timer.propTypes = {
  enddate: React.PropTypes.string,
  isCountdown: React.PropTypes.bool,
};

export default Timer;

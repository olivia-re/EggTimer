// filepath: /c:/Users/olivi/Portfolio/EggTimer/src/components/TimerScreen.js
import React, { useState, useEffect } from 'react';
import './TimerScreen.css'

const TimerScreen = ({ duration, onFinish }) => {
  const [timeLeft, setTimeLeft] = useState(duration * 60);

  useEffect(() => {
    if (timeLeft <= 0) {
      onFinish();
      return;
    }
    const interval = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timeLeft, onFinish]);

  const formatTime = seconds => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <div>
      <h2>Time Left: {formatTime(timeLeft)}</h2>
    </div>
  );
};

export default TimerScreen;
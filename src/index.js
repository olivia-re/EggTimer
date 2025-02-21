// filepath: /c:/Users/olivi/Portfolio/EggTimer/src/index.js
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import StartPage from './components/StartPage/StartPage';
import TypeSelection from './components/TypeSelection/TypeSelection';
import TimerScreen from './components/TimerScreen/TimerScreen';
import DoneScreen from './components/DoneScreen/DoneScreen';

const EggTimer = () => {
  const [screen, setScreen] = useState('start');
  const [duration, setDuration] = useState(0);

  const handleStart = () => setScreen('select');
  const handleSelect = minutes => {
    setDuration(minutes);
    setScreen('timer');
  };
  const handleFinish = () => setScreen('done');

  return (
    <div>
      {screen === 'start' && <StartPage onStart={handleStart} />}
      {screen === 'select' && <TypeSelection onSelect={handleSelect} />}
      {screen === 'timer' && <TimerScreen duration={duration} onFinish={handleFinish} />}
      {screen === 'done' && <DoneScreen />}
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<EggTimer />);
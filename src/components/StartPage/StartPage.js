// filepath: /c:/Users/olivi/Portfolio/EggTimer/src/components/StartPage.js
import React from 'react';
import './StartPage.css';

const StartPage = ({ onStart }) => (
  <div className="startPage">
    <button onClick={onStart}>Start your egg!</button>
  </div>
);

export default StartPage;
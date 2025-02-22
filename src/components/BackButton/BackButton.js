import React from 'react';
import './BackButton.css';

const BackButton = ({ onBack }) => (
  <button className="back-button" onClick={onBack}>
    X
  </button>
);

export default BackButton;
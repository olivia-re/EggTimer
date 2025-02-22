// filepath: /c:/Users/olivi/Portfolio/EggTimer/src/components/TypeSelection.js
import React from 'react';
import './TypeSelection.css'

const TypeSelection = ({ onSelect }) => (
  <div className="type-selection">
    <button onClick={() => onSelect(2)}>Runny Yolk (2m)</button>
    <button onClick={() => onSelect(4)}>Soft Boiled (4m)</button>
    <button onClick={() => onSelect(6)}>Medium (6m)</button>
    <button onClick={() => onSelect(8)}>Hard Boiled(8m)</button>
  </div>
);

export default TypeSelection;
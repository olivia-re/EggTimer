// filepath: /c:/Users/olivi/Portfolio/EggTimer/src/components/TypeSelection.js
import React from 'react';

const TypeSelection = ({ onSelect }) => (
  <div>
    <button onClick={() => onSelect(2)}>Runny (2m)</button>
    <button onClick={() => onSelect(4)}>Soft (4m)</button>
    <button onClick={() => onSelect(6)}>Medium (6m)</button>
    <button onClick={() => onSelect(8)}>Hard (8m)</button>
  </div>
);

export default TypeSelection;
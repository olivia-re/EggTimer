import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => (
  <div>
    <h1>Egg Timer</h1>
    <p>Your React app is running!</p>
  </div>
);

// Get the container element where React should render
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
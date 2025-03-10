import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { GameProvider } from './gameContext/gameProvider';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>
);
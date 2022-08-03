import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Router } from './router';
import './styles/global-styles.css';

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
      <Router />
  </React.StrictMode>,
);


import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import { App } from './app';
import reportWebVitals from './reportWebVitals';
import { faConfig } from './configuration';

faConfig.load();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

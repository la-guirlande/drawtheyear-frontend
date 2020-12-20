import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import reportWebVitals from './reportWebVitals';
import Waves from 'node-waves';
import './assets/css/index.css';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

Waves.attach('.waves-effect');
Waves.init();

reportWebVitals();

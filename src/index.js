import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import ApiState from './context/Apis/ApiState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiState>
    <App />
    </ApiState>
  </React.StrictMode>
);

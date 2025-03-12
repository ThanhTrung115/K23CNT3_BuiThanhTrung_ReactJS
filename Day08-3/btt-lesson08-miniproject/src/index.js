import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BttApp from './BttApp';
import reportWebVitals from './reportWebVitals';

const bttRoot = ReactDOM.createRoot(document.getElementById('bttRoot'));
bttRoot.render(
  <React.StrictMode>
    <BttApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

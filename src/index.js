import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Setting up the root element for rendering the React app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// To track and report performance metrics, pass a function to log results
// or send it to an analytics endpoint. More info at: https://bit.ly/CRA-vitals
reportWebVitals();

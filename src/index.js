import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: Import your CSS file
import App from './App'; // Import the main App component

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>,
  document.getElementById('root') // Insert into the root div in your HTML
);
